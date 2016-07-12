$(function (){
	var heg=$('.logo').height()+"px";
	$('.logo').css("line-height",heg);


	var height=$(window).height();
	var width=$(window).width();


// 头像剧中
	var stdlist=$('.stdlist').width();
	var stdlistimg=$('.stdlist img').width();
	var info=$('.info').width();
	var cj=(stdlist-stdlistimg-info)/2;
	$('.stdlist img').css("margin-left",cj);
// 
	$('.line1').click( function() {
		$('.course').slideToggle("slow");
		$('.arrowDown').slideToggle("slow");
		$('.arrowUp').slideToggle("slow");
		$('.stdinfo1').hide();
		$('.stdinfo2').hide();
		$('.stdinfo3').hide();
		$('.stdinfo4').hide();
		$('.stdinfo5').hide();
		$('.stdinfo6').hide();
		$('.stdinfo1').slideToggle("slow");
	})
	$('.linehide1').click( function() {
		$('.stdinfo1').hide();
		$('.stdinfo2').hide();
		$('.stdinfo2').slideToggle("slow");
		$('.stdinfo3').hide();
		$('.stdinfo4').hide();
		$('.stdinfo5').hide();
		$('.stdinfo6').hide();
	})
	$('.linehide2').click( function() {
		$('.stdinfo1').hide();
		$('.stdinfo2').hide();
		$('.stdinfo3').hide();
		$('.stdinfo4').hide();
		$('.stdinfo5').hide();
		$('.stdinfo6').hide();
		$('.stdinfo3').slideToggle("slow");
	})
	$('.line2').click( function() {
		$('.stdinfo1').hide();
		$('.stdinfo2').hide();
		$('.stdinfo3').hide();
		$('.stdinfo4').hide();
		$('.stdinfo5').hide();
		$('.stdinfo6').hide();
		$('.stdinfo4').slideToggle("slow");
	})




	$('.stdtab4').click(function(){
		$('.tipbg').show();
		$('.tip').slideToggle("slow");
	})
	$('.line4').click( function() {
		$('.course4').slideToggle("slow");
		$('.arrowDown4').slideToggle("slow");
		$('.arrowUp4').slideToggle("slow");
	})
// 
	$('.line3').click( function() {
		$('.course').slideToggle("slow");
		$('.arrowDown').slideToggle("slow");
		$('.arrowUp').slideToggle("slow");
	})
	$('.linehide3').click( function() {
		$('.stdinfo7').hide();
		$('.stdinfo7').slideToggle("slow");
		$('.stdinfo8').show();
	})
// YOUR CAN CHOOSE剧中
	// var choose=$('.choose').width();
	// var content=$('.content').width();
	// var cj2=(content-choose)/2+"px";
	// $('.choose').css("margin-left",cj2)
// img:hover
	$('.picli img').mouseover(
		function(){
            $(this).siblings().addClass("active");
            $('.active').unbind('click');
            $('.active').click(function(){
				$('.tipbg').show();
				$('.tip').show();
			});
		});
	$('.picli').mouseleave(
		function(){
            $(this).children().removeClass("active");
		});
	$('.maskfont').mouseover(
		function(){
            $('.maskfont a').css("color","#46a3ff");
		});
	$('.maskfont').mouseleave(
		function(){
            $('.maskfont a').css("color","white");
		});

	$('.cancle').click(function(){
		$('.tipbg').hide();
		$('.tip').slideToggle("slow");
		$('.code input').val("");
	})
	$('.sure').click(function(){
		$('.tipbg').hide();
		$('.tip').slideToggle("slow");
		$('.code input').val("");
		$('.stdinfo1').hide();
		$('.stdinfo2').hide();
		$('.stdinfo3').hide();
		$('.stdinfo4').hide();
		$('.stdinfo5').slideToggle("slow");
	})




	$('.minlength').click(function(){
		var a=document.getElementsByName("woca");
		var c=$("input[name='woca']:checked").val(); 
		for(var i=0;i<a.length;i++){
			if(c==""||c==null){
				alert("请完成问题评价再提交");
				return false;
			}
		}
		var b=$('.qslistas textarea').val();
		if(b.length<10){
			alert("主观题输入内容少于十字～");
			$('.qslistas textarea').focus();
			return false;
		}
		$('.tipbg').show();
		$('.tip2').slideToggle("slow");
	})
	$('.questionsub').click(function(){
		$('.tipbg').hide();
		$('.tip2').slideToggle("slow");
		$('.question').submit();
		$('.stdinfo1').slideToggle("slow");
		$('.stdinfo2').hide();
		$('.stdinfo3').hide();
		$('.stdinfo4').hide();
		$('.stdinfo5').hide();
	})

/*********************************************/
/*                  管理员                    */
/*********************************************/
	$('.line13').click( function() {
		$('.stdinfo1').hide();
		$('.stdinfo1').fadeIn(2000);
	})


	var newblack=$(".neweva span").width()+20;
	$(".neweva").css("width",newblack);
	var gundheight=$(".zgtnewblank").height()-$(".neweva").height()-$(".zgtquest").height()-40;
	$(".gundong").css("height",gundheight);

})
