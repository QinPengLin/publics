<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2008-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2014-11-20
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Msg extends Mscms_Controller {

	function __construct(){
		    parent::__construct();
		    $this->load->model('CsdjAdmin');
			$this->lang->load('admin_msg');
	        $this->CsdjAdmin->Admin_Login();
	}

    //私信列表
	public function index()
	{
            $zd   = $this->input->get_post('zd',true);
            $key  = $this->input->get_post('key',true);
 	        $page = intval($this->input->get_post('page'));
			$wd   = $this->input->get_post('wd',true);
			$fxr   = $this->input->get_post('fxr',true);
								$y = intval($this->input->get_post('y'));
					$data['y'] = $y;
            if($page==0) $page=1;
			if(empty($wd)) $wd=0;
			if(empty($fxr)) $fxr=2;

	        $data['page'] = $page;
	        $data['zd'] = $zd;
	        $data['key'] = $key;
			$data['wd'] = $wd;
			$data['fxr'] = $fxr;

            $sql_string = "SELECT * FROM ".CS_SqlPrefix."msg where 1=1";
			if(!empty($key)){
				 if($zd=='name'){
	                   $sql_string.= " and name like '%".str_replace('%','',$key)."%'";
				 }else{
				     if($zd=='user'){
                         $uid=$this->CsdjDB->getzd('user','id',$key,'name');
				     }else{
                         $uid=$key;
				     }
					 $wid=intval($uid);
                   if($fxr==3){
				   if($key==0){
				   $sql_string.= " and uida=0";
				   }else{
					 $sql_string.= " and uida=".$wid."";
					 }
					 }
					 if($fxr==1){
					 if($key==0){
				   $sql_string.= " and uidb=0";
				   }else{
					 $sql_string.= " and uidb=".$wid."";
					 }
					 }
					 if($fxr==2){
					 $sql_string.= " and (uida=".$wid." or uidb=".$wid.")";
					 }				 }
			}
			if($wd!=2){
           $sql_string.= " and did=".$wd."";
	        }
			
			$sql_string.= " order by addtime desc";
            $count_sql = str_replace('*','count(*) as count',$sql_string);
	        $query = $this->db->query($count_sql)->result_array();
	        $total = $query[0]['count'];

            $base_url = site_url('msg')."?zd=".$zd."&key=".$key."&wd=".$wd."&fxr=".$fxr."&y=".$y;
	        $per_page = 15; 
            $totalPages = ceil($total / $per_page); // 总页数
	        $data['nums'] = $total;
            if($total<$per_page){
                  $per_page=$total;
            }
            $sql_string.=' limit '. $per_page*($page-1) .','. $per_page;
	        $query = $this->db->query($sql_string);

	        $data['msg'] = $query->result();
	        $data['pages'] = get_admin_page($base_url,$totalPages,$page,10); //获取分页类

            $this->load->view('msg.html',$data);
	}
	//私信列表
	public function lists()
	{
            
         	        $page = intval($this->input->get_post('page'));
					$y = intval($this->input->get_post('y'));
					$data['y'] = $y;
            if($page==0) $page=1;
            $sql_string = "SELECT * FROM ".CS_SqlPrefix."msg where 1=1";
			$sql_string.= " and uida=0";
            $sql_string.= " and did=0";
	        $sql_string.= " order by addtime desc";
            $count_sql = str_replace('*','count(*) as count',$sql_string);
	        $query = $this->db->query($count_sql)->result_array();
	        $total = $query[0]['count'];

            $base_url = site_url('msg/lists')."?y=".$y;
	        $per_page = 15; 
            $totalPages = ceil($total / $per_page); // 总页数
	        $data['nums'] = $total;
            if($total<$per_page){
                  $per_page=$total;
            }
            $sql_string.=' limit '. $per_page*($page-1) .','. $per_page;
	        $query = $this->db->query($sql_string);

	        $data['msg'] = $query->result();
	        $data['pages'] = get_admin_page($base_url,$totalPages,$page,10); //获取分页类

            $this->load->view('msg.html',$data);
	}

    //阅读私信
	public function look()
	{
            $id = $this->input->get_post('id',true);
			if(empty($id)) admin_msg(L('plub_01'),'javascript:history.back();','no');  //数据不完成
            $row=$this->db->query("SELECT * FROM ".CS_SqlPrefix."msg where id=".$id."")->row();
			if(!$row) admin_msg(L('plub_02'),'javascript:history.back();','no');  //记录不存在
            $data['msg']=$row;
			if($row->uida==0){
			if($row->did==0){//变更为已读
                 $this->db->query("update ".CS_SqlPrefix."msg set did=1 where id=".$id."");
			}}
            $this->load->view('msg_look.html',$data);
	}
	
	//删除私信
	public function del()
	{
            $id = $this->input->get_post('id',true);
			if(empty($id)) admin_msg(L('plub_03'),'javascript:history.back();','no');  //数据不完成
			$this->CsdjDB->get_del('msg',$id);
            admin_msg(L('plub_04'),site_url('msg'),'ok');  //操作成功
	}
	//发送消息提交
	public function save()
	{


		    $user = $this->input->post('user',true,true);
			$id = $this->input->post('id',true,true);
		    $name = $this->input->post('name',true,true);
		    $neir = $this->input->post('neir',true,true);
			$uid=$user;
			if(empty($neir)) admin_msg('内容不能为空','javascript:history.back();','no');

			$add['uida']=$uid;
			$add['uidb']=0;
			$add['name']=$name;
			$add['neir']=$neir;
			$add['addtime']=time();
            $this->CsdjDB->get_insert('msg',$add);
			admin_msg('回复成功！',site_url('msg/look?id='.$id.''),'ok');  //操作成功
	}
}

