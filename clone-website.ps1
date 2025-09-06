# CV Website Clone Script
# Run this script to create a complete clone of your CV website

param(
    [string]$DestinationPath = "C:\Users\pc\Desktop\cv-clone"
)

Write-Host "🚀 Starting CV Website Clone Process..." -ForegroundColor Green
Write-Host ""

# Create destination directory
if (Test-Path $DestinationPath) {
    Write-Host "⚠️  Destination directory already exists. Removing..." -ForegroundColor Yellow
    Remove-Item -Path $DestinationPath -Recurse -Force
}

Write-Host "📁 Creating destination directory: $DestinationPath" -ForegroundColor Cyan
New-Item -Path $DestinationPath -ItemType Directory -Force | Out-Null

# Copy all files
Write-Host "📋 Copying all project files..." -ForegroundColor Cyan
$SourcePath = "C:\Users\pc\Desktop\cv"
Copy-Item -Path "$SourcePath\*" -Destination $DestinationPath -Recurse -Force

# Navigate to destination
Set-Location $DestinationPath

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Cyan
npm install

Write-Host ""
Write-Host "✅ CV Website Clone Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📍 Project Location: $DestinationPath" -ForegroundColor White
Write-Host ""
Write-Host "🔥 To start development server:" -ForegroundColor Yellow
Write-Host "   cd `"$DestinationPath`"" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "🏗️  To build for production:" -ForegroundColor Yellow
Write-Host "   npm run build" -ForegroundColor White
Write-Host ""
Write-Host "📄 PDF Export Feature:" -ForegroundColor Magenta
Write-Host "   ✓ Download PDF button in header" -ForegroundColor Green
Write-Host "   ✓ High-quality rendering" -ForegroundColor Green
Write-Host "   ✓ Professional A4 format" -ForegroundColor Green
Write-Host "   ✓ Multi-page support" -ForegroundColor Green
Write-Host ""

# Ask if user wants to start dev server
$StartServer = Read-Host "Would you like to start the development server now? (y/n)"
if ($StartServer -eq "y" -or $StartServer -eq "Y") {
    Write-Host "🚀 Starting development server..." -ForegroundColor Green
    npm run dev
}