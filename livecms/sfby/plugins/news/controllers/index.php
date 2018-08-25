<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2014-12-16
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Index extends Mscms_Controller {
	function __construct(){
		    parent::__construct();
		    $this->load->model('CsdjTpl');
		    $this->load->helper('news');
	}

    //��ҳ
	public function index()
	{
            //�ж�����ģʽ,��������ת����̬ҳ��
			$uri=config('Html_Uri');
	        if(config('Web_Mode')==3 && $uri['index']['check']==1 && !defined('MOBILE')){
				$index_url=$uri['index']['url'];
				header("Location: ".$index_url);
				exit;
			}
			//װ��ģ�岢���
	        $this->CsdjTpl->plub_index('news');
	}
}