<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2015-04-17
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Friend extends Mscms_Controller {
	function __construct(){
		    parent::__construct();
		    $this->load->model('CsdjTpl');
		    $this->lang->load('home');
	}
	public function index()
	{
            $page = (int)$this->uri->segment(4);   //ҳ��
			//ģ��
			$tpl='friend.html';
			//��ǰ��Ա
			$uid=get_home_uid();
		    $row=$this->CsdjDB->get_row_arr('user','*',$uid);
			if(empty($row['nichen'])) $row['nichen']=$row['name'];
			//װ��ģ��
			$title=$row['nichen'].L('friend_01');
			$ids['uid']=$row['id'];
			$ids['uida']=$row['id'];
            $this->CsdjTpl->home_list($row,'friend',$page,$tpl,$title,$ids);
	}
}