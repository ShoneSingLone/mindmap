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
  components: { app }
});
console.log("eleMeApp end");


window.whenWindowIsMobile = (function ($) {

  let iframeHTML = (
    '<table id="mobile-windown">' +
    '    <thead>' +
    '        <tr>' +
    '            <th>请使用移动设备或者调至模拟设备查看</th>' +
    '        </tr>' +
    '        <tr>' +
    '            <th>(最大宽度 iPhone8 Plus 414X736)</th>' +
    '        </tr>' +
    '    </thead>' +
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
  return { $mobileWindown };
})(jquery)
