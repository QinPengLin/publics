<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template('member', 'header'); ?>
<script type="text/javascript">
<!--
$(function(){
	$.formValidator.initConfig({autotip:true,formid:"myform",onerror:function(msg){}});
	$("#price").formValidator({onshow:"请输入要充值的金额",onfocus:"充值金额不能为空"}).inputValidator({min:1,max:999,onerror:"充值金额不能为空"}).regexValidator({regexp:"^(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){1,2})?$",onerror:"充值金额必须为整数或小数(保留两位小数)"});
	$("#contactname").formValidator({onshow:"请输入姓名",onfocus:"姓名不能为空"}).inputValidator({min:1,max:999,onerror:"姓名不能为空"});
	$("#email").formValidator({onshow:"请输入email",oncorrect:"格式正确"}).regexValidator({regexp:"email",datatype:"enum",onerror:"错误的emai格式"});	
	$("#code").formValidator({onshow:"请输入验证码",onfocus:"验证码不能为空"}).inputValidator({min:1,max:999,onerror:"验证码不能为空"}).ajaxValidator({
	    type : "get",
		url : "",
		data :"m=pay&c=deposit&a=public_checkcode",
		datatype : "html",
		async:'false',
		success : function(data){	
            if(data == 1)
			{
                return true;
			}
            else
			{
                return false;
			}
		},
		buttons: $("#dosubmit"),
		onerror : "验证码错误",
		onwait : "验证中"
	});
})
//-->
</script>
<div id="memberArea">
<?php include template('member', 'left'); ?>
<div class="col-auto">

<div class="col-1 ">
<h6 class="title">在线充值</h6>
<div class="content">
<?php if(isset($_GET['exchange']) && $_GET['exchange']=='point') { ?>
<div class="point" id='exchange'>
        	<a href="javascript:hide_element('exchange');" hidefocus="true" class="close"><span>关闭</span></a>
            <div class="content"><BR><p>1、您可以通过充值人民币，然后进行积分兑换的方式获取积分</p>
			<p>2、您可以通过回复评论来获取积分</p></div>
            <span class="o1"></span><span class="o2"></span><span class="o3"></span><span class="o4"></span>
        </div>
<?php } ?>
<form name="myform" action="<?php echo APP_PATH;?>index.php?m=pay&c=deposit&a=pay_recharge" method="post" id="myform">
<table width="100%" cellspacing="0" class="table_form">
    <tr>
       <th width="80">余额：</th>        
       <td style="padding:0 0 0 10px"><font style="color:#F00; font-size:22px;font-family:Georgia,Arial; font-weight:700"><?php echo $memberinfo['amount'];?></font> 元</td>
    </tr>
     <tr>
	<th>充值金额：</th>
	<td><input name="info[price]" type="text" id="price" size="8" value="<?php if(is_numeric($_GET['price'])) { ?><?php echo $_GET['price'];?><?php } ?>" class="input-text">&nbsp;元<span id="msgid"></span></td>
     </tr>
  <tr>
       <th>充值方式：</th>
       <td>     
		<?php if($pay_types) { ?><?php echo mk_pay_btn($pay_types);?><?php } else { ?>本站暂未开启在线支付功能，如需帮助请联系管理员。<?php } ?>
	   </td>
     </tr>
  <tr>		
    <th>E-mail：</th>
       <td><input name="info[email]" type="text" id="email" size="30" value="<?php echo $memberinfo['email'];?>"  class="input-text"/></td>
     </tr>
     <tr>
       <th>姓 名：</th>
       <td><input name="info[name]" type="text" id="contactname" size="30" value="<?php echo $memberinfo['username'];?>"  class="input-text"/></td>
     </tr>
     <tr>
       <th>电 话：</th>
       <td><input name="info[telephone]" type="text" id="telephone" size="30"  class="input-text"/> 格式：010-88888888或13888888888<span id="msgid1" ></span></td>
     </tr>
     
     <tr>
       <th>备  注：</th>
       <td><textarea name="info[usernote]"  id="usernote" rows="5" cols="50" value=></textarea></td>
     </tr>
     <tr>
       <th>验证码：</th>
       <td><input name="code" type="text" id="code" size="10"  class="input-text"/> <?php echo form::checkcode('code_img','4','14',110,30);?></td>
     </tr>
     <tr>
       <td></td>
       <td colspan="2"><label>
         <input type="submit" name="dosubmit" id="dosubmit" value="确 定" class="button"/>
         </label></td>
     </tr>
   </table>
   </form>
   </div>
   <span class="o1"></span><span class="o2"></span><span class="o3"></span><span class="o4"></span>
   </div>
   </div>
</div>
<script type="text/javascript">
$(function(){
	$(".payment-show").each(function(i){
		if(i==0){
			$(this).addClass("payment-show-on");
		}
   		$(this).click(
			function(){
				$(this).addClass("payment-show-on");
				$(this).siblings().removeClass("payment-show-on");
			}
		)
 	});
	
})

</script>
<?php include template('member', 'footer'); ?>