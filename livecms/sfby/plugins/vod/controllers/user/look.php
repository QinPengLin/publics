<?php
// 本源码由吾爱源码 免费破解 bbs.52codes.net
?>
<?php
if ( !defined('MSCMS')) exit('No direct script access allowed');
class Look extends Mscms_Controller {
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
$tpl='look.html';
$url='look/index/'.$cid;
$sqlstr = "select {field} from ".CS_SqlPrefix."vod_look where uid=".$_SESSION['mscms__id'];
if($cid>0){
$cids=getChild($cid);
$sqlstr.= " and cid in(".$cids.")";
}
$row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if(empty($row['nichen'])) $row['nichen']=$row['name'];
$title='我观看的视频 - 会员中心';
$ids['uid']=$_SESSION['mscms__id'];
$ids['uida']=$_SESSION['mscms__id'];
$Mark_Text=$this->CsdjTpl->user_list($row,$url,$page,$tpl,$title,'',$sqlstr,$ids,true,false);
$Mark_Text=str_replace("[vod:cid]",$cid,$Mark_Text);
$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
$Mark_Text=$this->skins->labelif($Mark_Text);
echo $Mark_Text;
}
}
?>