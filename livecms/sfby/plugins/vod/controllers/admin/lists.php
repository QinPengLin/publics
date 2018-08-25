<?php
// 本源码由吾爱源码 免费破解 bbs.52codes.net
?>
<?php
if ( !defined('IS_ADMIN')) exit('No direct script access allowed');
class Lists extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->load->helper('vod');
$this->load->model('CsdjAdmin');
$this->CsdjAdmin->Admin_Login();
}
public function index()
{
$sql_string = "SELECT * FROM ".CS_SqlPrefix."vod_list where fid=0 order by xid asc";
$query = $this->db->query($sql_string);
$data['vod_list'] = $query->result();
$this->load->view('vod_list.html',$data);
}
public function init()
{
$ac  = $this->input->get_post('ac',true);
$id   = intval($this->input->get_post('id'));
$sid  = intval($this->input->get_post('sid'));
if($ac=='zt'){
$edit['yid']=$sid;
$str=($sid==0)?'<a title="点击隐藏" href="javascript:get_cmd(\''.site_url('vod/admin/lists/init').'?sid=1\',\'zt\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/ok.gif" /></a>':'<a title="点击显示" href="javascript:get_cmd(\''.site_url('vod/admin/lists/init').'?sid=0\',\'zt\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/no.gif" /></a>';
}
$this->CsdjDB->get_update('vod_list',$id,$edit);
die($str);
}
public function plsave()
{
$ids=$this->input->post('id',TRUE);
if(empty($ids)){
admin_msg('请选择要操作的数据~!','javascript:history.back();','no');
}
foreach ($ids as $id) {
$data['name']=$this->input->post('name_'.$id,TRUE);
$data['bname']=$this->input->post('bname_'.$id,TRUE);
$data['skins']=$this->input->post('skins_'.$id,TRUE);
$data['skins2']=$this->input->post('skins2_'.$id,TRUE);
$data['skins3']=$this->input->post('skins3_'.$id,TRUE);
$data['xid']=intval($this->input->post('xid_'.$id,TRUE));
$this->CsdjDB->get_update('vod_list',$id,$data);
}
admin_msg('恭喜您，操作成功~!',site_url('vod/admin/lists'),'ok');
}
public function zhuan()
{
$ids = $this->input->post('id',TRUE);
$cid = intval($this->input->get_post('cid'));
if(empty($ids)){
admin_msg('请选择要操作的数据~!','javascript:history.back();','no');
}
if($cid==0){
admin_msg('请选择目标分类~!','javascript:history.back();','no');
}
$ids=implode(',',$ids);
$this->db->query("update ".CS_SqlPrefix."vod set cid=".$cid." where cid in (".$ids.")");
admin_msg('恭喜您，操作成功~!',site_url('vod/admin/lists'),'ok');
}
public function edit()
{
$id   = intval($this->input->get('id'));
$fid  = intval($this->input->get('fid'));
if($id==0){
$data['id']=0;
$data['fid']=$fid;
$data['yid']=0;
$data['xid']=0;
$data['name']='';
$data['bname']='';
$data['skins']='list.html';
$data['skins2']='show.html';
$data['skins3']='play.html';
$data['title']='';
$data['keywords']='';
$data['description']='';
}else{
$row=$this->db->query("SELECT * FROM ".CS_SqlPrefix."vod_list where id=".$id."")->row();
if(!$row) admin_msg('该条记录不存在~!','javascript:history.back();','no');
$data['id']=$row->id;
$data['fid']=$row->fid;
$data['yid']=$row->yid;
$data['xid']=$row->xid;
$data['name']=$row->name;
$data['bname']=$row->bname;
$data['skins']=$row->skins;
$data['skins2']=$row->skins2;
$data['skins3']=$row->skins3;
$data['title']=$row->title;
$data['keywords']=$row->keywords;
$data['description']=$row->description;
}
$this->load->view('list_edit.html',$data);
}
public function save()
{
$id   = intval($this->input->post('id'));
$data['yid']=intval($this->input->post('yid'));
$data['fid']=intval($this->input->post('fid'));
$data['xid']=intval($this->input->post('xid'));
$data['name']=$this->input->post('name',true);
$data['bname']=$this->input->post('bname',true);
$data['skins']=$this->input->post('skins',true);
$data['skins2']=$this->input->post('skins2',true);
$data['skins3']=$this->input->post('skins3',true);
$data['title']=$this->input->post('title',true);
$data['keywords']=$this->input->post('keywords',true);
$data['description']=$this->input->post('description',true);
if($id==0){
$this->CsdjDB->get_insert('vod_list',$data);
}else{
$this->CsdjDB->get_update('vod_list',$id,$data);
}
admin_msg('恭喜您，操作成功~!',site_url('vod/admin/lists'),'ok');
}
public function del()
{
$ids = $this->input->get_post('id');
if(empty($ids)) admin_msg('请选择要删除的数据~!','javascript:history.back();','no');
if(is_array($ids)){
$idss=implode(',',$ids);
}else{
$idss=$ids;
}
$this->CsdjDB->get_del('vod_list',$ids,'fid');
$this->CsdjDB->get_del('vod_list',$ids);
admin_msg('恭喜您，删除成功~!','javascript:history.back();','ok');
}
}
?>