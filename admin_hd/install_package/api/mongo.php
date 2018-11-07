<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/11/4
 * Time: 下午11:38
 */



$m = new MongoDB\Driver\Manager("mongodb://mongouser:Asdfgh123456@149.28.122.121:27017");

$command = new \MongoDB\Driver\Command(['count' => 'porns','query'=>'']);

$result = $m->executeCommand('porn',$command);

var_dump ($result);


//$filter  = [];
//$options = [
//    'limit' => 10
//];
//$query   = new \MongoDB\Driver\Query($filter, $options);
//$rows    = $m->executeQuery('porn.porns', $query)->toArray();
//echo '<pre>';
//print_r($rows);
//echo '</pre>';
//exit;