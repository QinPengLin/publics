<?php 
/**
* @Mscms 4.x open source management system
* @copyright 2009-2015 msvod.cc. All rights reserved.
* @Author:Msvod QQ:487039015
* @Dtime:2015-03-07
*/
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Daili extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->load->model('CsdjTpl');
$this->load->model('CsdjUser');
$this->lang->load('user');
$this->CsdjUser->User_Login();
$this->load->helper('string');
}
//资料
public function index()
{
//模板
$tpl='daili.html';
//URL地址
$url='daili/index';
//当前会员
$row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if(empty($row['nichen'])) $row['nichen']=$row['name'];
//装载模板
$title='代理管理';
$ids['uid']=$_SESSION['mscms__id'];
$ids['uida']=$_SESSION['mscms__id'];
$Mark_Text=$this->CsdjTpl->user_list($row,$url,1,$tpl,$title,'id','',$ids,true,false);
//会员版块导航
$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
$Mark_Text=$this->skins->labelif($Mark_Text);
//提交地址
$Mark_Text=str_replace("[user:dailisave]",spacelink('daili,save'),$Mark_Text);
$Mark_Text=str_replace("[user:tuiguanglink]",site_url('user/reg?id='.$_SESSION['mscms__id']),$Mark_Text);
$Mark_Text=str_replace("[user:ticheng]",User_Cion_ticheng,$Mark_Text);
echo $Mark_Text;
}
//资料修改
public function save()
{
$row=$this->db->query("select * from ".CS_SqlPrefix."user where id=".$_SESSION['mscms__id']."")->row();
if($row->dlrz==2){
$data['msg']=2;
}else if($row->dlrz==1){
$data['msg']=1;
}else{
//修改入库
$userinfo['dlrz']=1;
$this->CsdjDB->get_update ('user',$_SESSION['mscms__id'],$userinfo);
$data['msg']=0;
}
echo json_encode($data);
}
//资料
public function tixian()
{
//模板
$tpl='tixian.html';
//URL地址
$url='daili/tixian';
//当前会员
$row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if(empty($row['nichen'])) $row['nichen']=$row['name'];
//装载模板
$title='代理管理';
$ids['uid']=$_SESSION['mscms__id'];
$ids['uida']=$_SESSION['mscms__id'];
$Mark_Text=$this->CsdjTpl->user_list($row,$url,1,$tpl,$title,'id','',$ids,true,false);
//会员版块导航
$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
$Mark_Text=$this->skins->labelif($Mark_Text);
//提交地址
$Mark_Text=str_replace("[user:dailisave]",spacelink('daili,tixian_save'),$Mark_Text);
echo $Mark_Text;
}
//资料修改
public function tixian_save()
{
$cion=$this->input->get_post('cion', TRUE);
$cid=$this->input->get_post('cid', TRUE);
$text=$this->input->get_post('text', TRUE);
$name=$this->input->get_post('name', TRUE);
$tell=$this->input->get_post('tell', TRUE);
if(empty($text)) msg_url('提现信息不能为空！','javascript:history.back();');
$row=$this->db->query("select * from ".CS_SqlPrefix."user where id=".$_SESSION['mscms__id']."")->row();
if($row->dlcion>=50){
if($row->dlcion<$cion){
$cion=$row->dlcion;
}
$this->db->query("update ".CS_SqlPrefix."user set dlcion=dlcion-".$cion." where id=".$_SESSION['mscms__id']."");
$add2['uid']=$_SESSION['mscms__id'];
$add2['cid']=$cid;
$add2['zid']=1;
$add2['tcion']=$cion;
$add2['text']=$text;
$add2['name']=$name;
$add2['tell']=$tell;
$add2['dltime']=time();
$this->CsdjDB->get_insert('daili_tixian',$add2);
msg_url('提现申请成功，请等待管理审核！',userurl(site_url('user/daili/tixian')),'ok');
}else{
msg_url('不符合提现条件！','javascript:history.back();');
}
echo json_encode($data);
}
//宣传记录
public function tixian_lists()
{
$page=intval($this->uri->segment(4)); //分页
//模板
$tpl='tixian-list.html';
//URL地址
$url='daili/tixian_lists';
//当前会员
$row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if(empty($row['nichen'])) $row['nichen']=$row['name'];
$sqlstr = "select {field} from ".CS_SqlPrefix."daili_tixian where uid='".$_SESSION['mscms__id']."'";
//装载模板
$title='下级会员';
$ids['uid']=$_SESSION['mscms__id'];
$ids['uida']=$_SESSION['mscms__id'];
$Mark_Text=$this->CsdjTpl->user_list($row,$url,$page,$tpl,$title,'',$sqlstr,$ids,true,false);
//会员版块导航
$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
$Mark_Text=$this->skins->labelif($Mark_Text);
echo $Mark_Text;
}
public function lists()
{
$page=intval($this->uri->segment(4)); //分页
//模板
$tpl='daili-list.html';
//URL地址
$url='daili/lists';
//当前会员
$row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if(empty($row['nichen'])) $row['nichen']=$row['name'];
$sqlstr = "select {field} from ".CS_SqlPrefix."user where yid=0 and dlid='".$_SESSION['mscms__id']."'";
//装载模板
$title='下级会员';
$ids['uid']=$_SESSION['mscms__id'];
$ids['uida']=$_SESSION['mscms__id'];
$Mark_Text=$this->CsdjTpl->user_list($row,$url,$page,$tpl,$title,'',$sqlstr,$ids,true,false);
//会员版块导航
$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
$Mark_Text=$this->skins->labelif($Mark_Text);
echo $Mark_Text;
}
}
