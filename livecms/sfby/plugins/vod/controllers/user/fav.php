<?php
// 本源码由吾爱源码 免费破解 bbs.52codes.net
?>
<?php
if ( !defined('MSCMS')) exit('No direct script access allowed');
class Fav extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->load->helper('vod');
$this->load->model('CsdjTpl');
$this->load->model('CsdjUser');
$this->CsdjUser->User_Login();
}
public function index()
{
$cid=intval($this->uri->segment(4));
$page=intval($this->uri->segment(5));
$tpl='fav.html';
$url='fav/index/'.$cid;
$sqlstr = "select {field} from ".CS_SqlPrefix."vod_fav where uid=".$_SESSION['mscms__id'];
if($cid>0){
$cids=getChild($cid);
$sqlstr.= " and cid in(".$cids.")";
}
$row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if(empty($row['nichen'])) $row['nichen']=$row['name'];
$title='我收藏的视频 - 会员中心';
$ids['uid']=$_SESSION['mscms__id'];
$ids['uida']=$_SESSION['mscms__id'];
$Mark_Text=$this->CsdjTpl->user_list($row,$url,$page,$tpl,$title,'',$sqlstr,$ids,true,false);
$Mark_Text=str_replace("[vod:cid]",$cid,$Mark_Text);
$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
$Mark_Text=$this->skins->labelif($Mark_Text);
echo $Mark_Text;
}
public function del()
{
$id=intval($this->uri->segment(4));
$callback = $this->input->get('callback',true);
$row=$this->db->query("select uid from ".CS_SqlPrefix."vod_fav where id=".$id."")->row();
if($row){
if($row->uid!=$_SESSION['mscms__id']){
$err=1002;
if(empty($callback)) msg_url('没有权限操作','javascript:history.back();');
}else{
$this->db->query("DELETE FROM ".CS_SqlPrefix."vod_fav where id=".$id."");
$err=1001;
if(empty($callback)) msg_url('删除成功~!','javascript:history.back();');
}
}else{
$err=1002;
if(empty($callback)) msg_url('数据不存在','javascript:history.back();');
}
echo $callback."({error:".$err."})";
}
}
?>