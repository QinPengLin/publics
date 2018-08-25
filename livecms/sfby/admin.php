<?php
/**
 * @Mscms 4.x open source management system
 * @copyright 2008-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2014-08-01
 */
define('IS_ADMIN', TRUE); // 后台标识
define('ADMINSELF', pathinfo(__FILE__, PATHINFO_BASENAME)); // 后台文件名
define('SELF', ADMINSELF);
define('FCPATH', str_replace("\\", "/", dirname(__FILE__).'/')); // 网站根目录
echo FCPATH;
exit();
require('index.php'); // 引入主文件
