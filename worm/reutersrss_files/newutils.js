if (typeof(com) == 'undefined' || com == null) {
  com = new Object();
}

if (typeof(com.reuters) == 'undefined' || com.reuters == null) {
  com.reuters = new Object();
}

if (typeof(com.reuters.rcom) == 'undefined' || com.reuters.rcom == null) {
  com.reuters.rcom = new Object();
}

if (typeof(com.reuters.rcom.utils) == 'undefined' || com.reuters.rcom.utils == null) {
  com.reuters.rcom.utils = new Object();
}

com.reuters.rcom.utils.getQueryStringParam = function(paramName) {
  var locs = document.location.toString().split("?");
  if (locs.length > 1) {
    var params = locs[1].split("&");
    for (var i = 0; i < params.length; i++) {
      var pair = params[i].split("=");
      if (pair[0] == paramName) {
        return pair[1];
      }
    }
  }
}

com.reuters.rcom.utils.replaceContent = function(elementId, url, interval, reloadCallbackFunc){
	var replacer = new com.reuters.rcom.utils._contentReplacer(elementId, url, interval, reloadCallbackFunc);
	replacer.update();
}

com.reuters.rcom.utils._contentReplacer = function(elementId, url, interval, reloadCallbackFunc){
    this.elementId = elementId;
    this.url = url;
    this.reloadCallbackFunc = reloadCallbackFunc;
    
    if(interval){
    	this.interval = interval;
    }else{
    	this.interval = null;
    }
    
    this.success = function(o){
        if ((o.responseText !== undefined) && (o.responseText != null) && (o.responseText.indexOf("No Data")<0)) {
          var result = o.responseText;
          var el = document.getElementById(elementId);
          var newEL = document.createElement(el.tagName);
          newEL.innerHTML = result;
          // compare to see if new contents are different than current contents
          if (el.innerHTML != newEL.innerHTML) {
            //el.innerHTML = result;
            el.parentNode.replaceChild(newEL, el);
            newEL.id = elementId;
            if (this.reloadCallbackFunc && typeof this.reloadCallbackFunc == "function") {
              this.reloadCallbackFunc();
            }
          }
        }
        if(this.interval != null){
        	setTimeout(this.update.bind(this), this.interval);
        }
    }
    
    this.failure = function(o) {
      // what do we do here? 
    }
    
    this.update = function(){
        YAHOO.util.Connect.asyncRequest("GET", this.url, this);
    }
}
