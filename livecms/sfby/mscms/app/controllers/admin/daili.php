<?php 
/**
* @Mscms 4.x open source management system
* @copyright 2008-2015 msvod.cc. All rights reserved.
* @Author:Msvod QQ:487039015
* @Dtime:2014-11-19
*/
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Daili extends Mscms_Controller {
function __construct(){
parent::__construct();
$this->load->model('CsdjAdmin');
$this->CsdjAdmin->Admin_Login();
$this->lang->load('admin_user');
}
//会员列表
public function index()
{
$sort = $this->input->get_post('sort',true);
$desc = $this->input->get_post('desc',true);
$key  = $this->input->get_post('key',true);
$page = intval($this->input->get('page'));
$djs=0;
if($page==0) $page=1;
if(empty($sort)) $sort="id";
if(empty($desc)) $desc="desc";
$data['page'] = $page;
$data['sort'] = $sort;
$data['desc'] = $desc;
$data['key'] = $key;
if(intval($key)==0) $djs=1000;
$sql_string = "SELECT id,name,logo,email,vip,zid,sid,tid,rzid,regip,addtime,lognum,nichen,rmb,cion,dlid FROM ".CS_SqlPrefix."user where yid=0";
if($key>0){
$sql_string.= " and dlid=".$key."";
}else{
$sql_string.= " and dlid>0";
}
$sql_string.= " order by ".$sort." ".$desc;
$count_sql = str_replace('id,name,logo,email,vip,zid,sid,tid,rzid,regip,addtime,lognum,nichen,rmb,cion','count(*) as count',$sql_string);
$query = $this->db->query($count_sql)->result_array();
$total = $query[0]['count'];
$base_url = site_url('daili')."?key=".$key."&sort=".$sort."&desc=".$desc;
$per_page = 15; 
$totalPages = ceil($total / $per_page); // 总页数
$data['nums'] = $total;
if($total<$per_page){
$per_page=$total;
}
$sql_string.=' limit '. $per_page*($page-1) .','. $per_page;
$query = $this->db->query($sql_string);
$data['user'] = $query->result();
$data['pages'] = get_admin_page($base_url,$totalPages,$page,10); //获取分页类
$this->load->view('daili.html',$data);
}
//会员列表
public function daili_index()
{
$sort = $this->input->get_post('sort',true);
$desc = $this->input->get_post('desc',true);
$key  = $this->input->get_post('key',true);
$page = intval($this->input->get('page'));
$dlrz = intval($this->input->get_post('dlrz',true));
if($page==0) $page=1;
if(empty($sort)) $sort="id";
if(empty($desc)) $desc="desc";
$data['page'] = $page;
$data['sort'] = $sort;
$data['desc'] = $desc;
$data['key'] = $key;
$data['dlrz'] = $dlrz;
$sql_string = "SELECT id,name,logo,email,vip,zid,sid,tid,rzid,regip,addtime,lognum,nichen,rmb,cion,dlcion FROM ".CS_SqlPrefix."user where yid=0";
if($dlrz==0){
$sql_string.= " and dlrz in (1,2)";
}else{
$sql_string.= " and dlrz='".$dlrz."'";
}
if(!empty($key)){
$sql_string.= " and ".$zd."='".$key."'";
}
$sql_string.= " order by ".$sort." ".$desc;
$count_sql = str_replace('id,name,logo,email,vip,zid,sid,tid,rzid,regip,addtime,lognum,nichen,rmb,cion','count(*) as count',$sql_string);
$query = $this->db->query($count_sql)->result_array();
$total = $query[0]['count'];
$base_url = site_url('daili_index')."?key=".$key."&dlrz=".$dlrz."&sort=".$sort."&desc=".$desc;
$per_page = 15; 
$totalPages = ceil($total / $per_page); // 总页数
$data['nums'] = $total;
if($total<$per_page){
$per_page=$total;
}
$sql_string.=' limit '. $per_page*($page-1) .','. $per_page;
$query = $this->db->query($sql_string);
$data['user'] = $query->result();
$data['pages'] = get_admin_page($base_url,$totalPages,$page,10); //获取分页类
$this->load->view('daili_index.html',$data);
}
//待审核会员列表
public function verify()
{
$sort = $this->input->get_post('sort',true);
$desc = $this->input->get_post('desc',true);
$page = intval($this->input->get('page'));
if($page==0) $page=1;
if(empty($sort)) $sort="id";
if(empty($desc)) $desc="desc";
$data['page'] = $page;
$data['sort'] = $sort;
$data['desc'] = $desc;
$sql_string = "SELECT id,name,email,regip,addtime FROM ".CS_SqlPrefix."user where dlrz=1  order by ".$sort." ".$desc;
$query = $this->db->query($sql_string); 
$total = $query->num_rows();
$base_url = site_url('daili/verify')."?sort=".$sort."&desc=".$desc;
$per_page = 15; 
$totalPages = ceil($total / $per_page); // 总页数
$data['nums'] = $total;
if($total<$per_page){
$per_page=$total;
}
$sql_string.=' limit '. $per_page*($page-1) .','. $per_page;
$query = $this->db->query($sql_string);
$data['user'] = $query->result();
$data['pages'] = get_admin_page($base_url,$totalPages,$page,10); //获取分页类
$this->load->view('daili_verify.html',$data);
}
//会员审核操作
public function verify_save()
{
$id = intval($this->input->get('id'));
$op = $this->input->get('op',true);
$row=$this->db->query("SELECT name,email FROM ".CS_SqlPrefix."user where id=".$id."")->row();
if($op=='ok'){ //通过
$edit['dlrz']=2;
$this->CsdjDB->get_update('user',$id,$edit);
$emailneir=vsprintf(L('plub_01'),array($row->name));
}else{  //拒绝
$edit['dlrz']=0;
$this->CsdjDB->get_update('user',$id,$edit);
$emailneir=vsprintf(L('plub_02'),array($row->name));
}
admin_msg('操作成功','javascript:history.back();');
}
//推荐、认证、锁定操作
public function init()
{
$ac  = $this->input->get_post('ac',true);
$id   = intval($this->input->get_post('id'));
if($ac=='zt'){ //锁定
$sid  = intval($this->input->get_post('sid'));
$edit['sid']=$sid;
$str=($sid==0)?'<a title="'.L('plub_11').'" href="javascript:get_cmd(\''.site_url('user/init').'?sid=1\',\'zt\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/ok.gif" /></a>':'<a title="'.L('plub_12').'" href="javascript:get_cmd(\''.site_url('user/init').'?sid=0\',\'zt\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/no.gif" /></a>';
}elseif($ac=='tj'){  //推荐
$tid  = intval($this->input->get_post('tid'));
$edit['tid']=$tid;
$str=($tid==1)?'<a title="'.L('plub_13').'" href="javascript:get_cmd(\''.site_url('user/init').'?tid=0\',\'tj\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/ok.gif" /></a>':'<a title="'.L('plub_14').'" href="javascript:get_cmd(\''.site_url('user/init').'?tid=1\',\'tj\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/no.gif" /></a>';
}else{  //认证
$rzid  = intval($this->input->get_post('rzid'));
$edit['dlrz']=$rzid;
$str=($rzid==2)?'<a title="'.L('plub_15').'" href="javascript:get_cmd(\''.site_url('daili/init').'?rzid=0\',\'rz\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/ok.gif" /></a>':'<a title="'.L('plub_16').'" href="javascript:get_cmd(\''.site_url('daili/init').'?rzid=2\',\'rz\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/no.gif" /></a>';
}
$this->CsdjDB->get_update('user',$id,$edit);
die($str);
}
//会员新增、修改
public function edit()
{
$id   = intval($this->input->get('id'));
if($id==0){
$data['id']=0;
$data['zid']=0;
$data['tid']=0;
$data['sid']=0;
$data['rzid']=0;
$data['yid']=0;
$data['uid']='';
$data['name']='';
$data['pass']='';
$data['logo']='';
$data['qq']='';
$data['tel']='';
$data['email']='';
$data['nichen']='';
$data['sex']=0;
$data['cion']=0;
$data['rmb']=0.00;
$data['vip']=0;
$data['viptime']=time();
$data['zutime']=time();
$data['qianm']='';
$data['qdts']=0;
$data['qdtime']=0;
$data['level']=0;
$data['jinyan']=0;
$data['hits']=0;
$data['yhits']=0;
$data['zhits']=0;
$data['rhits']=0;
$data['zanhits']=0;
$data['skins']='';
$this->load->helper('string');
$data['code']=random_string('alnum', 6);
}else{
$row=$this->db->query("SELECT * FROM ".CS_SqlPrefix."user where id=".$id."")->row(); 
if(!$row) admin_msg(L('plub_17'),'javascript:history.back();','no');  //记录不存在
$data['id']=$row->id;
$data['zid']=$row->zid;
$data['tid']=$row->tid;
$data['sid']=$row->sid;
$data['rzid']=$row->rzid;
$data['yid']=$row->yid;
$data['uid']=$row->uid;
$data['name']=$row->name;
$data['pass']=$row->pass;
$data['logo']=$row->logo;
$data['qq']=$row->qq;
$data['tel']=$row->tel;
$data['email']=$row->email;
$data['nichen']=$row->nichen;
$data['sex']=$row->sex;
$data['cion']=$row->cion;
$data['rmb']=$row->rmb;
$data['vip']=$row->vip;
$data['viptime']=($row->viptime==0)?time():$row->viptime;
$data['zutime']=($row->zutime==0)?time():$row->zutime;
$data['qianm']=$row->qianm;
$data['qdts']=$row->qdts;
$data['code']=$row->code;
$data['qdtime']=$row->qdtime;
$data['level']=$row->level;
$data['jinyan']=$row->jinyan;
$data['hits']=$row->hits;
$data['yhits']=$row->yhits;
$data['zhits']=$row->zhits;
$data['rhits']=$row->rhits;
$data['zanhits']=$row->zanhits;
$data['skins']=$row->skins;
}
//获取会员空间所有模板
$this->load->helper('directory');
$path=MSCMS.'tpl/home/';
$dir_arr=directory_map($path, 1);
$dirs=array();
if ($dir_arr) {
foreach ($dir_arr as $t) {
if (is_dir($path.$t)) {
$confiles=$path.$t.'/config.php';
if (file_exists($confiles)){
$config=require_once($confiles);
$dirs[] = array(
'name' => $config['name'],
'path' => $config['path'],
);
}
}
}
}
$data['skin'] = $dirs;
$this->load->view('user_edit.html',$data);
}
//会员保存
public function save()
{
$id  = intval($this->input->post('id'));
$data['zid']=intval($this->input->post('zid'));
$data['tid']=intval($this->input->post('tid'));
$data['sid']=intval($this->input->post('sid'));
$data['rzid']=intval($this->input->post('rzid'));
$data['yid']=intval($this->input->post('yid'));
$data['name']=$this->input->post('name',true);
$data['code']=$this->input->post('code',true);
$data['qq']=$this->input->post('qq',true);
$data['tel']=$this->input->post('tel',true);
$data['email']=$this->input->post('email',true);
$data['nichen']=$this->input->post('nichen',true);
$data['sex']=intval($this->input->post('sex'));
$data['cion']=intval($this->input->post('cion'));
$data['rmb']=$this->input->post('rmb',true);
$data['vip']=intval($this->input->post('vip'));
$data['viptime']=strtotime($this->input->post('viptime'));
$data['zutime']=strtotime($this->input->post('zutime'));
$data['qianm']=$this->input->post('qianm',true);
$data['qdts']=intval($this->input->post('qdts'));
$data['level']=intval($this->input->post('level'));
$data['jinyan']=intval($this->input->post('jinyan'));
$data['hits']=intval($this->input->post('hits'));
$data['yhits']=intval($this->input->post('yhits'));
$data['zhits']=intval($this->input->post('zhits'));
$data['rhits']=intval($this->input->post('rhits'));
$data['zanhits']=intval($this->input->post('zanhits'));
$data['skins']=$this->input->post('skins',true);
//修改密码
$pass=$this->input->post('pass',true);
if(!empty($pass)){
$data['pass']=md5(md5($pass).$data['code']);
}
//删除头像
$logo=$this->input->post('logo',true);
if($logo=='ok'){
$data['logo']='';
}
if($data['vip']==0) $data['viptime']=0;
if($data['zid']==1) $data['zutime']=0;
if(empty($data['name'])) admin_msg(L('plub_18'),'javascript:history.back();','no'); 
if($id==0 && empty($data['pass'])) admin_msg(L('plub_19'),'javascript:history.back();','no'); 
if(empty($data['email'])) admin_msg(L('plub_20'),'javascript:history.back();','no'); 
if($id==0){ //新增
$data['addtime']=time();
$row=$this->db->query("SELECT id FROM ".CS_SqlPrefix."user where name='".$data['name']."'")->row(); 
if($row) admin_msg(L('plub_21'),'javascript:history.back();','no');  //用户名已经存在
$this->CsdjDB->get_insert('user',$data);
}else{
$this->CsdjDB->get_update('user',$id,$data);
}
//修改UC密码
if(!empty($pass)){
$data['pass']=md5(md5($pass).$data['code']);
//--------------------------- Ucenter ---------------------------
if(User_Uc_Mode==1){
include MSCMS.'lib/Cs_Ucenter.php';
include MSCMSPATH.'uc_client/client.php';
uc_user_edit($data['name'],'',$pass,'',1);
}
//--------------------------- Ucenter End ---------------------------
}
admin_msg(L('plub_06'),site_url('user'),'ok');  //操作成功
}
//会员删除
public function del()
{
$id = $this->input->get_post('id',true);
if(empty($id)) admin_msg(L('plub_22'),'javascript:history.back();','no');  //数据不完成
//--------------------------- Ucenter ---------------------------
if(User_Uc_Mode==1){
include MSCMS.'lib/Cs_Ucenter.php';
include MSCMSPATH.'uc_client/client.php';
if(is_array($id)){
foreach ($id as $id) {
$ucid = $this->CsdjDB->getzd('user','uid',$id);
if($ucid>0){
uc_user_delete($ucid);//删除UC会员
}
}
}else{
$ucid = $this->CsdjDB->getzd('user','uid',$id);
if($ucid>0){
uc_user_delete($ucid);//删除UC会员
}
}
}
//--------------------------- Ucenter End ---------------------------
$this->CsdjDB->get_del('funco',$id,'uida'); //访客A
$this->CsdjDB->get_del('funco',$id,'uidb'); //访客B
$this->CsdjDB->get_del('fans',$id,'uida'); //粉丝A
$this->CsdjDB->get_del('fans',$id,'uidb'); //粉丝B
$this->CsdjDB->get_del('friend',$id,'uida');  //好友A
$this->CsdjDB->get_del('friend',$id,'uidb');   //好友B
$this->CsdjDB->get_del('gbook',$id,'uida'); //留言A
$this->CsdjDB->get_del('gbook',$id,'uidb'); //留言B
$this->CsdjDB->get_del('msg',$id,'uida'); //消息A
$this->CsdjDB->get_del('msg',$id,'uidb'); //消息B
$this->CsdjDB->get_del('pl',$id,'uid'); //评论
$this->CsdjDB->get_del('blog',$id,'uid'); //说说
$this->CsdjDB->get_del('dt',$id,'uid'); //动态
$this->CsdjDB->get_del('user_log',$id,'uid'); //登录日志
$this->CsdjDB->get_del('web_pay',$id,'uid'); //模板记录
$this->CsdjDB->get_del('pay',$id,'uid'); //充值记录
$this->CsdjDB->get_del('income',$id,'uid'); //收入记录
$this->CsdjDB->get_del('spend',$id,'uid'); //消费记录
$this->CsdjDB->get_del('share',$id,'uid'); //分享记录
$this->CsdjDB->get_del('session',$id,'uid'); //session会话
$this->CsdjDB->get_del('user',$id);
admin_msg(L('plub_06'),site_url('user'),'ok');  //操作成功
}
//会员组新增、修改
public function zu_edit()
{
$id = intval($this->input->get('id'));
if($id==0){
$data['id']=0;
$data['xid']=0;
$data['name']='';
$data['color']='';
$data['pic']='';
$data['info']='';
$data['cion_y']=0;
$data['cion_m']=0;
$data['cion_d']=0;
$data['fid']=0;
$data['aid']=0;
$data['sid']=0;
$data['vid']=0;
$data['mid']=0;
$data['did']=0;
}else{
$row=$this->db->query("SELECT * FROM ".CS_SqlPrefix."userzu where id=".$id."")->row(); 
if(!$row) admin_msg(L('plub_17'),'javascript:history.back();','no');  //记录不存在
$data['id']=$row->id;
$data['xid']=$row->xid;
$data['name']=$row->name;
$data['color']=$row->color;
$data['pic']=$row->pic;
$data['info']=$row->info;
$data['cion_y']=$row->cion_y;
$data['cion_m']=$row->cion_m;
$data['cion_d']=$row->cion_d;
$data['fid']=$row->fid;
$data['aid']=$row->aid;
$data['sid']=$row->sid;
$data['vid']=$row->vid;
$data['mid']=$row->mid;
$data['did']=$row->did;
}
$this->load->view('user_zu_edit.html',$data);
}
//会员组保存
public function zu_save()
{
$id   = intval($this->input->post('id'));
$data['name']=$this->input->post('name',true);
$data['xid']=intval($this->input->post('xid'));
$data['color']=$this->input->post('color',true);
$data['pic']=$this->input->post('pic',true);
$data['info']=$this->input->post('info',true);
$data['cion_y']=intval($this->input->post('cion_y'));
$data['cion_m']=intval($this->input->post('cion_m'));
$data['cion_d']=intval($this->input->post('cion_d'));
$data['fid']=intval($this->input->post('fid'));
$data['aid']=intval($this->input->post('aid'));
$data['sid']=intval($this->input->post('sid'));
$data['vid']=intval($this->input->post('vid'));
$data['mid']=intval($this->input->post('mid'));
$data['did']=intval($this->input->post('did'));
if(empty($data['name'])) admin_msg(L('plub_23'),'javascript:history.back();','no');  //数据不完成
if($id==0){
$this->CsdjDB->get_insert('userzu',$data);
}else{
$this->CsdjDB->get_update('userzu',$id,$data);
}
admin_msg(L('plub_06'),site_url('user/zu'),'ok');  //操作成功
}
//会员组排序
public function zu_sort()
{
$xid = $this->input->post('xid',true);
foreach ($xid as $k=>$v) {
$this->db->query("update ".CS_SqlPrefix."userzu set xid=".$v." where id=".$k."");
}
admin_msg(L('plub_06'),site_url('user/zu'),'ok');  //操作成功
}
//会员组权限操作
public function zu_init()
{
$ac = $this->input->get('ac',true);
$id = intval($this->input->get('id'));
$sid = intval($this->input->get('sid'));
if($ac=='fid'){ 
$edit['fid']=$sid;
$str=($sid==1)?'<a title="'.L('plub_24').'" href="javascript:get_cmd(\''.site_url('user/zu_init').'?sid=0\',\'fid\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/ok.gif" /></a>':'<a title="'.L('plub_24').'" href="javascript:get_cmd(\''.site_url('user/zu_init').'?sid=1\',\'fid\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/no.gif" /></a>';
}elseif($ac=='aid'){
$edit['aid']=$sid;
$str=($sid==1)?'<a title="'.L('plub_24').'" href="javascript:get_cmd(\''.site_url('user/zu_init').'?sid=0\',\'aid\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/ok.gif" /></a>':'<a title="'.L('plub_24').'" href="javascript:get_cmd(\''.site_url('user/zu_init').'?sid=1\',\'aid\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/no.gif" /></a>';
}elseif($ac=='sid'){
$edit['sid']=$sid;
$str=($sid==1)?'<a title="'.L('plub_24').'" href="javascript:get_cmd(\''.site_url('user/zu_init').'?sid=0\',\'sid\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/ok.gif" /></a>':'<a title="'.L('plub_24').'" href="javascript:get_cmd(\''.site_url('user/zu_init').'?sid=1\',\'sid\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/no.gif" /></a>';
}elseif($ac=='vid'){
$edit['vid']=$sid;
$str=($sid==1)?'<a title="'.L('plub_24').'" href="javascript:get_cmd(\''.site_url('user/zu_init').'?sid=0\',\'vid\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/ok.gif" /></a>':'<a title="'.L('plub_24').'" href="javascript:get_cmd(\''.site_url('user/zu_init').'?sid=1\',\'vid\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/no.gif" /></a>';
}elseif($ac=='mid'){
$edit['mid']=$sid;
$str=($sid==1)?'<a title="'.L('plub_24').'" href="javascript:get_cmd(\''.site_url('user/zu_init').'?sid=0\',\'mid\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/ok.gif" /></a>':'<a title="'.L('plub_24').'" href="javascript:get_cmd(\''.site_url('user/zu_init').'?sid=1\',\'mid\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/no.gif" /></a>';
}else{  
$edit['did']=$sid;
$str=($sid==1)?'<a title="'.L('plub_24').'" href="javascript:get_cmd(\''.site_url('user/zu_init').'?sid=0\',\'did\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/ok.gif" /></a>':'<a title="'.L('plub_24').'" href="javascript:get_cmd(\''.site_url('user/zu_init').'?sid=1\',\'did\','.$id.');"><img align="absmiddle" src="'.Web_Path.'packs/admin/images/icon/no.gif" /></a>';
}
$this->CsdjDB->get_update('userzu',$id,$edit);
echo $str;
}
//会员组删除
public function zu_del()
{
$id = $this->input->post('id',true);
if(empty($id)) admin_msg(L('plub_22'),'javascript:history.back();','no');  //数据不完成
//改变当前会员组
if(is_array($id)){
foreach ($id as $id) {
$this->db->query("update ".CS_SqlPrefix."user set zid=0 where zid=".$id."");
}
}else{
$this->db->query("update ".CS_SqlPrefix."user set zid=0 where zid=".$id."");
}
$this->CsdjDB->get_del('userzu',$id);
admin_msg(L('plub_06'),site_url('user/zu'),'ok');  //操作成功
}
//等级新增、修改
public function level_edit()
{
$id   = intval($this->input->get('id'));
if($id==0){
$row=$this->db->query("SELECT xid FROM ".CS_SqlPrefix."userlevel order by xid desc")->row();
$data['id']=0;
$data['xid']=($row)?$row->xid+1:1;
$data['stars']=0;
$data['name']='';
$data['jinyan']=0;
}else{
$row=$this->db->query("SELECT * FROM ".CS_SqlPrefix."userlevel where id=".$id."")->row(); 
if(!$row) admin_msg(L('plub_17'),'javascript:history.back();','no');  //记录不存在
$data['id']=$row->id;
$data['xid']=$row->xid;
$data['stars']=$row->stars;
$data['name']=$row->name;
$data['jinyan']=$row->jinyan;
}
$this->load->view('user_level_edit.html',$data);
}
//等级保存
public function level_save()
{
$id   = intval($this->input->post('id'));
$data['name']=$this->input->post('name',true);
$data['xid']=intval($this->input->post('xid'));
$data['stars']=intval($this->input->post('stars'));
$data['jinyan']=intval($this->input->post('jinyan'));
if(empty($data['name']) || $data['stars']==0) admin_msg(L('plub_25'),'javascript:history.back();','no');  //数据不完成
if($id==0){
$this->CsdjDB->get_insert('userlevel',$data);
}else{
$this->CsdjDB->get_update('userlevel',$id,$data);
}
admin_msg(L('plub_06'),site_url('user/level'),'ok');  //操作成功
}
//等级删除
public function level_del()
{
$id = $this->input->post('id',true);
if(empty($id)) admin_msg(L('plub_22'),'javascript:history.back();','no');  //数据不完成
//改变当前等级会员的等级
if(is_array($id)){
foreach ($id as $id) {
$this->db->query("update ".CS_SqlPrefix."user set level=0 where level=".$id."");
}
}else{
$this->db->query("update ".CS_SqlPrefix."user set level=0 where level=".$id."");
}
$this->CsdjDB->get_del('userlevel',$id);
admin_msg(L('plub_06'),site_url('user/level'),'ok');  //操作成功
}
//会员等级排序
public function level_sort()
{
$xid = $this->input->post('xid',true);
foreach ($xid as $k=>$v) {
$this->db->query("update ".CS_SqlPrefix."userlevel set xid=".$v." where id=".$k."");
}
admin_msg(L('plub_06'),site_url('user/level'),'ok');  //操作成功
}
}
