var refreshFlag = true;
var refreshTime = 300000; // 180000 milliseconds
function doLoad() {
	 setTimeout( "refresh()", refreshTime );
}

function refresh() {
	if(refreshFlag) {
		if (RTR_ContainsString(unescape(window.location.href), "refresh=true")) {
			window.location.href = unescape(window.location.href);
		} else if (RTR_ContainsString(encodeURIComponent(window.location.href), encodeURIComponent(String.fromCharCode(63)))) {
			window.location.href = unescape(window.location.href) + "&refresh=true";
		} else {
			window.location.href = unescape(window.location.pathname) + "?refresh=true";
		}
	}
}

function stopRefresh() {
	refreshFlag = false;
}
function startRefresh() {
	refreshFlag = true;
	doLoad();
}
function addEvent(obj, evType, fn){
	if (obj.addEventListener){
		obj.addEventListener(evType, fn, false);
			return true;
		} else if (obj.attachEvent){
			var r = obj.attachEvent("on"+evType, fn);
			return r;
		} else {
			return false;
	}
}
addEvent(window, 'load', doLoad);


function RTR_ContainsString(strToSearch, strToFind) {
	if (strToSearch.toLowerCase().search(strToFind.toLowerCase()) != "-1") {
		return true;
	} else {
		return false;
	}
}