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

