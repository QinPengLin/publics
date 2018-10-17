<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/10/17
 * Time: 上午10:30
 */
defined('IN_PHPCMS') or exit('No permission resources.');
if (isset($set_modules) && $set_modules == TRUE)
{
    $i = isset($modules) ? count($modules) : 0;

    $modules[$i]['code']    = basename(__FILE__, '.class.php');
    $modules[$i]['name']    = L('iiiapi', '', 'pay');
    $modules[$i]['desc']    = L('iiiapi_tip', '', 'pay');
    $modules[$i]['is_cod']  = '0';
    $modules[$i]['is_online']  = '1';
    $modules[$i]['author']  = 'PHPCMS开发团队';
    $modules[$i]['website'] = 'https://a.iiiapi.com/';
    $modules[$i]['version'] = '1.0.0';
    $modules[$i]['config']  = array(
        array('name' => 'iiiapi_account','type' => 'text','value' => ''),
        array('name' => 'iiiapi_privateKey','type' => 'text','value' => ''),
        array('name' => 'service_type','type' => 'select','value' => '0'),
        array('name' => 'iiiapi_api_url','type' => 'text','value' => ''),
    );

    return;
}
pc_base::load_app_class('pay_abstract','','0');
class Iiiapi extends paymentabstract{

    public function __construct($config = array()) {
        if (!empty($config)) $this->set_config($config);
        $this->config['gateway_url'] = $config['iiiapi_api_url'];
        $this->config['gateway_method'] = 'POST';
        $this->config['notify_url'] = return_url('alipay',1);
        $this->config['return_url'] = return_url('alipay');
        pc_base::load_app_func('alipay');
    }

    public function getpreparedata() {
        //订单信息
        $prepare_data['v_oid'] = $this->order_info['id'];
        return $prepare_data;
    }
    /**
     * GET接收数据
     * 状态码说明  （0 交易完成 1 交易失败 2 交易超时 3 交易处理中 4 交易未支付5交易取消6交易发生错误）
     */
    public function receive() {

    }
    /**
     * POST接收数据
     * 状态码说明  （0 交易完成 1 交易失败 2 交易超时 3 交易处理中 4 交易未支付 5交易取消6交易发生错误）
     */
    public function notify() {

    }
    /**
     * 相应服务器应答状态
     * @param $result
     */
    public function response($result) {

    }
    }