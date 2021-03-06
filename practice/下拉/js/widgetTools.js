var zNodes = [{ id: 1, pId: 0, name: "北京", checked: true }, { id: 2, pId: 0, name: "天津" }, { id: 3, pId: 0, name: "上海" }, { id: 6, pId: 0, name: "重庆" }, { id: 4, pId: 0, name: "河北省", open: true }, { id: 41, pId: 4, name: "石家庄" }, { id: 42, pId: 4, name: "保定" }, { id: 43, pId: 4, name: "邯郸" }, { id: 44, pId: 4, name: "承德" }, { id: 5, pId: 0, name: "广东省", open: true }, { id: 51, pId: 5, name: "广州" }, { id: 52, pId: 5, name: "深圳" }, { id: 53, pId: 5, name: "东莞" }, { id: 54, pId: 5, name: "佛山" }, { id: 6, pId: 0, name: "福建省", open: true }, { id: 61, pId: 6, name: "福州" }, { id: 62, pId: 6, name: "厦门" }, { id: 63, pId: 6, name: "泉州" }, { id: 64, pId: 6, name: "三明" }];
/**
 * 通过页面标签id定位控件，进行初始化 
 * 如:
 *     页面是···<label id="combobox">unknown</label>···
 *     通过···$('#combobox').myWidgets(cityOpts);···
 *     可初始化为下拉框
 * 
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function ($) {
    if (typeof $.fn.myWidgets == "undefined") {
        $.fn.myWidgets = function (options) {
            var $this = $(this);
            if ($this.length > 0 && options) {
                var domObj = $(this).get(0);
                var defaults = {
                    widgetType: 'default',
                    label: '<span style="color:red">未填写</span>',
                    data: [],
                    id: domObj.id
                };

                var opts = $.extend(defaults, options);
                return widgets(opts);

            } else {
                return false;
            }
        };
    } else {
        alert('控件初始化无效！');
        return false;
    }

    var widgets = function (options) {
        var that = this;
        var fun_searchCombox;
        var widgetTypeMap = {
            searchCombox: "searchCombox"
        }
        var widgetMap = {};

        widgetMap[widgetTypeMap.searchCombox] = function () {
            var configMap = new Object();
            var jqueryMap = new Object();
            var pMap = new Object();
            var idMap = new Object();

            configMap.zNodes = options.data;
            var setting = {
                check: {
                    enable: true,
                    chkboxType: {
                        "Y": "s",
                        "N": "s"
                    },
                    chkStyle: "checkbox"
                },
                view: {
                    dblClickExpand: false
                },
                data: {
                    simpleData: {
                        enable: true
                    }
                },
                callback: {
                    onCheck: zTreeOnCheck
                }
            };

            configMap.setting = setting;
            var widgetValues = new Array();
            var widgetLabels = new Array();


            idMap.id = options.id;
            idMap.SearchCheckbox = idMap.id + "SearchCheckbox";
            idMap.idSearchInput = idMap.id + "SearchInput";
            idMap.idTree = idMap.id + "Tree";
            idMap.idTreeSearch = idMap.id + "TreeSearch";


            var classMap = new Object();
            var classMapSelector = new Object();
            classMap.s = classMapSelector;

            classMap.labelLoc = idMap.id + " labelLoc";
            classMap.s.labelLoc = "." + idMap.id + ".labelLoc";

            classMap.inputLoc = idMap.id + " inputLoc";
            classMap.s.inputLoc = "." + idMap.id + ".inputLoc"; //".widgetId.inputLoc"

            classMap.menuBtnLoc = idMap.id + " menuBtnLoc";
            classMap.s.menuBtnLoc = "." + idMap.id + ".menuBtnLoc";

            classMap.zTreeContent = idMap.id + " zTreeContent";
            classMap.s.zTreeContent = "." + idMap.id + ".zTreeContent"; //classMap.s.zTreeContent

            classMap.selectionChoice = idMap.id + " selection-choice";
            classMap.s.selectionChoice = "." + idMap.id + ".selection-choice"; //".widgetId.selection-choice"

            classMap.selectionChoiceRemove = idMap.id + " selection-choice-remove";
            classMap.s.selectionChoiceRemove = "." + idMap.id + ".selection-choice-remove";

            configMap.getMainWidgetHtml = function () {
                /*                  var eleHtml =
                                      '<div id="' + idMap.SearchCheckbox + '">' +
                                      '     <ul id="' + idMap.id + '" class="list">' +
                                      '         <li class="' + classMap.labelLoc + '">' + options.label + ':</li>' +
                                      '         <li class="' + classMap.inputLoc + '"></li>' +
                                      '         <li class="' + classMap.menuBtnLoc + '">extend</li>' +
                                      '     </ul>' +
                                      '     <div class="' + classMap.zTreeContent + '" style="display:none; position: absolute;">' +
                                      '         <input id="' + idMap.idSearchInput + '" type="text" class="empty">' +
                                      '         <ul id="' + idMap.idTree + '" class="ztree" style="margin-top:0; width:180px; height: 300px;"></ul>' +
                                      '         <ul id="' + idMap.idTreeSearch + '" class="ztree" style="margin-top:0; width:180px; height: 300px;"></ul>' +
                                      '     </div>' +
                                      '</div>';*/
                var eleHtml =
                    '<div>' +
                    '   <input class="' + classMap.inputLoc + '" readonly="readonly"/>' +
                    '   <div class="' + classMap.zTreeContent + '" style="display:none; position: absolute;">' +
                    '       <input id="' + idMap.idSearchInput + '" type="text" class="empty" style="margin: 3px;width:88%">' +
                    '       <ul id="' + idMap.idTree + '" class="ztree"></ul>' +
                    '       <ul id="' + idMap.idTreeSearch + '" class="ztree"></ul>' +
                    '   </div>' +
                    '</div>';
                return eleHtml;
            };

            configMap.getCheckedHtml = function (nodeId, mc) {
                var eleHtml =
                    '<div class="' + classMap.selectionChoice + '">' +
                    '    <span id="scr_' + nodeId + '" class="' + classMap.selectionChoiceRemove + '">x</span>' +
                    '    <span>' + mc + '</span>' +
                    '</div>';
                return eleHtml;
            };

            function zTreeOnCheck(event, treeId, treeNode, clickFlag) {


                var isMainTree = !($(event.target).parents("#" + idMap.idTreeSearch).length > 0);
                if (isMainTree) {
                    setTimeout(addSelectedItem, 10);
                } else {
                    var isChecked = treeNode.checked;
                    treeNode = jqueryMap.$widgetIdTree.getNodeByParam("id", treeNode.id, null);
                    jqueryMap.$widgetIdTree.checkNode(treeNode, isChecked, true, true);
                }
                return false;

            }

            function addSelectedItem() {
                var nodes = jqueryMap.$widgetIdTree.getCheckedNodes(true);
                var leafNodeArray = [];
                leafNodeArray = getAllChildrenNodes(nodes, leafNodeArray);

                widgetValues.length = 0;
                widgetLabels.length = 0;
                for (var i = 0; i < leafNodeArray.length; i++) {
                    var node = leafNodeArray[i];
                    widgetValues.push(node.id);
                    widgetLabels.push(node.name);
                    // content += configMap.getCheckedHtml(node.id, node.name);
                }
                var $inputDiv = $(classMap.s.inputLoc);
                var innerHTML = widgetLabels.join(",");
                $inputDiv.val(innerHTML);
                $(classMap.s.selectionChoiceRemove).bind("click", removeSelection);
            }

            function getAllChildrenNodes(nodeArray, leafNodeArray) {
                for (var i = 0; i < nodeArray.length; i++) {
                    if (!nodeArray[i].isParent) {
                        leafNodeArray.push(nodeArray[i]);
                    }
                }
                return leafNodeArray;
            }

            function removeSelection(event) {
                var id = event.target.id;
                id = parseInt(id.match(/scr_(\S*)/)[1]);
                var $zTreeObj = $.fn.zTree.getZTreeObj(idMap.idTree);
                var keyType = "id";
                var node = $zTreeObj.getNodeByParam(keyType, id);
                $zTreeObj.checkNode(node, false, true, true);

            }

            var isShowMenu = true;

            function showMenu() {
                $(".zTreeContent").fadeOut("fast");
                pMap.$input = $(classMap.s.inputLoc);
                var inputOffset = pMap.$input.offset();
                var $zTreeContent = $(classMap.s.zTreeContent);
                $zTreeContent.css({
                    left: inputOffset.left + "px",
                    top: inputOffset.top + pMap.$input.outerHeight() + "px"
                }).slideDown("fast");
                eventSwitch(isShowMenu);
                isShowMenu = false;
                return isShowMenu;
            };

            function hideMenu() {
                $(classMap.s.zTreeContent).fadeOut("fast");
                eventSwitch(isShowMenu);
                isShowMenu = true;
                return false;
            };

            function eventSwitch(isShowMenu) {
                if (isShowMenu) {
                    $(classMap.s.inputLoc).unbind('click', toggleMenu);
                    $("body").bind("click", toggleMenu);
                } else {
                    $(classMap.s.inputLoc).bind('click', toggleMenu);
                    $("body").unbind("click", toggleMenu);
                }
                return false;
            }

            function toggleMenu(event) {
                var $currentTarget = $(event.target);
                var isSwitch = (($currentTarget.parents(".zTreeContent").length > 0) || ($currentTarget.parents(".selection-choice").length > 0));
                if (isSwitch) {
                    return false;
                }
                return isShowMenu ? showMenu() : hideMenu();
            }

            function focusKey(e) {
                if (jqueryMap.$searchInput.hasClass("empty")) {
                    jqueryMap.$searchInput.removeClass("empty");
                }
                return false;
            };

            function blurKey(e) {
                if (jqueryMap.$searchInput.get(0).value === "") {
                    jqueryMap.$searchInput.addClass("empty");
                }
                return false;
            };

            function searchNode(e) {
                var value = $.trim(jqueryMap.$searchInput.get(0).value);
                if (value.length > 0) {
                    var zTree = $.fn.zTree.getZTreeObj(idMap.idTree);
                    var nodeArray = zTree.getNodesByParamFuzzy("name", value);
                    $("#" + idMap.idTree).hide();
                    $("#" + idMap.idTreeSearch).show();
                    updateResultTree(nodeArray);
                } else {
                    $("#" + idMap.idTree).show();
                    $("#" + idMap.idTreeSearch).hide();
                }
                return false;
            }

            function updateResultTree(nodeArray) {
                $.fn.zTree.init($("#" + idMap.idTreeSearch), setting,
                    nodeArray);
            }

            function initTree(argument) {
                jqueryMap.$searchInput = $("#" + idMap.idSearchInput);
                $.fn.zTree.init($("#" + idMap.idTree),
                    setting, configMap.zNodes);
                $.fn.zTree.init($("#" + idMap.idTreeSearch), setting,
                    configMap.zNodes);
                $("#" + idMap.idTreeSearch).hide();
                jqueryMap.$searchInput.bind("focus", focusKey).bind("blur", blurKey)
                    .bind("propertychange", searchNode).bind("input", searchNode);
                $(classMap.s.inputLoc).bind('click', toggleMenu);
                //在调用addSelectedItem时必须获取一下对象
                jqueryMap.$widgetIdTree = $.fn.zTree.getZTreeObj(idMap.idTree);
                jqueryMap.$widgetIdTreeSearch = $.fn.zTree.getZTreeObj(idMap.idTreeSearch);
                addSelectedItem();
            }

            function init() {
                var $targetDiv = $("#" + idMap.id);
                if ($targetDiv.length > 0) {
                    var targetDivObj = $targetDiv[0];
                    var htmlText = configMap.getMainWidgetHtml();
                    targetDivObj.outerHTML = htmlText;
                } else {
                    alert("页面标签未定义！")
                    return false;
                }
                initTree();
                return {
                    values: widgetValues,
                    names: widgetLabels
                };
            }

            return {
                init: init
            };
        };

        //
        if (options && options.widgetType && options.widgetType == widgetTypeMap[options.widgetType]) {
            var widget = widgetMap[options.widgetType]();
            var init = widget.init()
            return init;
        } else {
            alert("尚无此类控件！");
        }
    }
})(jQuery);



