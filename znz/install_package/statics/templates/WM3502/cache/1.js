"use strict";
function shop_click(n) {
    var t = document.getElementById(n + "_dress"), i = t.style.display;
    $("#dress_k ul").css("display", "none"), t.style.display = "none" == i || "" == i ? "block" : "none"
}
$(document).ready(function () {
    function n(n) {
        this.dd = n, this.placeholder = this.dd.children("span"), this.opts = this.dd.find("ul.dropdown > li"), this.val = "", this.index = -1, this.initEvents()
    }

    var t = (document.getElementById("button"), document.getElementById("menu1")), i = (document.getElementById("bt2"), document.getElementById("div1")), e = (document.getElementById("bt3"), document.getElementById("div2"));
    $(".myDiv").on("click", function () {
        $(this).data("flag") ? $(this).data("flag", !1).children(".caret").removeClass("active") : $(this).data("flag", !0).children(".caret").addClass("active")
    });
    var c = (new Swiper(".swiper-container", {
        pagination: ".swiper-pagination",
        loop: !0,
        paginationClickable: !0,
        autoplay: 5e3,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev"
    }), $("#btn").click(function () {
        $(".subNavBox").is(":hidden") ? $(".subNavBox").show() : $(".subNavBox").hide()
    }));
    $(".subNavBox").on("click", ".subNav", function () {
        $(this).toggleClass("currentDd").siblings(".subNav").removeClass("currentDd"), $(this).toggleClass("currentDt").siblings(".subNav").removeClass("currentDt"), $(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500)
    }).on("click", ".navContent>li", function () {
        var n = $(this);
        c.val(n.text()), $(this).parent().parent().hide()
    }), $(".myDiv").on("click", function () {
        $(this).next("ul").slideToggle(300).siblings("ul").slideUp(500)
    }), $(".bar").on("click", function () {
        $(".navBox").toggle()
    }), $("#activity1").on("click", function () {
        this.className = "activity", this.innerHTML = "宸插弬鍔犳椿鍔�"
    }), $("#activity2").on("click", function () {
        this.className = "activity", this.innerHTML = "宸插弬鍔犳椿鍔�"
    }), $("#activity3").on("click", function () {
        this.className = "activity", this.innerHTML = "宸插弬鍔犳椿鍔�"
    }), $("#btn1").on("click", function () {
        "block" == t.style.display ? t.style.display = "none" : t.style.display = "block"
    }), $("#bt2").on("click", function () {
        "block" == i.style.display ? i.style.display = "none" : i.style.display = "block"
    }), $("#bt3").on("click", function () {
        "block" == e.style.display ? e.style.display = "none" : e.style.display = "block"
    }), $("#btn1").on("click", function () {
        "block" == t.style.display ? t.style.display = "none" : t.style.display = "block"
    }), $("#bt2").on("click", function () {
        "block" == i.style.display ? i.style.display = "none" : i.style.display = "block"
    }), $("#bt3").on("click", function () {
        "block" == e.style.display ? e.style.display = "none" : e.style.display = "block"
    }), $("#dateInput1").datePicker(), $("#dateInput2").datePicker(), $("#btnSelectDate").on("click", function () {
        datePicker.selectDate("2010-01-01")
    }), $("#btnFocusDP").on("click", function () {
        datePicker.focus()
    }), $("#btnShowDP").on("click", function () {
        datePicker.show()
    }), $("#btnHideDP").on("click", function () {
        datePicker.hide()
    }), $("#btnPrev").on("click", function () {
        datePicker.prev()
    }), $("#btnNext").on("click", function () {
        datePicker.next()
    }), $("#btnSetMin").on("click", function () {
        datePicker.setMinDate("2016-01-01")
    }), $("#btnSetMax").on("click", function () {
        datePicker.setMaxDate("2016-01-31")
    }), n.prototype = {
        initEvents: function () {
            var n = this;
            n.dd.on("click", function (n) {
                return $(this).toggleClass("active"), !1
            }), n.opts.on("click", function () {
                var t = $(this);
                n.val = t.text(), n.index = t.index(), n.placeholder.text(n.val)
            })
        }, getValue: function () {
            return this.val
        }, getIndex: function () {
            return this.index
        }
    }, $(function () {
        new n($("#dd"));
        $(document).click(function () {
            $(".wrapper-dropdown-3").removeClass("active")
        })
    })
}), $(window).load(function () {
    var n = $("#mon"), t = $("#mon-adds"), i = $("#iconchange"), e = $("#iconchange1"), c = $("#timecil"), s = $("#timeshow");
    n.click(function () {
        "none" == t.css("display") ? (i.className = "triangle-up", t.css("display", "block")) : "block" == t.css("display") && (i.className = "triangle-down", t.css("display", "none"))
    }), c.click(function () {
        "none" == s.css("display") ? (e.className = "triangle-up", s.css("display", "block")) : "block" == s.css("display") && (e.className = "triangle-down", s.css("display", "none"))
    }), t.click(function () {
        i.className = "triangle-down", t.css("display", "none")
    });
    var l = $("#turndown"), a = $("#turnup"), o = $("#monthh"), d = $("#year"), r = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], u = 2017, y = 7;
    l.click(function () {
        y < 1 ? (y = 11, u--, d.html(u), o[0].innerHTML = r[y]) : (y--, o[0].innerHTML = r[y])
    }), a.click(function () {
        y > 10 ? (y = 0, u++, d.html(u), o[0].innerHTML = r[y]) : (y++, o[0].innerHTML = r[y])
    });
    var p = $("#btn-left"), k = $("#btn-left-d"), b = $("#btn-right"), v = $("#btn-right-d"), h = $("#pageact"), f = $("#pagenoact");
    1 != h.attr("value") && h.attr("value") != f.value ? (p.css("display", "block"), k.css("display", "none")) : h.attr("value") == f.attr("value") ? (p.css("display", "block"), k.css("display", "none"), v.css("display", "block"), b.css("display", "none")) : (k.css("display", "block"), p.css("display", "none"), b.css("display", "block"), v.css("display", "none"))
});