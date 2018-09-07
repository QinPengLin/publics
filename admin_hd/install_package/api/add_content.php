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
print_r($categorys);