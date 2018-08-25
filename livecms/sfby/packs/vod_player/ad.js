//默认广告地址
var adsurl="ad.html";
//来路域名
var lailu = document.domain;
//VIP域名，不显示缓冲广告，用|来隔开
var vipdomain = '127.0.0.1|127.0.0.1';
//判断是否为VIP域名
var vip=get_vip(vipdomain,lailu);
//TIP广告
var A = new Array();
if(document.getElementById("mscms_vod_topad")){ //v5
A[0] = document.getElementById("mscms_vod_topad").innerHTML;
}else{
A[0] = document.getElementById("playppvod").innerHTML;
}
A[1] = '加入本站VIP会员联系QQ：'+3159796019;
A[2] = '<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=487039015&amp;site=qq&amp;menu=yes" target="_blank" style="color:#fff">游客以及注册会员可免费观看4集视频!</a>';
A[3] = '<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=487039015&amp;site=qq&amp;menu=yes" target="_blank" style="color:#fff">VIP会员不受限制，立即加入VIP会员！</a>';
function getRandomNum(lbound, ubound) {
return (Math.floor(Math.random() * (ubound - lbound)) + lbound);
};
function mscmstips() {
if(vip=='no'){
var id = getRandomNum(0, 1);
}else{
var id = getRandomNum(0, 4);
}
if(document.getElementById("mscms_vod_topad")){ //v5
document.getElementById("mscms_vod_topad").innerHTML = A[id];
}else{
document.getElementById("playppvod").innerHTML = A[id];
}
};

function get_vip(str,ary) {  
var tmp = str.split('|');  
for(var i=0;i<tmp.length;i++) { 
if(String(ary).indexOf(tmp[i]) >= 0){
//if(tmp[i]==ary){
return 'ok';  
break;     
}   
}  
return 'no';  
}

if(play!='bdhd' && vip=='no'){
document.getElementById("buffer").src = 'loading.html?'+ new Date();
}
if(vip=='ok'){
adsurl="ad.html";
}

setInterval('mscmstips()', 5000);