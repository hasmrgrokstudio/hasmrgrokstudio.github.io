<html>
<head>
<title>IP information</title>
</head>
<body bgcolor="#a0a000" text="#800000">
<center>
<FORM action="ip.php" method="POST">
<font size=+2 color="#000000"><b><i>
Введите IP:
<br>
(Формат: xxx.xxx.xxx.xxx)
</i></b></font>
<br>
<INPUT type="text" name="ip" size="35">
<input type="submit" value="Ok">
</form>
</center>
<?php
  if( $curl = curl_init() ) {
    $ip = $_SERVER["REMOTE_ADDR"];
    curl_setopt($curl, CURLOPT_URL, 'http://ip-whois.net/ip_geo.php?ip='.$ip);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
    $out = curl_exec($curl);
    $matches = array();
    $country = preg_match_all("/Страна: (.*)/i", $out, $matches);
    print_r($matches[1][1]);
    curl_close($curl);
  }
?>
</body>
</html>

