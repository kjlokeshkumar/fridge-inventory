$ErrorActionPreference = 'Stop'

$keyDirectory = Join-Path $HOME '.android'
$keystorePath = Join-Path $keyDirectory 'fridge-ai-upload.p12'
$passwordPath = Join-Path $keyDirectory 'fridge-ai-upload-password.sec'

if (-not (Test-Path $keystorePath)) {
    throw "Upload keystore not found. Run scripts/setup-play-signing.ps1 first."
}

if (-not (Test-Path $passwordPath)) {
    throw "Protected upload password not found. Run scripts/setup-play-signing.ps1 first."
}

$projectDirectory = Split-Path -Parent $PSScriptRoot
$gradleWrapper = Join-Path $projectDirectory 'gradlew.bat'
$protectedPassword = [IO.File]::ReadAllText($passwordPath).Trim()
$securePassword = ConvertTo-SecureString -String $protectedPassword
$passwordPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword)

try {
    $env:FRIDGE_AI_UPLOAD_KEYSTORE = $keystorePath
    $env:FRIDGE_AI_UPLOAD_STORE_PASSWORD =
        [Runtime.InteropServices.Marshal]::PtrToStringBSTR($passwordPointer)

    Push-Location $projectDirectory
    try {
        & $gradleWrapper --no-daemon bundleRelease
        if ($LASTEXITCODE -ne 0) {
            throw "Gradle failed to build the Play bundle (exit code $LASTEXITCODE)."
        }
    }
    finally {
        Pop-Location
    }
}
finally {
    Remove-Item Env:FRIDGE_AI_UPLOAD_KEYSTORE -ErrorAction SilentlyContinue
    Remove-Item Env:FRIDGE_AI_UPLOAD_STORE_PASSWORD -ErrorAction SilentlyContinue
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($passwordPointer)
    $securePassword.Dispose()
}

Write-Output 'Signed Play bundle: app\build\outputs\bundle\release\app-release.aab'
