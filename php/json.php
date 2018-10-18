<?php

//$_POST['api'] で受け取った値によって
switch($_POST['api']){
    case 'gurunabi':
        $params = array('keyid'=>'5d47eb9883a8c6bddeccf9ed02466658');
        $url = 'https://api.gnavi.co.jp/RestSearchAPI/v3/?';
        $url .= 'keyid='.$params['keyid'];
        $url .= '&name='.'大戸屋';
        break;

    case 'gurunabi-rep':
        $params = array('keyid'=>'5d47eb9883a8c6bddeccf9ed02466658');
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
