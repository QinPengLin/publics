<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2008-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2014-08-01
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Index extends Mscms_Controller {

	function __construct(){

		    parent::__construct();
        exit('no228');
		    $this->load->model('CsdjAdmin');

	        $this->CsdjAdmin->Admin_Login();

	}

	public function index()
	{

            $this->load->view('index.html');
	}
}

