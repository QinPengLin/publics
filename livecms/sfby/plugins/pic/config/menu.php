<?php

if (!defined('BASEPATH')) exit('No direct script access allowed');

return array(

//��̨�˵�����	
'admin' => array(
array(
'name' => 'ͼƬ����',
'menu' => array(
array(
'name' => 'ͼ�����',
'link' => 'admin/type'
),
array(
'name' => 'ͼ�����',
'link' => 'admin/lists'
),
array(
'name' => 'ͼƬ����',
'link' => 'admin/pic'
),
),
),
/**
array(
'name' => '��̬����',
'menu' => array(
array(
'name' => '���ɰ����ҳ',
'link' => 'admin/html/index'
),
array(
'name' => '���ɷ���ҳ',
'link' => 'admin/html/type'
),
array(
'name' => '��������ҳ',
'link' => 'admin/html/show'
),
array(
'name' => '�����Զ���ҳ',
'link' => 'admin/html/opt'
),
),
)
*/
),

//��Ա���Ĳ˵�����
'user' => array(
array(
'name' => 'ͼƬ����',
'menu' => array(
array(
'name' => '�ҵ�ͼ��',
'link' => 'user/pic/type',
),
array(
'name' => '�ҵ�ͼƬ',
'link' => 'user/pic',
),
array(
'name' => 'ͼ������',
'link' => 'user/pic/addtype',
)
)
),
),
);
