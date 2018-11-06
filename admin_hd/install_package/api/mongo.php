<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/11/4
 * Time: 下午11:38
 */
$m = new MongoDB\Driver\Manager("mongodb://mongouser:Asdfgh123456@149.28.122.121:27017");

$id      = new \MongoDB\BSON\ObjectId("5be1b8bbdb183d073806d527");
$filter  = ['_id' => $id];
$options = [];
$query   = new \MongoDB\Driver\Query($filter, $options);
$rows    = $m->executeQuery('porn.porns', $query)->toArray();
echo '<pre>';print_r($rows);echo '</pre>';exit;