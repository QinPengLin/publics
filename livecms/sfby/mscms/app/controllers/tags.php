<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2008-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2015-04-08
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Tags extends Mscms_Controller {

	function __construct(){
		    parent::__construct();
	}

    //TAGS�б�
	public function index()
	{
		    $data['fid']=$this->input->get('fid',true);   //����ID��һ��ҳ�������ؿ����õ�
			if($data['fid']=='undefined') $data['fid']='tags';
            $data['tags']=$this->db->query("SELECT * FROM ".CS_SqlPrefix."tags where fid=0 order by xid asc")->result();
			$this->load->get_templates('common');
            $this->load->view('tags.html',$data);
	}
}
