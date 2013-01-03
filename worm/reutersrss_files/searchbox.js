function clearSearch(defaultText) {
	var strSearchValue = document.forms[0].searchbox.value;
	if (trimString(strSearchValue) == defaultText) { 
		document.forms[0].searchbox.value = "";
	}
}

function fillSearch(defaultText) {
	var strSearchValue = document.forms[0].searchbox.value;
	if (trimString(strSearchValue) == '') {
		document.forms[0].searchbox.value = defaultText;
	}
}

function trimString(strText) {
  if (strText != '') {
    var m=0;
    var strClean = strText;
    while (strText.substring((strText.length -m -1), strText.length -m) == ' ') {
      m++;
    }	
    if (m > 0) { 
      strClean = strText.substring(0,strText.length -m);
    }    
    var m = 0;
    while (strClean.substring(m, m + 1) == ' ') {
      m++;
    }	
    if (m > 0) { 
      strClean = strClean.substring(m,strText.length);
    }
    return strClean;    
  } else {
    return '';
  }
}

function goSearch(url, siteValue, blobCtrl)
{
	var blobValue = document.getElementById(blobCtrl).value;
	
	var location = url + "?site=" + siteValue + "&blob=" + encodeURIComponent(blobValue);
	
	Redirect(location);
}

function KeyDownHandler(btn)    
{       
	// process only the Enter key           
	if (event.keyCode == 13)           
	{            
		// cancel the default submit            
		event.returnValue = false;            
		event.cancel = true;
		
		var obj = document.getElementById(btn);
		obj.click();
	}
}