# Script de despliegue automático para GitHub Pages
Write-Host "🚀 Iniciando despliegue..." -ForegroundColor Cyan

# 1. Verificar que estamos en un repositorio git
if (-not (Test-Path .git)) {
    Write-Host "❌ Error: No estás en un repositorio git" -ForegroundColor Red
    Write-Host "Ejecuta primero: git init" -ForegroundColor Yellow
    exit 1
}

# 2. Verificar que hay cambios
Write-Host "`n📝 Verificando cambios..." -ForegroundColor Yellow
git status

# 3. Agregar todos los archivos
Write-Host "`n➕ Agregando archivos..." -ForegroundColor Yellow
git add .

# 4. Hacer commit
$commitMessage = Read-Host "`n💬 Mensaje del commit (Enter para usar 'Update site')"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update site"
}

Write-Host "`n💾 Haciendo commit..." -ForegroundColor Yellow
git commit -m $commitMessage

# 5. Obtener rama actual
$currentBranch = git rev-parse --abbrev-ref HEAD
Write-Host "`n🌿 Rama actual: $currentBranch" -ForegroundColor Green

# 6. Push
Write-Host "`n📤 Subiendo a GitHub..." -ForegroundColor Yellow
try {
    git push origin $currentBranch
    Write-Host "`n✅ ¡Código subido exitosamente!" -ForegroundColor Green
} catch {
    Write-Host "`n❌ Error al hacer push. Verifica tu conexión y credenciales." -ForegroundColor Red
    exit 1
}

# 7. Información final
Write-Host "`n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "✅ DESPLIEGUE INICIADO" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""
Write-Host "📊 Monitorea el despliegue en:" -ForegroundColor White
Write-Host "   https://github.com/Izshin/tarea_3.1/actions" -ForegroundColor Cyan
Write-Host ""
Write-Host "🌐 Tu sitio estará disponible en:" -ForegroundColor White
Write-Host "   https://izshin.github.io/tarea_3.1/" -ForegroundColor Green
Write-Host ""
Write-Host "⏱️  El despliegue tarda aproximadamente 2-3 minutos" -ForegroundColor Yellow
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan

# Preguntar si abrir el navegador
$openBrowser = Read-Host "`n¿Abrir GitHub Actions en el navegador? (S/N)"
if ($openBrowser -eq "S" -or $openBrowser -eq "s") {
    Start-Process "https://github.com/Izshin/tarea_3.1/actions"
}

Write-Host "`n✨ ¡Listo! Espera a que termine el despliegue." -ForegroundColor Green
