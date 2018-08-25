<?php
// 本源码由吾爱源码 免费破解 bbs.52codes.net
?>
<?php
if ( !defined('MSCMS')) exit('No direct script access allowed');
class Down extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->load->helper('dance');
$this->load->model('CsdjTpl');
$this->load->model('CsdjUser');
$this->CsdjUser->User_Login();
}
public function index()
{
$cid=intval($this->uri->segment(4));
$page=intval($this->uri->segment(5));
$tpl='down.html';
$url='down/index';
$sqlstr = "select {field} from ".CS_SqlPrefix."dance_down where uid=".$_SESSION['mscms__id'];
if($cid>0){
$sqlstr.= " and cid=".$cid."";
}
$row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
if(empty($row['nichen'])) $row['nichen']=$row['name'];
$title='我下载的电影 - 会员中心';
$ids['uid']=$_SESSION['mscms__id'];
$ids['uida']=$_SESSION['mscms__id'];
$Mark_Text=$this->CsdjTpl->user_list($row,$url,$page,$tpl,$title,'',$sqlstr,$ids,true,false);
$Mark_Text=str_replace("[dance:cid]",$cid,$Mark_Text);
$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
$Mark_Text=$this->skins->labelif($Mark_Text);
echo $Mark_Text;
}
}
?>