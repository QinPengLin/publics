<?php 
/**
* @Mscms 4.x open source management system
* @copyright 2009-2015 msvod.cc. All rights reserved.
* @Author:Msvod QQ:487039015
* @Dtime:2015-03-30
*/
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Journal extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->load->model('CsdjTpl');
$this->load->model('CsdjUser');
$this->CsdjUser->User_Login();
$this->lang->load('user');
}
//��¼��־
public function index()
{
$page=intval($this->uri->segment(4)); //��ҳ
//ģ��
$tpl='journal.html';
//URL��ַ
$url='journal/index';
//��ǰ��Ա
$row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if(empty($row['nichen'])) $row['nichen']=$row['name'];
//װ��ģ��
$title=L('journal_01');
$ids['uid']=$_SESSION['mscms__id'];
$ids['uida']=$_SESSION['mscms__id'];
$Mark_Text=$this->CsdjTpl->user_list($row,$url,$page,$tpl,$title,'','',$ids,true,false);
//��Ա��鵼��
$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
$Mark_Text=$this->skins->labelif($Mark_Text);
echo $Mark_Text;
}
}
