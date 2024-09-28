<?
include "Rcon.php";

$host = "65.109.81.177"; // Server host name or IP
$port = 23105;                      // Port rcon is listening on
$password = "123456"; // rcon.password setting set in server.properties
$timeout = 3;                       // How long to timeout.
$command = $_POST['commandServer'];
use Thedudeguy\Rcon;

$rcon = new Rcon($host, $port, $password, $timeout);

if ($rcon->connect())
{
  $rcon->sendCommand('say Hello ' . $_POST['nickname']);
  $rcon->sendCommand('whitelist add ' . $_POST['nickname']);
  $rcon->sendCommand('op ' . $_POST['nickname']);

}

header('location: /')
?>