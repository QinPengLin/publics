<?php

if (!defined('BASEPATH')) exit('No direct script access allowed');

// 当生成伪静态时此文件会被系统覆盖；如果发生页面指向错误，可以调整下面的规则顺序；越靠前的规则优先级越高。

$route['play-(\d+).html']                       = 'play/index/id/$1/{zu}/{ji}'; // 播放页规则 对应规则：play-{id}.html
$route['(\d+)-(\d+).html']                      = 'lists/index/{sort}/$1/$2'; // 列表页规则 对应规则：{id}-{page}.html
$route['down-(\d+).html']                       = 'down/index/id/$1/{zu}/{ji}'; // 下载页规则 对应规则：down-{id}.html
