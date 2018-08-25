<?php if ( ! defined('HOMEPATH')) exit('No direct script access allowed');
/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2014 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2015-04-18
 */
class News extends Mscms_Controller {

	function __construct(){
		    parent::__construct();
			$this->load->helper('news');
		    $this->load->model('CsdjTpl');
	}

	public function index()
	{
            $cid = (int)$this->uri->segment(4);   //CID
            $page = (int)$this->uri->segment(5);   //页数
			//模板
			$tpl='news.html';
			//当前会员
			$uid=get_home_uid();
		    $row=$this->CsdjDB->get_row_arr('user','*',$uid);
			if(empty($row['nichen'])) $row['nichen']=$row['name'];
			//装载模板
			$title=$row['nichen'].'的小说';
			$ids['uid']=$row['id'];
			$ids['uida']=$row['id'];
            $sql=($cid==0)?"":"SELECT {field} FROM ".CS_SqlPrefix."news where cid in (".getChild($cid).")";
            $this->CsdjTpl->home_list($row,'news',$page,$tpl,$title,$ids,$cid,$sql);
	}
}

