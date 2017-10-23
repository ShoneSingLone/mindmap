/* ========================================================================
 * Bootstrap: alert.js v3.3.7
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================
  // alert插件类及原型方法的定义

  // 定义选择器,所有符合该自定义属性的元素都可以触发下面的事件
  // dismiss：解雇；开除；驳回；解散
  // selectorn
  var dismiss = '[data-dismiss="alert"]'
  // $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

  var Alert = function (el) {
    // 传入元素,如果元素内部有dismiss上设置的自定义属性,则click事件会触发原型上的 close方法
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.7'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this = $(this);
    //可以通过data-target强行指明要关闭的元素
    var selector = $this.attr('data-target');
    // strip for ie7
    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '');
    }

    var $parent = $(selector === '#' ? [] : selector)

    if (e) e.preventDefault();
    //如果没有指定目标，就是最近的带有.alert的父元素
    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove();
    }
    // 如果支持动画，在动画之后removeElement
    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement();
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============
  // .on( events [, selector ] [, data ], handler )

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);
