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
$json='{
	"upload_maxsize": "2048",
	"upload_allowext": "jpg|jpeg|gif|bmp|png|doc|docx|xls|xlsx|ppt|pptx|pdf|txt|rar|zip|swf",
	"watermark_enable": "1",
	"watermark_minwidth": "300",
	"watermark_minheight": "300",
	"watermark_img": "statics\/images\/water\/\/mark.png",
	"watermark_pct": "85",
	"watermark_quality": "80",
	"watermark_pos": "9"
}';
$arr=string2array($json);
$site_allowext = $arr['upload_allowext'];
$attachment = new attachment($module,$catid,$siteid);
$attachment->set_userid(1);
$a = $attachment->upload('upload',$site_allowext);
print_r($a);
//if($a){
//    $filepath = $attachment->uploadedfiles[0]['filepath'];
//    $fn = intval($_GET['CKEditorFuncNum']);
//    $this->upload_json($a[0],$filepath,$attachment->uploadedfiles[0]['filename']);
//    $attachment->mkhtml($fn,$this->upload_url.$filepath,'');
//}