 //var oDiv1 = document.getElementById("div1");
////var oUl = document.getElementById("ul1")[0];
//var aLi = oDiv1.getElementsByTagName("li");
//var oS1 = document.getElementById("s1");
//var oFt = document.getElementById("ft");
/*var oIn = document.getElementById("in");
var oIn1 = document.getElementById("in1");
var oIn2 = document.getElementById("in2");*/
//var oBt = document.getElementById("bt");
//var oFnt1 = document.getElementById("fnt1");
//var timer = window.setInterva
//var mi = 3;
//var mi2 = 1;l;
//for(var i=0;i<aLi.length;i++ )
//	{
//		aLi[0].onclick = function()
//		{
//			window.clearInterval(timer);
//			oFt.style.fontSize="15px";
//			oFt.innerHTML='控制面板系统';
//			timer(function()
//				{
//				mi=mi-1;
//				oFt.innerHTML='加载配置中....' ;
//				if(mi<1)
//				{	
//					window.clearInterval(timer);
//					oFt.innerHTML="";
//					oIn.style.display="block";
//				}
//				},1000)
//		}
//	}
//oBt.onclick = function(){
//	if(oIn1.value=="1"&&oIn2.value=="2")
//		{
//			oFnt1.style.display = "block";
//			oFnt1.innerHTML="登陆成功";
//			var timer2=window.setInterval(
//			function()
//			{
//			mi2=mi2-1;
//			if(mi2<0)
//				{
//					timer='';
//					window.clearInterval(timer2);
//					oDiv2.style.display="block";
//					oIn.innerHTML="";
//					oS1.innerHTML="";
//					oFnt1.style.display = "none";
//					oFnt2.style.display="block";
//					oPt.style.display="block";
//				}
//			},1000)
//		}
//	else
//	{
//		oFnt1.style.display="block";
//		oFnt1.innerHTML="账号或密码错误";
//	}
//	if(oIn1.value==""||oIn2.value=="")
//		{
//			oFnt1.style.display="block";
//			oFnt1.innerHTML="请输入账号或密码";
//		}
//
//}
var oDiv2 = document.getElementById("div2");
var aA=oDiv2.getElementsByTagName("a");
var oPt = document.getElementById("pt");
var oPtt1 = document.getElementById("ptt1");
var oPtt2 = document.getElementById("ptt2");
var oPtt3 = document.getElementById("ptt3");  
var oFnt2 = document.getElementById("fnt2");
var aUl = oPt.getElementsByTagName("ul")[0];
var aUl2 = oPtt1.getElementsByTagName("ul")[0];
var aUl3 = oPtt2.getElementsByTagName("ul")[0];
var aUl4 = oPtt3.getElementsByTagName("ul")[0];
var aFnts = document.getElementsByClassName("fnts");
var aImgs = document.getElementById("imgs");
var aImgs1 = document.getElementById("imgs1");
var aImgs2 = document.getElementById("imgs2");
var aImgs3 = document.getElementById("imgs3");
var aLb=document.getElementsByClassName('lb');
var oLi_div=document.getElementById("li_div");
var aFnts = document.getElementsByClassName("fnts");
var oMd7 = document.getElementById("md7");
var aLi_div3=document.getElementsByClassName('li_div3');
oDiv2.style.display="none";
oFnt2.style.display="block";
oPt.style.display="none";
oLi_div.style.display="block";
////////////////////////////////////////////////////////////////////////第一组轮播图时间延迟声明
oPt.style.transition="1s";
oPtt1.style.transition="1s";
oPtt2.style.transition="1s";
oPtt3.style.transition="1s"; 
////////////////////////////////////////////////////////////////////////第一组第一页轮播图循环播放
window.setInterval(
	function()
	{
		if(aUl.offsetTop<-880)
			{
				aUl.style.marginTop=0;
				
			}else
				{
					aUl.style.marginTop=aUl.offsetTop-228+"px";
				}
		if(aUl.offsetTop===666)
			{
				aUl.style.transition="0s";
			}else
			{
				aUl.style.transition="1s";
			}
	},2000);
////////////////////////////////////////////////////////////////////////第一组第二页轮播图循环播放
window.setInterval(
	function()
	{
		if(aUl2.offsetTop<-880)
			{
				aUl2.style.marginTop=0;
				
			}else
				{
					aUl2.style.marginTop=aUl2.offsetTop-228+"px";
				}
		if(aUl2.offsetTop===666)
			{
				aUl2.style.transition="0s";
			}else
			{
				aUl2.style.transition="1s";
			}
	},2000);
