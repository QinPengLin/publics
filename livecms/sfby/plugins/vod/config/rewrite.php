<?php

if (!defined('BASEPATH')) exit('No direct script access allowed');

// ������α��̬ʱ���ļ��ᱻϵͳ���ǣ��������ҳ��ָ����󣬿��Ե�������Ĺ���˳��Խ��ǰ�Ĺ������ȼ�Խ�ߡ�

$route['play-(\d+).html']                       = 'play/index/id/$1/{zu}/{ji}'; // ����ҳ���� ��Ӧ����play-{id}.html
$route['(\d+)-(\d+).html']                      = 'lists/index/{sort}/$1/$2'; // �б�ҳ���� ��Ӧ����{id}-{page}.html
$route['down-(\d+).html']                       = 'down/index/id/$1/{zu}/{ji}'; // ����ҳ���� ��Ӧ����down-{id}.html
