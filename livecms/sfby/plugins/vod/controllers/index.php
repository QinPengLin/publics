<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2014-11-24
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Index extends Mscms_Controller {
	function __construct(){
		    parent::__construct();
		    $this->load->model('CsdjTpl');
		    $this->load->helper('vod');
	}

    //主页
	public function index()
	{
            //判断运行模式,生成则跳转至静态页面
			$uri=config('Html_Uri');
	        if(config('Web_Mode')==3 && $uri['index']['check']==1 && !defined('MOBILE')){
				$index_url=$uri['index']['url'];
				header("Location: ".$index_url);
				exit;
			}
			//装载模板并输出
	        $this->CsdjTpl->plub_index('vod');
	}
}
