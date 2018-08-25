<?php
/**
* @Mscms 4.x open source management system
* @copyright 2009-2015 msvod.cc. All rights reserved.
* @Author:Msvod QQ:487039015
* @Dtime:2014-10-27
*/
if (!defined('BASEPATH')) exit('No direct script access allowed');
class CsdjUser extends CI_Model{
function __construct (){
parent:: __construct ();
//关闭数据库缓存
$this->db->cache_off();
//删除一小时没有动作的会员在线状态
$time=@file_get_contents(FCPATH."cache/mscms_time/time.txt");
if(time()>$time){
$times=time()-1800;
$this->db->query("update ".CS_SqlPrefix."user set jinyan=jinyan+".User_Jinyan_Zx.",cion=cion+".User_Cion_Zx." where zx=1");
$this->db->query("update ".CS_SqlPrefix."user set zx=0 where zx=1 and logms<".$times."");
write_file(FCPATH."cache/mscms_time/time.txt",time()+1800);
}
}
//检测登入
function User_Login($cid=0,$key='') {
if(!empty($key)){
$key    = unserialize(stripslashes(sys_auth($key,'D')));
$id     = isset($key['id'])?intval($key['id']):0;
$logstr = isset($key['login'])?$key['login']:'';
}else{
$id     = isset($_SESSION['mscms__id'])?intval($_SESSION['mscms__id']):0;
$logstr = isset($_SESSION['mscms__login'])?$_SESSION['mscms__login']:'';
$zid = isset($_SESSION['mscms__zid'])?$_SESSION['mscms__zid']:'';
$cion = isset($_SESSION['mscms__cion'])?$_SESSION['mscms__cion']:'';
}
$user_id = (int)$this->cookie->get_cookie('user_id');
$user_login = $this->cookie->get_cookie('user_login');
$login  = FALSE;
$logo = 0;
if($id==0 || empty($logstr)){
if($user_id>0 && !empty($user_login)){  
//判断非法COOKIE
if(!preg_match('/^[0-9a-zA-Z]*$/', $user_login)){
$userlogin= '';
}
$row=$this->db->query("SELECT id,name,code,logo,pass,lognum,level,jinyan,vipjid,vipzid,vipzidtime,cion,vip,logtime,viptime,zid,zutime FROM ".CS_SqlPrefix."user where id=".$user_id."")->row();
if($row){
//判断账号密码是否正确
if(md5($row->name.$row->pass.$row->code)==$user_login){
//每天登陆加积分
if(User_Cion_Log>0 && date("Y-m-d",$row->logtime)!=date('Y-m-d')){
$updata['cion']  = $row->cion+User_Cion_Log;
}
//判断VIP
IF($row->vip>0 && $row->viptime<time()){
$updata['vip']  = 0;
$updata['viptime']  = 0;
}
//判断会员组级别
IF($row->zid>1 && $row->zutime<time()){
$updata['zid']  = 1;
$updata['zutime']  = 0;
}
//判断等级
$level=getlevel($row->jinyan);
if($level>$row->level){
$updata['level']   = $level;
//发送等级通知
$add['uida']=$row->id;
$add['uidb']=0;
$add['name']='用户等级升级通知';
$add['neir']='恭喜您，您的用户等级升级到Lv'.$level;
$add['addtime']=time();
$this->CsdjDB->get_insert('msg',$add);
}
if($row->vipjid==1){
$updata['vipjid'] = 0;
$updata['zid'] = $row->vipzid;
$updata['zutime'] = time()+$row->vipzidtime;
}
//修改登录时间
$updata['zx']      = 1;
$updata['lognum']  = $row->lognum+1;
$updata['logtime'] = time();
$updata['logip']   = getip();
$updata['logms']   = time();
$this->CsdjDB->get_update('user',$user_id,$updata);
//登录日志
if(date("Y-m-d",$row->logtime)!=date('Y-m-d')){
$this->load->library('user_agent');
$agent = ($this->agent->is_mobile() ? $this->agent->mobile():$this->agent->platform()).'&nbsp;/&nbsp;'.$this->agent->browser().' v'.$this->agent->version();
$add['uid']=$row->id;
$add['loginip']=getip();
$add['logintime']=time();
$add['useragent']=$agent;
$this->CsdjDB->get_insert('user_log',$add);
}
$_SESSION['mscms__id']   =$row->id;
$_SESSION['mscms__name'] =$row->name;
$_SESSION['mscms__zid'] =$row->zid;
$_SESSION['mscms__cion'] =$row-cion;
$_SESSION['mscms__login']=md5($row->name.$row->pass);
if(User_Logo==1 && empty($row->logo)){
$logo = 1;
}
$login= TRUE;
}
}
}
}else{
$row=$this->db->query("SELECT id,name,pass,logo,logip,level,jinyan,vipjid,vipzid,vipzidtime FROM ".CS_SqlPrefix."user where id='$id'")->row();
if($row){
if(md5($row->name.$row->pass)==$logstr){
//IP不对
if(getip()!=$row->logip){
$login  = FALSE;
$sfcms=0;
}else{
$login= TRUE;
}
//判断等级
$level=getlevel($row->jinyan);
if($level>$row->level){
$updata['level']   = $level;
//发送等级通知
$add['uida']=$row->id;
$add['uidb']=0;
$add['name']='用户等级升级通知';
$add['neir']='恭喜您，您的用户等级升级到Lv'.$level;
$add['addtime']=time();
}
if($row->vipjid==1){
$updata['vipjid'] = 0;
$updata['zid'] = $row->vipzid;
$updata['zutime'] = time()+$row->vipzidtime;
}
//改变在线秒数
$updata['zx']      = 1;
$updata['logms']   = time();
$this->CsdjDB->get_update('user',$id,$updata);
if(User_Logo==1 && empty($row->logo)){
$logo = 1;
}
}
}
}
if(!$login){
//清除非法登录
unset($_SESSION['mscms__id'],$_SESSION['mscms__name'],$_SESSION['mscms__login']);
//清除记住登录
$this->cookie->set_cookie("user_id");
$this->cookie->set_cookie("user_login");
if($cid==0){
msg_url('您还没有登录或者登录已超时~!',userurl(site_url('user/login')));
}
}else{
//判断每天会员要删除的数据
$day=@file_get_contents(FCPATH."cache/mscms_time/day.txt");
if(date('d')!=$day){
//清空每天分享，发布
$uedit['addhits'] = 0;
$this->CsdjDB->get_update('user',$_SESSION['mscms__id'],$uedit);
write_file(FCPATH."cache/mscms_time/day.txt",date('d'));
}
//强制上传头像
if($cid==0 && $logo==1 && strpos(REQUEST_URI,'edit/logo') === FALSE){
msg_url('您还没有上传头像，请先上传头像~!',userurl(site_url('user/edit/logo')));
}
}
return $login;  
}
}
