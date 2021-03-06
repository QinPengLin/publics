<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2015-03-07
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Fans extends Mscms_Controller {

	function __construct(){
		    parent::__construct();
		    $this->load->model('CsdjTpl');
		    $this->load->model('CsdjUser');
			$this->lang->load('user');
			$this->CsdjUser->User_Login();
	}

    //粉丝列表
	public function index()
	{
		    $page=intval($this->uri->segment(5)); //分页
			//模板
			$tpl='fans.html';
			//URL地址
		    $url='fans/index';
			//当前会员
		    $row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
			if(empty($row['nichen'])) $row['nichen']=$row['name'];
			//装载模板
			$title=L('fans_01');
			$ids['uid']=$_SESSION['mscms__id'];
			$ids['uida']=$_SESSION['mscms__id'];
            $Mark_Text=$this->CsdjTpl->user_list($row,$url,$page,$tpl,$title,'id','',$ids,true,false);
			//会员版块导航
			$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
            $Mark_Text=$this->skins->labelif($Mark_Text);
			echo $Mark_Text;
	}

    //删除粉丝
	public function del()
	{
		    $id=intval($this->uri->segment(4)); //ID
			if($id==0) msg_url(L('fans_02'),'javascript:history.back();');
            $this->db->query("delete from ".CS_SqlPrefix."fans where uida=".$_SESSION['mscms__id']." and id=".$id."");
            msg_url(L('fans_03'),$_SERVER['HTTP_REFERER']);
	}
}
