function doStockSearch(symbolId, quoteTranslation, url)
{
	doStockSearchGO(symbolId, quoteTranslation, url, "symbol", "");
}

function doStockSearch(symbolId, quoteTranslation, url, webTrendsModLoc)
{
	doStockSearchGO(symbolId, quoteTranslation, url, "symbol", webTrendsModLoc);
}

// this function is called when we do a symbol search that must point to the legacy site
function doStockSearchN(symbolId, quoteTranslation, url)
{
	doStockSearchGO(symbolId, quoteTranslation, url, "ticker", "");
}

function doStockSearchGO(symbolId, quoteTranslation, url, symbolOrTicker, webTrendsModLoc)
{
	var symbol = document.getElementById(symbolId).value;
	// blank out the default if nothing was entered
	if (quoteTranslation.toUpperCase() == symbol.toUpperCase()) symbol = "";

	// &fs param needed for WebTrends -- specifies
	var location = url + "?" + symbolOrTicker + "=" + encodeURIComponent(symbol) + "&fs=1";
	
	if(webTrendsModLoc != null && webTrendsModLoc.length > 0)
		location += "&WTmodLoc=" + webTrendsModLoc;
	
	Redirect(location);
}

function doStockSearchJP(symbolId, quoteTranslation, url, radioOverseasId)
{
	var symbol = document.getElementById(symbolId).value;
	// blank out the default if nothing was entered
	if (quoteTranslation.toUpperCase() == symbol.toUpperCase()) symbol = "";
	
	var searchType = "";
	var originType = "";
	var objNodeList = document.getElementsByName("qtype");
	for (var x=0; x < objNodeList.length; x++)
	{
		if (objNodeList.item(x).checked)
		{
			searchType = objNodeList.item(x).value;
			break;
		}
	}

	objNodeList = document.getElementsByName("stockFilter");
	for (var y=0; y < objNodeList.length; y++)
	{
		if (objNodeList.item(y).checked)
		{
			originType = objNodeList.item(y).value;
			break;
		}
	}
	
	//this code will be executed if you define custom function to get the origin type
	if (arguments.length > 4 && arguments[4] === true && self.GetCustomOriginType != null && typeof(GetCustomOriginType) == 'function')
		originType = GetCustomOriginType(originType, radioOverseasId);
	
	var location = url + "?symbol=" + encodeURIComponent(symbol) + "&searchtype=" + searchType + "&origin=" + originType + "&fs=1";
	Redirect(location);
}

function doStockSearchJP2(symbolId, quoteTranslation, url, radioOverseasId)
{
	var symbol = "";
	var tmp = document.getElementById(symbolId);
	if (tmp != null)
	{
	    symbol = tmp.value;
	}
	else
	{
	    tmp = document.getElementsByName(symbolId);
	    if (tmp != null)
	    {
	        for (var k = 0; k < tmp.length; k++)
	        {
	            if (tmp.item(k) != null)
	            {
	                symbol = tmp.item(k).value;	                
	                break;
	            }
	        }
	    }
	}
	// blank out the default if nothing was entered
	if (quoteTranslation.toUpperCase() == symbol.toUpperCase()) symbol = "";
	
	var searchType = "";
	var originType = "";
	var objNodeList = document.getElementsByName("qtype");
	for (var x=0; x < objNodeList.length; x++)
	{
		if (objNodeList.item(x).checked)
		{
			searchType = objNodeList.item(x).value;
			break;
		}
	}
	try
	{

	    objNodeList = document.getElementById("stockFilter");
	    if (objNodeList != null)
	    {
	        originType = objNodeList.value;
	    }
	    else
	    {
	        objNodeList = document.getElementsByName("stockFilter");
	        for (var i = 0; i < objNodeList.length; i ++)
	        {
	            if (objNodeList[i] != null)
	            {
	                if (objNodeList[i].checked)
	                {
	                    originType = objNodeList[i].value;
	                    break;
	                }
	            }
	        }
	    }
	}
	catch(e)
	{
	}

	
	//this code will be executed if you define custom function to get the origin type
	if (arguments.length > 4 && arguments[4] === true && self.GetCustomOriginType != null && typeof(GetCustomOriginType) == 'function')
		originType = GetCustomOriginType(originType, radioOverseasId);
	
	var location = url + "?symbol=" + encodeURIComponent(symbol) + "&searchtype=" + searchType + "&origin=" + originType + "&fs=1";
	Redirect(location);
}

function doSearchIntegration(searchBoxId, url, webTrendsModLoc)
{
	var searchValue = document.getElementById(searchBoxId).value;
	
	// &fs param needed for WebTrends -- specifies
	var location = url + "?blob=" + encodeURIComponent(searchValue);
		
	if(webTrendsModLoc != null && webTrendsModLoc.length > 0)
		location += "&WTmodLoc=" + webTrendsModLoc;
	
	Redirect(location);
}

