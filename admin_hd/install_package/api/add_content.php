<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/9/7
 * Time: 下午1:49
 */
defined('IN_PHPCMS') or exit('No permission resources.');
$headers = array();
foreach ($_SERVER as $key => $value) {
    if ('HTTP_' == substr($key, 0, 5)) {
        $headers[str_replace('_', '-', substr($key, 5))] = $value;
    }
}
print_r($headers);
exit();
$db = pc_base::load_model('content_model');
$categorys = getcache('category_content_'.get_siteid(),'commons');
$post=$_POST;
if(isset($post['dosubmit'])) {
    define('INDEX_HTML', true);
    $catid = $post['info']['catid'] = intval($post['info']['catid']);
    if (trim($post['info']['title']) == '') showmessage(L('title_is_empty'));
    $category = $categorys[$catid];
    if($category['type']==0) {
        $modelid = $categorys[$catid]['modelid'];
        $db->set_model($modelid);
        $setting = string2array($category['setting']);
        $workflowid = $setting['workflowid'];
        if($workflowid && $_POST['status']!=99) {
            $post['info']['status'] =  1;
        }else{
            $post['info']['status'] = 99;
        }
        $re=$db->add_content($post['info']);
        echo json_encode(array('re'=> $re));
    }
}
