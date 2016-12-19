/**
 * Created by Administrator on 2016/10/10.
 */
$(function() {
    $("[data-toggle='popover']").popover({
        html : true,
        title: title(),
        delay:{show:500, hide:2000},
        content: function() {
            return content();
        }
    });
});

//模拟动态加载标题(真实情况可能会跟后台进行ajax交互)
function title() {
    return 'ID;12345 city:PY';
}

//模拟动态加载内容(真实情况可能会跟后台进行ajax交互)
function content() {
    var data = $("<form><ul class='pop-ul'><a><li>ph: 6.0</li></a>" +
        "<a><li>硬度: 11111</li></a>" +
        "<a><li>微量元素种类: 11111</li></a>" +
        "<a><li>细菌总数(每升): 10000</li></a>" +
        "<a><li>矿化度: 10000</li></a>" +
        "<a><li>硫化物浓度: 10000</li></form></a>");
    return data;
}