function doSearch(url, text, dropDown)
{
	doSearch(url, text, dropDown, webTrendsModLoc);
}

function doSearch(url, text, dropDown, webTrendsModLoc)
{
	var searchText = document.getElementById(text).value;
	if ("SEARCH" == searchText.toUpperCase()) searchText = "";
	var searchDropDown = document.getElementById(dropDown);
	var searchType = searchDropDown.options[searchDropDown.selectedIndex].value
	var location = url + encodeURIComponent(searchText) + "&searchtype=" + searchType;
	
	if(webTrendsModLoc != null && webTrendsModLoc.length > 0)
		location += "&WTmodLoc=" + webTrendsModLoc;
				
	Redirect(location);
}

function doSearchType(url, text, searchType)
{
	var searchText = document.getElementById(text).value;
	if ("SEARCH" == searchText.toUpperCase()) searchText = "";
	var location = url + encodeURIComponent(searchText) + "&searchtype=" + searchType;
	Redirect(location);
}

// this function is called when we do a newssearch that must point to the legacy site
function doSearchN(url, text, section)
{
	var searchText = document.getElementById(text).value;
	if ("SEARCH" == searchText.toUpperCase()) searchText = "";
	var section = document.getElementById(section).value;
	var location = url + encodeURIComponent(searchText) + "&qtype=" + section;
	Redirect(location);
}

function DoSubmitCheck()
{
	if (document.forms[0].DoSubmit.value != "false")
	{
		// cancel the form submit
		return false;
	}
	else
	{
		// proceed with the form submit
		return true;
	}
}

function Redirect(location)
{
	if (typeof(document.forms[0].DoSubmit) != 'undefined')
	{
		// dirty flag that causes the DoSubmitCheck function below
		// to return false, canceling the form submit and redirecting
		// to our desired location with the new ticker
		document.forms[0].DoSubmit.value = "true";
	}
	window.parent.location = location;
}

function doLoginMenu()
{
	var loggedInNavsStyle = "none";
	var loggedOutNavsStyle = "none";
	if(CheckToolBar())
		loggedInNavsStyle = "inline";
	else
		loggedOutNavsStyle = "inline";
		
	if (document.all)
	{
		if(document.all['loggedInNavs'] != null)
		{
			document.all['loggedInNavs'].style.display = loggedInNavsStyle;
			document.all['loggedOutNavs'].style.display = loggedOutNavsStyle;
		}
	}
	else if (document.layers)
	{
		if(document.layers['loggedInNavs'] != null)
		{
			document.layers['loggedInNavs'].display = loggedInNavsStyle;
			document.layers['loggedOutNavs'].display = loggedOutNavsStyle;
		}
	}
	else
	{
		if(document.getElementById('loggedInNavs') != null)
		{
			document.getElementById('loggedInNavs').style.display = loggedInNavsStyle;
			document.getElementById('loggedOutNavs').style.display = loggedOutNavsStyle;
		}
	}
}


function CheckToolBar() {
  var loggedIn = false;
  var domain = 0;
  if((window.location.host.indexOf("us") > -1) || (window.location.host.indexOf("www") > -1)){
  	domain=1;
  }else if(window.location.host.indexOf("uk") > -1){
  	domain=2;
  }
  var edition = getCookie('edition');
  var userId = getCookie('UserID');
  if((null == edition) || ("" == edition)){
  	//This is here to support the time before the edition cookie exists
  	loggedIn = ((userId != null) && (userId != "@"));
  }else{
  	loggedIn = ((userId != null) && (userId != "@") && (domain == edition));
  }
  return loggedIn;
  
}

function getCookie(NameOfCookie)
{ if (document.cookie.length > 0) 
{ begin = document.cookie.indexOf(NameOfCookie+"="); 
if (begin != -1) 
{ begin += NameOfCookie.length+1; 
end = document.cookie.indexOf(";", begin);
if (end == -1) end = document.cookie.length;
return unescape(document.cookie.substring(begin, end)); } 
}
return null; 
}

function doWeatherFrame() {
	if (document.getElementById("additionalPagestamp")) {
		if(strLocalization == "US") {
			document.getElementById("additionalPagestamp").innerHTML = '<iframe id="weatherbug" src="http://today.reuters.com/g3support/weatheriframe.aspx" height="12" width="90" scrolling="no" frameborder="0" framespacing="0" marginwidth="0" marginheight="0"></iframe>';
		} else if (strLocalization == "UK") {
			document.getElementById("additionalPagestamp").innerHTML = '<iframe id="weatherbug" src="http://today.reuters.co.uk/g3support/weatheriframe.aspx" height="12" width="90" scrolling="no" frameborder="0" framespacing="0" marginwidth="0" marginheight="0"></iframe>';
		}
	}
}