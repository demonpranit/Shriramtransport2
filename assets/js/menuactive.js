$(function () {
    SetNavBarActive();
});

function SetNavBarActive() {
    
    var pageName = document.location.pathname;
    var navs = $(".header .main-header .header-nav ul.main-menu li");
    var mobileNav = $("#sticky-header.tg-header__area .tgmobile__menu .navigation li");
    if (pageName.indexOf("index") > -1) {
        $(navs).eq(0).find('a').addClass("active");
        $(mobileNav).eq(0).addClass("active");
    }
    else if (pageName.indexOf("about") > -1) {
        $(navs).eq(1).find('a').eq(0).addClass("active");
        $(navs).eq(1).find('a').eq(1).addClass("active");
        // $(mobileNav).eq(1).addClass("active");
    }
    else if (pageName.indexOf("vision") > -1) {
        $(navs).eq(1).find('a').eq(0).addClass("active");
        $(navs).eq(1).find('a').eq(2).addClass("active");
        // $(mobileNav).eq(1).addClass("active");
    }
    else if (pageName.indexOf("trackyourparcel") > -1) {
        $(navs).eq(1).find('a').eq(0).addClass("active");
        $(navs).eq(1).find('a').eq(3).addClass("active");
        // $(mobileNav).eq(1).addClass("active");
    }
    else if (pageName.indexOf("career") > -1) {
        $(navs).eq(1).find('a').eq(0).addClass("active");
        $(navs).eq(1).find('a').eq(4).addClass("active");
        // $(mobileNav).eq(1).addClass("active");
    }
    else if (pageName.indexOf("domestic-services") > -1) {
        $(navs).eq(6).find('a').eq(0).addClass("active");
        $(navs).eq(6).find('a').eq(1).addClass("active");
        // $(mobileNav).eq(1).addClass("active");
    }
    else if (pageName.indexOf("international-service") > -1) {
        $(navs).eq(6).find('a').eq(0).addClass("active");
        $(navs).eq(6).find('a').eq(2).addClass("active");
        // $(mobileNav).eq(1).addClass("active");
    }
    else if (pageName.indexOf("e-commerce-delivery") > -1) {
        $(navs).eq(6).find('a').eq(0).addClass("active");
        $(navs).eq(6).find('a').eq(3).addClass("active");
        // $(mobileNav).eq(1).addClass("active");
    }
    else if (pageName.indexOf("express-delivery") > -1) {
        $(navs).eq(6).find('a').eq(0).addClass("active");
        $(navs).eq(6).find('a').eq(4).addClass("active");
        // $(mobileNav).eq(1).addClass("active");
    }
    else if (pageName.indexOf("same-day-delivery") > -1) {
        $(navs).eq(6).find('a').eq(0).addClass("active");
        $(navs).eq(6).find('a').eq(5).addClass("active");
        // $(mobileNav).eq(1).addClass("active");
    }
    else if (pageName.indexOf("warehousing-fulfilment") > -1) {
        $(navs).eq(6).find('a').eq(0).addClass("active");
        $(navs).eq(6).find('a').eq(6).addClass("active");
        // $(mobileNav).eq(1).addClass("active");
    }
    else if (pageName.indexOf("city-outlet") > -1) {
        $(navs).eq(13).find('a').eq(0).addClass("active");
        $(navs).eq(13).find('a').eq(1).addClass("active");
        // $(mobileNav).eq(1).addClass("active");
    }
    else if (pageName.indexOf("rural-outlet") > -1) {
        $(navs).eq(13).find('a').eq(0).addClass("active");
        $(navs).eq(13).find('a').eq(2).addClass("active");
        // $(mobileNav).eq(1).addClass("active");
    }
    else if (pageName.indexOf("contact") > -1) {
        $(navs).eq(17).find('a').eq(0).addClass("active");
        
        // $(mobileNav).eq(1).addClass("active");
    }
    
}


