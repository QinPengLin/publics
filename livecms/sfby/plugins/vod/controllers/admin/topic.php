<?php
// 本源码由吾爱源码 免费破解 bbs.52codes.net
?>
<?php
if ( !defined('IS_ADMIN')) exit('No direct script access allowed');
class Topic extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->load->helper('vod');
$this->load->model('CsdjAdmin');
$this->CsdjAdmin->Admin_Login();
}
public function index()
{
$sort = $this->input->get_post('sort',true);
$desc = $this->input->get_post('desc',true);
$yid  = intval($this->input->get_post('yid'));
$tid = intval($this->input->get_post('tid'));
$key  = $this->input->get_post('key',true);
$page = intval($this->input->get('page'));
if($page==0) $page=1;
$data['page'] = $page;
$data['sort'] = $sort;
$data['yid'] = $yid;
$data['key'] = $key;
$data['tid'] = $tid;
if(empty($sort)) $sort="id";
$sql_string = "SELECT id,name,pic,hits,tid,yid,addtime FROM ".CS_SqlPrefix."vod_topic where 1=1";
if($yid==1){
$sql_string.= " and yid=0";
}
if($yid==2){
$sql_string.= " and yid=1";
}
if(!empty($key)){
$sql_string.= " and name like '%".$key."%'";
}
if($tid>0){
$sql_string.= " and tid=".($tid-1)."";
}
$sql_string.= " order by ".$sort." desc";
$query = $this->db->query($sql_string);
$total = $query->num_rows();
$base_url = site_url('vod/admin/topic')."?yid=".$yid."&key=".$key."&sort=".$sort."&tid=".$tid;
$per_page = 15;
$totalPages = ceil($total / $per_page);
$data['nums'] = $total;
if($total<$per_page){
$per_page=$total;
}
$sql_string.=' limit '.$per_page*($page-1) .','.$per_page;
$query = $this->db->query($sql_string);
$data['topic'] = $query->result();
$data['pages'] = get_admin_page($base_url,$totalPages,$page,10);
$this->load->view('topic.html',$data);
}
public function init()
{
$ac  = $this->input->get_post('ac',true);
$id   = intval($this->input->get_post('id'));
$sid  = intval($this->input->get_post('sid'));
if($ac=='zt'){
$edit['yid']=$sid;
$str=($sid==0)?'<a title="点击锁定" href="javascript:get_cmd(\''.site_url('vod/admin/topic/init').'?sid=1\',\'zt\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/ok.gif" /></a>':'<a title="点击解除锁定" href="javascript:get_cmd(\''.site_url('vod/admin/topic/init').'?sid=0\',\'zt\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/no.gif" /></a>';
}elseif($ac=='tj'){
$edit['tid']=$sid;
$str=($sid==1)?'<a title="点击取消推荐" href="javascript:get_cmd(\''.site_url('vod/admin/topic/init').'?sid=0\',\'tj\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/ok.gif" /></a>':'<a title="点击推荐" href="javascript:get_cmd(\''.site_url('vod/admin/topic/init').'?sid=1\',\'tj\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/no.gif" /></a>';
}
$this->CsdjDB->get_update('vod_topic',$id,$edit);
die($str);
}
public function edit()
{
$id = intval($this->input->get('id'));
if($id==0){
$data['id']=0;
$data['yid']=0;
$data['tid']=0;
$data['name']='';
$data['pic']='';
$data['toppic']='';
$data['neir']='';
$data['bname']='';
$data['hits']=0;
$data['yhits']=0;
$data['zhits']=0;
$data['rhits']=0;
$data['skins']='topic-show.html';
$data['title']='';
$data['keywords']='';
$data['description']='';
}else{
$row=$this->db->query("SELECT * FROM ".CS_SqlPrefix."vod_topic where id=".$id."")->row();
if(!$row) admin_msg('该条记录不存在~!','javascript:history.back();','no');
$data['id']=$row->id;
$data['yid']=$row->yid;
$data['tid']=$row->tid;
$data['name']=$row->name;
$data['pic']=$row->pic;
$data['toppic']=$row->toppic;
$data['neir']=$row->neir;
$data['bname']=$row->bname;
$data['hits']=$row->hits;
$data['yhits']=$row->yhits;
$data['zhits']=$row->zhits;
$data['rhits']=$row->rhits;
$data['skins']=$row->skins;
$data['title']=$row->title;
$data['keywords']=$row->keywords;
$data['description']=$row->description;
}
$this->load->view('topic_edit.html',$data);
}
public function save()
{
$id   = intval($this->input->post('id'));
$addtime = $this->input->post('addtime',true);
$data['yid']=intval($this->input->post('yid'));
$data['tid']=intval($this->input->post('tid'));
$data['name']=$this->input->post('name',true);
$data['pic']=$this->input->post('pic',true);
$data['toppic']=$this->input->post('toppic',true);
$data['neir']=remove_xss($this->input->post('neir'));
$data['bname']=$this->input->post('bname',true);
$data['hits']=intval($this->input->post('hits'));
$data['yhits']=intval($this->input->post('yhits'));
$data['zhits']=intval($this->input->post('zhits'));
$data['rhits']=intval($this->input->post('rhits'));
$data['skins']=$this->input->post('skins',true);
$data['title']=$this->input->post('title',true);
$data['keywords']=$this->input->post('keywords',true);
$data['description']=$this->input->post('description',true);
if($addtime=='ok') $data['addtime']=time();
if(empty($data['name'])){
admin_msg('抱歉，专题名称不能为空~!','javascript:history.back();','no');
}
if($id==0){
$this->CsdjDB->get_insert('vod_topic',$data);
}else{
$this->CsdjDB->get_update('vod_topic',$id,$data);
}
admin_msg('恭喜您，操作成功~!',site_url('vod/admin/topic'),'ok');
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
$result=$this->db->query("SELECT pic,toppic FROM ".CS_SqlPrefix."vod_topic where id in(".$idss.")")->result();
$this->load->library('csup');
foreach ($result as $row) {
if(!empty($row->pic)){
$this->csup->del($row->pic,'vodtopic');
}
if(!empty($row->toppic)){
$this->csup->del($row->toppic,'vodtopic');
}
}
$this->CsdjDB->get_del('vod_topic',$ids);
admin_msg('恭喜您，删除成功~!','javascript:history.back();','ok');
}
}
?>