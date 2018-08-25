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
		    $this->load->model('CsdjTpl');
	}

	public function index()
	{
            $name = $this->uri->segment(2);   //Ò³Ãæ±êÊ¾
            if(empty($name)){
                    msg_url(L('opt_01'),Web_Path);
            }
            $this->CsdjTpl->opt($name);
	}
}
