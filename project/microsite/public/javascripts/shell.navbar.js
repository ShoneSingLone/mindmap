/*
 * spa.navbar.js
 * Shell module for SPA
*/

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
*/
/*global $, spa */

spa.navbar = (function () {
  //---------------- BEGIN MODULE SCOPE VARIABLES --------------
  var
    configMap = {
      anchor_schema_map: {
        chat: { open: true, closed: true }
      },
      main_html: String() +
      '        <nav id="nav-top-bar" class="navbar navbar-default navbar-fixed-top">' +
      '            <div class="container">' +
      '                <div class="navbar-header">' +
      '                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"' +
      '                        aria-controls="navbar">' +
      '                        <span class="sr-only">Toggle navigation</span>' +
      '                        <span class="icon-bar"></span>' +
      '                        <span class="icon-bar"></span>' +
      '                        <span class="icon-bar"></span>' +
      '                    </button>' +
      '                    <a class="navbar-brand" href="#">ShoneSingLone\'s MicroSite</a>' +
      '                </div>' +
      '                <div id="navbar" class="navbar-collapse collapse">' +
      '                    <ul class="nav navbar-nav">' +
      '                    </ul>' +
      '                    <ul class="nav navbar-nav navbar-right">' +
      '                        <li><a href="">Home</a></li>' +
      '                        <li><a href="#contact">Contact</a></li>' +
      '                        <li><a href="#about">关于我</a></li>' +
      '                        <li class="dropdown" style="display:none;">' +
      '                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>' +
      '                            <ul class="dropdown-menu">' +
      '                                <li><a href="#">Action</a></li>' +
      '                                <li><a href="#">Another action</a></li>' +
      '                                <li><a href="#">Something else here</a></li>' +
      '                                <li role="separator" class="divider"></li>' +
      '                                <li class="dropdown-header">Nav header</li>' +
      '                                <li><a href="#">Separated link</a></li>' +
      '                                <li><a href="#">One more separated link</a></li>' +
      '                            </ul>' +
      '                        </li>' +
      '                    </ul>' +
      '                </div>' +
      '            </div>' +
      '        </nav>' +
      '        <div id="nav-stamp"></div>',
      chat_extend_time: 1000,
      chat_retract_time: 300,
      chat_extend_height: 450,
      chat_retract_height: 15,
      chat_extended_title: 'Click to retract',
      chat_retracted_title: 'Click to extend'
    },
    stateMap = {
      $container: null,
      anchor_map: {},
      is_chat_retracted: true
    },
    jqueryMap = {},

    copyAnchorMap, setJqueryMap, toggleChat,
    changeAnchorPart, onHashchange,
    onClickChat, initModule;
  //----------------- END MODULE SCOPE VARIABLES ---------------

  //------------------- BEGIN UTILITY METHODS ------------------
  // Returns copy of stored anchor map; minimizes overhead
  copyAnchorMap = function () {
    return $.extend(true, {}, stateMap.anchor_map);
  };
  //-------------------- END UTILITY METHODS -------------------

  //--------------------- BEGIN DOM METHODS --------------------
  // Begin DOM method /setJqueryMap/
  setJqueryMap = function () {
    var $container = stateMap.$container;

    jqueryMap = {
      $container: $container,
      $chat: $container.find('.spa-shell-chat')
    };
  };
  // End DOM method /setJqueryMap/

  // Begin DOM method /toggleChat/
  // Purpose   : Extends or retracts chat slider
  // Arguments :
  //   * do_extend - if true, extends slider; if false retracts
  //   * callback  - optional function to execute at end of animation
  // Settings  :
  //   * chat_extend_time, chat_retract_time
  //   * chat_extend_height,   chat_retract_height
  // Returns   : boolean
  //   * true  - slider animation activated
  //   * false - slider animation not activated
  // State     : sets stateMap.is_chat_retracted
  //   * true  - slider is retracted
  //   * false - slider is extended
  //
  toggleChat = function (do_extend, callback) {
    var
      px_chat_ht = jqueryMap.$chat.height(),
      is_open = px_chat_ht === configMap.chat_extend_height,
      is_closed = px_chat_ht === configMap.chat_retract_height,
      is_sliding = !is_open && !is_closed;

    // avoid race condition
    if (is_sliding) { return false; }

    // Begin extend chat slider
    if (do_extend) {
      jqueryMap.$chat.animate(
        { height: configMap.chat_extend_height },
        configMap.chat_extend_time,
        function () {
          jqueryMap.$chat.attr(
            'title', configMap.chat_extended_title
          );
          stateMap.is_chat_retracted = false;
          if (callback) { callback(jqueryMap.$chat); }
        }
      );
      return true;
    }
    // End extend chat slider

    // Begin retract chat slider
    jqueryMap.$chat.animate(
      { height: configMap.chat_retract_height },
      configMap.chat_retract_time,
      function () {
        jqueryMap.$chat.attr(
          'title', configMap.chat_retracted_title
        );
        stateMap.is_chat_retracted = true;
        if (callback) { callback(jqueryMap.$chat); }
      }
    );
    return true;
    // End retract chat slider
  };
  // End DOM method /toggleChat/

  // Begin DOM method /changeAnchorPart/
  // Purpose  : Changes part of the URI anchor component
  // Arguments:
  //   * arg_map - The map describing what part of the URI anchor
  //     we want changed.
  // Returns  : boolean
  //   * true  - the Anchor portion of the URI was update
  //   * false - the Anchor portion of the URI could not be updated
  // Action   :
  //   The current anchor rep stored in stateMap.anchor_map.
  //   See uriAnchor for a discussion of encoding.
  //   This method
  //     * Creates a copy of this map using copyAnchorMap().
  //     * Modifies the key-values using arg_map.
  //     * Manages the distinction between independent
  //       and dependent values in the encoding.
  //     * Attempts to change the URI using uriAnchor.
  //     * Returns true on success, and false on failure.
  //
  changeAnchorPart = function (arg_map) {
    var
      anchor_map_revise = copyAnchorMap(),
      bool_return = true,
      key_name, key_name_dep;

    // Begin merge changes into anchor map
    // 根据URL 的 map 有哪些就更新成哪些
    KEYVAL:
    for (key_name in arg_map) {
      debugger;
      if (arg_map.hasOwnProperty(key_name)) {

        // skip dependent keys during iteration
        // 这种属性类似与_proto_
        if (key_name.indexOf('_') === 0) { continue KEYVAL; }

        // update independent key value
        anchor_map_revise[key_name] = arg_map[key_name];

        // update matching dependent key
        key_name_dep = '_' + key_name;
        if (arg_map[key_name_dep]) {
          anchor_map_revise[key_name_dep] = arg_map[key_name_dep];
        }
        else {
          delete anchor_map_revise[key_name_dep];
          delete anchor_map_revise['_s' + key_name_dep];
        }
      }
    }
    // End merge changes into anchor map

    // Begin attempt to update URI; revert if not successful
    try {
      $.uriAnchor.setAnchor(anchor_map_revise);
    }
    catch (error) {
      // replace URI with existing state
      $.uriAnchor.setAnchor(stateMap.anchor_map, null, true);
      bool_return = false;
    }
    // End attempt to update URI...

    return bool_return;
  };
  // End DOM method /changeAnchorPart/
  //--------------------- END DOM METHODS ----------------------

  //------------------- BEGIN EVENT HANDLERS -------------------
  // Begin Event handler /onHashchange/
  // Purpose  : Handles the hashchange event
  // Arguments:
  //   * event - jQuery event object.
  // Settings : none
  // Returns  : false
  // Action   :
  //   * Parses the URI anchor component
  //   * Compares proposed application state with current
  //   * Adjust the application only where proposed state
  //     differs from existing
  //
  onHashchange = function (event) {
    var
      anchor_map_previous = copyAnchorMap(),
      anchor_map_proposed,
      _s_chat_previous, _s_chat_proposed,
      s_chat_proposed;

    // attempt to parse anchor
    try {
      anchor_map_proposed = $.uriAnchor.makeAnchorMap();
    }
    catch (error) {
      $.uriAnchor.setAnchor(anchor_map_previous, null, true);
      return false;
    }
    debugger;
    stateMap.anchor_map = anchor_map_proposed;

    // convenience vars
    _s_chat_previous = anchor_map_previous._s_chat;
    _s_chat_proposed = anchor_map_proposed._s_chat;

    // Begin adjust chat component if changed
    if (!anchor_map_previous
      || _s_chat_previous !== _s_chat_proposed
    ) {
      s_chat_proposed = anchor_map_proposed.chat;
      switch (s_chat_proposed) {
        case 'open':
          toggleChat(true);
          break;
        case 'closed':
          toggleChat(false);
          break;
        default:
          toggleChat(false);
          delete anchor_map_proposed.chat;
          $.uriAnchor.setAnchor(anchor_map_proposed, null, true);
      }
    }
    // End adjust chat component if changed

    return false;
  };
  // End Event handler /onHashchange/

  // Begin Event handler /onClickChat/
  onClickChat = function (event) {
    changeAnchorPart({
      chat: (stateMap.is_chat_retracted ? 'open' : 'closed')
    });
    return false;
  };
  // End Event handler /onClickChat/
  //-------------------- END EVENT HANDLERS --------------------

  //------------------- BEGIN PUBLIC METHODS -------------------
  // Begin Public method /initModule/
  initModule = function ($container) {
    debugger;
    // load HTML and map jQuery collections
    stateMap.$container = $container;
    $container.html(configMap.main_html);
    // setJqueryMap();

    // initialize chat slider and bind click handler
    // stateMap.is_chat_retracted = true;
    // jqueryMap.$chat      .attr('title', configMap.chat_retracted_title)      .click(onClickChat);

    // configure uriAnchor to use our schema
    // $.uriAnchor.configModule({
    //   schema_map: configMap.anchor_schema_map
    // });

    // Handle URI anchor change events.
    // This is done /after/ all feature modules are configured
    // and initialized, otherwise they will not be ready to handle
    // the trigger event, which is used to ensure the anchor
    // is considered on-load
    //
    $(window)
      .bind('hashchange', onHashchange)
      .trigger('hashchange');

  };
  // End PUBLIC method /initModule/

  return { initModule: initModule };
  //------------------- END PUBLIC METHODS ---------------------
}());
