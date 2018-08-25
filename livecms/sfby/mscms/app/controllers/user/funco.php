<?php 
/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2015-03-07
 */
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Funco extends Mscms_Controller {

	function __construct(){
		    parent::__construct();
		    $this->load->model('CsdjTpl');
		    $this->load->model('CsdjUser');
			$this->lang->load('user');
			$this->CsdjUser->User_Login();
	}

    //访客列表
	public function index()
	{
		    $op=$this->uri->segment(4); //分页
		    $page=intval($this->uri->segment(5)); //分页
			if(empty($op)) $op='you';
			//模板
			$tpl='funco.html';
			//URL地址
		    $url='funco/index/'.$op;
			//当前会员
		    $row=$this->CsdjDB->get_row_arr('user','*',$_SESSION['mscms__id']);
			if(empty($row['nichen'])) $row['nichen']=$row['name'];
			//SQL
            if($op=='you'){
                  $sqlstr = "select * from ".CS_SqlPrefix."funco where uida=".$_SESSION['mscms__id'];
			}else{
                  $sqlstr = "select * from ".CS_SqlPrefix."funco where uidb=".$_SESSION['mscms__id'];
			}
			$ids['uid']=$_SESSION['mscms__id'];
			$ids['uida']=$_SESSION['mscms__id'];
			$data=$data_content=$aliasname='';
            //装载模板
		    $template=$this->load->view($tpl,$data,true);
		    $Mark_Text=$this->skins->topandend($template);
		    $Mark_Text=str_replace("{mscms:title}",L('funco_01'),$Mark_Text);
		    $Mark_Text=str_replace("{mscms:keywords}",Web_Keywords,$Mark_Text);
		    $Mark_Text=str_replace("{mscms:description}",Web_Description,$Mark_Text);
		    $Mark_Text=str_replace("{mscms:fid}",$op,$Mark_Text); //当前使用的fid
		    //预先除了分页
		    $pagenum=getpagenum($Mark_Text);
	        preg_match_all('/{mscms:([\S]+)\s+(.*?pagesize=\"([\S]+)\".*?)}([\s\S]+?){\/mscms:\1}/',$Mark_Text,$page_arr);
		    if(!empty($page_arr) && !empty($page_arr[2])){

					       $fields=$page_arr[1][0]; //前缀名
				           //组装SQL数据
					       $sqlstr=$this->skins->mscms_sql($page_arr[1][0],$page_arr[2][0],$page_arr[0][0],$page_arr[3][0],'id',$ids,0,$sqlstr);
					       $nums=$this->db->query($sqlstr)->num_rows(); //总数量
					       $Arr=userpage($sqlstr,$nums,$page_arr[3][0],$pagenum,$url,$page);
			               if($nums>0){
					            $sorti=1;
							    $result_array=$this->db->query($Arr[0])->result_array();
					            foreach ($result_array as $row2) {
									 $datatmp='';
									 $uida=$row2['uida'];
									 $uidb=$row2['uidb'];
                                     if($op=='my'){
                                          $row2['uida']=$uidb;
                                          $row2['uidb']=$uida;
									 }
						             $datatmp=$this->skins->mscms_skins($fields,$page_arr[0][0],$page_arr[4][0],$row2,$sorti);
						             $sorti++;
						             $data_content.=$datatmp;
					            }
			               }
			               $Mark_Text=page_mark($Mark_Text,$Arr);	//分页解析
			               $Mark_Text=str_replace($page_arr[0][0],$data_content,$Mark_Text);
			}
		    unset($page_arr);
		    $Mark_Text=$this->skins->mscms_common($Mark_Text);
	        $Mark_Text=$this->skins->csskins($Mark_Text,$ids);
		    $Mark_Text=$this->skins->mscms_skins('user',$Mark_Text,$Mark_Text,$row);//解析当前数据标签
			$Mark_Text=$this->skins->mscmsumenu($Mark_Text,$_SESSION['mscms__id']);
            $Mark_Text=$this->skins->template_parse($Mark_Text,true);
            echo $Mark_Text;
	}
}
