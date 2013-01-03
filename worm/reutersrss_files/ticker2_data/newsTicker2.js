function initButtons() {
  var kids = document.getElementsByTagName('img');
  for (var i=0; i < kids.length; i++) {
    kids[i].onclick = buttonClick;
    kids[i].onmousedown = buttonDown;
    kids[i].onmouseup = buttonUp;
    kids[i].oncontextmenu = buttonMenu;
  }
  //document.getElementById("tickContentLink").onmouseover = stopTicker;
  //document.getElementById("tickContentLink").onmouseout = resumeTicker;
	getLinkElems();
	playFirstTicker();
}
function buttonMenu(e) {
	return false;
}
function buttonDown(e) {
	if (!e) var e = window.event;
	if ((tickLocked == false) && (e.button != 2)) {
		document.getElementById(this.id).style.cssText = "margin: 2px 0px 0px 2px;";
	}
}
function buttonUp(e) {
	if (!e) var e = window.event;
	if ((tickLocked == false) && (e.button != 2)) {
		document.getElementById(this.id).style.cssText = "";
	}
}
function buttonClick(e) {
  delayTicker();
  if (this.id == "back") {
    prevArticle();
  } else if (this.id == "next") {
    nextArticle();
  }
}
function prevArticle() {
  if (tickLocked == false) {
	  if (intTickPos == 0) {
	    intTickPos = arrNewsItems.length-1;
	  } else {
	    intTickPos--;
		}
		setArticle(intTickPos);
	}
}
function nextArticle() {
	if (tickLocked == false) {
	  if (intTickPos == arrNewsItems.length-1) {
	    intTickPos = 0;
	  } else {
	    intTickPos++;
		}
		setArticle(intTickPos);
	}
}
function typeText() {
	if(intCurrentPos < currentText.length) {
		strText += currentText.charAt(intCurrentPos);
		setSpan(strText,currentLink);
		intCurrentPos++;		
	} else if (intCurrentPos == currentText.length) {
		strText += currentText.charAt(intCurrentPos);
		setSpan(strText,currentLink);
		clearInterval(typeInterval);
		hideCursor();
	} else if (intCurrentPos > currentText.length){
		setSpan(strText,currentLink);
		clearInterval(typeInterval);
		hideCursor();
	}
}
function setSpan(strText, strLink) {
	var tickElem = document.getElementById("tick");
		var tickFirstChild =  tickElem.firstChild;
		var tickLinkElem = document.createElement("a");
		tickLinkElem.setAttribute('href', strLink);
    tickLinkElem.setAttribute('target', '_top');
		//tickLinkElem.setAttribute('id', 'tickContentLink');
		tickText = document.createTextNode(strText);
		tickLinkElem.appendChild(tickText);
		tickElem.replaceChild(tickLinkElem,tickFirstChild);
		getLinkElems();
}
function getLinkElems() {
	var tickerElem = document.getElementById("tick"); 
	var tickerAElem = tickerElem.getElementsByTagName("a"); 
	for (var i=0; i < tickerAElem.length; i++) {
    tickerAElem[i].onmouseover = stopTicker;
   	tickerAElem[i].onmouseout = resumeTicker;
  }
}

function setArticle(intPos) {
	if(arrNewsItems[intPos]!=null) {
		tickLocked = true;
		intCurrentPos = 0;
		strText = '';
		setSpan('', '#');
		showCursor();
		currentText = arrNewsItems[intPos][0];
		currentLink = arrNewsItems[intPos][1];
		typeInterval = setInterval( "typeText()", intTypeSpeed);
		tickLocked = false;
  }
}
function playTicker() {
  isInFirstTimeout = false;
	if (autoTimerID != 0) {
		clearInterval(typeInterval);
		nextArticle();
  }
  autoTimerID = self.setTimeout("playTicker()", intTickSpeed);
}
function playFirstTicker() {
	if(isFirstPass == true) {
		hideCursor();
		setSpan(arrNewsItems[0][0],arrNewsItems[0][1]);
		isFirstPass = false;
		typeInterval = setInterval('',0);
		isInFirstTimeout = true;
		autoTimerID = self.setTimeout("playFirstTicker()", intTickSpeed);
	}
	else if(isFirstPass == false) {
		clearTimeout(autoTimerID);
		isInFirstTimeout = false;
		setArticle(intTickPos);
		playTicker();
	}
}
function stopTicker() {
	clearTimeout(autoTimerID);
}
function resumeTicker() {
	clearTimeout(autoTimerID);
	autoTimerID = self.setTimeout("playTicker()", intTickSpeed);
}
function delayTicker() {
  clearTimeout(autoTimerID);
	clearInterval(typeInterval);
  autoTimerID = self.setTimeout("playTicker()", intTickSpeed * 2);
}
function hideCursor() {
	document.getElementById("cursor").className = "hidden";
}

function showCursor() {
	document.getElementById("cursor").className = "";
}
initButtons();