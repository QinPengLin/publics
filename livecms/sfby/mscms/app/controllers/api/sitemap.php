<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2014-09-20
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Sitemap extends Mscms_Controller {

	function __construct(){
		  parent::__construct();
	}

    //网站地图
	public function index()
	{
          header("Content-type:text/xml;charset=gbk"); 
		  $this->load->get_templates('common');
		  $Mark_Text=$this->load->view('sitemap.html','',true);
		  $Mark_Text=$this->skins->template_parse($Mark_Text,false);
		  echo '<?xml version="1.0" encoding="GBK" ?>'.$Mark_Text;
	}
}
