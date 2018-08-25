<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2015-03-30
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Short extends Mscms_Controller {

	function __construct(){
		    parent::__construct();
	}

	//±£´æµ½×ÀÃæ
	public function index()
	{
		    $url=$this->input->get('url', TRUE, TRUE);
		    $name=$this->input->get('name', TRUE, TRUE);
			if(empty($name)) $name=Web_Name;
			if(empty($url)) $url="http://".Web_Url.Web_Path;
            $Shortcut = "[InternetShortcut] 
                URL=".$url."
                IDList= 
                [{000214A0-0000-0000-C000-000000000046}] 
                Prop3=19,2 
            "; 
            Header("Content-type: application/octet-stream"); 
            header("Content-Disposition: attachment; filename=".$name.".url;"); 
            echo $Shortcut;
	}
}

