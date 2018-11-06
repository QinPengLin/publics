<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/11/4
 * Time: 下午11:38
 */
$m = new MongoClient("mongodb://mongouser:Asdfgh123456@149.28.122.121:27017");
$db = $m->porn;
$porns = $db->porns;
$data=$porns->findOne();
print_r('no');
print_r($data);