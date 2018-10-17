<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/10/17
 * Time: 上午10:30
 */
defined('IN_PHPCMS') or exit('No permission resources.');
if (isset($set_modules) && $set_modules == TRUE)
{
    $i = isset($modules) ? count($modules) : 0;

    $modules[$i]['code']    = basename(__FILE__, '.class.php');
    $modules[$i]['name']    = L('iiiapi', '', 'pay');
    $modules[$i]['desc']    = L('iiiapi_tip', '', 'pay');
    $modules[$i]['is_cod']  = '0';
    $modules[$i]['is_online']  = '1';
    $modules[$i]['author']  = 'PHPCMS开发团队';
    $modules[$i]['website'] = 'https://a.iiiapi.com/';
    $modules[$i]['version'] = '1.0.0';
    $modules[$i]['config']  = array(
        array('name' => 'iiiapi_account','type' => 'text','value' => ''),
        array('name' => 'iiiapi_privateKey','type' => 'text','value' => ''),
        array('name' => 'service_type','type' => 'select','value' => '0'),
    );

    return;
}