var pidCodeQ = com.reuters.rcom.utils.getQueryStringParam("pid");
if(null==pidCodeQ){
 pidCodeQ = com.reuters.rcom.utils.getQueryStringParam("PID");
}

if(null != pidCodeQ){
  setCookie("pid", pidCodeQ);
}

if(getCookie("pid")!=null){
  if(getCookie("pid") != "801" && getCookie("pid") != "901"){  
    document.write("<link href=\"/resources/css/rcom-institutional.css\" rel=\"stylesheet\" />");
  }
  
  if(getCookie("pid") != "901") {
  	hideAllAds = true;
  }
  else {
  	hideGoogleAds = true; 
  	hideAllAds = false;
  }
}

