$files = Get-ChildItem -Path "src" -Recurse -Include "*.tsx","*.ts"
foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    $updated = $content `
        -replace "60143240499", "601158722903" `
        -replace "60123456789", "601158722903" `
        -replace "info@yaalma\.com", "info@yaalmalegacy.com" `
        -replace "admissions@yaalmalegacy\.com", "info@yaalmalegacy.com"
    if ($updated -ne $content) {
        Set-Content -Path $file.FullName -Value $updated -Encoding UTF8 -NoNewline
        Write-Host "Updated: $($file.Name)"
    }
}
Write-Host "All done!"
