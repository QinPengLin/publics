<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/6/19
 * Time: 下午4:32
 */

$redis = new Redis();
$redis->connect('127.0.0.1', 6379);

//echo $redis->hset('hash', 'cat', 'cat66666666666');echo '<br>';
//echo $redis->hget('hash', '69800386');
//exit();

$rejson=array();
$now=time();
$i=0;
foreach (reFile() as $v){
    if ((strtotime($v[1])<$now && strtotime($v[2])>$now) && ($v[3]=='1')){
        sleep(2);
        $rejson[$i]['FI']=$v[0];
        $rejson[$i]['asian_lines']['data']=json_decode(mian(produceKey($v[0],2)),true);
       // $rejson[$i]['main']['data']=json_decode(mian(produceKey($v[0],1)),true);
        $rejson[$i]['asian_lines']['updated_at']=time();
        $i++;
    }
}
foreach ($rejson as $v){
    $redis->hset('hash',$v['FI'],json_encode($v));
}
//print_r(json_encode($rejson[0]));


//echo mian($key);

function produceKey($key,$p){
    switch ($p)
    {
        case 1://主要盘口
            return '1-1-8-'.$key.'-3-0-0-0-1-0-0-0-0-0-1-0-0-16-0-1-0-0-0';
            break;
        case 2://亚洲盘口
            return '1-1-8-'.$key.'-3-0-0-0-1-3-0-4110-0-0-1-0-0-16-0-1-0-0-0';
            break;
        default://主要盘口
            return '1-1-8-'.$key.'-3-0-0-0-1-0-0-0-0-0-1-0-0-16-0-1-0-0-0';
    }
}

function reFile($filename='/home/www/publics/publics/bet365/config.txt'){
    $handle = fopen($filename, "r");

    $contents = fread($handle, filesize ($filename));
    fclose($handle);
    $arr=explode("\n", $contents);
    $rearr=array();
    foreach ($arr as $v){
        if (!empty($v) && substr($v, 0,1)!='#'){
            $rearr[]=explode('---',$v);
        }
    }
    return $rearr;
}

function mian($key)
{

    $url1 = "https://mobile.48365365.com/V6/sport/coupon/coupon.aspx?zone=3&isocode=KR&tzi=1&key=$key&ip=0&gn=0&cid=1&lng=1&ctg=1&ct=104&clt=9996&ot=1&pk=$key";

    set_error_handler(function ($errno, $errstr, $errfile, $errline) {
        if (in_array($errno, [2]))
            return;
        echo json_encode(['code' => '500', 'msg' => '拉取失败', 'debug' => "$errno; $errstr; $errfile; $errline"]);
        exit;
    });


    $ch = curl_init($url1);
// I changed UA here
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.1) Gecko/20061204 Firefox/2.0.0.1');

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
    curl_setopt($ch, CURLOPT_AUTOREFERER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);

    curl_setopt ($ch, CURLOPT_PROXY, 's1.proxy.mayidaili.com:8123');
    curl_setopt ($ch, CURLOPT_HTTPHEADER, array('Proxy-Authorization:'.setMyProxy()));
//curl_setopt($ch, CURLOPT_HTTPHEADER, array('Host: graph.facebook.com'));

    if (curl_exec($ch) === false) {
        echo 'Curl error: ' . curl_error($ch);
    } else {
        //echo 'Operation completed without any errors';
    }
    $output = @curl_exec($ch);
    curl_close($ch);

    $result = (object)array();
    $dom = new DOMDocument();
    @$dom->loadHTML($output);
//print_r($output);

// Remove the script Nodes
    $list = $dom->getElementsByTagName("script");

    while ($list->length > 0) {
        $p = $list->item(0);
        $p->parentNode->removeChild($p);
    }

// Get the name and start time
    $match_name_element = $dom->getElementById('breadcrumbCompetition');
    $nodes = getElementsByClassName($dom, "secondaryHeaderCell");
    foreach ($nodes as $node) {
        $start_time = $node->textContent;
    }
    $result->name = clear($match_name_element->textContent);
    $result->start_time = clear($start_time);

