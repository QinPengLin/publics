 
//À¸Ä¿ÇÐ»»
function play_cmd(n){
for (i=1; i<5; i++) {
if(i==n){
$('#t_'+i).addClass('cur');
$('#s_'+i).show();
}else{
$('#t_'+i).removeClass('cur');
$('#s_'+i).hide();
}
}
}
 //¶¥ÊÓÆµ 
function vod_ding(id){
$.getJSON(mscms_path+"index.php/vod/ajax/vodding/"+id+"?callback=?",function(data) {
if(data){
if(data['msg']=='ok'){
$("#dhits").text(parseInt($("#dhits" ).text()) + 1);
}else{
do_alert(data['msg'],2);
}
} else {
do_alert('ÍøÂç¹ÊÕÏ£¬Á¬½ÓÊ§°Ü!');
}
});
}
//²ÈÊÓÆµ 
function vod_cai(id){
$.getJSON(mscms_path+"index.php/vod/ajax/vodcai/"+id+"?callback=?",function(data) {
if(data){
if(data['msg']=='ok'){
$("#chits").text(parseInt($("#chits" ).text()) + 1);
}else{
do_alert(data['msg'],2);
}
} else {
do_alert('ÍøÂç¹ÊÕÏ£¬Á¬½ÓÊ§°Ü!');
}
});
}
 
//ÊÕ²ØÊÓÆµ 
function vod_fav(id){
$.getJSON(mscms_path+"index.php/vod/ajax/vodfav/"+id+"?callback=?",function(data) {
if(data){
if(data['msg']=='ok'){
$("#shits").text(parseInt($("#shits" ).text()) + 1);
}else{
do_alert(data['msg'],2);
}
} else {
do_alert('ÍøÂç¹ÊÕÏ£¬Á¬½ÓÊ§°Ü!');
}
});

}