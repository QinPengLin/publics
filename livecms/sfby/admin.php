<?php
/**
 * @Mscms 4.x open source management system
 * @copyright 2008-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2014-08-01
 */
define('IS_ADMIN', TRUE); // ��̨��ʶ
define('ADMINSELF', pathinfo(__FILE__, PATHINFO_BASENAME)); // ��̨�ļ���
define('SELF', ADMINSELF);
define('FCPATH', str_replace("\\", "/", dirname(__FILE__).'/')); // ��վ��Ŀ¼
echo FCPATH;
exit();
require('index.php'); // �������ļ�
