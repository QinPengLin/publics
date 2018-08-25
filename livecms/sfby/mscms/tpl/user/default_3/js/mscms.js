/**
 * @Mscms 4.x open source management system
 * @copyright 2009-2015 msvod.cc. All rights reserved.
 * @Author:Msvod QQ:487039015
 * @Dtime:2015-01-25
 */
(function(a){typeof a.CMP=="undefined"&&(a.CMP=function(){var b=/msie/.test(navigator.userAgent.toLowerCase()),c=function(a,b){if(b&&typeof b=="object")for(var c in b)a[c]=b[c];return a},d=function(a,d,e,f,g,h,i){i=c({width:d,height:e,id:a},i),h=c({allowfullscreen:"true",allowscriptaccess:"always"},h);var j,k,l=[];if(g){j=g;if(typeof g=="object"){for(var m in g)l.push(m+"="+encodeURIComponent(g[m]));j=l.join("&")}h.flashvars=j}k="<object ",k+=b?'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ':'type="application/x-shockwave-flash" data="'+f+'" ';for(var m in i)k+=m+'="'+i[m]+'" ';k+=b?'><param name="movie" value="'+f+'" />':">";for(m in h)k+='<param name="'+m+'" value="'+h[m]+'" />';return k+="</object>",k},e=function(c){var d=document.getElementById(c);if(!d||d.nodeName.toLowerCase()!="object")d=b?a[c]:document[c];return d},f=function(a){if(a){for(var b in a)typeof a[b]=="function"&&(a[b]=null);a.parentNode.removeChild(a)}},g=function(a){if(a){var c=typeof a=="string"?e(a):a;if(c&&c.nodeName.toLowerCase()=="object")return b?(c.style.display="none",function(){c.readyState==4?f(c):setTimeout(arguments.callee,15)}()):c.parentNode.removeChild(c),!0}return!1};return{create:function(){return d.apply(this,arguments)},write:function(){var a=d.apply(this,arguments);return document.write(a),a},get:function(a){return e(a)},remove:function(a){return g(a)}}}());var b=function(b){b=b||a.event;var c=b.target||b.srcElement;if(c&&typeof c.cmp_version=="function"){var d=c.skin("list.tree","maxVerticalScrollPosition");if(d>0)return c.focus(),b.preventDefault&&b.preventDefault(),!1}};a.addEventListener&&a.addEventListener("DOMMouseScroll",b,!1),a.onmousewheel=document.onmousewheel=b})(window);

var mscms_zd = 0;
var DomainUrl = mscms_host();
if(DomainUrl!=null){
    document.domain = DomainUrl;
}

//������汾
var browser = {};
var ua = navigator.userAgent.toLowerCase();
var browserStr;
(browserStr = ua.match(/msie ([\d]+)/)) ? browser.ie = browserStr[1] :
(browserStr = ua.match(/firefox\/([\d]+)/)) ? browser.firefox = browserStr[1] :
(browserStr = ua.match(/chrome\/([\d]+)/)) ? browser.chrome = browserStr[1] :
(browserStr = ua.match(/opera.([\d]+)/)) ? browser.opera = browserStr[1] :
(browserStr = ua.match(/version\/([\d]+).*safari/)) ? browser.safari = browserStr[1] : 0;
if (browser.ie==6) {
	window.attachEvent("onunload", function() {
		for ( var id in jQuery.cache ) {
			if ( jQuery.cache[ id ].handle ) {
				try {
					jQuery.event.remove( jQuery.cache[ id ].handle.elem );
				} catch(e) {}
			}
		}
	});
}

//��ȡ��ǰ������
function mscms_host(){
     var host=window.location.host;
     var DomainUrl = window.location.host.match(/[^.]*\.(com\.cn|gov\.cn|net\.cn|cn\.com)(\.[^.]*)?/ig);
     var reip = /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/;
     var hostip=host.split(":");//ȥ��IP�˿�
     if(DomainUrl==null && host!='localhost' && host!='localhost' && !reip.test(hostip[0])){
         var host_arr=host.split("."); 
         var nums=host_arr.length;
         DomainUrl=host_arr[nums-2]+'.'+host_arr[nums-1];
     }
     return DomainUrl;
}

