<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/10/24
 * Time: 下午12:10
 */
pc_base::load_sys_class('attachment','',0);
$module = 'content';
$catid = 17;
$siteid = get_siteid();
$site_setting = get_site_setting($siteid);
$site_allowext = $site_setting['upload_allowext'];
print_r($site_allowext);
exit;
//$attachment = new attachment($module,$catid,$siteid);
//$attachment->set_userid($this->userid);
//$a = $attachment->upload('upload',$site_allowext);
//if($a){
//    $filepath = $attachment->uploadedfiles[0]['filepath'];
//    $fn = intval($_GET['CKEditorFuncNum']);
//    $this->upload_json($a[0],$filepath,$attachment->uploadedfiles[0]['filename']);
//    $attachment->mkhtml($fn,$this->upload_url.$filepath,'');
//}