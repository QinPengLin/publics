<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/11/4
 * Time: 下午11:38
 */


class MongodbClient{

    protected $mongodb;
    protected $dbname;
    protected $collection;
    protected $bulk;
    protected $writeConcern;
    public function __construct($config)
    {
        if (!$config['dbname'] || !$config['collection']) {
            # code...
            exit('参数错误');
        }
        $this->mongodb = new MongoDB\Driver\Manager("mongodb://mongouser:Asdfgh123456@149.28.122.121:27017");
        $this->dbname = $config['dbname'];
        $this->collection = $config['collection'];
        $this->bulk = new MongoDB\Driver\BulkWrite();
        $this->writeConcern   = new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY, 100);
    }

    /**
     * Created by PhpStorm.
     * function: query
     * Description:查询方法
     * User: Xiaoxie
     * Email 736214763@qq.com
     * @param array $where
     * @param array $option
     * @return string
     *
     */
    public function query($where=[],$option=[])
    {
        $query = new MongoDB\Driver\Query($where,$option);
        $result = $this->mongodb->executeQuery("$this->dbname.$this->collection", $query);
        $data = [];
        if ($result) {
            # code...
            foreach ($result as $key => $value) {
                # code...
                array_push($data, $value);
            }
        }

        return json_encode($data);
    }

    /**
     * Created by PhpStorm.
     * function: getCount
     * Description:获取统计数
     * User: Xiaoxie
     * Email 736214763@qq.com
     * @param array $where
     * @return int
     *
     */
    public function getCount($where=[])
    {
        $command = new MongoDB\Driver\Command(['count' => $this->collection,'query'=>$where]);
        $result = $this->mongodb->executeCommand($this->dbname,$command);
        $res = $result->toArray();
        $cnt = 0;
        if ($res) {
            # code...
            $cnt = $res[0]->n;
        }

        return $cnt;
    }

    /**
     * Created by PhpStorm.
     * function: page
     * Description:分页数据
     * User: Xiaoxie
     * Email 736214763@qq.com
     * @param array $where
     * @param int $page
     * @param int $limit
     * @return string
     *
     */
    public function page($where=[],$page=1,$limit=10)
    {

        $count = $this->getCount($where);
        $data['count'] = $count;
        $endpage = ceil($count/$limit);
        if ($page>$endpage) {
            # code...
            $page = $endpage;
        }elseif ($page <1) {
            $page = 1;
        }
        $skip = ($page-1)*$limit;
        $options = [
            'skip'=>$skip,
            'limit'    => $limit
        ];
        $data['data'] = $this->query($where,$options);
        $data['page'] = $endpage;
        return json_encode($data);
    }

    /**
     * Created by PhpStorm.
     * function: update
     * Description:更新操作
     * User: Xiaoxie
     * Email 736214763@qq.com
     * @param array $where
     * @param array $update
     * @param bool $upsert
     * @return int|null
     *
     */
    public function update($where=[],$update=[],$upsert=false)
    {
        $this->bulk->update($where,['$set' => $update], ['multi' => true, 'upsert' => $upsert]);
        $result = $this->mongodb->executeBulkWrite("$this->dbname.$this->collection", $this->bulk, $this->writeConcern);
        return $result->getModifiedCount();
    }

    /**
     * Created by PhpStorm.
     * function: insert
     * Description:插入
     * User: Xiaoxie
     * Email 736214763@qq.com
     * @param array $data
     * @return mixed
     *
     */
    public function insert($data=[])
    {
        $result = $this->bulk->insert($data);
        return $result->getInsertedCount();
    }

    /**
     * Created by PhpStorm.
     * function: delete
     * Description:删除
     * User: Xiaoxie
     * Email 736214763@qq.com
     * @param array $where
     * @param int $limit
     * @return mixed
     *
     */
    public function delete($where=[],$limit=1)
    {
        $result = $this->bulk->delete($where,['limit'=>$limit]);
        return $result->getDeletedCount();
    }

}

function getMillisecond() {
    list($t1, $t2) = explode(' ', microtime());
    return (float)sprintf('%.0f',(floatval($t1)+floatval($t2))*1000);
}


$mongodb = new MongodbClient(['dbname'=>'porn','collection'=>'porns']);
$gets=getMillisecond();
$lts=$gets+86400;
echo $gets;
echo '</br>';
echo $lts;
echo '</br>';
$data = $mongodb->getCount(['filter' => ['expireTime' => ['$gte' => $gets, '$lt' =>$lts]]]);
var_dump($data);

//$m = new MongoDB\Driver\Manager("mongodb://mongouser:Asdfgh123456@149.28.122.121:27017");
//
//$command = new \MongoDB\Driver\Command(['count' => 'porns','query'=>'']);
//
//$result = $m->executeCommand('porn',$command);
//
//var_dump ($result);


//$filter  = [];
//$options = [
//    'limit' => 10
//];
//$query   = new \MongoDB\Driver\Query($filter, $options);
//$rows    = $m->executeQuery('porn.porns', $query)->toArray();
//echo '<pre>';
//print_r($rows);
//echo '</pre>';
//exit;