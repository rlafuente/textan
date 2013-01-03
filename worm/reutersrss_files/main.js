function FindQueryStringParam(url, name) {
	var arrUrlParts= url.split("?");       
	var sQueryString = "";
	var sReturnValue = "";
	if ( arrUrlParts.length > 1 ) {
		sQueryString = arrUrlParts[1];
		var arrQueryStringParts = sQueryString.split("&");
		for (var iPart = 0; iPart < arrQueryStringParts.length; iPart++) {
			var arrParamParts = arrQueryStringParts[iPart].split("=");                
			if ( arrParamParts[0] == name) {
				sReturnValue = arrParamParts[1];
			}
		}
	}       
	return sReturnValue;
}

    function ReplaceQueryStringParam(url, name, value) {
        var arrUrlParts= url.split("?");
        
        var sUrlPrefix = "";
        var sQueryString = "";
        var sReturnQueryString = "";
        sReturnQueryString = url;
        //debugger;
        
        if ( arrUrlParts.length > 1 ) {
            sUrlPrefix = arrUrlParts[0];
            sQueryString = arrUrlParts[1];
            sReturnQueryString = sUrlPrefix;
            var arrQueryStringParts = sQueryString.split("&");
            var existedInQS = false;
            for (var iPart = 0; iPart < arrQueryStringParts.length; iPart++) {
                var arrParamParts = arrQueryStringParts[iPart].split("=");
                
                if ( arrParamParts[0] == name) {
                    arrParamParts[1]=value;
                    existedInQS = true;
                }
                
                if (iPart==0) {
                    sReturnQueryString+= "?";
                }
                else {
                    sReturnQueryString+= "&";
                }
                
                sReturnQueryString+= arrParamParts[0] + "=" + arrParamParts[1];
            }
            if(!existedInQS){
                //There was a Query String but it did not contain the requested name/val so tack it on
                sReturnQueryString+="&"+name+"="+value;
            }
        }
        else {
            sUrlPrefix = arrUrlParts[0];
            sReturnQueryString = sUrlPrefix + "?" + name + "=" + value;
        }
        
        
        return sReturnQueryString;
    }


function commonPopup(url, width, height, toolsInd, wname)
{
    var options = "width=" + width + ",height=" + height + ",top=" + ((screen.height - height) / 4).toString() + ",left=" + ((screen.width - width) / 2).toString();

    switch (toolsInd)
    {
        case 1:
            options += ",toolbar=no,status=no,resizable=no,scrollbars=yes";
            break;
        case 2:
            options += ",menubar=yes,toolbar=yes,status=yes,resizable=yes,location=yes,scrollbars=yes";
            break;
        case 3:
            options += ",top=50,left=50,resizable=yes,scrollbars=yes,status=no,menubar=no,toolbar=no,location=yes";
            break;
        default:
            //do nothing
            break;
    }

    if (!wname)
    {
        wname = "reutersPopup";
    }

    popupWindow = window.open(url, wname, options);

    if (popupWindow)
    {
        popupWindow.focus();
    }
}

function setCookie(name,value,days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function removeCookie(name) {
    setCookie(name,"",-1);
}

var redirectbrowser = "http://www.reuters.com/browserupgrade";

var agt=navigator.userAgent.toLowerCase();

var is_major = parseInt(navigator.appVersion);
var is_minor = parseFloat(navigator.appVersion);

var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
    && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
    && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));
var is_nav2 = (is_nav && (is_major == 2));
var is_nav3 = (is_nav && (is_major == 3));
var is_nav4 = (is_nav && (is_major == 4));
var is_nav4up = (is_nav && (is_major >= 4));
var is_navonly      = (is_nav && ((agt.indexOf(";nav") != -1) ||
          (agt.indexOf("; nav") != -1)) );
var is_nav6 = (is_nav && (is_major == 5));
var is_nav6up = (is_nav && (is_major >= 5));
var is_gecko = (agt.indexOf('gecko') != -1);

var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
var is_ie3    = (is_ie && (is_major < 4));
var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 4")!=-1) );
var is_ie4up  = (is_ie && (is_major >= 4));
var is_ie5    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) );
var is_ie5_5  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.5") !=-1));
var is_ie5up  = (is_ie && !is_ie3 && !is_ie4);
var is_ie5_5up =(is_ie && !is_ie3 && !is_ie4 && !is_ie5);
var is_ie6    = (is_ie && (is_major == 4) && (agt.indexOf("msie 6.")!=-1) );
var is_ie6up  = (is_ie && !is_ie3 && !is_ie4 && !is_ie5 && !is_ie5_5);

if (is_ie) {
  if (!is_ie5_5up) {
    document.location.href = redirectbrowser;
  }
} 
else if (is_nav) {
  if (!is_nav6up) {
    document.location.href = redirectbrowser;    
  }
}


