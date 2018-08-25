<?php if ( ! defined('IS_ADMIN')) exit('No direct script access allowed');
/**
* @Cscms 4.x open source management system
* @copyright 2009-2014 msvod.cc. All rights reserved.
* @Author:Msvod By QQ:487039015
* @Dtime:2014-12-16
*/
class Daili_type extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->load->model('CsdjAdmin');
$this->CsdjAdmin->Admin_Login();
$this->lang->load('admin_user');
}
//�������
public function index()
{
$sql_string = "SELECT * FROM ".CS_SqlPrefix."daili_type order by id asc";
$query = $this->db->query($sql_string); 
$data['daili_type'] = $query->result();
$this->load->view('daili_type.html',$data);
}
//�����޸�
public function plsave()
{
$ids=$this->input->post('id', TRUE); 
if(empty($ids)){
admin_msg(L('plub_69'),'javascript:history.back();','no');
}
foreach ($ids as $id) {
$data['name']=$this->input->post('name_'.$id, TRUE);
$this->CsdjDB->get_update('daili_type',$id,$data);
}
admin_msg('�����ɹ���',site_url('admin/daili_type'),'ok');  //�����ɹ�
}
//��������
public function save()
{
$data['name']=$this->input->get('name',true);
$this->CsdjDB->get_insert('daili_type',$data);
admin_msg('�����ɹ���',site_url('admin/daili_type'),'ok');  //�����ɹ�
}
//ɾ��
public function del()
{
$ids = $this->input->get_post('id');
if(empty($ids)) admin_msg('����ѡ��һ��','javascript:history.back();','no');
if(is_array($ids)){
$idss=implode(',', $ids);
}else{
$idss=$ids;
}
$this->CsdjDB->get_del('daili_type',$ids);
admin_msg('�����ɹ���','javascript:history.back();','ok');  //�����ɹ�
}
//�����б�
public function lists()
{
$sort = $this->input->get_post('sort',true);
$desc = $this->input->get_post('desc',true);
$key  = $this->input->get_post('key',true);
$zid  = intval($this->input->get_post('zid',true));
$page = intval($this->input->get('page'));
if($page==0) $page=1;
if(empty($sort)) $sort="id";
if(empty($desc)) $desc="desc";
$data['page'] = $page;
$data['sort'] = $sort;
$data['desc'] = $desc;
$data['key'] = $key;
$data['zid'] = $zid;
$key=intval($key);
$sql_string = "SELECT * FROM ".CS_SqlPrefix."daili_tixian where 1=1";
if($key>0){
$sql_string.= " and uid=".$key."";
}
if($zid>0){
$sql_string.= " and zid=".$zid."";
}
$sql_string.= " order by ".$sort." ".$desc;
$count_sql = str_replace('*','count(*) as count',$sql_string);
$query = $this->db->query($count_sql)->result_array();
$total = $query[0]['count'];
$base_url = site_url('daili_type/lists')."?key=".$key."&zid=".$zid."&sort=".$sort."&desc=".$desc;
$per_page = 15; 
$totalPages = ceil($total / $per_page); // ��ҳ��
$data['nums'] = $total;
if($total<$per_page){
$per_page=$total;
}
$sql_string.=' limit '. $per_page*($page-1) .','. $per_page;
$query = $this->db->query($sql_string);
$data['tixian'] = $query->result();
$data['pages'] = get_admin_page($base_url,$totalPages,$page,10); //��ȡ��ҳ��
$this->load->view('tixian.html',$data);
}
public function look()
{
$id = $this->input->get_post('id',true);
$row=$this->db->query("SELECT * FROM ".CS_SqlPrefix."daili_tixian where id=".$id."")->row();
$rows=$this->db->query("SELECT * FROM ".CS_SqlPrefix."daili_type where id=".$row->cid."")->row();
echo'���ַ��ࣺ'.$rows->name.'<br>
������Ϣ��'.$row->text.'
';
}
public function edit()
{
$id = $this->input->get_post('id',true);
if(empty($id)) admin_msg('id����Ϊ��','javascript:history.back();','no');
$data['zid']=2;
$this->CsdjDB->get_update('daili_tixian',$id,$data);
admin_msg('�����ɹ���','javascript:history.back();','ok');  //�����ɹ�
}
}
