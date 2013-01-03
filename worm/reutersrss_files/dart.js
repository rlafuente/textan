// RELOAD AD INTERVAL is 30 seconds
var reloadAdInterval = 30000;
// DEFAULT HARD RELOAD TIME is 20 minutes (used if meta-refresh reload not present)
var defaultHardReloadTime = 1200000;

var pageLoadTime = new Date().getTime();
var hardReloadTime = pageLoadTime + defaultHardReloadTime;
if (document.getElementById("MetaRefresh") && document.getElementById("MetaRefresh").content != undefined) {
  hardReloadTime = pageLoadTime + ((document.getElementById("MetaRefresh").content * 1000));
}
function getTmstmp() {currentTime = new Date();tmstmp = ''+currentTime.getYear()+currentTime.getMonth()+currentTime.getDate()+currentTime.getUTCHours()+currentTime.getUTCMinutes()+currentTime.getUTCSeconds()+currentTime.getUTCMilliseconds();}
function getSeg() {var dc = document.cookie;
var ret = ""; var prefix = "DMSEG="; var begin = dc.indexOf("; " + prefix); var end = -1; var cookieValue = "";try {
if(begin > 0) { begin = begin + prefix.length + 2; }else if(dc.indexOf(prefix) == 0) {begin = prefix.length;}if(begin >= 0) {end = dc.indexOf(";", begin);if(end == -1) end = dc.length;	 // last cookie
cookieValue = unescape(dc.substring(begin, end));if(end < begin) return ret;if(cookieValue != null && typeof('cookieValue') == "string" && cookieValue.length > 0) {var valsplit = cookieValue.split("&");if(valsplit != null && valsplit.length > 5){var segsplit = valsplit[5] != null ? valsplit[5].split(",") : null;if(segsplit != null && segsplit.length > 0)for(var i = 0; i < segsplit.length; i++) {ret += "seg1=" + segsplit[i] + ";";} } } } }catch(e) {}return ret;}var seg = getSeg("DMSEG");
function reloadAds() {
  var reloadCheckTime = new Date().getTime();
  if ((reloadCheckTime > (currentTime.getTime() + reloadAdInterval)) &&
      (reloadCheckTime < (hardReloadTime - reloadAdInterval))) {
    getTmstmp();
    var iframes = document.getElementsByTagName("iframe");
    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].id && iframes[i].id.indexOf("advert_") >= 0) {
        iframes[i].src = iframes[i].src;
        //iframes[i].contentWindow.location.href = iframes[i].contentWindow.location.href;
        //window.frames[iframes[i].id].location.reload(true);
      }
    }
  }
}
getTmstmp();
