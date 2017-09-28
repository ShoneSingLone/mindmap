/*
 * spa.js
 * Root namespace module
*/

/*jslint           browser : true,   continue : true,
  devel  : true,    indent : 2,       maxerr  : 50,
  newcap : true,     nomen : true,   plusplus : true,
  regexp : true,    sloppy : true,       vars : false,
  white  : true
*/
/*global $, spa */

var spa = (function () {
  var initModule = function ( $container ) {
    spa.navbar.initModule( $container );
  };
  return { initModule: initModule };
}());




var stamp = function () {
	let $navbar = $("#nav-top-bar");
	let navbarOuterHeight = $navbar.outerHeight();
	let cssStyle = {
		height: navbarOuterHeight + "px",
		marginBottom: "30px"
	};
	$("#nav-stamp").css(cssStyle);


	let $jumbotron = $("div.jumbotron");
	cssStyle = {
		backgroundColor: "rgba(238, 238, 238, 0.2)",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat"
	};
	$jumbotron.css(cssStyle);

}