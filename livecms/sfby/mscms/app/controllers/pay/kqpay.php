<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2015-04-10
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Kqpay extends Mscms_Controller {

	function __construct(){
		    parent::__construct();
		    $this->load->model('CsdjUser');
			$this->lang->load('pay');
	}

    //����֧��
	public function index()
	{
            $this->CsdjUser->User_Login();
		    $id=(int)$this->uri->segment(4); //����ID
            if($id==0)  msg_url(L('pay_01'),spacelink('pay'));
            $row=$this->CsdjDB->get_row('pay','*',$id);
			if(!$row || $row->uid!=$_SESSION['mscms__id']){
                 msg_url(L('pay_02'),spacelink('pay'));
			}
            echo L('pay_18');
	}

	//ͬ������
	public function return_url()
	{
            $this->CsdjUser->User_Login();
	}

	//�첽����
	public function notify_url()
	{

	}
}
