<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2014-11-24
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Page extends Mscms_Controller {

	function __construct(){
		    parent::__construct();
		    $this->load->model('CsdjTpl');
	}

	public function index()
	{
            $name = $this->uri->segment(3);   //页面标示
            if(empty($name)){
                    msg_url(L('page_01'),Web_Path);
            }
            //获取数据
		    $row=$this->CsdjDB->get_row_arr('page','*',$name,'name');
		    if(!$row){
                    msg_url(L('page_02'),Web_Path);
		    }
            $this->CsdjTpl->page($row);
	}
}
