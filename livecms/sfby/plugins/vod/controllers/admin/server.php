<?php
// 本源码由吾爱源码 免费破解 bbs.52codes.net
?>
<?php
if ( !defined('IS_ADMIN')) exit('No direct script access allowed');
class Server extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->load->helper('vod');
$this->load->model('CsdjAdmin');
$this->CsdjAdmin->Admin_Login();
}
public function index()
{
$sql_string = "SELECT * FROM ".CS_SqlPrefix."vod_server order by id asc";
$query = $this->db->query($sql_string);
$data['vod_server'] = $query->result();
$this->load->view('vod_server.html',$data);
}
public function plsave()
{
$ids=$this->input->post('id',TRUE);
if(empty($ids)){
admin_msg(L('plub_69'),'javascript:history.back();','no');
}
foreach ($ids as $id) {
$data['name']=$this->input->post('name_'.$id,TRUE);
$data['purl']=$this->input->post('purl_'.$id,TRUE);
$data['durl']=$this->input->post('durl_'.$id,TRUE);
$this->CsdjDB->get_update('vod_server',$id,$data);
}
admin_msg(L('plub_70'),site_url('vod/admin/server'),'ok');
}
public function zhuan()
{
$ids = $this->input->get_post('id',TRUE);
$cid = intval($this->input->get_post('cid'));
if(empty($ids)){
admin_msg(L('plub_69'),'javascript:history.back();','no');
}
if($cid==0){
admin_msg(L('plub_71'),'javascript:history.back();','no');
}
$ids=implode(',',$ids);
$this->db->query("update ".CS_SqlPrefix."vod set fid=".$fid." where fid in (".$ids.")");
admin_msg(L('plub_70'),site_url('vod/admin/server'),'ok');
}
public function save()
{
$data['name']=$this->input->get('name',true);
$data['purl']=$this->input->get('purl',true);
$data['durl']=$this->input->get('durl',true);
$this->CsdjDB->get_insert('vod_server',$data);
admin_msg(L('plub_70'),site_url('vod/admin/server'),'ok');
}
public function del()
{
$ids = $this->input->get_post('id');
if(empty($ids)) admin_msg(L('plub_73'),'javascript:history.back();','no');
if(is_array($ids)){
$idss=implode(',',$ids);
}else{
$idss=$ids;
}
$this->CsdjDB->get_del('vod_server',$ids);
admin_msg(L('plub_74'),'javascript:history.back();','ok');
}
}
?>