<?php
/**
* @Mscms 4.x open source management system
* @copyright 2009-2015 msvod.cc. All rights reserved.
* @Author:Msvod QQ:487039015
* @Dtime:2014-08-01
*/
//默认时区
date_default_timezone_set("Asia/Shanghai");
//当前运行URI
define('REQUEST_URI', $_SERVER['REQUEST_URI']);

//应用环境
define('ERROR_MSG', 'production');
if (defined('ERROR_MSG')){
switch (ERROR_MSG){
case 'development':error_reporting(E_ALL);break;
case 'production':error_reporting(0);break;
}
}
//文件名称
if (!defined('SELF')) {
define('SELF', pathinfo(__FILE__, PATHINFO_BASENAME));
}
// 网站根目录
if (!defined('FCPATH')) {
define('FCPATH', str_replace("\\", "/", str_replace(SELF, '', __FILE__)));
}
// 设置当前目录正确的CLI的请求
if (defined('STDIN')){
chdir(dirname(__FILE__));
}

define('MSCMS', FCPATH . 'mscms/'); //系统核心目录
define('ENVIRONMENT', MSCMS . 'config/'); // 环境配置文件目录

//默认控制器目录
$app_folder = 'mscms/app';

//加载MSCMS配置文件
require_once MSCMS.'lib/Cs_Mscms.php';

define('EXT', '.php'); //PHP文件扩展名
define('BASEPATH', FCPATH.'mscms/system/'); //CI框架目录
define('SYSDIR', trim(strrchr(trim(BASEPATH, '/'), '/'), '/')); //系统文件夹的名称
define('APPPATH', FCPATH.$app_folder.'/'); //板块目录
define('MSCMSPATH', FCPATH.'packs/');  //MSCMS附件扩展目录

require_once BASEPATH.'core/CodeIgniter.php';  //加载CI核心文件
