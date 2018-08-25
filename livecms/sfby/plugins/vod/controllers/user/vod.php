<?php
// 本源码由吾爱源码 免费破解 bbs.52codes.net
?>
<?php
if ( !defined('MSCMS')) exit('No direct script access allowed');
class Vod extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->load->helper('vod');
$this->load->model('CsdjTpl');
$this->load->model('CsdjUser');
$this->CsdjUser->User_Login();
$this->load->helper('string');
}
public function index()
{
$cid=intval($this->uri->segment(4));
$page=intval($this->uri->segment(5));
$tpl='vod.html';
$url='vod/index/'.$cid;
$sqlstr = "select {field} from ".CS_SqlPrefix."vod where yid=0 and uid=".$_SESSION['mscms__id'];
if($cid>0){
$cids=getChild($cid);
$sqlstr.= " and cid in(".$cids.")";
}
$row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if(empty($row['nichen'])) $row['nichen']=$row['name'];
$title='我的视频 - 会员中心';
$ids['uid']=$_SESSION['mscms__id'];
$ids['uida']=$_SESSION['mscms__id'];
$Mark_Text=$this->CsdjTpl->user_list($row,$url,$page,$tpl,$title,$cid,$sqlstr,$ids,true,false);
$Mark_Text=str_replace("[vod:cid]",$cid,$Mark_Text);
$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
$Mark_Text=$this->skins->labelif($Mark_Text);
echo $Mark_Text;
}
public function verify()
{
$cid=intval($this->uri->segment(4));
$page=intval($this->uri->segment(5));
$tpl='verify.html';
$url='vod/verify/'.$cid;
$sqlstr = "select {field} from ".CS_SqlPrefix."vod where yid=1 and uid=".$_SESSION['mscms__id'];
if($cid>0){
$cids=getChild($cid);
$sqlstr.= " and cid in(".$cids.")";
}
$row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if(empty($row['nichen'])) $row['nichen']=$row['name'];
$title='待审视频 - 会员中心';
$ids['uid']=$_SESSION['mscms__id'];
$ids['uida']=$_SESSION['mscms__id'];
$Mark_Text=$this->CsdjTpl->user_list($row,$url,$page,$tpl,$title,$cid,$sqlstr,$ids,true,false);
$Mark_Text=str_replace("[vod:cid]",$cid,$Mark_Text);
$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
$Mark_Text=$this->skins->labelif($Mark_Text);
echo $Mark_Text;
}
public function add()
{
$tpl='add.html';
$url='vod/add';
$row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if(empty($row['nichen'])) $row['nichen']=$row['name'];
$rowz=$this->CsdjDB->get_row('userzu','aid,sid',$row['zid']);
if(!$rowz ||$rowz->aid==0){
msg_url('您所在会员组没有权限发表视频~!','javascript:history.back();');
}
$title='上传视频 - 会员中心';
$ids['uid']=$_SESSION['mscms__id'];
$ids['uida']=$_SESSION['mscms__id'];
$Mark_Text=$this->CsdjTpl->user_list($row,$url,1,$tpl,$title,'','',$ids,true,false);
$Mark_Text=str_replace("[user:token]",get_token('vod_token'),$Mark_Text);
$Mark_Text=str_replace("[user:vodsave]",spacelink('vod,save','vod'),$Mark_Text);
$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
$Mark_Text=$this->skins->labelif($Mark_Text);
echo $Mark_Text;
}
public function save()
{
$token=$this->input->post('token',TRUE);
$zuid=getzd('user','zid',$_SESSION['mscms__id']);
$rowu=$this->CsdjDB->get_row('userzu','aid,sid',$zuid);
if(!$rowu ||$rowu->aid==0){
msg_url('您所在会员组没有权限发表视频~!','javascript:history.back();');
}
$vod['yid']=($rowu->sid==1)?0:1;
$vod['cion']=intval($this->input->post('cion'));
$vod['dcion']=intval($this->input->post('dcion'));
$vod['text']=remove_xss(str_replace("\r\n","<br>",$_POST['text']));
$vod['pic']=$this->input->post('pic',TRUE,TRUE);
$vod['tags']=$this->input->post('tags',TRUE,TRUE);
$vod['daoyan']=$this->input->post('daoyan',TRUE,TRUE);
$vod['pfen']=$this->input->post('pfen',TRUE,TRUE);
$vod['phits']=$this->input->post('phits',TRUE,TRUE);
$vod['zhuyan']=$this->input->post('zhuyan',TRUE,TRUE);
$vod['yuyan']=$this->input->post('yuyan',TRUE,TRUE);
$vod['diqu']=$this->input->post('diqu',TRUE,TRUE);
$vod['year']=$this->input->post('year',TRUE,TRUE);
$vod['bname']=$this->input->post('bname',TRUE,TRUE);
$vod['info']=$this->input->post('info',TRUE,TRUE);
$vod['uid']=$_SESSION['mscms__id'];
$vod['addtime']=time();
$down=$this->input->post('down',TRUE,TRUE);
$durl=$this->input->post('durl',TRUE,TRUE);
$vod['name']=$this->input->post('name',TRUE,TRUE);
$vod['cid']=intval($this->input->post('cid'));
$play=$this->input->post('play',TRUE,TRUE);
$purl=$this->input->post('purl',TRUE,TRUE);
if($vod['cid']==0) msg_url('请选择视频分类~!','javascript:history.back();');
if(empty($vod['name'])) msg_url('视频名称不能为空~!','javascript:history.back();');
if(empty($play)) msg_url('视频播放来源不能为空~!','javascript:history.back();');
if(empty($purl)) msg_url('视频播放地址不能为空~!','javascript:history.back();');
if($play!='ckplayer'&&$play!='media'&&$play!='swf'){
if(substr($purl,0,7)!='http://') msg_url('视频播放地址不正确~!','javascript:history.back();');
$arr=caiji($purl,1);
$form=$arr['laiy'];
$purl=$arr['url'];
if(empty($vod['pic'])) $vod['pic']=$arr['pic'];
$vod['purl']='Mscms$'.$purl.'$'.$form;
}else{
$vod['purl']='Mscms$'.$purl.'$'.$play;
}
if(!empty($down) &&!empty($durl)){
$vod['durl']='Mscms$'.$durl.'$'.$down;
}
$singer=$this->input->post('singer',TRUE,TRUE);
if(!empty($singer)){
$row=$this->CsdjDB->get_row('singer','id',$singer,'name');
if($row){
$vod['singerid']=$row->id;
}
}
$did=$this->CsdjDB->get_insert('vod',$vod);
if(intval($did)==0){
msg_url('视频发布失败，请稍候再试~!','javascript:history.back();');
}
get_token('vod_token',2);
$dt['dir'] = 'vod';
$dt['uid'] = $_SESSION['mscms__id'];
$dt['did'] = $did;
$dt['yid'] = $vod['yid'];
$dt['title'] = '发布了视频';
$dt['name'] = $vod['name'];
$dt['link'] = linkurl('show','id',$did,1,'vod');
$dt['addtime'] = time();
$this->CsdjDB->get_insert('dt',$dt);
if($vod['yid']==0){
$addhits=getzd('user','addhits',$_SESSION['mscms__id']);
if($addhits<User_Nums_Add){
$this->db->query("update ".CS_SqlPrefix."user set cion=cion+".User_Cion_Add.",jinyan=jinyan+".User_Jinyan_Add.",addhits=addhits+1 where id=".$_SESSION['mscms__id']."");
}
msg_url('恭喜您，视频发布成功~!',spacelink('vod','vod'));
}else{
msg_url('恭喜您，视频发布成功,请等待管理员审核~!',spacelink('vod/verify','vod'));
}
}
}
?>