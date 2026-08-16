# Register daily Windows Task Scheduler job for Stock Tracking
$action = New-ScheduledTaskAction -Execute "python.exe" -Argument "`"$PSScriptRoot\scripts\update_all.py`""
$trigger = New-ScheduledTaskTrigger -Daily -At 6:00AM
Register-ScheduledTask -TaskName "StockTrackingDailyUpdate" -Action $action -Trigger $trigger -Description "Automatically fetches daily stock prices, news, and fundamentals." -User $env:USERNAME -ErrorAction SilentlyContinue

Write-Host "Task Scheduler setup complete! The stock data will now update every morning at 06:00 AM." -ForegroundColor Green
