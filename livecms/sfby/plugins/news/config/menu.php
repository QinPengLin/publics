<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');
return array(
//后台菜单部分	
'admin' => array(
array(
'name' => '小说管理',
'menu' => array(
array(
'name' => '小说管理',
'link' => 'admin/news'
),
array(
'name' => '小说分类',
'link' => 'admin/lists'
),
//array(
//'name' => '小说专题',
//'link' => 'admin/topic'
//),
array(
'name' => '收费阅读记录',
'link' => 'admin/look'
),
),
),
/**
array(
'name' => '静态生成',
'menu' => array(
array(
'name' => '生成版块首页',
'link' => 'admin/html/index'
),
array(
'name' => '生成分类页',
'link' => 'admin/html/type'
),
array(
'name' => '生成内容页',
'link' => 'admin/html/show'
),
array(
'name' => '生成专题页',
'link' => 'admin/html/topic'
),
array(
'name' => '生成自定义页',
'link' => 'admin/html/opt'
),
),
)
*/
),
//会员中心菜单部分
'user' => array(
array(
'name' => '小说管理',
'menu' => array(
array(
'name' => '我的小说',
'link' => 'user/news',
),
array(
'name' => '发表小说',
'link' => 'user/news/add',
)
)
),
),
);
