<?php
/**
 * tpshop
 * ============================================================================
 * 版权所有 2015-2027 深圳搜豹网络科技有限公司，并保留所有权利。
 * 网站地址: http://www.tp-shop.cn
 * ----------------------------------------------------------------------------
 * 这不是一个自由软件！您只能在不用于商业目的的前提下对程序代码进行修改和使用 .
 * 不允许对程序代码以任何形式任何目的的再发布。
 * ============================================================================
 * Author: IT宇宙人
 * Date: 2015-09-09
 */
namespace app\common\model;
use app\common\util\TpshopException;
use think\Model;
class GoodsType extends Model {
    public function spec()
    {
        return $this->hasMany('spec', 'type_id', 'id')->order('`order` desc, id asc');
    }

    public function goodsAttribute()
    {
        return $this->hasMany('GoodsAttribute', 'type_id', 'id')->order('`order` desc');
    }

    public function save($data = [], $where = [], $sequence = null)
    {
        // TODO: Change the autogenerated stub
        $result = parent::save($data, $where, $sequence);
        $spec = input('spec/a', []);
        $attribute = input('attribute/a', []);
        foreach($spec as $spec_item){
            if(array_key_exists('id', $spec_item) && $spec_item['id'] > 0){
                $goodsSpec = Spec::get($spec_item['id']);
            }else{
                $goodsSpec = new Spec();
            }
            $goodsSpec->data($spec_item, true);
            $goodsSpec->type_id = $this->getAttr('id');
            $goodsSpec->save();
            $item_order_index = 0;
            if($spec_item['item']){
                foreach($spec_item['item'] as $item){
                    if(array_key_exists('id',$item) && $item['id'] > 0){
                        $specItem = SpecItem::get($item['id']);
                    }else{
                        $specItem = new SpecItem();
                    }
                    $specItem->data($item, true);
                    $specItem->order_index = $item_order_index;
                    $specItem->spec_id = $goodsSpec->id;
                    $specItem->save();
                    $item_order_index ++;
                }
            }
        }
        $attr_ids = [];
        foreach($attribute as $attribute_item){
            if(array_key_exists('attr_id', $attribute_item) && $attribute_item['attr_id'] > 0){
                $goodsAttribute = GoodsAttribute::get($attribute_item['attr_id']);
            }else{
                $goodsAttribute = new GoodsAttribute();
            }
            $goodsAttribute->data($attribute_item, true);
            $goodsAttribute->type_id = $this->getAttr('id');
            $goodsAttribute->save();
            array_push($attr_ids, $goodsAttribute->attr_id);
        }
        if(count($attr_ids) > 0){
            db('goods_attribute')->where(['type_id'=>$this->getAttr('id')])->where('attr_id','NOTIN', $attr_ids)->delete();
        }
        return $result;
    }

    public function delete()
    {
        $id = $this->getAttr('id');
        $specs = db('spec')->where('type_id', $id)->select();
        if($specs){
            $spec_item_ids = [];
            foreach ($specs as $spec) {
                $spec_items = db('spec_item')->where('spec_id', $spec['id'])->select();
                if ($spec_items) {
                    foreach ($spec_items as $spec_item) {
                        array_push($spec_item_ids, $spec_item['id']);
                        $spec_goods_price = db('spec_goods_price')->whereOr('key', $spec_item['id'])
                            ->whereOr('key', 'LIKE', '%\_' . $spec_item['id'])->whereOr('key', 'LIKE', $spec_item['id'] . '\_%')->find();
                        if ($spec_goods_price) {
                            $goods_name = db('goods')->where('goods_id', $spec_goods_price['goods_id'])->value('goods_name');
                            throw new TpshopException('删除商品模型', 0, ['status' => 0, 'msg' => $goods_name . '在使用该规格项，不能删除']);
                        }
                    }
                }
            }
            db('spec_item')->where('spec_id','IN',$spec_item_ids)->delete();
        }
        db('spec')->where('type_id', $id)->delete();
        return parent::delete(); // TODO: Change the autogenerated stub
    }
}