////////////////////////////////////////////////////////////////////////第一组第三页轮播图循环播放
window.setInterval(
	function()
	{
		if(aUl3.offsetTop<-880)
			{
				aUl3.style.marginTop=0;
				
			}else
				{
					aUl3.style.marginTop=aUl3.offsetTop-228+"px";
				}
		if(aUl3.offsetTop===666)
			{
				aUl3.style.transition="0s";
			}else
			{
				aUl3.style.transition="1s";
			}
	},2000);
////////////////////////////////////////////////////////////////////////第一组第四页轮播图循环播放
window.setInterval(
	function()
	{
		if(aUl4.offsetTop<-880)
			{
				aUl4.style.marginTop=0;
				
			}else
				{
					aUl4.style.marginTop=aUl4.offsetTop-228+"px";
				}
		if(aUl4.offsetTop===666)
			{
				aUl4.style.transition="0s";
			}else
			{
				aUl4.style.transition="1s";
			}
	},2000);
////////////////////////////////////////////////////////////////////////第一组imgs切换函数
window.setInterval(
	function()
	{
		if(aImgs.offsetTop<-452)
			{
				aImgs.style.marginTop="0px";
				
			}else
				{
					aImgs.style.marginTop=aImgs.offsetTop-452+"px";
				}
		if(aImgs.offsetTop===-450)
			{
				aImgs.style.transition="1s";
			}else
			{
				aImgs.style.transition="1s";
			}
	},2000);
////////////////////////////////////////////////////////////////////////第一组imgs1切换函数
window.setInterval(
	function()
	{
		if(aImgs1.offsetTop<-452)
			{
				aImgs1.style.marginTop=0;
				
			}else
				{
					aImgs1.style.marginTop=aImgs1.offsetTop-452+"px";
				}
		if(aImgs1.offsetTop===-450)
			{
				aImgs1.style.transition="1s";
			}else
			{
				aImgs1.style.transition="1s";
			}
	},2000);
////////////////////////////////////////////////////////////////////////第一组imgs2切换函数
window.setInterval(
	function()
	{
		if(aImgs2.offsetTop<-452)
			{
				aImgs2.style.marginTop=0;
				
			}else
				{
					aImgs2.style.marginTop=aImgs2.offsetTop-452+"px";
				}
		if(aImgs2.offsetTop===-450)
			{
				aImgs2.style.transition="1s";
			}else
			{
				aImgs2.style.transition="1s";
			}
	},2000);
////////////////////////////////////////////////////////////////////////第一组imgs2切换函数
window.setInterval(
	function()
	{
		if(aImgs3.offsetTop<-452)
			{
				aImgs3.style.marginTop=0;
				
			}else
				{
					aImgs3.style.marginTop=aImgs3.offsetTop-452+"px";
				}
		if(aImgs3.offsetTop===-450)
			{
				aImgs3.style.transition="1s";
			}else
			{
				aImgs3.style.transition="1s";
			}
	},2000);
////////////////////////////////////////////////////////////////////////第一组div切换函数
function fntss(x,y)
{

	for(var i=0; i<aA.length; i++)
	{
		aA[i].style.background='';
		aFnts[i].style.display="none";
	}
	document.getElementById(x).style.background='#a99362';
	document.getElementById(y).style.display='block';
}
////////////////////////////////////////////////////////////////////////主面板div切换函数
function fntsc(x,y)
{
	for(var i=0;i<aLb.length;i++)
	{
		aLb[i].style.background='';
		aLidivs[i].style.display="none";
	}
	document.getElementById(x).style.background='#a99362';  
	document.getElementById(y).style.display='block';
}
////////////////////////////////////////////////////////////////////////第三组div切换函数
function cn(x,y)
{
	for(var i=0;i<aLi_div3.length;i++)
		{
			aLi_div3[i].style.background="";
			aLi_div3_2[i].style.display="none";
		}
	document.getElementById(y).style.background="#a99362";
	document.getElementById(x).style.display="block";
	
}
////////////////////////////////////////////////////////////////////////点击“控制面板”div，显示第一页div
if(oMd7.onclick)
	{
		oPt.style.display="block";
	}