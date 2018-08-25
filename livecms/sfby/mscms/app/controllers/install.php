<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Install extends Mscms_Controller {

	function __construct(){
		    parent::__construct();
        	$this->load->helper('url');
            $this->load->helper('file');
			$this->load->get_templates('install');
			$all=explode("/",$_SERVER["REQUEST_URI"]);
			$dir=($all[1]!='index.php')?$all[1]:'';
			$url=str_replace('//','/',$_SERVER['HTTP_HOST'].'/'.$dir.'/');
			$url = "http://".$url;
			$installurl= $url.'index.php/install/';
			define("install_path",$url);
			define("install_url",$installurl);
	}

	public function index()
	{
            if(file_exists(FCPATH.'packs/install/install.lock')){
                $data['install']='ok';
            }else{
                $data['install']='no';
            }
            $this->load->view('temp_1.html',$data);
	}

	public function save1()
	{
            $data='';
            if(file_exists(FCPATH.'packs/install/install.lock')){
                $data['install']='ok';
                $this->load->view('temp_1.html',$data);
            }else{
                $this->load->view('temp_2.html',$data);
            }
	}

	public function save2()
	{
            $data='';
            if(file_exists(FCPATH.'packs/install/install.lock')){
                $data['install']='ok';
                $this->load->view('temp_1.html',$data);
            }else{
                $this->load->view('temp_3.html',$data);
            }
	}

	public function save3()
	{
            $data='';
            if(file_exists(FCPATH.'packs/install/install.lock')){
                $data['install']='ok';
                $this->load->view('temp_1.html',$data);
            }else{
				$this->load->model('CsdjDB');
				//清空原表记录
	   		    $tables=$this->db->list_tables();   
        		foreach ((array)$tables as $table){ 
                      if(strpos($table,CS_SqlPrefix) !== FALSE){
                         $this->db->query("DROP TABLE IF EXISTS `".$table."`");
					  }
				}
				echo 'no';
        		exit();
				$lnk=@mysqli_connect(CS_Sqlserver,CS_Sqluid,CS_Sqlpwd);
				@mysqli_select_db(CS_Sqlname,$lnk);
	            @mysqli_query("SET NAMES ".CS_Sqlcharset, $lnk);
                //导入数据表
	            $sql=read_file("./packs/install/mscms_table.sql");
                $sql=str_replace('{Prefix}',CS_SqlPrefix,$sql);
	            $sqlarr=explode(";",$sql);
                $str="";
	            for($i=1;$i<count($sqlarr);$i++){
                     $datasql=explode("--",$sqlarr[$i]);
                     $sql=explode("<mscms>",$sqlarr[$i]);
					 if(!empty($sql[1])){
		                 @mysqli_query($sql[1], $lnk);
					 }
                     $str.=@$datasql[1];
	            }
                //导入默认数据
	            $sql=read_file("./packs/install/mscms_data.sql");
                $sql=str_replace('{Prefix}',CS_SqlPrefix,$sql);
	            $sqlarr=explode("#mscms#",$sql);
	            for($i=0;$i<count($sqlarr);$i++){
					if(!empty($sqlarr[$i])){
		                 @mysqli_query($sqlarr[$i], $lnk);
					}
	            }
                $data['str']=str_replace('cs_',CS_SqlPrefix,$str);
			    $this->load->get_templates('install');
                $this->load->view('temp_5.html',$data);
            }
	}

	public function save4()
	{
            $data='';
            if(file_exists(FCPATH.'packs/install/install.lock')){
                $data['install']='ok';
                $this->load->view('temp_1.html',$data);
            }else{
                $path=str_replace('index.php/install/save4','',$_SERVER['PHP_SELF']);
                $path=str_replace('index.php','',$path);
                $path=str_replace('install/save4','',$path);
                $path=str_replace('//','/',$path);
                $data['web_path']=$path;
                $this->load->view('temp_6.html',$data);
            }
	}

	public function save5()
	{
            $data='';
            if(file_exists(FCPATH.'packs/install/install.lock')){
                $data['install']='ok';
                $this->load->view('temp_1.html',$data);
            }else{
 	            $web_name = $this->input->post('web_name');
 	            $web_url = $this->input->post('web_url');
 	            $web_path = $this->input->post('web_path');
 	            $web_mode = $this->input->post('web_mode');
 	            $admin_name = $this->input->post('admin_name');
 	            $admin_pass = $this->input->post('admin_pass');
 	            $admin_code = $this->input->post('admin_code');
 	            $web_language = $this->input->post('web_language');

                if(empty($web_name)||empty($web_url)||empty($web_path)||empty($admin_name)||empty($admin_pass)||empty($admin_code)) msg_url('<font color=red>请把数据填写完整！</font>','javascript:history.back();');

                    //修改配置文件
	                $config=read_file("./mscms/lib/Cs_Config.php");
	                $config=preg_replace("/'Web_Name','(.*?)'/","'Web_Name','".$web_name."'",$config);
	                $config=preg_replace("/'Web_Url','(.*?)'/","'Web_Url','".$web_url."'",$config);
	                $config=preg_replace("/'Web_Path','(.*?)'/","'Web_Path','".$web_path."'",$config);
	                $config=preg_replace("/'Web_Mode',(.*?)\)/","'Web_Mode','.$web_mode.')",$config);
	                $config=preg_replace("/'Admin_Code','(.*?)'/","'Admin_Code','".$admin_code."'",$config);
	                $config=preg_replace("/'CS_Language','(.*?)'/","'CS_Language','".$web_language."'",$config);
	                if(!write_file('./mscms/lib/Cs_Config.php', $config)){
                            msg_url('<font color=red>文件./mscms/lib/Cs_Config.php，没有写入权限！</font>','javascript:history.back();');
                            exit();
					}
                    //写入管理员
		            $this->load->model('CsdjDB');
			        $this->load->helper('string');
					$admin_code=random_string('alnum',6);
                    $data['adminname']=$admin_name;
                    $data['adminpass']=md5(md5($admin_pass).$admin_code);
                    $data['admincode']=$admin_code;
                    $data['sid']=1;
                    $this->CsdjDB->get_insert('admin',$data);

	                if(!write_file('./packs/install/install.lock', 'mscms')){
                          msg_url('<font color=red>目录./packs/install/，没有写入权限！</font>','javascript:history.back();');
                          exit();
                    }
					$this->load->get_templates('install');
                    $this->load->view('temp_7.html');
            }
	}

	public function dbtest()
	{
            if(file_exists(FCPATH.'packs/install/install.lock')){
                exit('4');
            }else{
 	            $dbdriver = rawurldecode($_GET['dbdriver']);
 	            $dbhost = rawurldecode($_GET['dbhost']);
 	            $dbuser = rawurldecode($_GET['dbuser']);
 	            $dbpwd = rawurldecode($_GET['dbpwd']);
 	            $dbname = rawurldecode($_GET['dbname']);
 	            $dbprefix = rawurldecode($_GET['dbprefix']);

                //$lnk=@mysql_connect($dbhost,$dbuser,$dbpwd);
                $lnk=@mysqli_connect($dbhost,$dbuser,$dbpwd);



                if(!$lnk) {
                         exit('2');
                }else{
                   if(!mysqli_select_db($lnk,$dbname)){
                        if(!@mysqli_query($lnk,"CREATE DATABASE `".$dbname."`")){
                             exit('3');
                        }
                   }
				   if(mysqli_select_db($lnk,$dbname)){
					    //修改数据库配置
                        $this->load->helper('string');
                        $CS_Encryption_Key='mscms_'.random_string('alnum',10);
                        //修改数据库配置文件
	                    $config=read_file("./mscms/lib/Cs_DB.php");
	                    $config=preg_replace("/'CS_Sqlserver','(.*?)'/","'CS_Sqlserver','".$dbhost."'",$config);
	                    $config=preg_replace("/'CS_Sqlname','(.*?)'/","'CS_Sqlname','".$dbname."'",$config);
	                    $config=preg_replace("/'CS_Sqluid','(.*?)'/","'CS_Sqluid','".$dbuser."'",$config);
	                    $config=preg_replace("/'CS_Sqlpwd','(.*?)'/","'CS_Sqlpwd','".$dbpwd."'",$config);
	                    $config=preg_replace("/'CS_Dbdriver','(.*?)'/","'CS_Dbdriver','".$dbdriver."'",$config);
	                    $config=preg_replace("/'CS_SqlPrefix','(.*?)'/","'CS_SqlPrefix','".$dbprefix."'",$config);
	                    $config=preg_replace("/'CS_Encryption_Key','(.*?)'/","'CS_Encryption_Key','".$CS_Encryption_Key."'",$config);
	                    if(!write_file('./mscms/lib/Cs_DB.php', $config)) exit('5');

		                $tables = array();
		                $query = mysqli_query($lnk,"SHOW TABLES FROM `".$dbname."`");
		                while($r = mysqli_fetch_row($lnk,$query)) {
			                $tables[] = $r[0];
		                }
		                if($tables && in_array($dbprefix.'plugins', $tables)) {
                            exit('1');
		                }
				   }
                   exit('0');
                }
            }
	}
}