/**
 * 非widget：一些可能会方便开发的小function
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
var myTools = {};
myTools.obj = {};
(function ($) {
    /**
     * 下拉框选项对象
     * @type {[type]}
     */
    myTools.obj.SelectItem = function () {
        var that = this;
        this.itemArray = [];
        this.empty = function () {
            this.itemArray = [];
        }
        this.add = function () {
            var item = {};
            (arguments[0]) ? item.value = arguments[0] : "";
            (arguments[1]) ? item.mc = arguments[1] : "";
            (arguments[2]) ? item.selected = arguments[2] : "";
            this.itemArray.push(item);
            return this;
        }
        this.getItems = function () {
            return this.itemArray;
        }
        return this;
    };

    /**
     * [cascadeDropDown description]
     * 将页面已有的<select>加上级联关系:opts跟 myTools.obj.SelectItem有关
     * @param  {[type]} opts [        
     *                        opts.parentId = "f";//比子节点多了需要关联的child属性 
     *                        opts.childId = "c"; 
     *                        opts.items =  myTools.obj.SelectItem.add().getItems();
     * var parentItems = [{ value: "1", mc: "金融保险业", child: childItems1 }, 
     *                    { value: "2", mc: "非金融保险业", child: childItems2, 
     *                      selected: true }]; ]
     * @return {[type]}      [一般会取child.val()为所需条件]
     */

    myTools.cascadeDropDown = function (opts) {
        //获取两个控件
        var $parent, $child;
        var onChageOption = function (argument) {
            var currentValue = $parent.val();
            for (var i = 0; i < opts.items.length; i++) {
                if (currentValue == opts.items[i].value) {
                    changeItems($child, opts.items[i].child);
                    return false;
                }
            }
        }
        var changeItems = function ($ele, items) {
            $ele.empty();
            for (var i = 0; i < items.length; i++) {
                var option = $("<option>").val(items[i].value).text(items[i].mc);
                $ele.append(option);
                if (items[i].selected) {
                    var $targetSelect = $ele.find("option[value='" + items[i].value + "']");
                    $targetSelect.attr("selected", true);
                    onChageOption();
                }
            }
        }
        var initWidgets = function () {
            $parent = $("#" + opts.parentId);
            $child = $("#" + opts.childId);
            $parent.on("change.select", onChageOption);
            changeItems($parent, opts.items);
            // changeItems($child, opts.items[1].child);
            return $child;
        }

        return initWidgets();
    }


    /**
     * 
     * var fzxmArray = ["SWJG", "HY", "DJZCLX"];
     * var fzxmJCDM = { SWJG: 0, HY: 3, DJZCLX: 0 };
     * var fzxmAlis = { SWJG: "S", HY: "H", DJZCLX: "D" };
     * var sql = myTools.getFzxmSQLDm(fzxmArray, fzxmJCDM);
     * console.info(sql);
     * @type {myTools}
     */

    myTools.getFzxmSQLDm = function () {
        var setting = {}
        setting.DJZCLX = new Array("djzclxdl_dm", "djzclxzl_dm", "djzclx_dm");
        setting.HY = new Array("hyml_dm", "hydl_dm", "hyzl_dm", "hy_dm");
        setting.SWJG = new Array("swjg_1_dm", "swjg_2_dm", "swjg_3_dm", "swjg_4_dm", "swjg_5_dm");

        var getFzxmSQLDm = function (fzxmArray, fzxmJCDM, fzxmAlis) {
            var sqlArray = [];
            for (var i = 0; i < fzxmArray.length; i++) {
                var fzxm = fzxmArray[i];
                var fzxmMap = setting[fzxm];
                var jcdm = fzxmJCDM[fzxm];
                sqlArray.push((fzxmAlis && fzxmAlis[fzxm]) ? fzxmAlis[fzxm] + "." + fzxmMap[jcdm] : fzxmMap[jcdm])
            }
            return sqlArray.join(",");
        }
        return getFzxmSQLDm;
    }
})(jQuery)


/*************************************************************************/
/**
 * 级联数据
 */
var sItems = new myTools.obj.SelectItem();
var childItems1 = sItems
    .add("1", "连续1个月")
    .add("2", "连续2个月")
    .add("3", "连续3个月")
    .add("4", "连续4个月")
    .add("5", "连续5个月")
    .add("6", "连续6个月")
    .add("7", "连续7个月")
    .add("8", "连续8个月")
    .add("9", "连续9个月")
    .add("10", "连续10个月")
    .add("11", "连续11个月")
    .add("12", "连续12个月")
    .getItems();
sItems.empty();
var childItems2 = sItems
    .add("1", "第1季度")
    .add("2", "第2季度")
    .add("3", "第3季度")
    .add("4", "第4季度")
    .getItems();
//连续零收入申报次数
var lxlsrsbcsItems = [{
    value: "1",
    mc: "金融保险业",
    child: childItems1
}, {
    value: "2",
    mc: "非金融保险业",
    child: childItems2,
    selected: true
}];
  /*************************************************************************/