// Get the match Bet data
    $classname = "enhancedPod";
    $nodes = getElementsByClassName($dom, "enhancedPod");
    foreach ($nodes as $node) {
        //$tmp_dom->appendChild($tmp_dom->importNode($node,true));
        // Get key
        $keys = $node->getElementsByTagName('h1');
        $key_value = "";
        foreach ($keys as $key) {
            $key_value = clear($key->textContent);
        }
        $result_item = array();
        // get option arrays
        $option_nodes = getElementsByClassName($node, 'opp');
        $index = 0;
        foreach ($option_nodes as $option_node) {
            $option = clear($option_node->textContent);
            $header=null;
            if ($key_value == "Correct Score" & $option != "")
                switch ($index % 3) {
                    case 0:
                        $option = $option;
                        $header ='1';
                        break;
                    case 1:
                        $option = $option;
                        $header ='X';
                        break;
                    case 2:
                        $option = $option;
                        $header ='2';
                        break;
                }
            //Get Odds
            if ($option != "") {
                $option_parent = $option_node->parentNode;
                $odds_nodes = getElementsByClassName($option_parent, 'odds');
                foreach ($odds_nodes as $odd_node) {
                    $odds = clear($odd_node->textContent);
                }
                if (!empty($header)){
                    array_push($result_item, array('opp' => $option, 'odds' => strval((stringToInt($odds) + 1)), 'header'=>$header));
                }else {
                    array_push($result_item, array('opp' => $option, 'odds' => strval((stringToInt($odds) + 1))));
                }
            }
            $index++;
        }
        if (count($result_item) == 0) {
            switch ($key_value) {
                case "Goals Over/Under":
                    $odds_nodes = getElementsByClassName($node, 'podEventRow');
                    foreach ($odds_nodes as $odd_node) {
                        $odds_items = getElementsByClassName($odd_node, 'priceColumn');
                        $odd_index = 0;
                        foreach ($odds_items as $odd_item) {
                            if ($odd_index == 0)
                                array_push($result_item, array('opp' => "Over 2.5", 'odds' => strval((stringToint($odd_item->textContent) + 1))));
                            else
                                array_push($result_item, array('opp' => "Under 2.5", 'odds' => strval((stringToint($odd_item->textContent) + 1))));
                            $odd_index++;
                        }
                    }

            }
        }
        $result->$key_value = $result_item;

    }

    return json_encode($result);
}

// Clear the string.
function clear($string)
{
    str_replace('\r\n', "", $string);
    return trim($string);
}

// change odd to decimial
function stringToint($string){
    $ops = explode('/', $string);
    if(count($ops) != 1)
        return floor($ops[0]/$ops[1]*1000)/1000;
    else
        return $ops[0];
}

// Get elements by class name
function getElementsByClassName($dom, $classname)
{
    $temp_dom = new DOMDocument();
    if(get_class($dom) == "DOMDocument"){
        $temp_dom = $dom;
    }
    else{
        $temp_dom->appendChild($temp_dom->importNode($dom,true));
    }
    $finder = new DomXPath($temp_dom);
    $nodes = $finder->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' $classname ')]");
    return $nodes;
}
function setMyProxy($appKey='213023098',$secret='d9f98b6dc58d7bdbedd2a9af18872d10'){
    date_default_timezone_set("Asia/Shanghai");

    $paramMap = array(
        'app_key'   => $appKey,
        'timestamp' => date('Y-m-d H:i:s')
    );
    ksort($paramMap);
    $codes = $secret;
    $auth = 'MYH-AUTH-MD5 ';
    foreach ($paramMap as $key => $val) {
        $codes .= $key . $val;
        $auth  .= $key . '=' . $val . '&';
    }
    $codes .= $secret;
    $auth .= 'sign=' . strtoupper(md5($codes));
    return $auth;
}