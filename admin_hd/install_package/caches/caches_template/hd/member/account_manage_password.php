<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template('member', 'header_t'); ?>
<?php include template('member', 'header_f'); ?>
<!-- main -->
<main class="w1200 user-center" id="main">
    <div class="u-left">
        <div class="u-title">账号管理</div>
        <ul>
            <li>
                <a <?php  if(isset($_GET['c']) && $_GET['c']=='index' && empty($_GET['a'])){ ?>class="active"<?php } ?> href="/index.php?m=member&c=index" >账号信息</a>
            </li>
            <li>
                <a <?php  if(isset($_GET['a']) && $_GET['a']=='account_manage_password'){ ?>class="active"<?php } ?>  href="/index.php?m=member&c=index&a=account_manage_password&t=1">修改密码</a>
            </li>
            <li>
                <a href="#pay">充值升级</a>
            </li>
            <li>
                <a <?php  if(isset($_GET['a']) && $_GET['a']=='promote'){ ?>class="active"<?php } ?> href="/index.php?m=member&c=index&a=promote">代理推广</a>
                <span class="icon">积分获取</span>
            </li>
        </ul>
    </div>
    <div class="u-box">
        <div class="r1" id="pwd">
            <div class="u-r-title">
                修改密码
            </div>
            <form method="post" action="" id="myform" name="myform">
                <input name="info[email]" type="hidden" id="email" size="30" value="<?php echo $memberinfo['email'];?>" >
                <input name="dosubmit" type="hidden" id="dosubmit" value="<?php echo L('submit');?>" >
            <div class="u-r-con pwd-box">
                <!-- 添加class  show 显示 -->
                <div class="lable" id="password_txt">
                </div>
                <input type="password" name="info[password]" id="password" i="0" class="input" placeholder="请输入原密码">

                <div class="lable" id="newpassword_txt">
                </div>
                <input type="password" name="info[newpassword]" id="newpassword" i="0" class="input" placeholder="请输入新密码">

                <div class="lable" id="renewpassword_txt">
                </div>
                <input type="password" name="info[renewpassword]" id="renewpassword" i="0" class="input" placeholder="请再次输入新密码">
                <br />
                <button class="btn-sub" id="sb">确定</button>
            </div>
            </form>
        </div>
    </div>


</main>
<script src="<?php echo WEB_PATH;?>statics/hd/js/jquery.min.js"></script>
<script src="<?php echo WEB_PATH;?>statics/hd/js/clipboard.min.js"></script>
<script src="<?php echo WEB_PATH;?>statics/hd/js/index.js"></script>
<script>
    function ck_password(){
        $('#password').attr('i',0);
        var password_val=$('#password').val();
        if(password_val.length<6 || password_val.length>20){
            $('#password_txt').removeClass('label_g');
            $('#password_txt').addClass('label');
            $('#password_txt').addClass('show');//label_g
            $('#password_txt').text('密码在2-20位字符之间！');
        }else {
            $('#password_txt').removeClass('show');
            $('#password_txt').removeClass('label');
            $('#password_txt').addClass('label_g');
            $('#password_txt').text('验证成功！');
            $('#password_txt').addClass('show');
            $('#password').attr('i',1);
        }
    }
    function ck_newpassword(){
        $('#newpassword').attr('i',0);
        var newpassword_val=$('#newpassword').val();
        if(newpassword_val.length<6 || newpassword_val.length>20){
            $('#newpassword_txt').removeClass('label_g');
            $('#newpassword_txt').addClass('label');
            $('#newpassword_txt').addClass('show');//label_g
            $('#newpassword_txt').text('密码在2-20位字符之间！');
        }else {
            $('#newpassword_txt').removeClass('show');
            $('#newpassword_txt').removeClass('label');
            $('#newpassword_txt').addClass('label_g');
            $('#newpassword_txt').text('验证成功！');
            $('#newpassword_txt').addClass('show');
            $('#newpassword').attr('i',1);
        }
    }
    function ck_renewpassword(){
        $('#renewpassword').attr('i',0);
        var renewpassword_val=$('#renewpassword').val();
        var newpassword_val=$('#newpassword').val();
        if(renewpassword_val==newpassword_val){
            $('#renewpassword_txt').removeClass('show');
            $('#renewpassword_txt').removeClass('label');
            $('#renewpassword_txt').addClass('label_g');
            $('#renewpassword_txt').text('验证成功！');
            $('#renewpassword_txt').addClass('show');
            $('#renewpassword').attr('i',1);
        }else {
            $('#renewpassword_txt').removeClass('label_g');
            $('#renewpassword_txt').addClass('label');
            $('#renewpassword_txt').addClass('show');//label_g
            $('#renewpassword_txt').text('两次密码不同！');
        }
    }

    $(function(){
        $("a.is-login").on('click', function(){
            $('.h-center-menu').slideToggle();
        });


        $('#password').blur(function () {
            ck_password();
        });

        $('#newpassword').blur(function () {
            ck_newpassword();
        });
        $('#renewpassword').blur(function () {
            ck_renewpassword();
        });
        $('#sb').click(function(){//
            var password_i=$('#password').attr('i');
            var newpassword_i=$('#newpassword').attr('i');
            var renewpassword_i=$('#renewpassword').attr('i');
            if(password_i==0){
                ck_password();
                return false;
            }
            if(newpassword_i==0){
                ck_newpassword();
                return false;
            }
            if(renewpassword_i==0){
                ck_renewpassword();
                return false;
            }
            $('#myform').submit();
        });
    })
</script>
<?php include template('member', 'footer_f'); ?>