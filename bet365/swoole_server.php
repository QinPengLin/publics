<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2019/2/18
 * Time: 下午1:34
 */
$serv=new swoole_server('127.0.0.1',9501);
$serv->on('connect',function (){
    echo "Client: Connect.\n";
});
$serv->on('receive', function ($serv, $fd, $from_id, $data) {
    $serv->send($fd, "Server: ".$data);
});
$serv->on('close', function ($serv, $fd) {
    echo "Client: Close.\n";
});

//启动服务器
$serv->start();