<?php
/**
 * Created by PhpStorm.
 * User: macbook
 * Date: 2018/11/4
 * Time: 下午11:38
 */

class  CreateCollection  {
    protected  $cmd  = array();

    function  __construct ( $collectionName ) {
        $this -> cmd [ "create" ] = (string) $collectionName ;
    }
    function  setAutoIndexId ( $bool ) {
        $this -> cmd [ "autoIndexId" ] = (bool) $bool ;
    }
    function  setCappedCollection ( $maxBytes ,  $maxDocuments  =  false ) {
        $this -> cmd [ "capped" ] =  true ;
        $this -> cmd [ "size" ]   = (int) $maxBytes ;

        if ( $maxDocuments ) {
            $this -> cmd [ "max" ] = (int) $maxDocuments ;
        }
    }
    function  usePowerOf2Sizes ( $bool ) {
        if ( $bool ) {
            $this -> cmd [ "flags" ] =  1 ;
        } else {
            $this -> cmd [ "flags" ] =  0 ;
        }
    }
    function  setFlags ( $flags ) {
        $this -> cmd [ "flags" ] = (int) $flags ;
    }
    function  getCommand () {
        return new  MongoDB\Driver\Command( $this -> cmd );
    }
    function  getCollectionName () {
        return  $this -> cmd [ "create" ];
    }
}


$m = new MongoDB\Driver\Manager("mongodb://mongouser:Asdfgh123456@149.28.122.121:27017");

$createCollection  = new  CreateCollection ( "porns" );
$createCollection -> setCappedCollection ( 64  *  1024 );

$command  =  $createCollection -> getCommand ();
$cursor  =  $m-> executeCommand ( "porn" ,  $command );
$response  =  $cursor -> toArray ()[ 0 ];
var_dump ( $response );


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