<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/10/16
 * Time: 上午10:37
 */
define('PHPCMS_PATH', str_replace("api/","phpcms/",dirname(__FILE__).DIRECTORY_SEPARATOR));
print_r(PHPCMS_PATH);
    exit;
include PHPCMS_PATH.'base.php';
$param = pc_base::load_sys_class('param');
pc_base::load_app_class('respond', 'pay', 0);
$respond = new respond();//respond_iiipi
$respond->respond_iiipi();