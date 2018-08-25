<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
$autoload['packages']  = array();
$autoload['helper']    = array('url','common','link');
$autoload['config']    = array();
if(defined('PLUBPATH')){
	if(defined('IS_ADMIN') && file_exists(FCPATH.'plugins/'.PLUBPATH.'/language/'.CS_Language.'/admin_lang.php')){
        $autoload['language']  = array('common_mscms','admin');
    }elseif(file_exists(FCPATH.'plugins/'.PLUBPATH.'/language/'.CS_Language.'/plub_lang.php')){
        $autoload['language']  = array('common_mscms','plub');
	}
}else{
    $autoload['language']  = array('common_mscms');
}
if(strpos($_SERVER['REQUEST_URI'],'index.php/install/') === FALSE){
    $autoload['libraries'] = array('cookie','session','skins','cache');
    $autoload['model']     = array('CsdjDB');
}else{
    $autoload['libraries'] = array();
    $autoload['model']     = array();
}
