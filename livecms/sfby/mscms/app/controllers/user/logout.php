<?php 
/**
* @Mscms 4.x open source management system
* @copyright 2009-2015 msvod.cc. All rights reserved.
* @Author:Msvod QQ:487039015
* @Dtime:2014-11-23
*/
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Logout extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->lang->load('user');
}
//退出登录
public function index()
{
//删除在线状态
$updata['zx']=0;
if(isset($_SESSION['mscms__id'])){
$this->CsdjDB->get_update('user',$_SESSION['mscms__id'],$updata);
$this->CsdjDB->get_del('session',$_SESSION['mscms__id'],'uid');
}
unset($_SESSION['mscms__id'],$_SESSION['mscms__name'],$_SESSION['mscms__login']);
//清除记住登录
$this->cookie->set_cookie("user_id");
$this->cookie->set_cookie("user_login");
//--------------------------- Ucenter ---------------------------
$log=(User_Uc_Mode==1)?uc_user_synlogout:'';
//--------------------------- Ucenter ---------------------------
msg_url(L('logout_01').$log,userurl(site_url('user/login')),'ok');  //退出登录成功
}
}
