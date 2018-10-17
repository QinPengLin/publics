<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/10/16
 * Time: 上午10:37
 */
define('PHPCMS_PATH', dirname(__FILE__).DIRECTORY_SEPARATOR);
include PHPCMS_PATH.'phpcms/base.php';
$f=pc_base::load_app_class('respond', 'pay', 0);
print_r($f);
exit();
$respond = new respond();//respond_iiipi
print_r($respond);
exit();
$respond->respond_iiipi();