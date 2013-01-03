document.write('<!-- Template Id = 1305 Template Name = Banner Creative (Flash) - Multiple clickTag URL - DFP -->\n<!-- Copyright 2006 DoubleClick Inc., All rights reserved. -->\n<script src=\"http://m1.2mdn.net/879366/flashwrite_1_2.js\"><\/script>');document.write('\n');
 
var dcswf = "http://ad.doubleclick.net/800437/125_health_sep.swf"; 
var dcgif = "http://m1.2mdn.net/800437/125_health.gif"; 
var advurl = "http://ad.doubleclick.net/click%3Bh=v8/35f7/3/0/%2a/w%3B129821435%3B3-0%3B0%3B9672315%3B3-125/125%3B22278902/22296791/1%3B%3B%7Eaopt%3D2/0/ff/0%3B%7Esscs%3D%3fhttp://features.us.reuters.com/wellbeing?src=int_mktg_lifestyle125_content_health_082007";
var dcadvurl = escape(advurl);
var dcminversion = 6;
var dcmaxversion = 7;
var plugin = false;
var dcbgcolor = ""
var dccreativewidth = "125";
var dccreativeheight = "125";
var uniqueTrack = "Unique";
var trackMode = "";
var dcwmode = "window";

//NOTE:  If tracking URLs distinctly, then the value of the clickTag1, clickTag2... variables 
//must include some sort of unique DART click tracking string.
//if clickTag1, for instance, only includes an advertiser's website address
//clicks will NOT be counted.
//For unique click tracking, here is what clickTag1, for instance, would need to look like:
// var clickTag1 = http://ad.doubleclick.net/clk;813832;3731539;l?http://www.test.com/url1

if (uniqueTrack=="Unique") {
    var siteClickExists = "";
    if (siteClickExists.substr(0,4)=="http") {trackMode = siteClickExists}         
    //else no site click tracking string. do nothing.    
} else {
    trackMode = escape("http://ad.doubleclick.net/click%3Bh=v8/35f7/3/0/%2a/w%3B129821435%3B3-0%3B0%3B9672315%3B3-125/125%3B22278902/22296791/1%3B%3B%7Eaopt%3D2/0/ff/0%3B%7Esscs%3D%3f");
}

var dcclickTag1 = "http://features.us.reuters.com/";
var dcclickTag2 = "http://features.us.reuters.com/?src=int_mktg_lifestyle125_content_health_082007";
var dcclickTag3 = "";
var dcclickTag4 = "";
var dcclickTag5 = "";

var clickTag1 = (dcclickTag1 == "") ? "" : trackMode + escape(dcclickTag1);
var clickTag2 = (dcclickTag2 == "") ? "" : trackMode + escape(dcclickTag2);
var clickTag3 = (dcclickTag3 == "") ? "" : trackMode + escape(dcclickTag3);
var clickTag4 = (dcclickTag4 == "") ? "" : trackMode + escape(dcclickTag4);
var clickTag5 = (dcclickTag5 == "") ? "" : trackMode + escape(dcclickTag5);

var dclkjstag = (('j'!="j")&&(typeof dclkFlashWrite!="undefined")) ? false : true;
var dcflashtagstring = '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';
dcflashtagstring += '  codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=3,0,0,0" ';
dcflashtagstring += ' ID=FLASH_AD  WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'">';
dcflashtagstring += ' <PARAM NAME=movie VALUE="' + dcswf + '?clickTag='+ dcadvurl +'&clickTag1='+clickTag1+'&clickTag2='+clickTag2+'&clickTag3='+clickTag3+'&clickTag4='+clickTag4+'&clickTag5='+clickTag5+'"> <PARAM NAME=quality VALUE=autohigh> <PARAM NAME=wmode VALUE=' + dcwmode + '><PARAM NAME=bgcolor VALUE=#'+ dcbgcolor +'> '; 
dcflashtagstring += ' <EMBED src="' + dcswf + '?clickTag='+ dcadvurl +'&clickTag1='+clickTag1+'&clickTag2='+clickTag2+'&clickTag3='+clickTag3+'&clickTag4='+clickTag4+'&clickTag5='+clickTag5+'" quality=autohigh ';
dcflashtagstring += ' swLiveConnect=TRUE WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'" bgcolor=#'+ dcbgcolor;
dcflashtagstring += ' TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">';
dcflashtagstring += ' </EMBED>';
dcflashtagstring += ' </OBJECT>';

if (((navigator.appName == "Netscape") && (navigator.userAgent.indexOf("Mozilla") != -1) && (parseFloat(navigator.appVersion) >= 4) && (navigator.javaEnabled()) && navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)) {
var plugname=navigator.plugins['Shockwave Flash'].description;var plugsub=plugname.substring(plugname.indexOf("."),-1); var plugsubstr=plugsub.substr(-1)
if( plugsubstr >= dcminversion) { plugin = true;}

}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0) && document.all) 
{
document.write('<script language=VBScript>' + '\n' +
			'dcmaxversion = '+dcmaxversion + '\n' +
			'dcminversion = '+dcminversion + '\n' +
			'Do' + '\n' +
				'On Error Resume Next' + '\n' +
				'plugin = (IsObject(CreateObject(\"ShockwaveFlash.ShockwaveFlash.\" & dcmaxversion & \"\")))' + '\n' +
				'If plugin = true Then Exit Do' + '\n' +
				'dcmaxversion = dcmaxversion - 1' + '\n' +
				'Loop While dcmaxversion >= dcminversion' + '\n' +
		'<\/script>');
}

if (plugin && !dclkjstag){
    dclkFlashWrite(dcflashtagstring);
} else if (plugin && dclkjstag) {
    document.write(dcflashtagstring);
    }

else if (!(navigator.appName && navigator.appName.indexOf("Netscape")>=0 && navigator.appVersion.indexOf("2.")>=0)){
 document.write('<A TARGET="_blank" HREF="http://ad.doubleclick.net/click%3Bh=v8/35f7/3/0/%2a/w%3B129821435%3B3-0%3B0%3B9672315%3B3-125/125%3B22278902/22296791/1%3B%3B%7Eaopt%3D2/0/ff/0%3B%7Esscs%3D%3fhttp://features.us.reuters.com/wellbeing?src=int_mktg_lifestyle125_content_health_082007"><IMG SRC="' + dcgif + '" BORDER=0></A>');
}
//-->

document.write('\n<NOEMBED><A TARGET=\"_blank\" HREF=\"http://ad.doubleclick.net/click%3Bh=v8/35f7/3/0/%2a/w%3B129821435%3B3-0%3B0%3B9672315%3B3-125/125%3B22278902/22296791/1%3B%3B%7Eaopt%3D2/0/ff/0%3B%7Esscs%3D%3fhttp://features.us.reuters.com/wellbeing?src=int_mktg_lifestyle125_content_health_082007\"><IMG SRC=\"http://m1.2mdn.net/800437/125_health.gif\" BORDER=0></A></NOEMBED>\n<NOSCRIPT><A TARGET=\"_blank\" HREF=\"http://ad.doubleclick.net/click%3Bh=v8/35f7/3/0/%2a/w%3B129821435%3B3-0%3B0%3B9672315%3B3-125/125%3B22278902/22296791/1%3B%3B%7Eaopt%3D2/0/ff/0%3B%7Esscs%3D%3fhttp://features.us.reuters.com/wellbeing?src=int_mktg_lifestyle125_content_health_082007\"><IMG SRC=\"http://m1.2mdn.net/800437/125_health.gif\" BORDER=0></A></NOSCRIPT>');
