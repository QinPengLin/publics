<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/9/7
 * Time: 下午1:49
 */
defined('IN_PHPCMS') or exit('No permission resources.');
$db = pc_base::load_model('content_model');
$categorys = getcache('category_content_'.get_siteid(),'commons');
print_r('no');
if(isset($_POST['dosubmit'])) {
    print_r('yes');
    define('INDEX_HTML', true);
    $catid = $_POST['info']['catid'] = intval($_POST['info']['catid']);
    if (trim($_POST['info']['title']) == '') showmessage(L('title_is_empty'));
    $category = $categorys[$catid];
    print_r($category);
    if($category['type']==0) {
        $modelid = $categorys[$catid]['modelid'];
        $db->set_model($modelid);
        $setting = string2array($category['setting']);
        $workflowid = $setting['workflowid'];
        if($workflowid && $_POST['status']!=99) {
            $_POST['info']['status'] =  1;
        }else{
            $_POST['info']['status'] = 99;
        }
        $db->add_content($_POST['info']);
        showmessage(L('add_success').L('2s_close'),'blank','','','function set_time() {$("#secondid").html(1);}setTimeout("set_time()", 500);setTimeout("window.close()", 1200);');
    }
}
