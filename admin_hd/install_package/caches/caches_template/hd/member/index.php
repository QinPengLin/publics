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
        <div class="r1 num-box" id="number">
            <div class="u-r-title">
                账号名称
            </div>
            <div class="u-r-con">
                <?php if($memberinfo['nickname']) { ?> <?php echo $memberinfo['nickname'];?> <?php } else { ?> <?php echo $memberinfo['username'];?><?php } ?>
                <a class='btn-out' href="<?php echo APP_PATH;?>index.php?m=member&c=index&a=logout">注销账号</a>
            </div>
            <div class="u-r-title">
                账号邮箱
            </div>
            <div class="u-r-con">
                <?php if($memberinfo['email']) { ?>（<?php echo $memberinfo['email'];?>）<?php } ?>
            </div>
            <div class="u-r-title">
                积分数量
            </div>
            <div class="u-r-con">
                <?php echo $memberinfo['point'];?>
            </div>
        </div>
    </div>


</main>
<?php include template('member', 'footer_t'); ?>
<?php include template('member', 'footer_f'); ?>