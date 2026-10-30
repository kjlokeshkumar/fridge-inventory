$ErrorActionPreference = 'Stop'

$keyDirectory = Join-Path $HOME '.android'
$keystorePath = Join-Path $keyDirectory 'fridge-ai-upload.p12'
$passwordPath = Join-Path $keyDirectory 'fridge-ai-upload-password.sec'

if (Test-Path $keystorePath) {
    throw "Upload keystore already exists: $keystorePath"
}

if (Test-Path $passwordPath) {
    throw "Protected upload password already exists: $passwordPath"
}

$keytool = Get-Command keytool -ErrorAction SilentlyContinue
if (-not $keytool) {
    throw 'Java keytool was not found. Install a JDK and add keytool to PATH.'
}

New-Item -ItemType Directory -Path $keyDirectory -Force | Out-Null

$randomBytes = [byte[]]::new(32)
[System.Security.Cryptography.RandomNumberGenerator]::Fill($randomBytes)
$password = [Convert]::ToBase64String($randomBytes).TrimEnd('=').Replace('+', '-').Replace('/', '_')
$securePassword = ConvertTo-SecureString -String $password -AsPlainText -Force
ConvertFrom-SecureString -SecureString $securePassword |
    Set-Content -LiteralPath $passwordPath -Encoding ascii

try {
    $env:FRIDGE_AI_UPLOAD_STORE_PASSWORD = $password
    & $keytool.Source -genkeypair `
        -keystore $keystorePath `
        -storetype PKCS12 `
        -storepass:env FRIDGE_AI_UPLOAD_STORE_PASSWORD `
        -keyalg RSA `
        -keysize 2048 `
        -validity 10000 `
        -alias fridge-ai-upload `
        -dname 'CN=Fridge AI Upload, O=Fridge AI, C=US'

    if ($LASTEXITCODE -ne 0) {
        throw "keytool failed to create the upload key (exit code $LASTEXITCODE)."
    }
}
catch {
    if (-not (Test-Path $keystorePath)) {
        Remove-Item -LiteralPath $passwordPath -ErrorAction SilentlyContinue
    }
    throw
}
finally {
    Remove-Item Env:FRIDGE_AI_UPLOAD_STORE_PASSWORD -ErrorAction SilentlyContinue
    $password = $null
    $securePassword.Dispose()
    [Array]::Clear($randomBytes, 0, $randomBytes.Length)
}

Write-Output "Upload keystore created at $keystorePath."
Write-Output "Its password is DPAPI-protected for this Windows user at $passwordPath."
Write-Output 'Back up both files securely before uploading the first Play release.'
