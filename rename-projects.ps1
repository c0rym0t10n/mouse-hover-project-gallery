# Script para renombrar archivos de proyectos web
# Ejecutar desde PowerShell como administrador si es necesario

$sourceFolder = "D:\HQ\PROJECTS_2024\BRAND+\proyectos-web"
$destinationFolder = "d:\HQ\PROJECTS_2024\BRAND+\portfolio-2025-1\public\projects-web"

# Crear carpeta de destino si no existe
if (!(Test-Path $destinationFolder)) {
    New-Item -ItemType Directory -Path $destinationFolder -Force
    Write-Host "Creada carpeta: $destinationFolder" -ForegroundColor Green
}

Write-Host "=== INICIANDO RENOMBRADO DE ARCHIVOS ===" -ForegroundColor Cyan
Write-Host "Origen: $sourceFolder" -ForegroundColor Yellow
Write-Host "Destino: $destinationFolder" -ForegroundColor Yellow
Write-Host ""

$renamedCount = 0
$skippedCount = 0

# Obtener todos los archivos recursivamente
$allFiles = Get-ChildItem $sourceFolder -Recurse -File

Write-Host "Archivos encontrados:" -ForegroundColor Cyan
foreach ($file in $allFiles) {
    Write-Host "  $($file.Name)" -ForegroundColor Gray
}
Write-Host ""

# Mapeo inteligente basado en patrones y nombres
foreach ($file in $allFiles) {
    $fileName = $file.Name
    $newName = ""
    
    # Determinar el nuevo nombre basado en patrones
    if ($fileName -like "*crocs*") {
        $newName = "crocs_0$($renamedCount + 1)$($file.Extension)"
    }
    elseif ($fileName -like "*product*" -or $fileName -like "*wellness*" -or $fileName -like "*CU*") {
        $newName = "wellness-app_0$($renamedCount + 1)$($file.Extension)"
    }
    elseif ($fileName -like "*original*" -and $file.Extension -eq ".mp4") {
        $newName = "ine-mujeres_0$($renamedCount + 1)$($file.Extension)"
    }
    elseif ($fileName -like "*original*" -and $file.Extension -eq ".m4v") {
        $newName = "ine-mujeres_0$($renamedCount + 1)$($file.Extension)"
    }
    elseif ($fileName -like "*original*" -and $file.Extension -eq ".webp") {
        if ($renamedCount % 3 -eq 0) {
            $newName = "humo-santo_0$(($renamedCount / 3) + 1)$($file.Extension)"
        }
        else {
            $newName = "verbena_0$(($renamedCount % 3) + 1)$($file.Extension)"
        }
    }
    elseif ($fileName -like "*cardboard*") {
        $newName = "error-page_01$($file.Extension)"
    }
    elseif ($fileName -like "*bomb*" -or $fileName -like "*jynx*") {
        $newName = "hope_0$($renamedCount + 1)$($file.Extension)"
    }
    elseif ($fileName -like "*grenade*") {
        $newName = "misc_grenade$($file.Extension)"
    }
    elseif ($fileName -like "*pre*") {
        $newName = "misc_preview$($file.Extension)"
    }
    elseif ($fileName -eq "Proyectos.txt") {
        $newName = "Proyectos.txt"
    }
    else {
        $newName = "misc_$fileName"
    }
    
    if ($newName -ne "") {
        $destPath = Join-Path $destinationFolder $newName
        try {
            Copy-Item -Path $file.FullName -Destination $destPath -Force
            Write-Host "Renombrado: $fileName -> $newName" -ForegroundColor Green
            $renamedCount++
        }
        catch {
            Write-Host "Error renombrando $fileName : $($_.Exception.Message)" -ForegroundColor Red
            $skippedCount++
        }
    }
}

# Copiar también el archivo de texto con las descripciones
$txtSource = Join-Path $sourceFolder "Proyectos.txt"
$txtDest = Join-Path $destinationFolder "Proyectos.txt"
if (Test-Path $txtSource) {
    Copy-Item -Path $txtSource -Destination $txtDest -Force
    Write-Host "Copiado: Proyectos.txt" -ForegroundColor Green
}

Write-Host ""
Write-Host "=== RESUMEN ===" -ForegroundColor Cyan
Write-Host "Archivos renombrados: $renamedCount" -ForegroundColor Green
Write-Host "Archivos omitidos: $skippedCount" -ForegroundColor Yellow
Write-Host "Proceso completado!" -ForegroundColor Green
Write-Host ""
Write-Host "Los archivos estan listos en: $destinationFolder" -ForegroundColor Cyan

# Mostrar estructura final
Write-Host ""
Write-Host "=== ESTRUCTURA FINAL ===" -ForegroundColor Cyan
Get-ChildItem $destinationFolder | Format-Table Name, Length -AutoSize
