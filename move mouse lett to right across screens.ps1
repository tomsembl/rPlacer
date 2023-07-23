Add-Type -AssemblyName System.Windows.Forms

while ($true)

{
    [System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point(10, 1000)
    forEach ($i in 1..75) {
        $Pos = [System.Windows.Forms.Cursor]::Position
        $x = $pos.X + 100
        $y = $pos.Y
        Start-Sleep -Milliseconds 16
        [System.Windows.Forms.Cursor]::Position = New-Object System.Drawing.Point($x, $y)
    }
  Start-Sleep -Seconds 10
}
