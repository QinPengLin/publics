<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2015-03-06
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Blog extends Mscms_Controller {

	function __construct(){
		    parent::__construct();
		    $this->load->model('CsdjTpl');
		    $this->load->model('CsdjUser');
			$this->lang->load('user');
			$this->CsdjUser->User_Login();
	}

	public function index()
	{
		    $op=$this->uri->segment(4); //��ʽ
		    $page=intval($this->uri->segment(5)); //��ҳ
			if(empty($op)) $op='my';
			//ģ��
			$tpl='blog.html';
			//URL��ַ
		    $url='blog/index/'.$op;
            $sql = "select * from ".CS_SqlPrefix."blog where uid=".$_SESSION['mscms__id'];
            $sqlstr = ($op=='all') ? '' : $sql;
			//��ǰ��Ա
		    $row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
			if(empty($row['nichen'])) $row['nichen']=$row['name'];
			//װ��ģ��
			$title=L('blog_01');
			$ids['uid']=$_SESSION['mscms__id'];
			$ids['uida']=$_SESSION['mscms__id'];
            $Mark_Text=$this->CsdjTpl->user_list($row,$url,$page,$tpl,$title,$op,$sqlstr,$ids,true,false);
			//��Ա��鵼��
			$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
            $Mark_Text=$this->skins->labelif($Mark_Text);
			echo $Mark_Text;
	}
}
