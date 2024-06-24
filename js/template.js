$(document).ready(function () {
    /* ================ Check for Mobile. ================ */
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      $("html").addClass("touch");
    } else {
      $("html").addClass("no-touch");
    }
  
    $(".loader-in").append(
      '<div class="status"><span class="spin"></span><span></span></div>'
    );
  
    $(".page-loader").fadeOut();
    $(".loader-in").delay(500).fadeOut("slow");
    $("body").delay(500).removeAttr("style");
  
 
 
 
  
    $("#featured").owlCarousel({
      loop: true,
      margin: 10,
      dots: true,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      animateOut: "fadeOut",
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  
    $("#partners").owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      dots: true,
      nav: false,
      autoplay: true,
      responsive: {
        0: {
          items: 2,
          nav: false,
        },
        600: {
          items: 4,
          nav: false,
        },
        1000: {
          items: 6,
          nav: false,
        },
      },
    });
    $("#relatedItens").owlCarousel({
      loop: false,
      items: 4,
      margin: 10,
      dots: false,
      nav: true,
      navText: [
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>',
      ],
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      animateOut: "fadeOut",
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        480: {
          items: 2,
        },
        769: {
          items: 4,
        },
      },
    });
  
   
  
    jQuery("input[id=input-name").blur(function () {
      var nome = document.getElementById("input-name");
  
      jQuery("#jform_name").val(nome.value);
    });
  
    jQuery("input[id=username").blur(function () {
      var nome = document.getElementById("username");
  
      jQuery("#jform_username").val(nome.value);
    });
    jQuery("input[id=username").blur(function () {
      var nome = document.getElementById("username");
  
      jQuery("#jform_username").val(nome.value);
    });
  
    jQuery("input[id=password1").blur(function () {
      var nome = document.getElementById("password1");
  
      jQuery("#jform_password1").val(nome.value);
    });
  
    jQuery("input[id=password2").blur(function () {
      var nome = document.getElementById("password2");
  
      jQuery("#jform_password2").val(nome.value);
    });
  
    jQuery("input[id=input-email1").blur(function () {
      var nome = document.getElementById("input-email1");
  
      jQuery("#jform_email1").val(nome.value);
    });
  
    jQuery("select[id=input-sexo").blur(function () {
      var sexo = document.getElementById("input-sexo");
      var registerSexo = $("input[name='jform[com_fields][sexo]']");
  
      registerSexo.each(function (e, val) {
        if (val.value === sexo.value) {
          $(this).attr("checked", true);
        }
      });
    });
  
    jQuery("input[id=input-orgao").blur(function () {
      var nome = document.getElementById("input-orgao");
  
      jQuery("#jform_com_fields_orgao_de_lotacao_atual").val(nome.value);
    });
  
    jQuery("input[id=input-nascimento").blur(function () {
      var nome = document.getElementById("input-nascimento");
  
      jQuery("#jform_com_fields_data_de_nascimento").val(nome.value);
    });
  
    jQuery("input[id=input-posse").blur(function () {
      var nome = document.getElementById("input-posse");
  
      jQuery("#jform_com_fields_data_de_posse_como_ati").val(nome.value);
    });
  
    var check_ati = jQuery("#jform_com_fields_ati_mgi input");
    if (check_ati.is(":checked")) {
      jQuery("#check_ati").hide();
    }
  
    jQuery("input[id=jform_email1]").blur(function () {
      var username = jQuery("#jform_email1").val();
  
      $("#jform_username").val(username);
      console.log(username);
    });
  
    jQuery("#jform_com_fields_ati_mgi input").on("change", function (e) {
      var check_ati = e.target.value;
      if (check_ati === "true") {
        jQuery("#check_ati input").attr("required", true);
        jQuery("#check_ati select").attr("required", true);
        jQuery("#check_ati").show();
        jQuery("input[name='groupId']").val(13);
      }
      if (check_ati === "false") {
        jQuery("#check_ati").hide();
        jQuery("#check_ati input").attr("required", false);
        jQuery("#check_ati select").attr("required", false);
        jQuery("input[name='groupId']").val(12);
      }
    });
  
    jQuery(".top-search a").click(function () {
      return jQuery(this).parent().find(".search-box").is(":visible")
        ? (jQuery(".search-box").fadeOut(300),
          jQuery(this).parent().removeClass("selected"),
          !1)
        : (jQuery(".search-box").fadeIn(300),
          jQuery(this).parent().addClass("selected"),
          !1);
    });
    jQuery(document).mouseup(function (t) {
      if (jQuery(".search-box").is(":visible")) {
        var i = jQuery(".search-box");
        i.is(t.target) ||
          0 !== i.has(t.target).length ||
          (jQuery(".search-box").fadeOut(300),
          jQuery(".top-search").removeClass("selected"));
      }
    });
  
    var o = jQuery(".header-nav > ul").html();
    var f = jQuery(".share-buttons > ul").html();
    jQuery(
    ).prependTo("header"),
      jQuery(".responsive-nav").html(
        "<ul>" + o + "</ul><div class='share-buttons'><ul>" + f + "</ul></div>"
      ),
      jQuery(".menuBtn").click(function (t) {
        t.preventDefault(),
          jQuery(".responsive-nav").toggleClass("res-act"),
          jQuery(".menuBtn").toggleClass("menuBtn-selected"),
          jQuery(".wrapper, .top-search a").click(function () {
            jQuery(this).removeClass("colBody"),
              jQuery(".responsive-nav").removeClass("res-act"),
              jQuery(".menuBtn").removeClass("menuBtn-selected");
          });
      });
  
    var men = $(".responsive-nav ul"),
      menItems = men.find("li");
    menItems.each(function () {
      var uls = $(this).find("> ul"),
        divs = $(this).find(".div-mega");
      if (uls.length) {
        $(this).prepend('<span class="collapsed"></span>');
        $(this)
          .find("> span.collapsed")
          .click(function () {
            uls.slideToggle(500);
            $(this).parent().toggleClass("current");
          });
      }
      if (divs.length) {
        $(this).prepend('<span class="collapsed"></span>');
        $(this)
          .find("> span.collapsed")
          .click(function () {
            divs.slideToggle(500);
            $(".responsive-nav .div-mega").removeClass("selected");
            $(this).addClass("selected");
          });
      }
    });
  
    /* ================ Back to top button. ================ */
    var winScroll = jQuery(window).scrollTop();
    if (winScroll > 1) {
      jQuery("#to-top").css({ bottom: "10px" });
    } else {
      jQuery("#to-top").css({ bottom: "-100px" });
    }
    jQuery(window).on("scroll", function () {
      winScroll = jQuery(window).scrollTop();
  
      //  Show Hide back to top button.
      if (winScroll > 1) {
        jQuery("#to-top").css({ opacity: 1, bottom: "10px" });
      } else {
        jQuery("#to-top").css({ opacity: 0, bottom: "-100px" });
      }
    });
    jQuery("#to-top").click(function () {
      jQuery("html, body").animate({ scrollTop: "0px" }, 800);
      return false;
    });
  });
  