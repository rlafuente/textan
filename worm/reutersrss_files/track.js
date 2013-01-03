var cn = 'RaptTracker';
function Rapt_Track(s) {
  var r = Math.random();
  var t = new Date();
  var a = 'http://rtt.rapt.com:8080/web-im/track?';
  a +="o="+_org; a +="&v=("+escape(s)+")"; a +="&r="+r;
  if ( !gc( cn ) ) { sc( cn, r, t, 30, '/', '', ''); }
  if ( gc( cn ) ) {  a +="&u="+gc(cn);  }
  var u = window.location.href; var i = u.indexOf('?');
  if (i == -1) { a +="&p="+u; } else { a +="&p="+u.substring(0,i); }
  document.write('<IMG'+' SRC="' + a + '" STYLE="display: none" height="1" width="1" border="0">');
}
function sc( n, v, t, e, p, d, s ) {
  v += ';'+ t.getTime();
  if ( e ) {  e=e*1000*60*60*24;  }
  var ed = new Date( t.getTime() + (e) );
  document.cookie = n + "=" +escape( v ) +
  ( (e) ? ";expires=" + ed.toGMTString() : "" );
}
function gc( n ) {
  var s = document.cookie.indexOf( n + "=" );
  var l = s + n.length + 1;
  if ( ( !s ) &&
      ( n != document.cookie.substring( 0, n.length ) ) ) { return null; }
  if ( s == -1 ) return null;
  var e = document.cookie.indexOf( ";", l );
  if ( e == -1 ) e = document.cookie.length;
  return unescape( document.cookie.substring( l, e ) );
}
