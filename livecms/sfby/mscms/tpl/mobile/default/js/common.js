$(document).ready(function(){
$(document).bind("click", function (e) {
if($(e.target).closest(".search").length>0){
$(".so-key").show();
}else{
$(".so-key").hide();
}
});
$("img.lazy").lazyload();
$("ul.aa .bb").hover(function(){
$(this).addClass("hover").find("div.cc").show();
},function(){
$(this).removeClass("hover").find("div.cc").hide();
});
$('#keyword').click(function(){
$(".so-key").show();
});
});
function setTab(name,name2,cursel,n){
if(n==0){
n=$('.playerico').length;
}
for(i=1;i<=n;i++){
var menu=document.getElementById(name+i);
var con=document.getElementById(name2+i);
menu.className=i==cursel?"on":"";
con.style.display=i==cursel?"block":"none";
}
};
$(document).ready(function(){
var qcloud={};
$('[_t_nav]').hover(function(){
var _nav = $(this).attr('_t_nav');
clearTimeout( qcloud[ _nav + '_timer' ] );
qcloud[ _nav + '_timer' ] = setTimeout(function(){
$('[_t_nav]').each(function(){
$(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav_hover');
});
$('#'+_nav).stop(true,true).slideDown(0);
}, 0);
},function(){
var _nav = $(this).attr('_t_nav');
clearTimeout( qcloud[ _nav + '_timer' ] );
qcloud[ _nav + '_timer' ] = setTimeout(function(){
$('[_t_nav]').removeClass('nav_hover');
$('#'+_nav).stop(true,true).slideUp(0);
}, 0);
});
});
$(function() {
for (var i = 0; i < $("div[name=ee]").length; i++) {
var m = $("div[name=ee]").eq(i);
if (m.text().length > 170) {
m.attr("ee", m.text());
m.html(m.text().substr(0, 170) + "...<a onClick=\"zan();\" name=\"zhankai\" class=\"y\" href=\"javascript:;\">չ��</a>");
}
}
});
function zan(){
var eh = $(".ee").attr("ee");
$('.ee').html(eh + "<a onClick=\"guan();\" name=\"yinchang\" class=\"y\" href=\"javascript:;\">����</a>");
}
function guan(){
var eh = $(".ee").attr("ee");
eh = eh.substr(0, 170);
$('.ee').html(eh + "...<a onClick=\"zan();\" name=\"zhankai\" class=\"y\" href=\"javascript:;\">չ��</a>");
}
$(function(){
$(".sbtn").click(function(){
if($(this).hasClass("cur"))
{
$(".sbtn").removeClass("cur");
$(".sy").hide();
}
else{
$(".sy").show();
$(".sbtn").addClass("cur");
}
})
$(".sbtn1").click(function(){
if($(this).hasClass("cur"))
{
$(".sbtn1").removeClass("cur");
$(".sy1").hide();
}
else{
$(".sy1").show();
$(".sbtn1").addClass("cur");
}
})
$(".so").click(function(){
if($(this).hasClass("cur"))
{
$(".so").removeClass("cur");
$(".so-key").hide();
}
else{
$(".so-key").show();
$(".so").addClass("cur");
}
})
$(".sbtn2").click(function(){
if($(this).hasClass("cur"))
{
$(".sbtn2").removeClass("cur");
$(".sy2").hide();
}
else{
$(".sy2").show();
$(".sbtn2").addClass("cur");
}
})
});
function $$(id){return document.getElementById(id);}
function Order(o,id,vi){
var tag,leng,i,phtml,box,ubox,uhtml,isno,s1,s2
box=$$(id);
tag=box.getElementsByTagName('li');
leng=tag.length;
uhtml="";
if (o==1){
for(i=leng-1;i>=0;i--){
if(i==leng-1){isno='<li class="new">';}else{isno='<li>';}
uhtml+=isno+tag[i].innerHTML+"</li>";
}
s1="<em class=\"over\">�����</em>"
s2="<em onclick=\"Order(0,'vlink_"+vi+"',"+vi+")\">˳���</em>"
}else{
for(i=leng-1;i>=0;i--){
if(i==0){isno='<li class="new">';}else{isno='<li>';}
uhtml+=isno+tag[i].innerHTML+"</li>";
}
s1="<em onclick=\"Order(1,'vlink_"+vi+"',"+vi+")\">�����</em>"
s2="<em class=\"over\">˳���</em>"
}
$$(id+"_s1").innerHTML=s1;
$$(id+"_s2").innerHTML=s2;
uhtml="<ul>"+uhtml+"</ul>";
box.innerHTML=uhtml;
}
$(function(){ 
$(window).scroll(function() {   
if($(window).scrollTop() >= 300){
$('.gotop').fadeIn(400); 
}else{    
$('.gotop').fadeOut(400);    
}  
});
$('.gotop').click(function(){
$('html,body').animate({scrollTop: '0px'}, 800);}); 
});



var wait=60;
var speed=30;
var user = {
init: function(){
//�����л�
$('.seh_list strong').hover(function(){
$("#seh_sort").show();
},function(){
$("#seh_sort").hide();
});
$('.seh_sort').hover(function(){
$("#seh_sort").show();
},function(){
$("#seh_sort").hide();
});
//��ҳģ��
$('.show_ul li').hover(function(){
if($(this).attr("class")!='show_ul_clo'){
$(this).children(".show_action").show(300);
}
},function(){
$(this).children(".show_action").hide(300);
});
if($('#title-1').length>0){
$('#title-1').poshytip({className: 'tip-yellowsimple',showTimeout: 1,alignTo: 'target',alignX: 'center',alignY: 'bottom',offsetX: 0,offsetY: 60,allowTipHover: false});
}
},
//Validform��֤
form: function(){
$("#albumup_pic").bind('DOMNodeInserted', function(e) {  
if($(e.target).html()!='���ϴ�ͼƬ'){
var pic=$('#pic').val();
$('#album_img').attr('src',mscms_path+'attachment/dancetopic'+pic);
}
}); 
$('.think-form').Validform({postonce:true,tiptype:function(msg,o,cssctl){if(!o.obj.is("form")){var objtip=o.obj.siblings(".Validform_checktip");objtip=$(objtip).get(0)==undefined?o.obj.parent().next().find('.Validform_checktip'):objtip;objtip=$(objtip).get(0)==undefined?o.obj.parents('td').find('.Validform_checktip'):objtip;objtip=$(objtip).get(0)==undefined?o.obj.parents('td').next().find('.Validform_checktip'):objtip;if($(o.obj).attr('datatype')!='verify'){cssctl(objtip,o.type);objtip.text(msg)}else{if($(o.obj).val().length!=5){cssctl(objtip,o.type);objtip.text(msg)}else{objtip.removeClass('Validform_wrong').text('')}}}},datatype:{'mix':function(gets,obj,curform,regxp){var lens=$(obj).attr('data-length');var str=$(obj).val();var realLength=0,len=str.length,charCode=-1;for(var i=0;i<len;i++){charCode=str.charCodeAt(i);if(charCode>=0&&charCode<=128)realLength+=1;else realLength+=2}if(realLength==0){return false}if(realLength>lens){return false}return true},'verify':function(gets,obj,curform,regxp){            var str=$(obj).val();if(str.length<5){return false}else{return}}}
});
}
}
//��������΢������
var miniblog = {
addinit:function(){
var $note = $("#note");//˵˵����
var noteContent = "��һ��˵˵, �ô��֪��������ʲô...";
$note.emotEditor({emot:true, charCount:true, defaultText:noteContent, defaultCss: 'default_color'});
$(".send").click(function(){
var op = $(this).attr('op');
var validCharLength = $note.emotEditor("validCharLength");
if(validCharLength<1 || $note.emotEditor("content")==""){
do_alert('����������˵˵���ݣ�');
$note.emotEditor("focus");
return false;
}
$.getJSON(mscms_path+"index.php/user/ajax/blog?neir="+$note.emotEditor("content")+"&callback=?",function(data) {
if(data['error']==1001){
do_alert('����������˵˵���ݣ�');
$note.emotEditor("focus");
return false;
}
else if(data['error']==1002){
do_alert('˵˵���ݲ��ܳ���140���֣�');
$note.emotEditor("focus");
return false;
}
else if(data['error']==1000){
do_alert('���Ѿ���¼��ʱ��');
}
else if(data['error']==1003){
do_alert('��������̫Ƶ�������Ժ����ԣ�');
$note.emotEditor("focus");
return false;
}
else if(data['error']==1005){
do_alert('��Ǹ������ʧ�ܣ����Ժ����ԣ�');
$note.emotEditor("focus");
return false;
}
else{
$note.html("");
$note.emotEditor("focus");
if(op=='all'){
dt.list(1);
}else{
do_alert('˵˵�����ɹ���',2);
setTimeout('location.replace(location);', 2000);
}
}
});
return false;
});
},
del:function(id){
if(window.confirm('��ȷ��Ҫɾ����')){
$.getJSON(mscms_path+"index.php/user/ajax/blog_del?id="+id+"&callback=?",function(data) {
if(data['error']==1001){
do_alert('��������');
return false;
}
else if(data['error']==1000){
do_alert('����¼�Ѿ���ʱ��');
return false;
}
else if(data['error']==1002){
do_alert('��û��Ȩ�޲�����');
return false;
}
else{
do_alert('ɾ���ɹ���',2);
setTimeout('location.replace(location);', 2000);
}
});
}
}
}
//��Ա��̬
var dtid=1;
var dtpid=0;
var dt = {
list:function(did){
$('#feed_'+dtid).removeClass('on');
$('#feed_'+did).addClass('on');
dtid=did;
dt.init('all',0);
},
init:function(dir,pid){
$("#feed").html('<div class="load" id="load"></div>');
$('#all_'+dtpid).removeClass('current');
$('#all_'+pid).addClass('current');
dtpid=pid;
$.getJSON(mscms_path+"index.php/user/ajax/feed?dir="+dir+"&cid="+dtid+"&random="+Math.random()+"&callback=?",function(data) {
if(data['str']){
$("#feed").html(data['str']);
} else {
$("#feed").html("�������ҳ������쳣����");
}
});
}
}

//��Ա��Ϣ
var listenMsg=0;
var g_blinkswitch = 0; 
var g_blinktitle = document.title; 
var msg = {
init:function(){
$.getJSON(mscms_path+"index.php/user/ajax/msg?random="+Math.random()+"&callback=?",function(data) {
if(data['nums']>0){
$("#left_msg").attr("title",data['nums']+"������Ϣ");
$("#newsmsg img").show();
listenMsg = 1;
setInterval(msg.tishi, 1000); 
}
});
},
tishi:function(){
if (g_blinkswitch % 2 == 0) {
document.title = "������Ϣ��" + g_blinktitle
}else{
document.title = "������" + g_blinktitle
}
g_blinkswitch=g_blinkswitch+1;
},
du:function(){
$.getJSON(mscms_path+"index.php/user/ajax/msg_du?random="+Math.random()+"&callback=?",function(data) {
if(data['error']==1000){
do_alert('����¼�Ѿ���ʱ��');
return false;
} else{
do_alert('ȫ����ǳɹ���',2);
setTimeout('location.replace(location);', 2000);
}
});
},
del:function(id){
if(window.confirm('��ȷ��Ҫɾ����')){
$.getJSON(mscms_path+"index.php/user/ajax/msg_del?id="+id+"&random="+Math.random()+"&callback=?",function(data) {
if(data['error']==1001){
do_alert('��������');
return false;
} else if(data['error']==1000){
do_alert('����¼�Ѿ���ʱ��');
return false;
} else if(data['error']==1002){
do_alert('��û��Ȩ�޲�����');
return false;
} else{
do_alert('ɾ���ɹ���',2);
setTimeout('location.replace(location);', 2000);
}
});
}
}
}
//����
var gbook = {
hf:function(id){
var none=$('#gbook_'+id).css('display');
if(none=='none'){
$("#neir_"+id).emotEditor({emot:true});
$('#gbook_'+id).show();
} else {
$('#gbook_'+id).hide();
}
},
add:function(id,uida){
var neir=$("#neir_"+id).emotEditor("content");
if(neir==""){
do_alert('�ظ����ݲ���Ϊ��!');
return false;
}else{
$.getJSON(mscms_path+"index.php/user/ajax/gbook_hf?fid="+id+"&uida="+uida+"&neir="+neir+"&random="+Math.random()+"&callback=?",function(data) {
if(data['error']==1001){
do_alert('��������');
return false;
} else if(data['error']==1000){
do_alert('����¼�Ѿ���ʱ��');
return false;
} else if(data['error']==1002){
do_alert('�ظ����ݲ���Ϊ�գ�');
return false;
} else if(data['error']==1003){
do_alert('�������Ѿ���ɾ����');
return false;
} else if(data['error']==1004){
do_alert('�ظ���Ա�����ڣ�');
return false;
} else{
do_alert('��ϲ�������Իظ��ɹ�',2);
setTimeout('location.replace(location);', 2000);
}
});
}
},
del:function(id,type){
if(window.confirm('��ȷ��Ҫɾ����')){
$.getJSON(mscms_path+"index.php/user/ajax/gbook_del?id="+id+"&random="+Math.random()+"&callback=?",function(data) {
if(data['error']==1001){
do_alert('��������');
return false;
} else if(data['error']==1000){
do_alert('����¼�Ѿ���ʱ��');
return false;
} else if(data['error']==1002){
do_alert('��û��Ȩ�޲�����');
return false;
} else{
do_alert('ɾ���ɹ�~!',2);
if(type==1){
$('#gbook_hf_'+id).hide(3000);
}else{
setTimeout('location.replace(location);', 2000);
}
}
});
}
}
}
//��˿
var fans = {
del:function(id,type){
var tit = (type=='fans') ? 'ɾ��' : '�������';
if(window.confirm('��ȷ��Ҫ'+tit+'��')){
$.getJSON(mscms_path+"index.php/user/ajax/"+type+"_del?id="+id+"&random="+Math.random()+"&callback=?",function(data) {
if(data['error']==1001){
do_alert('��������');
return false;
} else if(data['error']==1000){
do_alert('����¼�Ѿ���ʱ��');
return false;
} else if(data['error']==1002){
do_alert('��û��Ȩ�޲�����');
return false;
} else{
do_alert(tit+'�ɹ�~!',2);
setTimeout('location.replace(location);', 2000);
}
});
}
}
}
//��ҳ���
var web = {
init:function(dir,cion){
var ok=true;
if(cion>0){
ok=window.confirm('ʹ�ø�ģ����Ҫ�۳�'+cion+'����ң�ȷ��ʹ����');
}
if(ok){
$.getJSON(mscms_path+"index.php/user/ajax/web?dir="+dir+"&random="+Math.random()+"&callback=?",function(data) {
if(data['error']==1001){
do_alert('��������');
return false;
} else if(data['error']==1000){
do_alert('����¼�Ѿ���ʱ��');
return false;
} else if(data['error']==1002){
do_alert('���ļ�����ʹ�ø�ģ�壡');
return false;
} else if(data['error']==1003){
do_alert('���ĵȼ�����ʹ�ø�ģ�壡');
return false;
} else if(data['error']==1004){
do_alert('���Ľ�Ҳ���ʹ�ø�ģ�壡');
return false;
} else{
do_alert('ʹ�óɹ�~!',2);
setTimeout('location.replace(location);', 1000);
}
});
}
},
up:function(){
$("#fileUploadHead").change(function(){
$('#myform').submit();
$(".file_working").show();
$(".banner_clip").hide();
});
}
}
//�ղ�
var fav = {
del:function(link){
if(window.confirm('��ȷ��Ҫɾ����')){
$.getJSON(link+"?random="+Math.random()+"&callback=?",function(data) {
if(data['error']==1002){
do_alert('��û��Ȩ�޲�����');
return false;
} else{
do_alert('ɾ���ɹ�~!',2);
setTimeout('location.replace(location);', 2000);
}
});
}
}
}
//ǩ��
function qiandao(){
$.getJSON(mscms_path+"index.php/user/ajax/qiandao?random="+Math.random()+"&callback=?",function(data) {
if(data['error']==1001){
do_alert('�������Ѿ�ǩ���������������');
$('.mscms_qd span').html('������ǩ��');
return false;
} else if(data['error']==1000){
do_alert('����¼�Ѿ���ʱ��');
return false;
} else{
do_alert(data['str'],2);
$('.mscms_qd span').html('������ǩ��');
}
});
}
//�����������¼
function open_del(cid){
if(window.confirm('��ȷ��Ҫ�������')){
$.getJSON(mscms_path+"index.php/user/ajax/open_del?cid="+cid+"&random="+Math.random()+"&callback=?",function(data) {
if(data['error']==1000){
do_alert('����¼�Ѿ���ʱ��');
return false;
} else{
do_alert('��ϲ��������󶨳ɹ�~��',2);
setTimeout('location.replace(location);', 2000);
}
});
}
}
//����ѡ��
function getsearch(type,text){
$("#keytype").val(type);
$("#keytxt").html(text);
$("#seh_sort").hide();
}
//����
function search_ok(){
var key=$(".seh_v").val();
var type=$("#keytype").val();
if(key==''){
do_alert('������Ҫ�����Ĺؼ���');
}else{
var url=mscms_path+"index.php/"+type+"/search?key="+encodeURIComponent(key);
window.open(url);
}
}

//�����ֻ���֤��
function time(o) {
if (wait == 0) {
o.removeAttribute("disabled");
o.value="��ѻ�ȡ��֤��";
wait = 60;
} else {
o.setAttribute("disabled", true);
o.value="���·���(" + wait + ")";
wait--;
setTimeout(function() {
time(o)
},1000)
}
}
function get_code(s){
var tel = $('#usertel').val(); 
if(tel==''){
do_alert('����д�ֻ����룡');
}else{
s.setAttribute("disabled", true);
$.get("/index.php/reg/telinit?usertel="+tel,function(data) {
if(data){
if(data=='addok'){
do_alert('1����֮��ֻ�ܷ���һ�Σ�');
} else if(data=='1'){
do_alert('��֤�뷢�ͳɹ���',2);
time(s);
}
}else{
alert('��������ʧ�ܣ�');
}
});
}
}
//�б���Ӱȫ������
function playsong(n){
var v = [];
var a=$("input[name='check']"); 
for (var i = 0; i < a.length; i++) {
if(n==1){
if(a[i].checked==true){a[i].checked="";}else{ a[i].checked="checked";}
}else{
if(a[i].checked==true){
var did=a[i].value;
v.push(did);
}
}
}
if(n==2){
if (1 > v.length){ 
do_alert('��ѡ��Ҫ���ŵĵ�Ӱ��');return; 
}else{
window.open(mscms_path+'index.php/dance/playsong?id=' + v.join(','), 'play');
}
}
}
//����ѡ��ͼƬɾ��
function getpicdel(_op) {
var v =0;
var ids=$("input[name='id[]']");  

if(_op=='all'){
for(var i=0;i<ids.length;i++){   
if(ids[i].checked==true){
ids[i].checked="";  
}else{
ids[i].checked="checked";  
}
}
}else{
for(var i=0;i<ids.length;i++){   
if (ids[i].checked==true) { v++; }
}
if (v==0){ 
do_alert('����ѡ��һ��ͼƬ���ܽ��в�����');
return;  
}else{
document.formp.submit();
}
}
}