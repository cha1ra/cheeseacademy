<?php

//$_POST['api'] で受け取った値によって
switch($_POST['api']){
    case 'gurunabi-rep':
        $params = array('keyid'=>'94d0eaca2667c3f8361033b3269f96e3');
        $url = 'https://api.gnavi.co.jp/PhotoSearchAPI/v3/?';
        $url .= 'keyid='.$params['keyid'];
        $url .= '&comment='.$_POST['words'];
        $url .= '&hit_per_page='.'50';
        break;
    case 'Geolocation API':
        break;
}

$json = file_get_contents($url);
$json = mb_convert_encoding($json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
echo $json;


?>
