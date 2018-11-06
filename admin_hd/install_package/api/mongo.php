<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/11/4
 * Time: 下午11:38
 */
$m = new MongoDB\Driver\Manager("mongodb://mongouser:Asdfgh123456@149.28.122.121:27017");
$db = 'porn';
function exec($opts,$m,$db) {
    $cmd = new MongoDB\Driver\Command($opts);
    $res =  $m->executeCommand($db, $cmd);
    return $res->toArray();
}

$cmd = [
    'find' => 'porns', // collection表名
    'projection' => ['remoteId' => 32122919]
];

$res = exec($cmd,$m,$db);


//$db = $m->porn;
//$porns = $db->porns;
//$data=$porns->findOne();

print_r($res);