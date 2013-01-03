var cobrandCSS = "<link href=\"http://www.reuters.com/resources/css/rcom-cobrands.css\" rel=\"stylesheet\" />";
var cobrandMeta1 = '<META name="WT.seg_4" content="';
var cobrandMeta2 = '">';


var cobrandHTML=new Array()
cobrandHTML["rpc11"]="<div class=\"cobrand\" id=\"cobrandCNN\"><a id=\"link1\" href=\"http://www.cnn.com\" target=\"_blank\"></a></div>";
cobrandHTML["rpc33"]="<div class=\"cobrand\" id=\"cobrandAOL\"><a id=\"link1\" href=\"http://www.aol.com\" target=\"_blank\"></a></div>";
cobrandHTML["rpc34"]="<div class=\"cobrand\" id=\"cobrandAOL\"><a id=\"link1\" href=\"http://www.aol.com\" target=\"_blank\"></a></div>";
cobrandHTML["rpc44"]="<div class=\"cobrand\" id=\"cobrandYF\"><a id=\"link1\" href=\"http://finance.yahoo.com\" target=\"_blank\"></a></div>";
cobrandHTML["rpc72"]="<div class=\"cobrand\" id=\"cobrandTS\"><a id=\"link1\" href=\"http://www.thestreet.com\" target=\"_blank\"></a></div>";
cobrandHTML["rpc77"]="<div class=\"cobrand\" id=\"cobrandMSN\"><a id=\"link1\" href=\"http://moneycentral.msn.com/home.asp\" target=\"_blank\"></a><a id=\"link2\" href=\"http://moneycentral.msn.com/investor/home.asp\" target=\"_blank\"></a></div>";
cobrandHTML["rpc78"]="<div class=\"cobrand\" id=\"cobrandFP\"><a id=\"link1\" href=\"http://www.canada.com/nationalpost/financialpost/index.html\" target=\"_blank\"></a></div>";
cobrandHTML["rpc144"]="<div class=\"cobrand\" id=\"cobrandYahooJp\"><a id=\"link1\" href=\"http://quote.yahoo.co.jp\" target=\"_blank\"></a></div>";




var cobrandName = new Array();
cobrandName["rpc11"]="CNN";
cobrandName["rpc33"]="AOL";
cobrandName["rpc34"]="AOL";
cobrandName["rpc44"]="Yahoo";
cobrandName["rpc72"]="TheStreet";
cobrandName["rpc77"]="MSN";
cobrandName["rpc78"]="FP";
cobrandName["rpc144"]="YahooJP";


function getCobrandHTML(rpcCode){
  var html = cobrandHTML["rpc"+rpcCode];
  if(html){
      return cobrandCSS + html;
	}
	return "";
}

function getCobrandName(rpcCode){
  var html = cobrandName["rpc"+rpcCode];
  if(html){
      return cobrandMeta1 + html + cobrandMeta2;
	}
	return "";
}

var rpcCodeQ = com.reuters.rcom.utils.getQueryStringParam("rpc");

if(null != rpcCodeQ){
  setCookie("rpc", rpcCodeQ);
}
var rpcCode= getCookie("rpc");

//If this is not the initial request containing the rpc in the url
//and the referrer is not reuters, remove the cookie
if((null == rpcCodeQ) && (document.referrer.indexOf("reuters")<0))
{
  removeCookie("rpc");
  rpcCode=null;
}
if(null != rpcCode){
    document.write(getCobrandHTML(rpcCode));
    document.write(getCobrandName(rpcCode));
}
