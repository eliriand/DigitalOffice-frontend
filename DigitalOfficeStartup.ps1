# Run this script from Admin PowerShell
# If executing was blocked, enter 'Set-ExecutionPolicy RemoteSigned'

New-Item DigitalOffice -ItemType Directory

$allServices = "CheckRightsService", "AuthenticationService", "UserService",
"MessageService", "FileService", "NewsService",
"TimeManagementService", "CompanyService", "ProjectService"

cd .\DigitalOffice

if ( -not (Test-Path '.\DigitalOffice' -PathType Container) )
{
    foreach($service in $allServices)
    {
        Write-Host Geting source code DigitalOffice-$service
	git clone https://github.com/LT-Students/DigitalOffice-$service/
    }
}

foreach($service in $allServices)
{
    cd .\DigitalOffice-$service

    Write-Host Updating source code DigitalOffice-$service
    git pull

    Write-Host Building solution DigitalOffice-$service
    dotnet build
    cd ..\
}

foreach($service in $allServices)
{
    Write-Host Starting DigitalOffice-$service
    cd .\DigitalOffice-$service\src\$service\bin\Debug\netcoreapp3.1\
    start LT.DigitalOffice.$service.exe
    cd ..\..\..\..\..\..\
}

Read-Host -Prompt "Press Enter to exit"