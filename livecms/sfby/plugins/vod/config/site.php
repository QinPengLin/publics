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
      'title' => '列表页规则',
      'uri' => 'lists/index/{sort}/{id}/{page}',
      'url' => '{id}-{page}.html',
    ),
    'play' => 
    array (
      'title' => '播放页规则',
      'uri' => 'play/index/id/{id}/{zu}/{ji}',
      'url' => 'play-{id}.html',
    ),
    'down' => 
    array (
      'title' => '下载页规则',
      'uri' => 'down/index/id/{id}/{zu}/{ji}',
      'url' => 'down-{id}.html',
    ),
  ),
  'Html_Uri' => 
  array (
    'index' => 
    array (
      'title' => '版块主页规则',
      'url' => 'vod/',
      'check' => '1',
    ),
    'lists' => 
    array (
      'title' => '列表页规则',
      'url' => 'vod/list-{sort}-{id}-{page}.html',
      'check' => '1',
    ),
  ),
  'Seo' => 
  array (
    'title' => '最新视频在线观看-电影天堂-美色视频',
    'keywords' => '电影,大片,最新电影,高清电影,正版电影,国产片,好莱坞大片,欧洲电影,港台电影,日韩电影,热播电影,高清视频,在线观看 ',
    'description' => '美色视频提供当下最新、最火各类好看的电影大片在线观看服务，爱奇艺电影频道是国内主流正版高清电影汇聚地，致力于构建海量高清电影播放平台，向广大提供网友丰富多彩的好莱坞电影、欧洲电影、日韩电影、华语电影以及其他国家的经典电影在线点播服务',
  ),
);?>