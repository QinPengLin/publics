<?php 
/**
* @Mscms 4.x open source management system
* @copyright 2009-2015 msvod.cc. All rights reserved.
* @Author:Msvod QQ:487039015
* @Dtime:2014-04-27
*/
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Index extends Mscms_Controller {
function __construct(){
parent::__construct();
}
public function index()
{
$template=$this->load->view('index.html','',true);
$Mark_Text=str_replace("{mscms:title}","»áÔ± - ".Web_Name,$template);
$Mark_Text=str_replace("{mscms:keywords}",Web_Keywords,$Mark_Text);
$Mark_Text=str_replace("{mscms:description}",Web_Description,$Mark_Text);
$Mark_Text=$this->skins->template_parse($Mark_Text,true);
echo $Mark_Text;
}
}