function addLoadEvent(func)
{
    var oldonload = window.onload;
    if (typeof window.onload != 'function')
    {
        window.onload = func;
    }
    else
    {
        window.onload = function() {
            oldonload();
            func();            
        }
    }
}

/**
 * Add onclick and impression capabilities to module level tracking
 */
addLoadEvent(setModuleTrackingOnClick);  
    
function setModuleTrackingOnClick()
{
    var modules = new Array;
    if (is_ie)
    {
        var allSpans = document.getElementsByTagName("span");
        if (allSpans)
        {
            for (i=0; i<allSpans.length; i++)
            {
                if (allSpans[i].getAttribute("name") && allSpans[i].getAttribute("name") == "trackingEnabledModule")
                    modules.push(allSpans[i]);
            }
        }
    }
    else
        modules = document.getElementsByName("trackingEnabledModule");
    
    if (modules.length > 0)
    {
        // get ContentChannel and ContentType
        var metaTags = getMetaTags();
        var contentChannel = metaTags["DCSext.ContentChannel"];
        var contentType    = metaTags["DCSext.ContentType"];
        if (!contentChannel)
            contentChannel = "";
        if (!contentType)
            contentType = "";
                
        
        // set onclick method
        for (i=0; i<modules.length; i++)
        {
            var module = modules[i];
            var moduleName = module.getAttribute("moduleName");
            var moduleId = module.getAttribute("moduleId");
            var modId = contentChannel + "|" + contentType + "|";
            if (moduleId)   // CMS modules
                modId += moduleId + "_" + moduleName;
            else            // CMS buddy modules
                modId += moduleName;
            
            var links = module.getElementsByTagName("a");
            for (j=0; j<links.length; j++)
            {
                links[j].setAttribute("modId", modId);
                links[j].onclick = wtModTracking;
            }
        }
    }
}

var trackingEnabledModuleIds = new Array;
function addImpression(moduleName) 
{
    trackingEnabledModuleIds.push(moduleName);
}

function setModuleImpressionTracking()
{
    if (trackingEnabledModuleIds && trackingEnabledModuleIds.length > 0) 
    {
        var modIDs = "";
        var metaTags = getMetaTags();
        var contentChannel = metaTags["DCSext.ContentChannel"];
        var contentType    = metaTags["DCSext.ContentType"];
        if (!contentChannel)
            contentChannel = "";
        if (!contentType)
            contentType = "";
    
        for (var i=0; i<trackingEnabledModuleIds.length; i++)
        {
            modIDs += contentChannel + "|" + contentType + "|" + escape(trackingEnabledModuleIds[i]);
            if (i != (trackingEnabledModuleIds.length-1))   // not the last one
                modIDs += ";";
        }
        
        // insert tags for impression tracking
        var headRef = document.getElementsByTagName("head").item(0);
        var metaModId = document.createElement("meta");
        metaModId.setAttribute("name", "DCSext.ModID");
        metaModId.setAttribute("content", modIDs);
        headRef.appendChild(metaModId);

        var metaModImp = document.createElement("meta");
        metaModImp.setAttribute("name", "DCSext.ModImp");
        metaModImp.setAttribute("content", "1");
        headRef.appendChild(metaModImp);
    }
}    


function wtModTracking()
{
    var modId  = this.getAttribute("modId");
    var modUrl = this.getAttribute("href");
    
    // parse the javascript link
    if (modUrl.indexOf('javascript:') != -1)
    {
        var params = modUrl.substring(modUrl.indexOf("'")+1);
        var a = params.split("'");
        modUrl = a[0];
    }        
    
    if (typeof(window.dcsMultiTrack) != 'undefined')
    {
        dcsMultiTrack('DCSext.ModID', modId,
                      'DCSext.ModClickID', modId,
                      'DCSext.ModURL', modUrl,
                      'DCSext.ModClick', '1',
                      'DCSext.ModImp', '0',
                      'WT.dl', '1');
    }
}

function getMetaTags()
{
    var metaTagsArray = new Array;

    var metaTags;
    if (document.all)
        metaTags = document.all.tags("meta");
    else if (document.documentElement)
        metaTags = document.getElementsByTagName("meta");

    for (i=0; i<metaTags.length; i++)
    {
        var metaTagName  = metaTags[i].getAttribute("name");
        var metaTagValue = metaTags[i].getAttribute("content");
        
        metaTagsArray[metaTagName] = metaTagValue;
    }
    
    return metaTagsArray;
}
    
    
/**
 * populate the ad sizes for RAPT tag
 */
var raptAs = "";
function populateRaptAdSize(adType) 
{
    // adType format: type=brandChannel;sz=1x1;
    var a = adType.split(";");
    for(var i=0; i<a.length; i++)
    {
        var iSz = a[i].indexOf("sz=");
        if (iSz != -1)
        {
            raptAs += a[i].substring(iSz+3) + ";";
            return;
        }
    }
}  
  