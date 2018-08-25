<?php 
/**
* @Mscms 4.x open source management system
* @copyright 2009-2015 msvod.cc. All rights reserved.
* @Author:Msvod QQ:487039015
* @Dtime:2014-12-01
*/
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Space extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->load->model('CsdjTpl');
$this->load->model('CsdjUser');
$this->CsdjUser->User_Login();
$this->lang->load('user');
}
public function index()
{
//解析当前会员标签
$row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if(empty($row['nichen'])) $row['nichen']=$row['name'];
//装载模板
$ids['uid']=$_SESSION['mscms__id'];
$ids['uida']=$_SESSION['mscms__id'];
$Mark_Text=$this->CsdjTpl->user_list($row,'space',1,'space.html',L('space_01'),'','',$ids,true,false);
//会员版块导航
$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
$Mark_Text=$this->skins->labelif($Mark_Text);
echo $Mark_Text;
}
}
