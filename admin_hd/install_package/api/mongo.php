<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/11/4
 * Time: 下午11:38
 */
echo 'yes';
$m = new MongoClient("mongodb://149.28.122.121:27017/mongouser:Asdfgh123456");
$db = $m->porn;
$porns = $db->porns;
$data=$porns->findOne();
print_r($data);