// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import jquery from 'jquery';
import app from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

console.log("eleMeApp start");
/* eslint-disable no-new */
let eleMeApp = new Vue({
  el: "#app",
  router,
  store,
  template: "<app/>",
  components: {
    app
  }
});
console.log("eleMeApp end");

/**
 * 根据窗口width切换iframe
 * @param  {jQuery} $
 */
window.$ = jquery;

function getThisAdd(e) {
  debugger;
  console.log(e)
}

window.whenWindowIsMobile = (function ($) {
  $('html').on('click',  getThisAdd);

  let iframeHTML = (
    '<table id="mobile-windown">' +
    '    <tbody>' +
    '        <tr>' +
    '            <td>' +
    '                <iframe src="./index.html" frameborder="0" style="height: 732px;width: 412px; "></iframe>' +
    '            </td>' +
    '        </tr>' +
    '    </tbody>' +
    '</table>'
  );
  let $mobileWindown = $('#mobile-windown');

  $(function () {
    $(window).on("resize.mobile", function (e) {
      if (window.matchMedia("(max-width: 415px)").matches) {
        console.log("outerHeight: ", window.outerHeight, "\nouterWidth: ", window.outerWidth);
        $('#app').show();
        if ($mobileWindown) {
          $mobileWindown.hide();
        }
      } else {
        $('#app').hide();
        if (!($mobileWindown && $mobileWindown.length > 0)) {
          $('body').append($(iframeHTML));
          $mobileWindown = $('#mobile-windown');
        }
        $mobileWindown.show();
      }
    }).trigger("resize.mobile");













  })
  return {
    $mobileWindown
  };
})(jquery)