//��¼״̬
function mscms_login(){
     $.getJSON(mscms_loginlink+"?random="+Math.random()+"&callback=?",function(data) {
           if(data['str']){
                $("#mscms_login").html(data['str']);
           } else {
                $("#mscms_login").html("�������ҳ������쳣����");
           }
     });
}
//��¼
function mscms_logadd(){
     var name=$("#mscms_name").val();
     var pass=$("#mscms_pass").val();
     if(name=='' || pass==""){
           do_alert('�ʺš����벻��Ϊ��!');
     }else{
           $.getJSON(mscms_loginaddlink+"?username="+encodeURIComponent(name)+"&userpass="+encodeURIComponent(pass)+"&random="+Math.random()+"&callback=?",function(data) {
               if(data['error']=='10001'){ //�û���Ϊ��
                    do_alert('�ʺŲ���Ϊ��!');
               } else if(data['error']=='10002'){ //����Ϊ��
                    do_alert('���벻��Ϊ��!');
               } else if(data['error']=='10003'){ //�ʺŲ�����
                    do_alert('�����ʺŲ�����!');
               } else if(data['error']=='10004'){ //�������
                    do_alert('�����������!');
               } else if(data['error']=='10005'){ //�ʺű�����
                    do_alert('�����ʺű�����!');
               } else if(data['error']=='10006'){ //����ɹ�
                    mscms_login();
               } else if(data['error']=='10007'){ //�ʼ�δ����
                    do_alert('�����ʺ�δ�����ȥ���伤��!');
               } else { 
                   do_alert(data['error']);
               }
           });
     }
}
//�˳���¼
function mscms_logout(){
     $.getJSON(mscms_logoutlink+"?callback=?",function(data) {
           if(data['error']=='10001'){
                mscms_login();
           } else {
                do_alert('������ϣ�����ʧ��!');
           }
     });
}
//�����б�
function mscms_pl(_pages,_id,_fid){
     $.getJSON(mscms_path+"index.php/pl/index/"+dir+"/"+did+"/"+cid+"/"+_pages+"?random="+Math.random()+"&callback=?",function(data) {
           if(data['str']){
                $("#mscms_pl").html(data['str']);
                if(mscms_zd>0){
                   click_scroll('mscms_pl');
                }
                mscms_zd=1;
           } else {
                $("#mscms_pl").html("�������ҳ������쳣����");
           }
     });
}
//�ύ����
function mscms_pladd(){
     var neir=$("#mscms_pl_content").val();
     var token=$("#pl_token").val();
     if(neir==""){
           do_alert('�������ݲ���Ϊ��!');
     }else{
           $.getJSON(mscms_path+"index.php/pl/add?dir="+dir+"&token="+token+"&did="+did+"&cid="+cid+"&neir="+encodeURIComponent(neir)+"&random="+Math.random()+"&callback=?",function(data) {
                   var msg=data['error'];
	           if(msg == "10000"){
	                     do_alert('վ���Ѿ��ر����ۣ�');
	           } else if(msg == "10001"){
	                     do_alert('��������');
	           } else if(msg == "10002"){
	                     do_alert('�Ƿ��ύ���ݣ�');
	           } else if(msg == "10003"){
	                     do_alert('���ݲ���Ϊ�գ�');
	           } else if(msg == "10004"){
	                     do_alert('����û�е�¼�����ȵ�¼��');
	           } else if(msg == "10006"){
                             mscms_pl(1,0,0);
	           } else if(msg == "10005"){
	                     do_alert('�Բ�������ʧ�ܣ��Ժ����ԣ�');
	           } else if(msg == "10007"){
	                     do_alert('��Ϣ�£������ۣ�');
	           } else {
	                     do_alert(msg);
	           }
           });
     }
}
//���ۻظ�
function mscms_plhf(_id,_text){
     var neir=$("#mscms_pl_hf_"+_id).val();
     var token=$("#pl_token").val();
     if(neir=="" || neir==_text){
           do_alert('���ۻظ����ݲ���Ϊ��!');
     }else{
           $.getJSON(mscms_path+"index.php/pl/add?dir="+dir+"&token="+token+"&fid="+_id+"&did="+did+"&cid="+cid+"&neir="+encodeURIComponent(neir)+"&random="+Math.random()+"&callback=?",function(data) {
                   var msg=data['error'];
	           if(msg == "10000"){
	                     do_alert('վ���Ѿ��ر����ۣ�');
	           } else if(msg == "10001"){
	                     do_alert('��������');
	           } else if(msg == "10002"){
	                     do_alert('�Ƿ��ύ���ݣ�');
                             mscms_pl(1,0,0);
	           } else if(msg == "10003"){
	                     do_alert('���ݲ���Ϊ�գ�');
	           } else if(msg == "10004"){
	                     do_alert('����û�е�¼�����ȵ�¼��');
	           } else if(msg == "10006"){
                             mscms_pl(1,0,0);
	           } else if(msg == "10005"){
	                     do_alert('�Բ������ۻظ�ʧ�ܣ��Ժ����ԣ�');
	           } else if(msg == "10007"){
	                     do_alert('��Ϣ�£������ۣ�');
	           } else {
	                     do_alert(msg);
	           }
           });
     }
}
//ɾ������
function mscms_pldel(_id){
     var token=$("#pl_token").val();
     if(confirm("ϵͳ��ʾ:��ȷ��Ҫɾ����!")){
           $.getJSON(mscms_path+"index.php/pl/del?id="+_id+"&token="+token+"&callback=?",function(data) {
                   var msg=data['error'];
	           if(msg == "10000"){
	                     do_alert('����½�Ѿ���ʱ��');
	           } else if(msg == "10001"){
	                     do_alert('��������');
	           } else if(msg == "10002"){
	                     do_alert('�Ƿ��ύ���ݣ�');
                             mscms_pl(1,0,0);
	           } else if(msg == "10003"){
	                     do_alert('������ɾ�����˵����ۣ�');
	           } else if(msg == "10004"){
                             mscms_pl(1,0,0);
	           } else {
	                     do_alert(msg);
	           }
           });
     }
}
//�����б�
function mscms_gbook(_pages,_id,_fid){
     $.getJSON(mscms_path+"index.php/gbook/lists/"+_pages+"?random="+Math.random()+"&callback=?",function(data) {
           if(data['str']){
                $("#mscms_gbook").html(data['str']);
                if(mscms_zd>0){
                   click_scroll('mscms_gbook');
                }
                mscms_zd=1;
           } else {
                $("#mscms_gbook").html("�������ҳ������쳣����");
           }
     });
}
//�ύ����
function mscms_gbookadd(){
     var token=$("#gbook_token").val();
     var neir=$("#mscms_gbook_content").val();
     if(neir==""){
           do_alert('���ݲ���Ϊ��!');
     } else {
           $.post(mscms_path+"index.php/gbook/add",{token: token,neir: encodeURIComponent(neir)},function(data) {
                   var msg=data['error'];
	           if(msg == "10000"){
	                     do_alert('վ���Ѿ��ر����ԣ�');
	           } else if(msg == "10001"){
	                     do_alert('�Ƿ��ύ���ݣ�');
                             mscms_gbook(1,0,0);
	           } else if(msg == "10002"){
	                     do_alert('���ݲ���Ϊ�գ�');
	           } else if(msg == "10004"){
                             mscms_gbook(1,0,0);
	           } else if(msg == "10003"){
	                     do_alert('�Բ�������ʧ�ܣ��Ժ����ԣ�');
	           } else {
	                     do_alert(msg);
	           }
           },"json");
     }
}
//��Ա��ҳ�����б�
function mscms_home_gbook(_pages){
     $.getJSON(mscms_path+"index.php/home/gbook/ajax/"+uid+"/"+_pages+"?random="+Math.random()+"&callback=?",function(data) {
           if(data['str']){
                $("#mscms_gbook").html(data['str']);
                if(mscms_zd>0){
                   click_scroll('mscms_gbook');
                }
                mscms_zd=1;
           } else {
                $("#mscms_gbook").html("�������ҳ������쳣����");
           }
     });
}
//�ύ��Ա��ҳ����
function mscms_home_gbookadd(){
     var neir=$("#mscms_gbook_content").val();
     var token=$("#gbook_token").val();
     if(neir==""){
           do_alert('�������ݲ���Ϊ��!');
     }else{
           $.getJSON(mscms_path+"index.php/home/gbook/add?token="+token+"&uid="+uid+"&neir="+encodeURIComponent(neir)+"&random="+Math.random()+"&callback=?",function(data) {
                   var msg=data['error'];
	           if(msg == "10000"){
	                     do_alert('��������');
	           } else if(msg == "10001"){
	                     do_alert('�Ƿ��ύ���ݣ�');
                             mscms_home_gbook(1);
	           } else if(msg == "10002"){
	                     do_alert('���ݲ���Ϊ�գ�');
	           } else if(msg == "10003"){
	                     do_alert('����û�е�¼�����ȵ�¼��');
	           } else if(msg == "10004"){
	                     do_alert('�Բ�������ʧ�ܣ��Ժ����ԣ�');
	           } else if(msg == "10005"){
                             mscms_home_gbook(1);
	           } else if(msg == "10006"){
	                     do_alert('��Ϣ�£������ԣ�');
	           } else {
	                     do_alert(msg);
	           }
           });
     }
}
//��Ա��ҳ���Իظ�
function mscms_home_gbookhf(_id,_text){
     var neir=$("#mscms_gbook_hf_"+_id).val();
     var token=$("#gbook_token").val();
     if(neir=="" || neir==_text){
           do_alert('�ظ����ݲ���Ϊ��!');
     }else{
           $.getJSON(mscms_path+"index.php/home/gbook/add?token="+token+"&fid="+_id+"&uid="+uid+"&neir="+encodeURIComponent(neir)+"&random="+Math.random()+"&callback=?",function(data) {
                   var msg=data['error'];
	           if(msg == "10000"){
	                     do_alert('��������');
	           } else if(msg == "10001"){
	                     do_alert('�Ƿ��ύ���ݣ�');
                             mscms_home_gbook(1);
	           } else if(msg == "10002"){
	                     do_alert('���ݲ���Ϊ�գ�');
	           } else if(msg == "10003"){
	                     do_alert('����û�е�¼�����ȵ�¼��');
	           } else if(msg == "10004"){
	                     do_alert('�Բ�������ʧ�ܣ��Ժ����ԣ�');
	           } else if(msg == "10005"){
                             mscms_home_gbook(1);
	           } else if(msg == "10006"){
	                     do_alert('��Ϣ�£������ԣ�');
	           } else {
	                     do_alert(msg);
	           }
           });
     }
}
//ɾ����Ա��ҳ����
function mscms_home_gbookdel(_id){
     var token=$("#gbook_token").val();
     if(confirm("ϵͳ��ʾ:��ȷ��Ҫɾ����!")){
           $.getJSON(mscms_path+"index.php/home/gbook/del?id="+_id+"&token="+token+"&callback=?",function(data) {
                   var msg=data['error'];
	           if(msg == "10000"){
	                     do_alert('����½�Ѿ���ʱ��');
	           } else if(msg == "10001"){
	                     do_alert('��������');
	           } else if(msg == "10002"){
	                     do_alert('�Ƿ��ύ���ݣ�');
                             mscms_home_gbook(1);
	           } else if(msg == "10003"){
	                     do_alert('������ɾ�����˵����ԣ�');
	           } else if(msg == "10004"){
                             mscms_home_gbook(1);
	           } else {
	                     do_alert(msg);
	           }
           });
     }
}
//������ָ��λ��
function click_scroll(_id) {
     var scroll_offset = $("#"+_id+"").offset();  //�õ�pos���div���offset����������ֵ��top��left  
     $("body,html").animate({
           scrollTop:scroll_offset.top  //��body��scrollTop����pos��top����ʵ���˹���   
     },0);
}
//����
var mscms_share_url,mscms_share_id,mscms_share_title;
function mscms_copy(url,id,title){
     mscms_share_url=url;
     mscms_share_id=id;
     mscms_share_title=title;
     mscms_inc_js(mscms_path+'packs/js/jquery.zclip.min.js');
     setTimeout("copy_mscms();",500);
}
function copy_mscms() {
     var clip = new ZeroClipboard.Client(); // �½�һ������
     clip.setHandCursor( true );
     clip.setText(mscms_share_url); // ����Ҫ���Ƶ��ı���
     clip.addEventListener( "mouseUp", function(client) {
	 do_alert(mscms_share_title,2);
     });
     clip.glue(mscms_share_id); // ����һ��λ�ò��ɵ���
     return true;
}
//cmp��Ƶ������
function mp3_play() {
     var flashvars = { 
		api : "cmp_loaded",
		skins : mp3_t+"packs/vod_player/cmp/mp3.swf",
		auto_play : "1",
                play_mode : "1",
                play_id   : "1",
		lists     : mp3_p+'/url/cmp/'+mp3_i+'?mscms.mp3'
     };
     var html = CMP.create("cmp", mp3_w+"px", mp3_h+"px", mp3_t+"packs/vod_player/cmp/cmp.swf", flashvars, {wmode:"transparent"});
     document.writeln(html);
}
//jp��Ƶ��������LRC
function mp3_jplayer() {
     mscms_inc_js(mp3_p+'/url/jp/'+mp3_i);
     document.write('<link href="'+mscms_path+'packs/vod_player/jplayer/skin/lrc/css.css" rel="stylesheet" type="text/css" />');
     document.write('<script type="text/javascript" src="'+mscms_path+'packs/vod_player/jplayer/js/lrc.js"></script>');
     document.write('<script type="text/javascript" src="'+mscms_path+'packs/vod_player/jplayer/js/jquery.jplayer.min.js"></script>');
     document.write('<div id="mscms_lyric" onmouseover="$(\'.seegc\').show();" onmouseout="$(\'.seegc\').hide();"><div class="seegc" style="display: none;"><a href="'+mp3_l+'" target="_blank">��<br>��<br>��<br>��</a></div><p id="LR1"></p><p id="LR2"></p><p id="LR3"></p><p id="LR4"></p><p id="LR5"></p><p id="LR6"></p><p id="LR7"></p></div><div class="mscms_jplayer"><div id="radioPlayer"class="jp-jplayer"></div><div id="jp_container_1"class="jp-audio"><div class="jp-type-single"><div class="jp-interface clearfix"><div class="playerMain-01"><p><span id="PlayStateTxt">���ڲ���:</span><span id="play_musicname">'+mp3_n+'</span></p><div class="jp-time-holder"><div class="jp-current-time">00:00</div>/<div class="jp-duration">00:00</div></div></div><div class="playerMain-02"><div class="jp-progress"><div class="jp-seek-bar"><div class="jp-play-bar"></div></div></div></div>');
     document.write('<div class="playerMain-03"><div class="fl"><ul class="jp-controls"><li><a href="javascript:;"class="jp-play"tabindex="1">����</a></li><li><a style="display:none;"href="javascript:;"class="jp-pause"tabindex="1">��ͣ</a></li></ul></div><div class="fr"><ul class="ku-volume"><li><a href="javascript:{};"class="jp-mute"tabindex="1"title="����">����</a></li><li><a href="javascript:{};"class="jp-unmute"style="display:none;"tabindex="1"title="ȡ������">ȡ������</a></li><li class="volume-bar-wrap"><div class="jp-volume-bar"><div class="jp-volume-bar-value"></div></div></li><li><a href="javascript:;"class="jp-volume-max"tabindex="1"title="�������">�������</a></li></ul></div><p class="ringDown"><a href="'+mp3_x+'"target="_blank">��Ӱ����</a></p></div></div>');
     document.write('<div class="jp-no-solution"><span>���ų��ֹ���,����Ҫ���£�</span>�Բ�������Ҫ������������������°汾���������flash�������汾��<br/><a href="http://get.adobe.com/flashplayer/"target="_blank">�������Flash plugin>></a></div></div></div></div>');
     setTimeout("get_jpplay();",1000);
}
function get_jpplay() {
     if($("#radioPlayer").length==0){
          setTimeout("get_jpplay",1000);
     }else{
          $("#radioPlayer").jPlayer({
             supplied: "mp3,m4a",
             swfPath: mscms_path+"packs/vod_player/jplayer/js",
             wmode: "window",
             ready:function (event){ 
                  if(mp3_u.indexOf(".m4a")>0){
	              $("#radioPlayer").jPlayer("setMedia", {m4a:mp3_u}).jPlayer("play");
                  }else{
	              $("#radioPlayer").jPlayer("setMedia", {mp3:mp3_u}).jPlayer("play");
                  }
                  pu.downloadlrc(0);
                  pu.PlayLrc(0);
             },
             ended: function () {
                  if(mp3_u.indexOf(".m4a")>0){
	              $("#radioPlayer").jPlayer("setMedia", {m4a:mp3_u}).jPlayer("play");
                  }else{
	              $("#radioPlayer").jPlayer("setMedia", {mp3:mp3_u}).jPlayer("play");
                  }
                  pu.downloadlrc(0);
                  pu.PlayLrc(0);
             }
          });
     }
}
//�첽����JS
function mscms_inc_js(path) { 
      var sobj = document.createElement('script'); 
      sobj.type = "text/javascript"; 
      sobj.src = path; 
      var headobj = document.getElementsByTagName('head')[0]; 
      headobj.appendChild(sobj); 
}
//��Ա�ϴ�ͷ��ɹ�����
function UploadPicSucceed(data) {
    do_alert('��ϲ��������ͷ��ɹ���',2);
    setTimeout('location.replace(location);', 2000);
}
//��Ա�ϴ�����
var layerid=0;
var mscms_tsid=5;
var layersrc,layert,layerw,layerh,mscms_msg;
function mscms_up(dir,fid,type,tsid,nums,sid){
    if(layerid==0){
        mscms_inc_js(mscms_path+'packs/layer/layer.min.js');
        layerid++;
    }
    layerw='50%'
    layerh="50%";
    layert='�ϴ�����';
    layersrc=mscms_path+'index.php/upload?dir='+dir+'&fid='+fid+'&type='+type+'&tsid='+tsid+'&nums='+nums+'&sid='+sid;
    setTimeout("up_mscms();",100);
}
//TAGS��ǩ
function mscms_tags(fid){
    if(layerid==0){
        mscms_inc_js(mscms_path+'packs/layer/layer.min.js');
        layerid++;
    }
    layerw='50%'
    layerh="70%";
    layert='TAGS��ǩѡ��';
    layersrc=mscms_path+'index.php/tags?fid='+fid;
    setTimeout("up_mscms();",100);
}
//�����Զ���IF��
function mscms_if(title,link,w,h){
    if(layerid==0){
        mscms_inc_js(mscms_path+'packs/layer/layer.min.js');
        layerid++;
    }
    layersrc=link;
    layerw=w;
    layerh=h;
    layert=title;
    setTimeout("up_mscms();",100);
}
function up_mscms(){
    $.layer({
        type: 2,
        title: [
            layert, 
            'background:#2B2E37; height:40px; color:#fff; border:none;'
        ], 
        border:[0],
        area: [layerw, layerh],
        iframe: {src: layersrc}
    })
}
//���ı��༭��
function mscms_editor(ids,sid){
    var editor;
    if(sid==2){
	KindEditor.ready(function(K) {
		editor = K.create('textarea[name="'+ids+'"]', {
		      allowFileManager : true,
		      afterBlur: function(){this.sync();}
		});
	});
    }else{
	KindEditor.ready(function(K) {
		editor = K.create('textarea[name="'+ids+'"]', {
			resizeType : 1,
			allowPreviewEmoticons : false,
			allowImageUpload : false,
			items : [
				'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
				'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
				'insertunorderedlist', '|', 'emoticons', 'image', 'link'],
			afterBlur: function(){this.sync();}
		});
	});
    }
}
//������ʾ
function do_alert( msg ,tid){
    if(layerid==0){
        mscms_inc_js(mscms_path+'packs/layer/layer.min.js');
    }
    mscms_msg='<font color=#111>'+msg+'</font>'; //��ʾ��
    if(tid==undefined || tid==1){
        mscms_tsid=8; //������ʾͼ
    } else {
        mscms_tsid=1; //�ɹ���ʾͼ
    }
    if(layerid==0){
        setTimeout("mscms_alert();",500);
    }else{
        mscms_alert();
    }
}
function mscms_alert(){
    if (typeof(layer) != "undefined") { 
       layerid++;
       layer.msg(mscms_msg,2,mscms_tsid);
    }
}
