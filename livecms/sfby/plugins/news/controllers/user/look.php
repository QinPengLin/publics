<?php if ( ! defined('MSCMS')) exit('No direct script access allowed');
/**
* @Mscms 4.x open source management system
* @copyright 2009-2014 msvod.cc. All rights reserved.
* @Author:Msvod QQ:487039015
* @Dtime:2015-04-08
*/
class Look extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->load->helper('news');
$this->load->model('CsdjTpl');
$this->load->model('CsdjUser');
$this->CsdjUser->User_Login();
}
//�Ķ���¼
public function index()
{
$cid=intval($this->uri->segment(4)); //����ID
$page=intval($this->uri->segment(5)); //��ҳ
//ģ��
$tpl='look.html';
//URL��ַ
$url='look/index/'.$cid;
$sqlstr = "select {field} from ".CS_SqlPrefix."news_look where uid=".$_SESSION['mscms__id'];
if($cid>0){
$cids=getChild($cid);
$sqlstr.= " and cid in(".$cids.")";
}
//��ǰ��Ա
$row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if(empty($row['nichen'])) $row['nichen']=$row['name'];
//װ��ģ��
$title='���Ķ���С˵ - ��Ա����';
$ids['uid']=$_SESSION['mscms__id'];
$ids['uida']=$_SESSION['mscms__id'];
$Mark_Text=$this->CsdjTpl->user_list($row,$url,$page,$tpl,$title,'',$sqlstr,$ids,true,false);
$Mark_Text=str_replace("[news:cid]",$cid,$Mark_Text);
//��Ա��鵼��
$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
$Mark_Text=$this->skins->labelif($Mark_Text);
echo $Mark_Text;
}
}
