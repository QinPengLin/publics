<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2015-04-17
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Funco extends Mscms_Controller {
	function __construct(){
		    parent::__construct();
		    $this->load->model('CsdjTpl');
		    $this->lang->load('home');
	}
	public function index()
	{
            $page = (int)$this->uri->segment(4);   //页数
			//模板
			$tpl='funco.html';
			//当前会员
			$uid=get_home_uid();
		    $row=$this->CsdjDB->get_row_arr('user','*',$uid);
			if(empty($row['nichen'])) $row['nichen']=$row['name'];
			//装载模板
			$title=$row['nichen'].L('funco_01');
			$ids['uid']=$row['id'];
			$ids['uida']=$row['id'];
            $this->CsdjTpl->home_list($row,'funco',$page,$tpl,$title,$ids);
	}
}
