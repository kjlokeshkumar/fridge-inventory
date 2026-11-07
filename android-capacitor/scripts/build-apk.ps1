$ErrorActionPreference = 'Stop'
$keyDirectory = Join-Path $HOME '.android'
$keystorePath = Join-Path $keyDirectory 'fridge-ai-upload.p12'
$passwordPath = Join-Path $keyDirectory 'fridge-ai-upload-password.sec'

$protectedPassword = [IO.File]::ReadAllText($passwordPath).Trim()
$securePassword = ConvertTo-SecureString -String $protectedPassword
$passwordPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword)

try {
    $env:FRIDGE_AI_UPLOAD_KEYSTORE = $keystorePath
    $env:FRIDGE_AI_UPLOAD_STORE_PASSWORD = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($passwordPointer)

    $projectDirectory = Split-Path -Parent $PSScriptRoot
    Push-Location $projectDirectory
    try {
        & .\gradlew.bat assembleRelease --no-daemon
        if ($LASTEXITCODE -ne 0) {
            throw "Gradle assembleRelease failed ($LASTEXITCODE)"
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

Write-Output 'APK built successfully'
