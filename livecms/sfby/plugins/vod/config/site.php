<?php if (!defined('FCPATH')) exit('No direct script access allowed');
return array (
  'Web_Mode' => 2,
  'Skins_Dir' => 'default_3/html/',
  'User_Dir' => 'default_2/html/',
  'Mobile_Dir' => 'default_3/html/',
  'Mobile_Is' => 1,
  'Cache_Is' => 0,
  'Cache_Time' => 1800,
  'Ym_Mode' => 0,
  'Ym_Url' => 'vod.mscms.com',
  'User_Qx' => '',
  'User_Dj_Qx' => '',
  'Rewrite_Uri' => 
  array (
    'lists' => 
    array (
      'title' => '�б�ҳ����',
      'uri' => 'lists/index/{sort}/{id}/{page}',
      'url' => '{id}-{page}.html',
    ),
    'play' => 
    array (
      'title' => '����ҳ����',
      'uri' => 'play/index/id/{id}/{zu}/{ji}',
      'url' => 'play-{id}.html',
    ),
    'down' => 
    array (
      'title' => '����ҳ����',
      'uri' => 'down/index/id/{id}/{zu}/{ji}',
      'url' => 'down-{id}.html',
    ),
  ),
  'Html_Uri' => 
  array (
    'index' => 
    array (
      'title' => '�����ҳ����',
      'url' => 'vod/',
      'check' => '1',
    ),
    'lists' => 
    array (
      'title' => '�б�ҳ����',
      'url' => 'vod/list-{sort}-{id}-{page}.html',
      'check' => '1',
    ),
  ),
  'Seo' => 
  array (
    'title' => '������Ƶ���߹ۿ�-��Ӱ����-��ɫ��Ƶ',
    'keywords' => '��Ӱ,��Ƭ,���µ�Ӱ,�����Ӱ,�����Ӱ,����Ƭ,�������Ƭ,ŷ�޵�Ӱ,��̨��Ӱ,�պ���Ӱ,�Ȳ���Ӱ,������Ƶ,���߹ۿ� ',
    'description' => '��ɫ��Ƶ�ṩ�������¡�������ÿ��ĵ�Ӱ��Ƭ���߹ۿ����񣬰����յ�ӰƵ���ǹ���������������Ӱ��۵أ������ڹ������������Ӱ����ƽ̨�������ṩ���ѷḻ��ʵĺ������Ӱ��ŷ�޵�Ӱ���պ���Ӱ�������Ӱ�Լ��������ҵľ����Ӱ���ߵ㲥����',
  ),
);?>