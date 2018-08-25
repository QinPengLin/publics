<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2014-11-24
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Opt extends Mscms_Controller {

	function __construct(){
		    parent::__construct();
			$this->load->helper('pic');
		    $this->load->model('CsdjTpl');
	}

	public function index($name)
	{
            if(empty($name)){
                    msg_url('出错了，模板标示为空！',Web_Path);
            }
            $this->CsdjTpl->opt($name);
	}
}
