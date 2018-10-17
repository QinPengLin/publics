<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/10/16
 * Time: 上午10:37
 */
define('PHPCMS_PATH', dirname(__FILE__).DIRECTORY_SEPARATOR);
include PHPCMS_PATH.'phpcms/base.php';
pc_base::load_app_class('respond', 'pay', 0);
exit();
$respond = new respond();//respond_iiipi
$respond->respond_iiipi();