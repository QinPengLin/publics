<?php
/**
* @Mscms 4.x open source management system
* @copyright 2009-2015 msvod.cc. All rights reserved.
* @Author:Msvod QQ:487039015
* @Dtime:2014-09-20
*/
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Play extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->load->helper('vod');
$this->load->model('CsdjTpl');
$this->load->model('CsdjUser');
}
//电影播放
public function index($a1 , $a2 = 0, $a3 = 0, $a4 = 0)
{
if(intval($a1)>0){
$id = intval($a1);   //ID
$zu = intval($a2);   //组
$ji = intval($a3);   //集数
}else{
$id = intval($a2);   //ID
$zu = intval($a3);   //组
$ji = intval($a4);   //集数
}
$login='no';
//判断ID
if($id==0) msg_url('出错了，ID不能为空！',Web_Path);
//获取数据
$row=$this->CsdjDB->get_row_arr('vod','*',$id);
if(!$row || $row['yid']>0 || $row['hid']>0){
msg_url('出错了，该数据不存在或者没有审核！',Web_Path);
}
if(empty($row['purl'])){
msg_url('该视频播放地址不正确！',Web_Path);
}
//判断运行模式,生成则跳转至静态页面
$html=config('Html_Uri');
if(config('Web_Mode')==3 && $html['play']['check']==1 && !defined('MOBILE')){
//获取静态路径
$Htmllink=VodPlayUrl('play',$id,$zu,$ji);
header("Location: ".$Htmllink);
exit;
}
//判断金币观看
$down=0;
$downs=0;
$phits =$row['phits'];
$duid=intval($_SESSION['mscms__id']);
$times=strtotime(date("Y-m-d"));
$login=$this->CsdjUser->User_Login(1);
if(!$login){
/**/
//判断是否观看过
$did=$id.'-'.$zu.'-'.$ji;
$shuliang=$this->db->query("SELECT id,addtime FROM ".CS_SqlPrefix."vod_look where ip='".getip()."' and sid=0 and addtime='".$times."'")->num_rows();
if($shuliang>=CS_Play_yk){
msg_url('游客每天可免费观看 '.$shuliang.' 部视频，登陆后可继续观看哦！',spacelink('reg'));
$down=3;
}
//增加观看记录
if($down==0){
$add['name']=$row['name'];
$add['cid']=$row['cid'];
$add['sid']=0;
$add['did']=$did;
$add['ip']=getip();
$add['addtime']=$times;
$this->CsdjDB->get_insert('vod_look',$add);
$error='ok';
}
/**/
}else{
//判断是否观看过
$did=$id.'-'.$zu.'-'.$ji;
$shuliang=$this->db->query("SELECT id,addtime FROM ".CS_SqlPrefix."vod_look where uid='".$_SESSION['mscms__id']."' and addtime='".$times."'")->num_rows();
//会员
$rowu=$this->CsdjDB->get_row_arr('user','vip,zid,zutime,level,cion',$_SESSION['mscms__id']);
if($rowu['zutime']<time()){
$this->db->query("update ".CS_SqlPrefix."user set zid=1,zutime=0 where id=".$_SESSION['mscms__id']."");
$rowu['zid']=1;
}
if($shuliang>=CS_Play_hy){
/**/
//判断会员组观看权限
if($row['vip']>0 && $row['uid']!=$_SESSION['mscms__id'] && $rowu['vip']==0){
if($row['vip']>$rowu['zid']){
msg_url('普通用户每天免费观看 '.$shuliang.' 部视频，继续观请先升级VIP会员！','/index.php/user/kmcz');
}
}
//判断会员等级观看权限
if($row['level']>0 && $row['uid']!=$_SESSION['mscms__id']){
if($row['level']>$rowu['level']){
msg_url('抱歉，您等级不够，不能观看该视频！','javascript:window.close();');
}
}
/**/
$down=2;
}
//判断会员组观看权限
$rowz=$this->db->query("SELECT id,did FROM ".CS_SqlPrefix."userzu where id='".$rowu['zid']."'")->row_array();
if($rowz && $rowz['did']==1){ //有免费观看权限
$down=3; //该会员观看不收费
}
if($rowu['zid']>1){
$down=4;
}
$rowd=$this->db->query("SELECT id,addtime FROM ".CS_SqlPrefix."vod_look where did='".$did."' and uid='".$_SESSION['mscms__id']."' and sid=0")->row_array();
if($rowd){
$down=1; //数据已经存在
$downtime=User_Downtime*3600+$rowd['addtime'];
if($downtime<time()&&$rowd['cion']>0){
$times=time();
$down=2; //在多少时间内不重复扣币
}
}
/////////////
if($down==2){ //判断扣币
if($row['cion']>$rowu['cion']){
msg_url('普通用户每天免费观看 '.$shuliang.' 部视频，继续观看需花费'.$row['cion'].'个金币，请先充值！','/index.php/user/kmcz');
}else{
//扣币
$edit['cion']=$rowu['cion']-$row['cion'];
$this->CsdjDB->get_update('user',$_SESSION['mscms__id'],$edit);
//写入消费记录
$add2['title']='观看视频《'.$row['name'].'》';
$add2['uid']=$_SESSION['mscms__id'];
$add2['nums']=$row['cion'];
$add2['ip']=getip();
$add2['dir']='vod';
$add2['addtime']=time();
$this->CsdjDB->get_insert('spend',$add2);
//写入观看记录
$add['name']=$row['name'];
$add['cid']=$row['cid'];
$add['sid']=0;
$add['did']=$did;
$add['cion']=$row['cion'];
$add['uid']=$_SESSION['mscms__id'];
$add['addtime']=$times;
$this->CsdjDB->get_insert('vod_look',$add);
//判断分成
if(User_DownFun==1 && $row['uid']>0){
//分成比例
$bi=(User_Downcion<10)?'0.0'.User_Downcion:'0.'.User_Downcion;
$scion= intval($row['cion'] * $bi);
if($scion>0){
$this->db->query("update ".CS_SqlPrefix."user set cion=cion+".$scion." where id=".$row['uid']."");
//写入分成记录
$add3['title']='视频《'.$row['name'].'》';
$add3['uid']=$row['uid'];
$add3['dir']='vod';
$add3['nums']=$scion;
$add3['ip']=getip();
$add3['addtime']=time();
$this->CsdjDB->get_insert('income',$add3);
}
}
}
}
/**/
//增加观看记录
if($down==0){
$add['name']=$row['name'];
$add['cid']=$row['cid'];
$add['sid']=0;
$add['did']=$did;
$add['uid']=$_SESSION['mscms__id'];
$add['addtime']=$times;
$this->CsdjDB->get_insert('vod_look',$add);
$error='ok';
}
/**/
}
//判断lv
if(!$login){
$zhuangtaiai="window.setTimeout('redirect()',time * 1000);";
$lv="lv:1,";
$ad="http-equiv='refresh'";
}else{
$rowf=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if($rowf['zid']<=1&&$rowf['cion']==0){
$zhuangtaiai="window.setTimeout('redirect()',time * 1000);";
$lv="lv:1,";
$ad="http-equiv='refresh'";
}
}
//摧毁部分需要超级链接字段数组
$rows=$row; //先保存数组保留下面使用
unset($row['zhuyan']);
unset($row['daoyan']);
unset($row['yuyan']);
unset($row['diqu']);
unset($row['tags']);
unset($row['year']);
unset($row['pfen']);
unset($row['phits']);
//获取当前分类下二级分类ID
$arr['cid']=getChild($row['cid']);
$arr['uid']=$row['uid'];
$arr['singerid']=$row['singerid'];
$arr['tags']=$rows['tags'];
$skins=$row['skins'];
if(empty($skins) || $skins=='play.html'){
$skins=getzd('vod_list','skins3',$row['cid']);
}
if(empty($skins)) $skins='play.html';
//缓存ID
$cacheid='vod_play_'.$id.'_'.$zu.'_'.$ji;
$play_urls=explode("#mscms#",$row['purl']);
if($zu>=count($play_urls)) $zu=0;
$play_urlss=explode("\n",$play_urls[$zu]);
$play_urlsss=explode('$',$play_urlss[$ji]);
$row['laiyuan']=str_replace("\r","",@$play_urlsss[2]);
$row['phits']=$phits;
//装载模板并输出
$Mark_Text=$this->CsdjTpl->plub_show('vod',$row,$arr,TRUE,$skins,$row['name'],$row['name'],'',$cacheid);
//评论
$Mark_Text=str_replace("[vod:pl]",get_pl('vod',$id),$Mark_Text);
$Mark_Text=str_replace("[vod:ahits]",$rows['phits'],$Mark_Text);
//分类地址、名称
$Mark_Text=str_replace("[vod:zus]",($zu),$Mark_Text);
$Mark_Text=str_replace("[vod:jis]",($ji),$Mark_Text);
$Mark_Text=str_replace("[vod:zu]",($zu+1),$Mark_Text);
$Mark_Text=str_replace("[vod:ji]",($ji+1),$Mark_Text);
$Mark_Text=str_replace("[vod:link]",LinkUrl('show','id',$row['id'],1,'vod'),$Mark_Text);
$Mark_Text=str_replace("[vod:playlink]",VodPlayUrl('play',$id,$zu,$ji),$Mark_Text);
$Mark_Text=str_replace("[vod:classlink]",LinkUrl('lists','id',$row['cid'],1,'vod'),$Mark_Text);
$Mark_Text=str_replace("[vod:classname]",$this->CsdjDB->getzd('vod_list','name',$row['cid']),$Mark_Text);
//主演、导演、标签、年份、地区、语言加超级连接
$Mark_Text=str_replace("[vod:zhuyan]",SearchLink($rows['zhuyan'],'zhuyan'),$Mark_Text);
$Mark_Text=str_replace("[vod:daoyan]",SearchLink($rows['daoyan'],'daoyan'),$Mark_Text);
$Mark_Text=str_replace("[vod:yuyan]",SearchLink($rows['yuyan'],'yuyan'),$Mark_Text);
$Mark_Text=str_replace("[vod:diqu]",SearchLink($rows['diqu'],'diqu'),$Mark_Text);
$Mark_Text=str_replace("[vod:tags]",SearchLink($rows['tags']),$Mark_Text);
$Mark_Text=str_replace("[vod:year]",SearchLink($rows['year'],'year'),$Mark_Text);
 
//获取上下视频
preg_match_all('/[vod:slink]/',$Mark_Text,$arr);
if(!empty($arr[0]) && !empty($arr[0][0])){
$rowd=$this->db->query("Select id,cid,name from ".CS_SqlPrefix."vod where yid=0 and hid=0 and id<".$id." order by id desc limit 1")->row();
if($rowd){
$Mark_Text=str_replace("[vod:slink]",LinkUrl('play','id',$rowd->id,1,'vod'),$Mark_Text);
$Mark_Text=str_replace("[vod:sname]",$rowd->name,$Mark_Text);
$Mark_Text=str_replace("[vod:sid]",$rowd->id,$Mark_Text);
}else{
$Mark_Text=str_replace("[vod:slink]","#",$Mark_Text);
$Mark_Text=str_replace("[vod:sname]","没有了",$Mark_Text);
$Mark_Text=str_replace("[vod:sid]",0,$Mark_Text);
}
}
unset($arr);
preg_match_all('/[vod:xlink]/',$Mark_Text,$arr);
if(!empty($arr[0]) && !empty($arr[0][0])){
$rowd=$this->db->query("Select id,cid,name from ".CS_SqlPrefix."vod where yid=0 and hid=0 and id>".$id." order by id asc limit 1")->row();
if($rowd){
$Mark_Text=str_replace("[vod:xlink]",LinkUrl('play','id',$rowd->id,1,'vod'),$Mark_Text);
$Mark_Text=str_replace("[vod:xname]",$rowd->name,$Mark_Text);
$Mark_Text=str_replace("[vod:xid]",$rowd->id,$Mark_Text);
}else{
$Mark_Text=str_replace("[vod:xlink]","#",$Mark_Text);
$Mark_Text=str_replace("[vod:xname]","没有了",$Mark_Text);
$Mark_Text=str_replace("[vod:xid]",0,$Mark_Text);
}
}

//解析播放地址
$Mark_Text=Vod_Playlist($Mark_Text,'play',$id,$row['purl']);
//播放器
$Data_Arr=explode("#mscms#",$row['purl']);
if($zu>=count($Data_Arr)) $zu=0;
$DataList_Arr=explode("\n",$Data_Arr[$zu]);
$Dataurl_Arr=explode('$',$DataList_Arr[$ji]);
$xpurl="";  //下集播放地址
$laiyuan=str_replace("\r","",@$Dataurl_Arr[2]); //来源
$url=$Dataurl_Arr[1];  //地址
if($row['fid']>0){
$rowf=$this->db->query("Select purl from ".CS_SqlPrefix."vod_server where id=".$row['fid']."")->row_array();
if($rowf){
$url=$rowf['purl'].$url;
}
}
$pname=$Dataurl_Arr[0];  //当前集数
$Mark_Text=str_replace("[vod:qurl]",annexlink($url),$Mark_Text);
$Mark_Text=str_replace("[vod:laiy]",$laiyuan,$Mark_Text);
$Mark_Text=str_replace("[vod:jiname]",$pname,$Mark_Text);
if(substr($url,0,11)=='attachment/') $url=annexlink($url);
//手机播放地址
if(substr($url,0,7)=='http://' || substr($url,0,12)=='/attachment/'){
$wapurl=$url;
}else{
$wapurl='http://download.msvod.cc/mp4/'.$laiyuan.'/'.cs_base64_encode($url).'/mscms.mp4';
}
$Mark_Text=str_replace("[vod:wapurl]",$wapurl,$Mark_Text);
if(count($DataList_Arr)>($ji+1)){
$DataNext=$DataList_Arr[($ji+1)];
$DataNextArr=explode('$',$DataNext);
if(count($DataNextArr)==2) $DataNext=$DataNextArr[1];
$xurl=VodPlayUrl('play',$id,$zu,($ji+1));
$Dataurl_Arr2=explode('$',$DataList_Arr[($ji+1)]);
$xpurl=@$Dataurl_Arr2[1];  //下集播放地址
}else{
$DataNext=$DataList_Arr[$ji];
$DataNextArr=explode('$',$DataNext);
if(count($DataNextArr)==2) $DataNext=$DataNextArr[1];			
$xurl='#';
$xpurl='';  //下集播放地址
}
if($ji==0){
$surl='#';
}else{
$surl=VodPlayUrl('play',$id,$zu,($ji-1));
}
$psname='';
for($j=0;$j<count($Data_Arr);$j++){
$jis='';
$Ji_Arr=explode("\n",$Data_Arr[$j]);
for($k=0;$k<count($Ji_Arr);$k++){
$Ly_Arr=explode('$',$Ji_Arr[$k]);
$jis.=$Ly_Arr[0].'$$'.@$Ly_Arr[2].'====';
}
$psname.=substr($jis,0,-4).'#mscms#';
}
$player_arr=str_replace("\r","",substr($psname,0,-7));
if($laiyuan=='xgvod'||$laiyuan=='jjvod'||$laiyuan=='yyxf'||$laiyuan=='bdhd'||$laiyuan=='qvod'){
$xpurl=str_replace("+","__",base64_encode($xpurl));
}else{
$xpurl=escape($xpurl);
}
$player="<script type='text/javascript' src='".hitslink('play/form','vod')."'></script><script type='text/javascript'>var cs_playlink='".VodPlayUrl('play',$id,$zu,$ji,1)."';var cs_did='".$id."';var player_name='".$player_arr."';var cs_pid='".$ji."';var cs_zid='".$zu."';var cs_vodname='".$row['name']." - ".$pname."';var cs_root='".Web_Path."';var cs_width=".CS_Play_sw.";var cs_height=".CS_Play_sh.";var cs_surl='".$surl."';var cs_xurl='".$xurl."';var cs_url='".$url."';var cs_xpurl='".$xpurl."';var cs_laiy='".$laiyuan."';var cs_adloadtime='".CS_Play_AdloadTime."';</script><iframe border=\"0\" name=\"mscms_vodplay\" id=\"mscms_vodplay\" src=\"".Web_Path."packs/vod_player/play.html\" marginwidth=\"0\" framespacing=\"0\" marginheight=\"0\" noresize=\"\" vspale=\"0\" style=\"z-index: 9998;\" frameborder=\"0\" height=\"".(CS_Play_sh+30)."\" scrolling=\"no\" width=\"100%\" allowfullscreen></iframe>";
$Mark_Text=str_replace("[vod:player]",$player,$Mark_Text);
$Mark_Text=str_replace("[vod:surl]",$surl,$Mark_Text);
$Mark_Text=str_replace("[vod:xurl]",$xurl,$Mark_Text);
$Mark_Text=str_replace("[vod:url]",$url,$Mark_Text);
//增加人气
$Mark_Text=hits_js($Mark_Text,hitslink('hits/ids/'.$id,'vod'));
//
$Mark_Text=str_replace("[vod:zhuangtaiai]",$zhuangtaiai,$Mark_Text);
$Mark_Text=str_replace("[vod:lv]",$lv,$Mark_Text);
$Mark_Text=str_replace("[vod:ad]",$ad,$Mark_Text);
$Mark_Text=str_replace("[vod:shuliang]",$shuliang,$Mark_Text);
$Mark_Text=str_replace("[vod:tiaozhuan]",$down,$Mark_Text);
/*
if($down==2&&$downs==0){msg_url('请升级VIP后再来观看吧！',userurl(site_url('user/pay/group')),'ok');}
if($down==3&&$downs==0){msg_url('请登陆后再来观看吧！',userurl(site_url('user/login')),'ok');}*/
echo $Mark_Text;
$this->cache->end(); //由于前面不是直接输出，所以这里需要加入写缓存
}
//判断权限、积分
public function pay($id=0,$zu=0,$ji=0)
{
//判断ID
if($id==0) exit();
//获取数据
$row=$this->CsdjDB->get_row_arr('vod','name,cid,uid,yid,hid,id,vip,level,cion,purl',$id);
if(!$row || $row['yid']>0 || $row['hid']>0){
exit("alert('数据没有审核，或者被删除~!');");
}
if(empty($row['purl'])){
exit("alert('视频播放地址不正确！');");
}
//判断收费
if($row['vip']>0 || $row['level']>0 || $row['cion']>0){
$login=$this->CsdjUser->User_Login(1);
if(!$login) exit("alert('抱歉，该视频需要登录才能观看，请先登录！');");
$rowu=$this->CsdjDB->get_row_arr('user','vip,zid,zutime,level,cion',$_SESSION['mscms__id']);
if($rowu['zutime']<time()){
$this->db->query("update ".CS_SqlPrefix."user set zid=1,zutime=0 where id=".$_SESSION['mscms__id']."");
$rowu['zid']=1;
}
}
//判断会员组观看权限
if($row['vip']>0 && $row['uid']!=$_SESSION['mscms__id'] && $rowu['vip']==0){
if($row['vip']>$rowu['zid']){
exit("alert('抱歉，您所在的会员组不能观看该视频，请先升级！');");
}
}
//判断会员等级观看权限
if($row['level']>0 && $row['uid']!=$_SESSION['mscms__id']){
if($row['level']>$rowu['level']){
exit("alert('抱歉，您等级不够，不能观看该视频！');");
}
}
//判断金币观看
$down=0;
if($row['cion']>0 && $row['uid']!=$_SESSION['mscms__id']){
//判断是否观看过
$did=$id.'-'.$zu.'-'.$ji;
$rowd=$this->db->query("SELECT id,addtime FROM ".CS_SqlPrefix."vod_look where did='".$did."' and uid='".$_SESSION['mscms__id']."' and sid=0")->row_array();
if($rowd){
$down=1; //数据已经存在
$downtime=User_Downtime*3600+$rowd['addtime'];
if($downtime>time()){
$down=2; //在多少时间内不重复扣币
}
}
//判断会员组观看权限
$rowz=$this->db->query("SELECT id,did FROM ".CS_SqlPrefix."userzu where id='".$rowu['zid']."'")->row_array();
if($rowz && $rowz['did']==1){ //有免费观看权限
$down=2; //该会员观看不收费
}
if($down<2){ //判断扣币
if($row['cion']>$rowu['cion']){
exit("alert('这部视频观看每集需要".$row['cion']."个金币，您的当前金币不够，请先充值！');");
}else{
//扣币
$edit['cion']=$rowu['cion']-$row['cion'];
$this->CsdjDB->get_update('user',$_SESSION['mscms__id'],$edit);
//写入消费记录
$add2['title']='观看视频《'.$row['name'].'》';
$add2['uid']=$_SESSION['mscms__id'];
$add2['nums']=$row['cion'];
$add2['ip']=getip();
$add2['dir']='vod';
$add2['addtime']=time();
$this->CsdjDB->get_insert('spend',$add2);
//判断分成
if(User_DownFun==1 && $row['uid']>0){
//分成比例
$bi=(User_Downcion<10)?'0.0'.User_Downcion:'0.'.User_Downcion;
$scion= intval($row['cion'] * $bi);
if($scion>0){
$this->db->query("update ".CS_SqlPrefix."user set cion=cion+".$scion." where id=".$row['uid']."");
//写入分成记录
$add3['title']='视频《'.$row['name'].'》';
$add3['uid']=$row['uid'];
$add3['dir']='vod';
$add3['nums']=$scion;
$add3['ip']=getip();
$add3['addtime']=time();
$this->CsdjDB->get_insert('income',$add3);
}
}
}
}
//增加观看记录
if($down==0){
$add['name']=$row['name'];
$add['cid']=$row['cid'];
$add['sid']=0;
$add['did']=$did;
$add['uid']=$_SESSION['mscms__id'];
$add['cion']=$row['cion'];
$add['addtime']=time();
$this->CsdjDB->get_insert('vod_look',$add);
}
}
$xpurl="";  //下集播放地址
$Data_Arr=explode("#mscms#",$row['purl']);
if($zu>=count($Data_Arr)) $zu=0;
$DataList_Arr=explode("\n",$Data_Arr[$zu]);
$Dataurl_Arr=explode('$',$DataList_Arr[$ji]);
$laiyuan=$Dataurl_Arr[2]; //来源
$url=$Dataurl_Arr[1];  //地址
if($row['fid']>0){
$rowf=$this->db->query("Select purl from ".CS_SqlPrefix."vod_server where id=".$row['fid']."")->row_array();
if($rowf){
$url=$rowf['purl'].$url;
}
}
if(substr($url,0,11)=='attachment/') $url=annexlink($url);
if(count($DataList_Arr)>($ji+1)){
$Dataurl_Arr2=explode('$',$DataList_Arr[($ji+1)]);
$xpurl=@$Dataurl_Arr2[1];  //下集播放地址
}else{
$xpurl='';  //下集播放地址
}
if($laiyuan=='xgvod'||$laiyuan=='jjvod'||$laiyuan=='yyxf'||$laiyuan=='bdhd'||$laiyuan=='qvod'){
$xpurl=str_replace("+","__",base64_encode($xpurl));
$url=str_replace("+","__",base64_encode($url));
}else{
$xpurl=escape($xpurl);
$url=escape($url);
}
//手机播放地址
if(substr($url,0,7)=='http://' || substr($url,0,12)=='/attachment/'){
$url=$url;
}else{
$url='http://download.msvod.cc/mp4/'.$laiyuan.'/'.cs_base64_encode($url).'/mscms.mp4';
}
echo "var cs_url='".$url."';var cs_xpurl='".$xpurl."';";
}
//播放器配置
public function form()
{
$str='var mscms_vod_player={};';
require_once APPPATH.'config/player.php';
$player=$player_config;
for ($i=0; $i<count($player); $i++) {
$str.="mscms_vod_player['".$player[$i]['form']."']='".$player[$i]['name']."';";
}
echo $str;
}
//播放地址
public function playurl($id=0,$zu=0,$ji=0)
{          
@header("Expires: Mon, 26 Jul 1997 05:00:00 GMT"); 
@header("Cache-Control: no-cache, must-revalidate"); 
@header("Pragma: no-cache");
$this->load->library('user_agent');
if(!$this->agent->is_referral()) show_error(L('dance_01'),404,Web_Name.L('dance_02'));
//判断ID
if($id==0) exit();
//获取数据
$row=$this->CsdjDB->get_row_arr('vod','*',$id);
$Data_Arr=explode("#mscms#",$row['purl']);
if($zu>=count($Data_Arr)) $zu=0;
$DataList_Arr=explode("\n",$Data_Arr[$zu]);
$Dataurl_Arr=explode('$',$DataList_Arr[$ji]);
$laiyuan=$Dataurl_Arr[2]; //来源
$url=$Dataurl_Arr[1];  //地址
if($row['fid']>0){
$rowf=$this->db->query("Select * from ".CS_SqlPrefix."vod_server where id=".$row['fid']."")->row_array();
if($rowf){
$url=$rowf['purl'].$url;
}
}
if(substr($url,0,11)=='attachment/') $url=annexlink($url);
//手机播放地址
if(substr($url,0,7)=='http://' || substr($url,0,12)=='/attachment/'){
$url=$url;
}else{
$url='http://download.msvod.cc/mp4/'.$laiyuan.'/'.cs_base64_encode($url).'/mscms.mp4';
}
$packer = new JavaScriptPacker("var playurl='".$url."';", "Normal", true, false);
$packed = $packer->pack();
echo $packed;
}
}
class JavaScriptPacker {
// constants
const IGNORE = '$1';
// validate parameters
private $_script = '';
private $_encoding = 62;
private $_fastDecode = true;
private $_specialChars = false;
private $LITERAL_ENCODING = array(
'None' => 0,
'Numeric' => 10,
'Normal' => 62,
'High ASCII' => 95
);
public function __construct($_script, $_encoding = 62, $_fastDecode = true, $_specialChars = false)
{
$this->_script = $_script . "\n";
if (array_key_exists($_encoding, $this->LITERAL_ENCODING))
$_encoding = $this->LITERAL_ENCODING[$_encoding];
$this->_encoding = min((int)$_encoding, 95);
$this->_fastDecode = $_fastDecode;	
$this->_specialChars = $_specialChars;
}
public function pack() {
$this->_addParser('_basicCompression');
if ($this->_specialChars)
$this->_addParser('_encodeSpecialChars');
if ($this->_encoding)
$this->_addParser('_encodeKeywords');
// go!
return $this->_pack($this->_script);
}
// apply all parsing routines
private function _pack($script) {
for ($i = 0; isset($this->_parsers[$i]); $i++) {
$script = call_user_func(array(&$this,$this->_parsers[$i]), $script);
}
return $script;
}
// keep a list of parsing functions, they'll be executed all at once
private $_parsers = array();
private function _addParser($parser) {
$this->_parsers[] = $parser;
}
// zero encoding - just removal of white space and comments
private function _basicCompression($script) {
$parser = new ParseMaster();
// make safe
$parser->escapeChar = '\\';
// protect strings
$parser->add('/\'[^\'\\n\\r]*\'/', self::IGNORE);
$parser->add('/"[^"\\n\\r]*"/', self::IGNORE);
// remove comments
$parser->add('/\\/\\/[^\\n\\r]*[\\n\\r]/', ' ');
$parser->add('/\\/\\*[^*]*\\*+([^\\/][^*]*\\*+)*\\//', ' ');
// protect regular expressions
$parser->add('/\\s+(\\/[^\\/\\n\\r\\*][^\\/\\n\\r]*\\/g?i?)/', '$2'); // IGNORE
$parser->add('/[^\\w\\x24\\/\'"*)\\?:]\\/[^\\/\\n\\r\\*][^\\/\\n\\r]*\\/g?i?/', self::IGNORE);
// remove: ;;; doSomething();
if ($this->_specialChars) $parser->add('/;;;[^\\n\\r]+[\\n\\r]/');
// remove redundant semi-colons
$parser->add('/\\(;;\\)/', self::IGNORE); // protect for (;;) loops
$parser->add('/;+\\s*([};])/', '$2');
// apply the above
$script = $parser->exec($script);
// remove white-space
$parser->add('/(\\b|\\x24)\\s+(\\b|\\x24)/', '$2 $3');
$parser->add('/([+\\-])\\s+([+\\-])/', '$2 $3');
$parser->add('/\\s+/', '');
// done
return $parser->exec($script);
}
private function _encodeSpecialChars($script) {
$parser = new ParseMaster();
// replace: $name -> n, $$name -> na
$parser->add('/((\\x24+)([a-zA-Z$_]+))(\\d*)/',
array('fn' => '_replace_name')
);
// replace: _name -> _0, double-underscore (__name) is ignored
$regexp = '/\\b_[A-Za-z\\d]\\w*/';
// build the word list
$keywords = $this->_analyze($script, $regexp, '_encodePrivate');
// quick ref
$encoded = $keywords['encoded'];
$parser->add($regexp,
array(
'fn' => '_replace_encoded',
'data' => $encoded
)
);
return $parser->exec($script);
}
private function _encodeKeywords($script) {
// escape high-ascii values already in the script (i.e. in strings)
if ($this->_encoding > 62)
$script = $this->_escape95($script);
// create the parser
$parser = new ParseMaster();
$encode = $this->_getEncoder($this->_encoding);
// for high-ascii, don't encode single character low-ascii
$regexp = ($this->_encoding > 62) ? '/\\w\\w+/' : '/\\w+/';
// build the word list
$keywords = $this->_analyze($script, $regexp, $encode);
$encoded = $keywords['encoded'];
// encode
$parser->add($regexp,
array(
'fn' => '_replace_encoded',
'data' => $encoded
)
);
if (empty($script)) return $script;
else {
//$res = $parser->exec($script);
//$res = $this->_bootStrap($res, $keywords);
//return $res;
return $this->_bootStrap($parser->exec($script), $keywords);
}
}
private function _analyze($script, $regexp, $encode) {
// analyse
// retreive all words in the script
$all = array();
preg_match_all($regexp, $script, $all);
$_sorted = array(); // list of words sorted by frequency
$_encoded = array(); // dictionary of word->encoding
$_protected = array(); // instances of "protected" words
$all = $all[0]; // simulate the javascript comportement of global match
if (!empty($all)) {
$unsorted = array(); // same list, not sorted
$protected = array(); // "protected" words (dictionary of word->"word")
$value = array(); // dictionary of charCode->encoding (eg. 256->ff)
$this->_count = array(); // word->count
$i = count($all); $j = 0; //$word = null;
// count the occurrences - used for sorting later
do {
--$i;
$word = '$' . $all[$i];
if (!isset($this->_count[$word])) {
$this->_count[$word] = 0;
$unsorted[$j] = $word;
// make a dictionary of all of the protected words in this script
//  these are words that might be mistaken for encoding
//if (is_string($encode) && method_exists($this, $encode))
$values[$j] = call_user_func(array(&$this, $encode), $j);
$protected['$' . $values[$j]] = $j++;
}
// increment the word counter
$this->_count[$word]++;
} while ($i > 0);
// prepare to sort the word list, first we must protect
//  words that are also used as codes. we assign them a code
//  equivalent to the word itself.
// e.g. if "do" falls within our encoding range
//      then we store keywords["do"] = "do";
// this avoids problems when decoding
$i = count($unsorted);
do {
$word = $unsorted[--$i];
if (isset($protected[$word]) /*!= null*/) {
$_sorted[$protected[$word]] = substr($word, 1);
$_protected[$protected[$word]] = true;
$this->_count[$word] = 0;
}
} while ($i);
// sort the words by frequency
// Note: the javascript and php version of sort can be different :
// in php manual, usort :
// " If two members compare as equal,
// their order in the sorted array is undefined."
// so the final packed script is different of the Dean's javascript version
// but equivalent.
// the ECMAscript standard does not guarantee this behaviour,
// and thus not all browsers (e.g. Mozilla versions dating back to at
// least 2003) respect this. 
usort($unsorted, array(&$this, '_sortWords'));
$j = 0;
// because there are "protected" words in the list
//  we must add the sorted words around them
do {
if (!isset($_sorted[$i]))
$_sorted[$i] = substr($unsorted[$j++], 1);
$_encoded[$_sorted[$i]] = $values[$i];
} while (++$i < count($unsorted));
}
return array(
'sorted'  => $_sorted,
'encoded' => $_encoded,
'protected' => $_protected);
}
private $_count = array();
private function _sortWords($match1, $match2) {
return $this->_count[$match2] - $this->_count[$match1];
}
// build the boot function used for loading and decoding
private function _bootStrap($packed, $keywords) {
$ENCODE = $this->_safeRegExp('$encode\\($count\\)');
// $packed: the packed script
$packed = "'" . $this->_escape($packed) . "'";
// $ascii: base for encoding
$ascii = min(count($keywords['sorted']), $this->_encoding);
if ($ascii == 0) $ascii = 1;
// $count: number of words contained in the script
$count = count($keywords['sorted']);
// $keywords: list of words contained in the script
foreach ($keywords['protected'] as $i=>$value) {
$keywords['sorted'][$i] = '';
}
// convert from a string to an array
ksort($keywords['sorted']);
$keywords = "'" . implode('|',$keywords['sorted']) . "'.split('|')";
$encode = ($this->_encoding > 62) ? '_encode95' : $this->_getEncoder($ascii);
$encode = $this->_getJSFunction($encode);
$encode = preg_replace('/_encoding/','$ascii', $encode);
$encode = preg_replace('/arguments\\.callee/','$encode', $encode);
$inline = '\\$count' . ($ascii > 10 ? '.toString(\\$ascii)' : '');
// $decode: code snippet to speed up decoding
if ($this->_fastDecode) {
// create the decoder
$decode = $this->_getJSFunction('_decodeBody');
if ($this->_encoding > 62)
$decode = preg_replace('/\\\\w/', '[\\xa1-\\xff]', $decode);
// perform the encoding inline for lower ascii values
elseif ($ascii < 36)
$decode = preg_replace($ENCODE, $inline, $decode);
// special case: when $count==0 there are no keywords. I want to keep
//  the basic shape of the unpacking funcion so i'll frig the code...
if ($count == 0)
$decode = preg_replace($this->_safeRegExp('($count)\\s*=\\s*1'), '$1=0', $decode, 1);
}
// boot function
$unpack = $this->_getJSFunction('_unpack');
if ($this->_fastDecode) {
// insert the decoder
$this->buffer = $decode;
$unpack = preg_replace_callback('/\\{/', array(&$this, '_insertFastDecode'), $unpack, 1);
}
$unpack = preg_replace('/"/', "'", $unpack);
if ($this->_encoding > 62) { // high-ascii
// get rid of the word-boundaries for regexp matches
$unpack = preg_replace('/\'\\\\\\\\b\'\s*\\+|\\+\s*\'\\\\\\\\b\'/', '', $unpack);
}
if ($ascii > 36 || $this->_encoding > 62 || $this->_fastDecode) {
// insert the encode function
$this->buffer = $encode;
$unpack = preg_replace_callback('/\\{/', array(&$this, '_insertFastEncode'), $unpack, 1);
} else {
// perform the encoding inline
$unpack = preg_replace($ENCODE, $inline, $unpack);
}
// pack the boot function too
$unpackPacker = new JavaScriptPacker($unpack, 0, false, true);
$unpack = $unpackPacker->pack();
// arguments
$params = array($packed, $ascii, $count, $keywords);
if ($this->_fastDecode) {
$params[] = 0;
$params[] = '{}';
}
$params = implode(',', $params);
// the whole thing
return 'eval(' . $unpack . '(' . $params . "))\n";
}
private $buffer;
private function _insertFastDecode($match) {
return '{' . $this->buffer . ';';
}
private function _insertFastEncode($match) {
return '{$encode=' . $this->buffer . ';';
}
// mmm.. ..which one do i need ??
private function _getEncoder($ascii) {
return $ascii > 10 ? $ascii > 36 ? $ascii > 62 ?
'_encode95' : '_encode62' : '_encode36' : '_encode10';
}
// zero encoding
// characters: 0123456789
private function _encode10($charCode) {
return $charCode;
}
// inherent base36 support
// characters: 0123456789abcdefghijklmnopqrstuvwxyz
private function _encode36($charCode) {
return base_convert($charCode, 10, 36);
}
// hitch a ride on base36 and add the upper case alpha characters
// characters: 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
private function _encode62($charCode) {
$res = '';
if ($charCode >= $this->_encoding) {
$res = $this->_encode62((int)($charCode / $this->_encoding));
}
$charCode = $charCode % $this->_encoding;
if ($charCode > 35)
return $res . chr($charCode + 29);
else
return $res . base_convert($charCode, 10, 36);
}
// use high-ascii values
private function _encode95($charCode) {
$res = '';
if ($charCode >= $this->_encoding)
$res = $this->_encode95($charCode / $this->_encoding);
return $res . chr(($charCode % $this->_encoding) + 161);
}
private function _safeRegExp($string) {
return '/'.preg_replace('/\$/', '\\\$', $string).'/';
}
private function _encodePrivate($charCode) {
return "_" . $charCode;
}
// protect characters used by the parser
private function _escape($script) {
return preg_replace('/([\\\\\'])/', '\\\$1', $script);
}
// protect high-ascii characters already in the script
private function _escape95($script) {
return preg_replace_callback(
'/[\\xa1-\\xff]/',
array(&$this, '_escape95Bis'),
$script
);
}
private function _escape95Bis($match) {
return '\x'.((string)dechex(ord($match)));
}
private function _getJSFunction($aName) {
if (defined('self::JSFUNCTION'.$aName))
return constant('self::JSFUNCTION'.$aName);
else 
return '';
}
// JavaScript Functions used.
// Note : In Dean's version, these functions are converted
// with 'String(aFunctionName);'.
// This internal conversion complete the original code, ex :
// 'while (aBool) anAction();' is converted to
// 'while (aBool) { anAction(); }'.
// The JavaScript functions below are corrected.
// unpacking function - this is the boot strap function
//  data extracted from this packing routine is passed to
//  this function when decoded in the target
// NOTE ! : without the ';' final.
const JSFUNCTION_unpack =
'function($packed, $ascii, $count, $keywords, $encode, $decode) {
while ($count--) {
if ($keywords[$count]) {
$packed = $packed.replace(new RegExp(\'\\\\b\' + $encode($count) + \'\\\\b\', \'g\'), $keywords[$count]);
}
}
return $packed;
}';
/*
'function($packed, $ascii, $count, $keywords, $encode, $decode) {
while ($count--)
if ($keywords[$count])
$packed = $packed.replace(new RegExp(\'\\\\b\' + $encode($count) + \'\\\\b\', \'g\'), $keywords[$count]);
return $packed;
}';
*/
// code-snippet inserted into the unpacker to speed up decoding
const JSFUNCTION_decodeBody =
//_decode = function() {
// does the browser support String.replace where the
//  replacement value is a function?
'    if (!\'\'.replace(/^/, String)) {
// decode all the values we need
while ($count--) {
$decode[$encode($count)] = $keywords[$count] || $encode($count);
}
// global replacement function
$keywords = [function ($encoded) {return $decode[$encoded]}];
// generic match
$encode = function () {return \'\\\\w+\'};
// reset the loop counter -  we are now doing a global replace
$count = 1;
}
';
//};
/*
'	if (!\'\'.replace(/^/, String)) {
// decode all the values we need
while ($count--) $decode[$encode($count)] = $keywords[$count] || $encode($count);
// global replacement function
$keywords = [function ($encoded) {return $decode[$encoded]}];
// generic match
$encode = function () {return\'\\\\w+\'};
// reset the loop counter -  we are now doing a global replace
$count = 1;
}';
*/
// zero encoding
// characters: 0123456789
const JSFUNCTION_encode10 =
'function($charCode) {
return $charCode;
}';//;';
// inherent base36 support
// characters: 0123456789abcdefghijklmnopqrstuvwxyz
const JSFUNCTION_encode36 =
'function($charCode) {
return $charCode.toString(36);
}';//;';
// hitch a ride on base36 and add the upper case alpha characters
// characters: 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
const JSFUNCTION_encode62 =
'function($charCode) {
return ($charCode < _encoding ? \'\' : arguments.callee(parseInt($charCode / _encoding))) +
(($charCode = $charCode % _encoding) > 35 ? String.fromCharCode($charCode + 29) : $charCode.toString(36));
}';
// use high-ascii values
const JSFUNCTION_encode95 =
'function($charCode) {
return ($charCode < _encoding ? \'\' : arguments.callee($charCode / _encoding)) +
String.fromCharCode($charCode % _encoding + 161);
}'; 
}
class ParseMaster {
public $ignoreCase = false;
public $escapeChar = '';
// constants
const EXPRESSION = 0;
const REPLACEMENT = 1;
const LENGTH = 2;
// used to determine nesting levels
private $GROUPS = '/\\(/';//g
private $SUB_REPLACE = '/\\$\\d/';
private $INDEXED = '/^\\$\\d+$/';
private $TRIM = '/([\'"])\\1\\.(.*)\\.\\1\\1$/';
private $ESCAPE = '/\\\./';//g
private $QUOTE = '/\'/';
private $DELETED = '/\\x01[^\\x01]*\\x01/';//g
public function add($expression, $replacement = '') {
// count the number of sub-expressions
//  - add one because each pattern is itself a sub-expression
$length = 1 + preg_match_all($this->GROUPS, $this->_internalEscape((string)$expression), $out);
// treat only strings $replacement
if (is_string($replacement)) {
// does the pattern deal with sub-expressions?
if (preg_match($this->SUB_REPLACE, $replacement)) {
// a simple lookup? (e.g. "$2")
if (preg_match($this->INDEXED, $replacement)) {
// store the index (used for fast retrieval of matched strings)
$replacement = (int)(substr($replacement, 1)) - 1;
} else { // a complicated lookup (e.g. "Hello $2 $1")
// build a function to do the lookup
$quote = preg_match($this->QUOTE, $this->_internalEscape($replacement))
? '"' : "'";
$replacement = array(
'fn' => '_backReferences',
'data' => array(
'replacement' => $replacement,
'length' => $length,
'quote' => $quote
)
);
}
}
}
// pass the modified arguments
if (!empty($expression)) $this->_add($expression, $replacement, $length);
else $this->_add('/^$/', $replacement, $length);
}
public function exec($string) {
// execute the global replacement
$this->_escaped = array();
// simulate the _patterns.toSTring of Dean
$regexp = '/';
foreach ($this->_patterns as $reg) {
$regexp .= '(' . substr($reg[self::EXPRESSION], 1, -1) . ')|';
}
$regexp = substr($regexp, 0, -1) . '/';
$regexp .= ($this->ignoreCase) ? 'i' : '';
$string = $this->_escape($string, $this->escapeChar);
$string = preg_replace_callback(
$regexp,
array(
&$this,
'_replacement'
),
$string
);
$string = $this->_unescape($string, $this->escapeChar);
return preg_replace($this->DELETED, '', $string);
}
public function reset() {
// clear the patterns collection so that this object may be re-used
$this->_patterns = array();
}
// private
private $_escaped = array();  // escaped characters
private $_patterns = array(); // patterns stored by index
// create and add a new pattern to the patterns collection
private function _add() {
$arguments = func_get_args();
$this->_patterns[] = $arguments;
}
// this is the global replace function (it's quite complicated)
private function _replacement($arguments) {
if (empty($arguments)) return '';
$i = 1; $j = 0;
// loop through the patterns
while (isset($this->_patterns[$j])) {
$pattern = $this->_patterns[$j++];
// do we have a result?
if (isset($arguments[$i]) && ($arguments[$i] != '')) {
$replacement = $pattern[self::REPLACEMENT];
if (is_array($replacement) && isset($replacement['fn'])) {
if (isset($replacement['data'])) $this->buffer = $replacement['data'];
return call_user_func(array(&$this, $replacement['fn']), $arguments, $i);
} elseif (is_int($replacement)) {
return $arguments[$replacement + $i];
}
$delete = ($this->escapeChar == '' ||
strpos($arguments[$i], $this->escapeChar) === false)
? '' : "\x01" . $arguments[$i] . "\x01";
return $delete . $replacement;
// skip over references to sub-expressions
} else {
$i += $pattern[self::LENGTH];
}
}
}
private function _backReferences($match, $offset) {
$replacement = $this->buffer['replacement'];
$quote = $this->buffer['quote'];
$i = $this->buffer['length'];
while ($i) {
$replacement = str_replace('$'.$i--, $match[$offset + $i], $replacement);
}
return $replacement;
}
private function _replace_name($match, $offset){
$length = strlen($match[$offset + 2]);
$start = $length - max($length - strlen($match[$offset + 3]), 0);
return substr($match[$offset + 1], $start, $length) . $match[$offset + 4];
}
private function _replace_encoded($match, $offset) {
return $this->buffer[$match[$offset]];
}
// php : we cannot pass additional data to preg_replace_callback,
// and we cannot use &$this in create_function, so let's go to lower level
private $buffer;
// encode escaped characters
private function _escape($string, $escapeChar) {
if ($escapeChar) {
$this->buffer = $escapeChar;
return preg_replace_callback(
'/\\' . $escapeChar . '(.)' .'/',
array(&$this, '_escapeBis'),
$string
);
} else {
return $string;
}
}
private function _escapeBis($match) {
$this->_escaped[] = $match[1];
return $this->buffer;
}
// decode escaped characters
private function _unescape($string, $escapeChar) {
if ($escapeChar) {
$regexp = '/'.'\\'.$escapeChar.'/';
$this->buffer = array('escapeChar'=> $escapeChar, 'i' => 0);
return preg_replace_callback
(
$regexp,
array(&$this, '_unescapeBis'),
$string
);
} else {
return $string;
}
}
private function _unescapeBis() {
if (isset($this->_escaped[$this->buffer['i']])
&& $this->_escaped[$this->buffer['i']] != '')
{
$temp = $this->_escaped[$this->buffer['i']];
} else {
$temp = '';
}
$this->buffer['i']++;
return $this->buffer['escapeChar'] . $temp;
}
private function _internalEscape($string) {
return preg_replace($this->ESCAPE, '', $string);
}
}
