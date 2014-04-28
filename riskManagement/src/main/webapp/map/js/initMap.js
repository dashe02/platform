/**
 * Created with IntelliJ IDEA.
 * User: ThinkPad
 * Date: 14-4-12
 * Time: 下午8:30
 * To change this template use File | Settings | File Templates.
 */
$.extend({
    //创建地图函数：
    createMap:function createMap(address,size){
        var map = new BMap.Map("container");//在百度地图容器中创建一个地图
        map.centerAndZoom(address,size);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    },
    clearAllMarker:function clearAllMarker(){
        window.map.clearOverlays();
    },
//地图事件设置函数：
    setMapEvent:function setMapEvent(){
        map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard();//启用键盘上下左右键移动地图
    },
//地图控件添加函数：
    addMapControl:function addMapControl(){
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
    },
    initMap:function initMap(address,size){
        $.createMap(address,size);//创建地图
        $.setMapEvent();//设置地图事件
        $.addMapControl();//向地图添加控件
    },
    provinceData:function provinceData(){
        var provinceArray ={liaonings:["辽宁-#FF3300"],neimenggus:["内蒙古自治区-#33FF00"],guangxis:["广西-#FF0000"],guangdongs:["广东-#FF3300"],hunans:["湖南-#FF0000"],
            guizhous:["贵州-#FF3300"],yunnans:["云南-#FF3300"],fujians:["福建-#FF0066"],jiangxis:["江西-#FF3300"],zhejiangs:["浙江-#33FF00"],anhuis:["安徽-#FF0000"],hubeis:["湖北-#FF0066"],henans:["河南-#33FF00"],jiangsus:["江苏-#FF0000"],
            sichuans:["四川-#FF0000"],hainans:["海南省-#FF3300"],shandongs:["山东-#FF0066"],xinjiangs:["辽宁-#FF3300"],xizangs:["西藏-#33FF00"],shanxis:["陕西-#FF0000"] ,hebeis:["河北-#33FF00"]
            ,heilongjiangs:["黑龙江-#FF3300"], ningxias:["宁夏-#FF3300"],qinghais:["青海-#FF3300"],gansus:["甘肃-#33FF00"],shanxishengs:["山西-#FF0066"],jilins:["吉林省-#33FF00"],beijings:["北京-#FBC5DC"],tianjins:["天津-#33FF00"],shanghais:["上海-#FF0000"],chongqins:["重庆市-#33FF00"],
            xianggangs:["香港-#C8C1E3"]
        }
        return provinceArray;
    },
    getProvinceData:function getProvinceData(){
        return $.provinceData();
    },
    cityData:function cityData(){
       var cityArray={liaonings:["沈阳市-#FF0000", "本溪市-#33FF00", "鞍山市-#FF0066", "铁岭市-#33FF00", "朝阳市-#FF3300",
            "锦州市-#33FF00", "盘锦市-#FF0000", "葫芦岛市-#FF0000", "营口市-#33FF00", "大连市-#FF3300",
            "丹东市-#FF3300","阜新市-#FF0000","抚顺市-#FF0066","辽阳市-#FF0000"],guangxis:[ "南宁市-#FF0000", "柳州市-#33FF00", "桂林市-#FF3300", "梧州市-#33FF00", "北海市-#FF3300",
            "防城港市-#FF0000", "钦州市-#33FF00", "贵港市-#FF3300", "玉林市-#FF0000", "百色市-#FF3300",
            "贺州市-#FF0000", "河池市-#33FF00", "来宾市-#FF0000", "崇左市-#33FF00"],guangdongs:["广州市-#33FF00", "韶关市-#FF3300", "深圳市-#FF0000", "珠海市-#FCFBBB", "汕头市-#FF3300",
            "佛山市-#FF3300", "江门市-#FF0000", "湛江市-#E7CCAF", "茂名市-#E7CCAF", "肇庆市-#FF0000", "惠州市-#FF0066",
            "梅州市-#FF0000", "汕尾市-#33FF00", "河源市-#FF0000","阳江市-#C8C1E3", "清远市-#FF0066", "东莞市-#FF3300", "中山市-#FF0066", "潮州市-#33FF00",
            "揭阳市-#FF3300", "云浮市-#FF0000"],hunans:["长沙市-#FF3300", "株洲市-#FF0000", "湘潭市-#FF0000", "衡阳市-#FF0000", "邵阳市-#33FF00",
            "岳阳市-#33FF00", "常德市-#FF0000", "张家界市-#33FF00", "益阳市-#FF0000", "郴州市-#E7CCAF",
            "永州市-#DBECC8","怀化市-#FF0000", "娄底市-#33FF00", "湘西土家族苗族自治州-#33FF00"],guizhous:[ "贵阳市-#FF0000", "六盘水市-#FF0066", "遵义市-#33FF00", "安顺市-#FF0066", "铜仁地区-#FF0000",
            "兴义市-#33FF00", "毕节地区-#33FF00", "黔东南苗族侗族自治州-#FF0000", "黔南布依族苗族自治州-#FF0000"],yunnans:[ "昆明市-#FF0000", "曲靖市-#33FF00", "玉溪市-#FF0066", "保山市-#FF0066", "昭通市-#FF0000",
            "丽江市-#FF0066", "墨江哈尼族自治县-#33FF00", "临沧市-#FF0000", "楚雄彝族自治州-#FBC5DC", "红河哈尼族彝族自治州-#FF0000",
            "文山壮族苗族自治州-#FF0000", "西双版纳傣族自治州-#FF0000", "大理白族自治州-#FF0000", "德宏傣族景颇族自治州-#FF0066","怒江傈僳族自治州-#FF0066",
            "迪庆藏族自治州-#FF0000","普洱市-#33FF00"],fujians:["福州市-#FF0000", "厦门市-#33FF00", "莆田市-#33FF00", "三明市-#FF0000", "泉州市-#FF0066",
            "漳州市-#FF0066", "南平市-#33FF00", "龙岩市-#FF0000"],jiangxis:["南昌市-#FF0000", "景德镇市-#FF0066", "萍乡市-#33FF00", "九江市-#FF0000", "新余市-#FF0066",
            "鹰潭市-#FF0066", "赣州市-#FF0000", "吉安市-#33FF00", "宜春市-#33FF00", "抚州市-#FF0066", "上饶市-#FF0000"],zhejiangs:["杭州市-#FF0000", "宁波市-#FF0066", "温州市-#33FF00", "嘉兴市-#FF0066", "湖州市-#33FF00",
            "绍兴市-#33FF00", "金华市-#FF0066", "衢州市-#33FF00", "舟山市-#FF0000", "台州市-#33FF00",
            "丽水市-#FF0000"],anhuis:[ "合肥市-#33FF00", "芜湖市-#FF0000", "蚌埠市-#33FF00", "淮南市-#33FF00", "马鞍山市-#33FF00",
            "淮北市-#FF0000", "铜陵市-#FF0000", "安庆市-#33FF00", "黄山市-#FF0000", "滁州市-#FF0000", "阜阳市-#FF0066",
            "宿州市-#FF0000", "巢湖市-#FF0066", "六安市-#33FF00","亳州市-#FF0000", "池州市-#FF0000", "宣城市-#33FF00"],hubeis:["武汉市-#FF0066", "黄石市-#33FF00", "十堰市-#FF0066", "宜昌市-#FF0066", "襄樊市-#FF0000",
            "鄂州市-#FF0066", "荆门市-#33FF00", "孝感市-#33FF00", "荆州市-#33FF00", "黄冈市-#FF0000",
            "咸宁市-#33FF00", "随州市-#FF0066", "恩施土家族苗族自治州-#33FF00", "仙桃市-#FF0000","天门市-#FF0066","潜江市-#33FF00","神农架林区-#FF0066"],henans:[ "郑州市-#33FF00", "开封市-#FF0000", "洛阳市-#33FF00", "平顶山市-#FF0066", "安阳市-#33FF00",
            "鹤壁市-#FF0066", "新乡市-#FF0066", "焦作市-#FF0066", "濮阳市-#FF0000", "许昌市-#FF0000",
            "漯河市-#FF0000", "三门峡市-#33FF00", "南阳市-#33FF00", "商丘市-#33FF00","信阳市-#FF0000",
            "周口市-#FF0066","驻马店市-#33FF00","洛阳市-#FF0000"],jiangsus:[ "南京市-#FF0066", "无锡市-#33FF00", "徐州市-#FF0066", "常州市-#FF0000", "苏州市-#33FF00",
            "南通市-#FF0000", "连云港市-#FF0000", "淮安市-#33FF00", "盐城市-#FF0066", "扬州市-#FF0000", "镇江市-#33FF00",
            "泰州市-#FF0066", "宿迁市-#FF0066"],sichuans:["成都市-#FF0066", "自贡市-#FF0000", "攀枝花市-#FF0066", "泸州市-#FF0000", "德阳市-#FF0066",
            "绵阳市-#FF0000", "广元市-#FF0066", "遂宁市-#33FF00", "内江市-#33FF00", "乐山市-#33FF00", "南充市-#FF0000",
            "眉山市-#FF0066", "宜宾市-#FF0000", "广安市-#33FF00","达州市-#FF0066", "雅安市-#FF0066", "巴中市-#FF0066",
            "资阳市-#FF0000", "阿坝藏族羌族自治州-#FF0000", "甘孜藏族自治州-#FF0066", "凉山彝族自治州-#FF0000"],hainans:[ "海口市-#FF0066", "三亚市-#FF0000", "五指山市-#33FF00","东方市-#FF0066","文昌市-#33FF00"],
            shandongs:["济南市-#FF0066", "青岛市-#FF0000", "淄博市-#FF0066", "枣庄市-#FF0000", "东营市-#FF0066",
                "烟台市-#FF0000", "潍坊市-#33FF00", "济宁市-#FF0000", "泰安市-#33FF00", "威海市-#FF0000", "日照市-#FF0000",
                "莱芜市-#FF0000", "临沂市-#FF0066","德州市-#33FF00", "聊城市-#FF0066", "滨州市-#33FF00"],xinjiangs:["乌鲁木齐市-#FF0000", "克拉玛依市-#FF0000", "昌吉回族自治州-#FF0000", "博尔塔拉蒙古自治州-#FF0066", "巴音郭楞蒙古自治州-#FF0066",
                "阿克苏地区-#FF0066", "阿图什市-#FF0066", "喀什地区-#FF0066", "和田地区-#FF0066", "伊犁哈萨克自治州-#FF0000", "塔城地区-#FF0000",
                "阿勒泰地区-#FF0000", "石河子市-#FF0066"],xizangs:["拉萨市-#FF0000", "昌都地区-#FF0066", "山南地区-#FF0000", "日喀则地区-#FF0066", "那曲地区-#FF0000",
                "阿里地区-#33FF00", "林芝地区-#FF0000"],shanxis:["西安市-#FF0000", "铜川市-#FF0066", "宝鸡市-#FF0000", "咸阳市-#FF0066", "渭南市-#33FF00",
                "延安市-#FF0066", "汉中市-#FF0000", "榆林市-#33FF00", "安康市-#FF0000", "商洛市-#FF0066"],hebeis:["石家庄市-#FF0000", "唐山市-#FF0066", "秦皇岛市-#FF0000", "邯郸市-#FCFBBB", "邢台市-#FF0066",
                "保定市-#FF0066", "张家口市-#FF0000", "承德市-#FF0066", "沧州市-#FF0000", "廊坊市-#FF0000", "衡水市-#FF0000"],heilongjiangs:["哈尔滨市-#FF0000", "齐齐哈尔市-#FF0066", "鸡西市-#FF0066", "鹤岗市-#FF0000", "双鸭山市-#FF0066",
                "大庆市-#33FF00", "伊春市-#33FF00", "佳木斯市-#FF0000", "七台河市-#33FF00", "牡丹江市-#FF0000", "黑河市-#FF0000",
                "绥化市-#FF0000", "大兴安岭地区-#FF0000"],ningxias:["银川市-#FF0000", "石嘴山市-#FF0066", "吴忠市-#FF0000", "固原市-#FF0066", "中卫市-#33FF00"],
            neimenggus:["呼和浩特市-#33FF00", "包头市-#33FF00", "乌海市-#FF0000", "赤峰市-#FF0066", "通辽市-#FF0000",
                "鄂尔多斯市-#FF0000", "呼伦贝尔市-#33FF00", "巴彦淖尔市-#FF0000", "乌兰察布市-#FF0000", "兴安盟-#FF0066",
                "锡林郭勒盟-#33FF00","阿拉善盟-#FF0000"],qinghais:["西宁市-#FF0000", "海东地区-#FF0066", "海北藏族自治州-#FF0000", "黄南藏族自治州-#FF0000", "海南藏族自治州-#FF0066",
                "果洛藏族自治州-#FF0000", "玉树藏族自治州-#33FF00", "海西蒙古族藏族自治州-#FF0066"],gansus:[ "兰州市-#FF0066", "嘉峪关市-#FF0000", "金昌市-#FF0066", "白银市-#33FF00", "天水市-#FF0000",
                "武威市-#FF0000", "张掖市-#FF0066", "平凉市-#FF0000", "酒泉市-#33FF00", "庆阳市-#FF0000", "定西市-#33FF00",
                "陇南市-#FF0066", "临夏回族自治州-#FF0066","甘南藏族自治州-#FF0000"],shanxishengs:[ "太原市-#FF0066", "大同市-#FF0000", "阳泉市-#FF0066", "长治市-#33FF00", "晋城市-#FF0066",
                "朔州市-#FF0000", "晋中市-#FF0066", "运城市-#FF0000", "忻州市-#FF0066", "临汾市-#FF0000",
                "吕梁市-#FF0066"],jilins:[ "长春市-#FF0000", "吉林市-#FF0066", "四平市-#FF0000", "辽源市-#FF0066", "通化市-#33FF00",
                "白山市-#FF0066", "松原市-#FF0000", "白城市-#FF0066", "延边朝鲜族自治州-#FF0000"],beijings:["北京市-#FBC5DC"],
            tianjins:["天津市-#33FF00"],shanghais:["上海市-#FF0000"],chongqins:["重庆市-#33FF00"],xianggangs:["香港-#FCFBBB"]
        };
        return cityArray;
    },
    getCityData:function getCityData(){
        return $.cityData();
    },
    drawProvinceBoundaryWithDataRule:function drawProvinceBoundaryWithDataRule(province,provinceArray,flag){
        if(province=="辽宁省"){
            $.drawColor(null,null,provinceArray.liaonings,flag);
        }else if(province=="内蒙古自治区"){
            $.drawColor(null,null,provinceArray.neimenggus,flag);
        }else if(province=="广西"){
            $.drawColor(null,null,provinceArray.guangxis,flag);
        }else if(province=="广东"){
            $.drawColor(null,null,provinceArray.guangdongs,flag);
        }else if(province=="湖南"){
            $.drawColor(null,null,provinceArray.hunans,flag);
        }else if(province=="贵州"){
            $.drawColor(null,null,provinceArray.guizhous,flag);
        }else if(province=="云南"){
            $.drawColor(null,null,provinceArray.yunnans,flag);
        }else if(province=="福建"){
            $.drawColor(null,null,provinceArray.fujians,flag);
        }else if(province=="江西"){
            $.drawColor(null,null,provinceArray.jiangxis,flag);
        }else if(province=="浙江"){
            $.drawColor(null,null,provinceArray.zhejiangs,flag);
        }else if(province=="安徽"){
            $.drawColor(null,null,provinceArray.anhuis,flag);
        }else if(province=="湖北"){
            $.drawColor(null,null,provinceArray.hubeis,flag);
        }else if(province=="河南"){
            $.drawColor(null,null,provinceArray.henans,flag);
        }else if(province=="江苏"){
            $.drawColor(null,null,provinceArray.jiangsus,flag);
        }else if(province=="四川"){
            $.drawColor(null,null,provinceArray.sichuans,flag);
        }else if(province=="海南省"){
            $.drawColor(null,null,provinceArray.hainans,flag);
        }else if(province=="山东"){
            $.drawColor(null,null,provinceArray.shandongs,flag);
        }else if(province=="辽宁"){
            $.drawColor(null,null,provinceArray.liaonings,flag);
        }else if(province=="新疆"){
            $.drawColor(null,null,provinceArray.xinjiangs,flag);
        }else if(province=="西藏"){
            $.drawColor(null,null,provinceArray.xizangs,flag);
        }else if(province=="陕西"){
            $.drawColor(null,null,provinceArray.shanxis,flag);
        }else if(province=="河北"){
            $.drawColor(null,null,provinceArray.hebeis,flag);
        }else if(province=="黑龙江"){
            $.drawColor(null,null,provinceArray.heilongjiangs,flag);
        }else if(province=="宁夏"){
            $.drawColor(null,null,provinceArray.ningxias,flag);
        }else if(province=="青海"){
            $.drawColor(null,null,provinceArray.qinghais,flag);
        }else if(province=="甘肃"){
            $.drawColor(null,null,provinceArray.gansus,flag);
        }else if(province=="山西"){
            $.drawColor(null,null,provinceArray.shanxishengs,flag);
        }else if(province=="吉林省"){
            $.drawColor(null,null,provinceArray.jilins,flag);
        }else if(province=="北京"){
            $.drawColor(null,null,provinceArray.beijings,flag);
        }else if(province=="天津"){
            $.drawColor(null,null,provinceArray.tianjins,flag);
        }else if(province=="上海"){
            $.drawColor(null,null,provinceArray.shanghais,flag);
        }else if(province=="重庆市"){
            $.drawColor(null,null,provinceArray.chongqins,flag);
        }else if(province=="香港"){
            $.drawColor(null,null,provinceArray.xianggangs,flag);
        }
    },
    drawCityBoundary:function drawCityBoundary(province,cityArray,flag){
        if(province=="辽宁省"){
            /*在数据库中查出所属于的city*/
            $.drawColor("辽宁省",null,cityArray.liaonings,flag);
        }else if(province=="内蒙古自治区"){
            $.drawColor("内蒙古自治区",null,cityArray.neimenggus,flag);
        }else if(province=="广西"){
            $.drawColor("广西",null,cityArray.guangxis,flag);
        }else if(province=="广东"){
            $.drawColor("广东",null,cityArray.guangdongs,flag);
        }else if(province=="湖南"){
            $.drawColor("湖南",null,cityArray.hunans,flag);
        }else if(province=="贵州"){
            $.drawColor("贵州",null,cityArray.guizhous,flag);
        }else if(province=="云南"){
            $.drawColor("云南",null,cityArray.yunnans,flag);
        }else if(province=="福建"){
            $.drawColor("福建",null,cityArray.fujians,flag);
        }else if(province=="江西"){
            $.drawColor("江西",null,cityArray.jiangxis,flag);
        }else if(province=="浙江"){
            $.drawColor("浙江",null,cityArray.zhejiangs,flag);
        }else if(province=="安徽"){
            $.drawColor("安徽",null,cityArray.anhuis,flag);
        }else if(province=="湖北"){
            $.drawColor("湖北",null,cityArray.hubeis,flag);
        }else if(province=="河南"){
            $.drawColor("河南",null,cityArray.henans,flag);
        }else if(province=="江苏"){
            $.drawColor("江苏",null,cityArray.jiangsus,flag);
        }else if(province=="四川"){
            $.drawColor("四川",null,cityArray.sichuans,flag);
        }else if(province=="海南省"){
            $.drawColor("海南省",null,cityArray.hainans,flag);
        }else if(province=="山东"){
            $.drawColor("山东",null,cityArray.shandongs,flag);
        }else if(province=="辽宁"){
            $.drawColor("辽宁",null,cityArray.liaonings,flag);
        }else if(province=="新疆"){
            $.drawColor("新疆",null,cityArray.xinjiangs,flag);
        }else if(province=="西藏"){
            $.drawColor("西藏",null,cityArray.xizangs,flag);
        }else if(province=="陕西"){
            $.drawColor("陕西",null,cityArray.shanxis,flag);
        }else if(province=="河北"){
            $.drawColor("河北",null,cityArray.hebeis,flag);
        }else if(province=="黑龙江"){
            $.drawColor("黑龙江",null,cityArray.heilongjiangs,flag);
        }else if(province=="宁夏"){
            $.drawColor("宁夏",null,cityArray.ningxias,flag);
        }else if(province=="青海"){
            $.drawColor("青海",null,cityArray.qinghais,flag);
        }else if(province=="甘肃"){
            $.drawColor("甘肃",null,cityArray.gansus,flag);
        }else if(province=="山西"){
            $.drawColor("山西",null,cityArray.shanxishengs,flag);
        }else if(province=="吉林省"){
            $.drawColor("吉林省",null,cityArray.jilins,flag);
        }else if(province=="北京"){
            $.drawColor("北京",null,cityArray.beijings,flag);
        }else if(province=="天津"){
            $.drawColor("天津",null,cityArray.tianjins,flag);
        }else if(province=="上海"){
            $.drawColor("上海",null,cityArray.shanghais,flag);
        }else if(province=="重庆市"){
            $.drawColor("重庆市",null,cityArray.chongqins,flag);
        }else if(province=="香港"){
            $.drawColor("香港",null,cityArray.xianggangs,flag);
        }
    },
    areaData:function areaData(){
         var areaData={beijingshis:["东城区-#FF0000", "西城区-#33FF00", "崇文区-#FF0066", "宣武区-#33FF00", "朝阳区-#FF3300",
            "丰台区-#33FF00", "石景山区-#FF0000", "海淀区-#FF0000", "门头沟区-#33FF00", "房山区-#FF3300",
            "通州区-#FF3300","顺义区-#FF0000","昌平区-#FF0066","大兴区-#FF0000","怀柔区-#33FF00", "平谷区-#FF0000", "密云县-#FF0000", "延庆县-#33FF00"],
            tianjingshis:["和平区-#FF0000", "河东区-#33FF00", "河西区-#FF3300", "南开区-#33FF00", "河北区-#FF3300",
                "红桥区-#FF0000", "塘沽区-#33FF00", "汉沽区-#FF3300", "大港区-#FF0000", "东丽区-#FF3300",
                "西青区-#FF0000", "津南区-#33FF00", "北辰区-#FF0000", "武清区-#33FF00","宝坻区-#FF0000", "滨海新区-#33FF00", "宁河县-#FF3300", "静海县-#FF0000", "蓟县-#FF3300"],
            shijiazhuangshis:["长安区-#33FF00", "桥东区-#FF3300", "桥西区-#FF0000", "新华区-#FCFBBB", "井陉矿区-#FF3300",
                "裕华区-#FF3300", "井陉县-#FF0000", "正定县-#E7CCAF", "栾城县-#E7CCAF", "行唐县-#FF0000", "灵寿县-#FF0066",
                "高邑县-#FF0000", "深泽县-#33FF00", "赞皇县-#FF0000","无极县-#C8C1E3", "平山县-#FF0066", "元氏县-#FF3300", "赵县-#FF0066"],
            tangshanshis:["路南区-#FF3300", "路北区-#FF0000", "古冶区-#FF0000", "开平区-#FF0000", "丰南区-#33FF00",
                "丰润区-#33FF00", "滦县-#FF0000", "滦南县-#33FF00", "乐亭县-#FF0000", "迁西县-#FF0000",
                "玉田县-#33FF00","唐海县-#FF0000"],
            qinghuangdaoshis:["海港区-#FF0000", "山海关区-#FF0066", "北戴河区-#33FF00", "青龙满族自治县-#FF0066", "昌黎县-#FF0000",
                "抚宁县-#33FF00", "卢龙县-#33FF00"],
            handanshis:[ "邯山区-#FF0000", "丛台区-#33FF00", "复兴区-#FF0066", "峰峰矿区-#FF0066", "邯郸县-#FF0000",
                "临漳县-#FF0066", "成安县-#33FF00", "大名县-#FF0000", "涉县-#FBC5DC", "磁县-#FF0000",
                "肥乡县-#FF0000", "永年县-#FF0000", "邱县-#FF0000", "鸡泽县-#FF0066","广平县-#FF0066",
                "馆陶县-#FF0000","魏县-#33FF00","曲周县-#FF0066"],
            xingtaishis:[ "桥东区-#FF3300", "桥西区-#FF0000", "邢台县-#FF0000", "临城县-#FF0000", "内丘县-#33FF00",
                "柏乡县-#33FF00", "隆尧县-#FF0000", "任县-#33FF00", "南和县-#FF0000", "宁晋县-#E7CCAF",
                "巨鹿县-#DBECC8","新河县-#FF0000","广宗县-#FF0066", "平乡县-#33FF00", "威县-#FF0000", "清河县-#FBC5DC", "临西县-#FF0000"],
            baodingshis:[ "新市区-#FF0000", "北市区-#33FF00", "南市区-#33FF00", "满城县-#FF0000", "清苑县-#FF0066",
                "涞水县-#FF0066", "阜平县-#33FF00", "徐水县-#FF0000","定兴县-#FF3300", "唐县-#FF0000", "高阳县-#FF0000", "容城县-#FF0000", "涞源县-#33FF00",
                "望都县-#33FF00", "安新县-#FF0000", "易县-#33FF00", "曲阳县-#FF0000", "蠡县-#FF0000", "顺平县-#33FF00", "博野县-#FF3300", "雄县-#33FF00"],
            zhangjiakoushis:[ "桥东区-#FF0000", "桥西区-#FF0066", "宣化区-#33FF00", "下花园区-#FF0000", "宣化县-#FF0066",
                "张北县-#FF0066", "康保县-#FF0000", "沽源县-#33FF00", "尚义县-#33FF00", "蔚县-#FF0066", "阳原县-#FF0000","怀安县-#FF0000", "万全县-#33FF00", "怀来县-#FF0066", "涿鹿县-#FF0066", "赤城县-#FF0000",
                "崇礼县-#FF0066"],
            chengdeshis:[ "双桥区-#FF0000", "双滦区-#FF0066", "鹰手营子矿区-#33FF00", "承德县-#FF0066", "兴隆县-#33FF00",
                "平泉县-#33FF00", "滦平县-#FF0066", "隆化县-#33FF00", "丰宁满族自治县-#FF0000", "宽城满族自治县-#33FF00",
                "围场满族蒙古族自治县-#FF0000"],
            cangzhoushis:[ "新华区-#33FF00", "运河区-#FF0000", "沧县-#33FF00", "青县-#33FF00", "东光县-#33FF00",
                "海兴县-#FF0000", "盐山县-#FF0000", "肃宁县-#33FF00", "南皮县-#FF0000", "吴桥县-#FF0000", "献县-#FF0066",
                "孟村回族自治县-#FF0000"],
            langfangshis:["安次区-#FF0066", "广阳区-#33FF00", "固安县-#FF0066", "永清县-#FF0066", "香河县-#FF0000",
                "大城县-#FF0066", "文安县-#33FF00", "大厂回族自治县-#33FF00"],
            hengshuishis:["桃城区-#33FF00", "枣强县-#FF0000", "武邑县-#33FF00", "武强县-#FF0066", "饶阳县-#33FF00",
                "安平县-#FF0066", "故城县-#FF0066", "景县-#FF0066", "阜城县-#FF0000"],
            taiyuanshis:[ "小店区-#FF0066", "迎泽区-#33FF00", "杏花岭区-#FF0066", "尖草坪区-#FF0000", "万柏林区-#33FF00",
                "晋源区-#FF0000", "清徐县-#FF0000", "阳曲县-#33FF00", "娄烦县-#FF0066"],
            datongshis:["城区-#33FF00", "矿区-#FF0000", "南郊区-#33FF00", "新荣区-#FF0066", "阳高县-#33FF00",
                "天镇县-#FF0066", "广灵县-#FF0066", "灵丘县-#FF0066", "浑源县-#FF0000","左云县-#33FF00", "枣强县-#FF0000", "武邑县-#33FF00", "武强县-#FF0066", "饶阳县-#33FF00",
                "大同县-#FF0066"],
            yangquanshis:["城区-#FF0066", "矿区-#33FF00", "郊区-#FF0066", "平定县-#FF0000", "盂县-#33FF00"],
            changzhishis:["城区-#33FF00", "郊区-#FF0000", "长治县-#33FF00", "襄垣县-#FF0066", "屯留县-#33FF00",
                "平顺县-#FF0066", "黎城县-#FF0066", "壶关县-#FF0066", "长子县-#FF0000","武乡县-#FF0066", "沁县-#FF0066", "沁源县-#FF0066"],
            jinchengshis:[ "城区-#FF0066", "沁水县-#FF0000", "阳城县-#FF0066", "陵川县-#FF0000", "泽州县-#FF0066"],
            shuozhoushis:[ "朔城区-#33FF00", "山阴县-#FF0000", "应县-#33FF00", "右玉县-#FF0066", "怀仁县-#33FF00"],
            jinzhongshis:["榆次区-#FF0066", "榆社县-#FF0000", "左权县-#FF0066", "和顺县-#FF0000", "昔阳县-#FF0066","寿阳县-#33FF00", "太谷县-#FF0000", "祁县-#33FF00", "平遥县-#FF0066", "灵石县-#33FF00"
            ],yunchengshis:["盐湖区-#33FF00", "临猗县-#FF0000", "万荣县-#33FF00", "闻喜县-#FF0066", "稷山县-#33FF00",
                "新绛县-#FF0066", "绛县-#FF0066", "垣曲县-#FF0066", "夏县-#FF0000","平陆县-#33FF00", "芮城县-#FF0000"],
            xinzhoushis:["忻府区-#33FF00", "定襄县-#FF0000", "五台县-#33FF00", "代县-#FF0066", "繁峙县-#33FF00",
                "宁武县-#FF0066", "静乐县-#FF0066", "神池县-#FF0066", "五寨县-#FF0000","岢岚县-#33FF00", "河曲县-#FF0000", "偏关县-#33FF00"
            ],linfenshis:["尧都区-#33FF00", "曲沃县-#FF0000", "翼城县-#33FF00", "襄汾县-#FF0066", "洪洞县-#33FF00",
                "古县-#FF0066", "安泽县-#FF0066", "浮山县-#FF0066", "吉县-#FF0000","乡宁县-#33FF00", "大宁县-#FF0000",
                "隰县-#33FF00", "永和县-#FF0000", "蒲县-#33FF00", "汾西县-#FF0066"],
            lvliangshis:[  "离石区-#33FF00", "文水县-#FF0000", "交城县-#33FF00", "兴县-#FF0066", "临县-#33FF00",
                "柳林县-#FF0066", "石楼县-#FF0066", "岚县-#FF0066", "方山县-#FF0000","中阳县-#33FF00", "交口县-#FF0000"
            ],huhehaoteshis:["新城区-#FF0066", "回民区-#FF0000", "玉泉区-#FF0066", "赛罕区-#FF0000", "土默特左旗-#FF0066",
                "托克托县-#FF0000", "和林格尔县-#FF0066", "清水河县-#33FF00", "武川县-#33FF00"],
            baotoushis:["东河区-#33FF00", "昆都仑区-#FF0000", "青山区-#33FF00", "石拐区-#FF0066", "九原区-#33FF00",
                "土默特右旗-#FF0066", "固阳县-#FF0066", "达尔罕茂明安联合旗-#FF0066"],
            wuhaishis:["海勃湾区-#33FF00", "海南区-#FF0000", "乌达区-#33FF00"],
            chifengshis:[ "红山区-#33FF00", "元宝山区-#FF0000", "松山区-#33FF00", "阿鲁科尔沁旗-#FF0066", "巴林左旗-#33FF00",
                "巴林右旗-#FF0066", "林西县-#FF0066", "克什克腾旗-#FF0066", "翁牛特旗-#FF0000","喀喇沁旗-#33FF00", "宁城县-#FF0000",
                "敖汉旗-#33FF00"],
            tongliaoshis:[ "科尔沁区-#33FF00", "科尔沁左翼中旗-#FF0000", "科尔沁左翼后旗-#33FF00", "开鲁县-#FF0066", "库伦旗-#33FF00",
                "奈曼旗-#FF0066", "扎鲁特旗-#FF0066"],
            eerduosishis:["东胜区-#33FF00", "达拉特旗-#FF0000", "准格尔旗-#33FF00", "鄂托克前旗-#FF0066", "鄂托克旗-#33FF00",
                "杭锦旗-#FF0066", "乌审旗-#FF0066", "伊金霍洛旗-#FF0066"],
            hulunbeiershis:[ "海拉尔区-#33FF00", "阿荣旗-#FF0000", "鄂伦春自治旗-#33FF00", "鄂温克族自治旗-#FF0066", "陈巴尔虎旗-#33FF00",
                "新巴尔虎左旗-#FF0066", "新巴尔虎右旗-#FF0066"],
            bayanzhuoershis:["临河区-#33FF00", "五原县-#FF0000", "磴口县-#33FF00", "乌拉特前旗-#FF0066", "乌拉特中旗-#33FF00",
                "乌拉特后旗-#FF0066", "杭锦后旗-#FF0066"],
            wulanchabushis:["集宁区-#33FF00", "卓资县-#FF0000", "化德县-#33FF00", "商都县-#FF0066", "兴和县-#33FF00",
                "凉城县-#FF0066", "察哈尔右翼前旗-#FF0066", "察哈尔右翼中旗-#FF0066","察哈尔右翼后旗-#33FF00",
                "四子王旗-#FF0000"],
            xinganmenshis:["兴安盟-#33FF00", "科尔沁右翼前旗-#FF0000", "科尔沁右翼中旗-#33FF00", "扎赉特旗-#FF0066", "突泉县-#33FF00"],
            xilinguolemens:[ "锡林郭勒盟-#FF0000","阿巴嘎旗-#33FF00", "苏尼特左旗-#FF0000", "苏尼特右旗-#33FF00", "东乌珠穆沁旗-#FF0066", "西乌珠穆沁旗-#33FF00",
                "太仆寺旗-#FF0066", "镶黄旗-#FF0066","正镶白旗-#33FF00", "正蓝旗-#FF0000", "多伦县-#33FF00"],
            alashanmens:["阿拉善盟-#33FF00", "阿拉善左旗-#FF0000", "阿拉善右旗-#33FF00", "额济纳旗-#FF0066"],
            shenyangshis:["和平区-#33FF00", "沈河区-#FF0000", "大东区-#33FF00", "皇姑区-#FF0066", "铁西区-#33FF00",
                "苏家屯区-#FF0066", "东陵区-#FF0066", "新城子区-#FF0066","于洪区-#33FF00","辽中县-#33FF00", "康平县-#FF0000", "法库县-#33FF00"
            ],
            dalianshis:["中山区-#33FF00", "西岗区-#FF0000", "沙河口区-#33FF00", "甘井子区-#FF0066", "旅顺口区-#33FF00",
                "金州区-#FF0066", "长海县-#FF0066"],
            anshanshis:[ "铁东区-#33FF00", "铁西区-#FF0000", "立山区-#33FF00", "千山区-#FF0066", "台安县-#33FF00",
                "岫岩满族自治县-#FF0066"],
            fushunshis:[ "新抚区-#33FF00", "东洲区-#FF0000", "望花区-#33FF00", "顺城区-#FF0066", "抚顺县-#33FF00",
                "新宾满族自治县-#FF0066", "清原满族自治县-#FF0066"],
            benxishis:["平山区-#33FF00", "溪湖区-#FF0000", "明山区-#33FF00", "南芬区-#FF0066", "本溪满族自治县-#33FF00",
                "桓仁满族自治县-#FF0066"],
            dandongshis:[ "元宝区-#33FF00", "振兴区-#FF0000", "振安区-#33FF00", "宽甸满族自治县-#FF0066"],
            jinzhoushis:["古塔区-#33FF00", "凌河区-#FF0000", "太和区-#33FF00", "黑山县-#FF0066", "义县-#33FF00"],
            yinkoushis:[ "站前区-#33FF00", "西市区-#FF0000", "鲅鱼圈区-#33FF00", "老边区-#FF0066"],
            buxinshis:["海州区-#33FF00", "太平区-#FF0000", "清河门区-#33FF00", "细河区-#FF0066", "阜新蒙古族自治县-#33FF00",
                "彰武县-#FF0066"],
            liaoyangshis:[ "白塔区-#33FF00", "文圣区-#FF0000", "宏伟区-#33FF00", "弓长岭区-#FF0066", "太子河区-#33FF00",
                "辽阳县-#FF0066"],
            panjinshis:[ "双台子区-#33FF00", "兴隆台区-#FF0000", "大洼县-#33FF00", "盘山县-#FF0066"],
            tielingshis:["银州区-#33FF00", "清河区-#FF0000", "铁岭县-#33FF00", "西丰县-#FF0066", "昌图县-#33FF00"],
            chaoyangshis:[ "双塔区-#33FF00", "龙城区-#FF0000", "朝阳县-#33FF00", "建平县-#FF0066"],
            huludaoshis:["连山区-#33FF00", "龙港区-#FF0000", "南票区-#33FF00", "绥中县-#FF0066","建昌县-#33FF00"],
            changchunshis:["南关区-#33FF00", "宽城区-#FF0000", "朝阳区-#33FF00", "二道区-#FF0066", "绿园区-#33FF00",
                "双阳区-#FF0066","农安县-#FF0000"],
            jilinshis:["昌邑区-#33FF00", "龙潭区-#FF0000", "船营区-#33FF00", "丰满区-#FF0066", "永吉县-#33FF00"],
            sipingshis:["铁西区-#33FF00", "铁东区-#FF0000", "梨树县-#33FF00", "伊通满族自治县-#FF0066","公主岭市-#33FF00"],
            liaoyuanshis:["龙山区-#33FF00", "西安区-#FF0000", "东丰县-#33FF00", "东辽县-#FF0066"],
            tonghuashis:["东昌区-#33FF00", "二道江区-#FF0000", "通化县-#33FF00", "柳河县-#FF0066"],
            baishanshis:["八道江区-#33FF00", "抚松县-#FF0000", "靖宇县-#33FF00", "长白朝鲜族自治县-#FF0066"],
            songyuanshis:["宁江区-#33FF00", "长岭县-#FF0000", "乾安县-#33FF00", "扶余县-#FF0066"],
            baichengshis:["洮北区-#33FF00", "镇赉县-#FF0000", "通榆县-#33FF00"],
            yanbianchaoxianzuzizhizhous:[ "汪清县-#33FF00", "安图县-#FF0000"],
            haerbinshis:[ "道里区-#33FF00", "南岗区-#FF0000", "道外区-#33FF00", "香坊区-#FF0066","平房区-#FF0066", "松北区-#FF0000", "呼兰区-#FF0066", "依兰县-#FF0000", "方正县-#FF0066",
                "宾县-#FF0000", "巴彦县-#FF0066", "木兰县-#33FF00", "通河县-#33FF00", "延寿县-#33FF00"],
            qiqihaershis:["龙沙区-#33FF00", "建华区-#FF0000", "铁锋区-#33FF00", "昂昂溪区-#FF0066","富拉尔基区-#33FF00", "龙江县-#FF0000", "依安县-#33FF00",
                "泰来县-#FF0066","甘南县-#33FF00","富裕县-#33FF00", "克山县-#FF0000", "克东县-#33FF00", "拜泉县-#FF0066"
            ],
            jixishis:["鸡冠区-#33FF00", "恒山区-#FF0000", "滴道区-#33FF00", "梨树区-#FF0066","城子河区-#FF0066", "麻山区-#FF0000", "鸡东县-#FF0066"
            ],
            hegangshis:["向阳区-#33FF00", "工农区-#FF0000", "南山区-#33FF00", "兴安区-#FF0066","东山区-#33FF00", "兴山区-#FF0000", "萝北县-#33FF00",
                "绥滨县-#FF0066"],
            shuangyashanshis:["尖山区-#33FF00", "岭东区-#FF0000", "四方台区-#33FF00", "宝山区-#FF0066","集贤县-#33FF00", "友谊县-#FF0000", "宝清县-#33FF00",
                "饶河县-#FF0066"],
            daqinshis:["萨尔图区-#33FF00", "龙凤区-#FF0000", "让胡路区-#33FF00", "红岗区-#FF0066","大同区-#FF0066", "肇州县-#FF0000", "肇源县-#FF0066", "林甸县-#FF0000", "杜尔伯特蒙古族自治县-#FF0066"
            ],
            yichunshis:["南岔区-#33FF00", "友好区-#FF0000", "西林区-#33FF00", "翠峦区-#FF0066","新青区-#33FF00", "美溪区-#FF0000", "金山屯区-#33FF00",
                "五营区-#FF0066","乌马河区-#FF0066", "汤旺河区-#FF0000", "带岭区-#FF0066", "乌伊岭区-#33FF00", "红星区-#FF0000", "上甘岭区-#33FF00", "嘉荫县-#FF0066"
            ],
            jiamusishis:["向阳区-#33FF00", "前进区-#FF0000", "东风区-#33FF00", "郊区-#FF0066","桦南县-#33FF00", "桦川县-#FF0000", "汤原县-#33FF00",
                "抚远县-#FF0066"],
            qitaiheshis:["新兴区-#33FF00", "桃山区-#FF0000", "茄子河区-#33FF00", "勃利县-#FF0066"],
            mudanjiangshis:["东安区-#33FF00", "阳明区-#FF0000", "爱民区-#33FF00", "西安区-#FF0066","东宁县-#33FF00", "林口县-#FF0000"
            ],
            heiheshis:[ "爱辉区-#33FF00", "逊克县-#FF0000", "孙吴县-#33FF00"],
            suihuashis:["北林区-#33FF00", "望奎县-#FF0000", "兰西县-#33FF00", "青冈县-#FF0066","庆安县-#33FF00", "明水县-#FF0000", "绥棱县-#33FF00"
            ],
            daxinganlings:[ "呼玛县-#33FF00", "塔河县-#FF0000", "漠河县-#33FF00"],
            shanghaishis:["黄浦区-#33FF00", "卢湾区-#FF0000", "徐汇区-#33FF00", "长宁区-#FF0066","静安区-#33FF00", "普陀区-#FF0000", "闸北区-#33FF00", "虹口区-#33FF00",
                "杨浦区-#FF0000", "闵行区-#33FF00", "宝山区-#FF0066","嘉定区-#33FF00", "浦东新区-#FF0000", "金山区-#33FF00","松江区-#33FF00", "青浦区-#FF0000",
                "南汇区-#33FF00", "奉贤区-#FF0066","崇明县-#33FF00"],
            nanjingshis:[ "玄武区-#33FF00", "白下区-#FF0000", "秦淮区-#33FF00", "建邺区-#FF0066","鼓楼区-#33FF00", "下关区-#FF0000", "浦口区-#33FF00",
                "栖霞区-#FF0066","雨花台区-#FF0066", "江宁区-#FF0000", "六合区-#FF0066", "溧水县-#33FF00", "高淳县-#FF0000"
            ],
            wuxishis:["崇安区-#33FF00", "南长区-#FF0000", "北塘区-#33FF00", "锡山区-#FF0066","惠山区-#33FF00", "滨湖区-#FF0000"
            ],
            xuzhoushis:["鼓楼区-#33FF00", "云龙区-#FF0000", "九里区-#33FF00", "贾汪区-#FF0066","泉山区-#33FF00", "丰县-#FF0000", "沛县-#33FF00",
                "铜山县-#FF0066","睢宁县-#FF0066"],
            changzhoushis:[ "天宁区-#33FF00", "钟楼区-#FF0000", "戚墅堰区-#33FF00", "新北区-#FF0066","武进区-#33FF00"],
            suzhoushis:[ "沧浪区-#33FF00", "平江区-#FF0000", "金阊区-#33FF00", "虎丘区-#FF0066","吴中区-#33FF00", "相城区-#FF0000"
            ],
            nantongshis:["崇川区-#33FF00", "港闸区-#FF0000", "海安县-#33FF00", "如东县-#FF0066"],
            lianyungangshis:[ "连云区-#33FF00", "新浦区-#FF0000", "海州区-#33FF00", "赣榆县-#FF0066","东海县-#33FF00", "灌云县-#FF0000","成都市-#FF0066", "自贡市-#FF0000", "攀枝花市-#FF0066", "泸州市-#FF0000", "德阳市-#FF0066",
                "灌南县-#FF0000"],
            huaianshis:[ "清河区-#FF0066", "楚州区-#FF0000", "淮阴区-#FF0066", "清浦区-#FF0000", "涟水县-#FF0066",
                "洪泽县-#FF0000", "盱眙县-#33FF00", "金湖县-#FF0000"],
            yanchengshis:["亭湖区-#33FF00", "盐都区-#FF0000", "响水县-#33FF00", "滨海县-#FF0066","阜宁县-#33FF00", "射阳县-#FF0000","建湖县-#FF0066"
            ],
            yangzhoushis:[ "广陵区-#33FF00", "邗江区-#FF0000", "维扬区-#33FF00"],
            zhenjiangshis:[ "京口区-#FF0066", "润州区-#FF0000", "丹徒区-#FF0066", "丹阳市-#FF0000", "扬中市-#FF0066",
                "句容市-#FF0000"],
            taizhoushis:["兴化市-#FF0066", "靖江市-#FF0000", "泰兴市-#FF0066", "姜堰市-#FF0000"],
            suqianshis:["宿城区-#33FF00", "宿豫区-#FF0000", "沭阳县-#33FF00", "泗阳县-#FF0066","泗洪县-#33FF00", "射阳县-#FF0000","建湖县-#FF0066"
            ],
            hangzhoushis:["上城区-#FF0066", "下城区-#FF0000", "江干区-#FF0066", "拱墅区-#FF0000", "西湖区-#FF0066",
                "滨江区-#FF0000","萧山区-#FF0066", "余杭区-#FF0000", "桐庐县-#FF0066", "淳安县-#FF0000", "建德市-#FF0066",
                "富阳市-#FF0000", "临安市-#33FF00"],
            ningboshis:[ "海曙区-#FF0066", "江东区-#FF0000", "江北区-#FF0066", "北仑区-#FF0000", "镇海区-#FF0066",
                "鄞州区-#FF0000","象山县-#FF0000","宁海县-#FF0066", "余姚市-#FF0000", "慈溪市-#FF0066", "奉化市-#FF0000"
            ],
            wenzhoushis:["鹿城区-#FF0066", "龙湾区-#FF0000", "洞头县-#FF0066", "永嘉县-#FF0000", "平阳县-#FF0066",
                "苍南县-#FF0000","文成县-#FF0000","泰顺县-#FF0066", "瑞安市-#FF0000", "乐清市-#FF0066"
            ],
            jiaxingshis:[ "秀洲区-#FF0066", "嘉善县-#FF0000", "海盐县-#FF0066", "海宁市-#FF0000", "平湖市-#FF0066",
                "桐乡市-#FF0000"],
            huzhoushis:["吴兴区-#FF0066", "南浔区-#FF0000", "德清县-#FF0066", "长兴县-#FF0000", "安吉县-#FF0066"
            ],
            shaoxinshis:["越城区-#FF0066", "绍兴县-#FF0000", "新昌县-#FF0066", "诸暨市-#FF0000", "上虞市-#FF0066",
                "嵊州市-#FF0000" ],
            jinhuashis:[ "婺城区-#FF0066", "金东区-#FF0000", "武义县-#FF0066", "浦江县-#FF0000", "磐安县-#FF0066",
                "兰溪市-#FF0000","义乌市-#FF0066", "东阳市-#FF0000", "永康市-#FF0066"],
            quzhoushis:["柯城区-#FF0066", "衢江区-#FF0000", "常山县-#FF0066", "开化县-#FF0000", "龙游县-#FF0066",
                "江山市-#FF0000"],
            zhoushanshis:[ "定海区-#FF0066", "普陀区-#FF0000", "岱山县-#FF0066", "嵊泗县-#FF0000"],
            tazhoushis:[ "椒江区-#FF0066", "黄岩区-#FF0000", "路桥区-#FF0066", "玉环县-#FF0000", "三门县-#FF0066",
                "天台县-#FF0000","仙居县-#FF0066", "温岭市-#FF0000", "临海市-#FF0066"],
            lishuishis:["莲都区-#FF0066", "青田县-#FF0000", "缙云县-#FF0066", "遂昌县-#FF0000", "松阳县-#FF0066",
                "云和县-#FF0000","庆元县-#FF0066", "景宁畲族自治县-#FF0000", "龙泉市-#FF0066"],
            hefeishis:[ "瑶海区-#FF0066", "庐阳区-#FF0000", "蜀山区-#FF0066", "包河区-#FF0000", "长丰县-#FF0066",
                "肥东县-#FF0000","肥西县-#FF0066"],
            wuhushis:[ "镜湖区-#FF0066", "鸠江区-#FF0000", "芜湖县-#FF0066", "繁昌县-#FF0000", "南陵县-#FF0066"
            ],
            bangbushis:["龙子湖区-#FF0066", "蚌山区-#FF0000", "禹会区-#FF0066", "淮上区-#FF0000", "怀远县-#FF0066",
                "五河县-#FF0000","固镇县-#FF0066"],
            huainanshis:["大通区-#FF0066", "田家庵区-#FF0000", "谢家集区-#FF0066", "八公山区-#FF0000", "潘集区-#FF0066",
                "凤台县-#FF0000"],
            maanshanshis:["金家庄区-#FF0066", "花山区-#FF0000", "雨山区-#FF0066", "当涂县-#FF0000"],
            huaibeishis:[ "杜集区-#FF0066", "相山区-#FF0000", "烈山区-#FF0066", "濉溪县-#FF0000"],
            tonglinshis:[ "铜官山区-#FF0066", "狮子山区-#FF0000", "郊区-#FF0066", "铜陵县-#FF0000"],
            anqinshis:[ "迎江区-#FF0066", "大观区-#FF0000", "郊区-#FF0066", "怀宁县-#FF0000", "枞阳县-#FF0066",
                "潜山县-#FF0066", "太湖县-#FF0000", "宿松县-#FF0066", "望江县-#FF0000", "岳西县-#FF0066",
                "桐城市-#FF0000"],
            huangshanshis:["屯溪区-#FF0066", "黄山区-#FF0000", "徽州区-#FF0066", "歙县-#FF0000", "休宁县-#FF0066",
                "黟县-#FF0000","祁门县-#FF0066"],
            xuzhoushis:["琅琊区-#FF0066", "南谯区-#FF0000", "来安县-#FF0066", "全椒县-#FF0000", "定远县-#FF0066",
                "凤阳县-#FF0000","天长市-#FF0000","明光市-#FF0066"],
            buyangshis:["颍州区-#FF0066", "颍东区-#FF0000", "颍泉区-#FF0066", "临泉县-#FF0000", "太和县-#FF0066",
                "阜南县-#FF0066", "颍上县-#FF0000"],
            suzhousshis:[ "埇桥区-#FF0066", "砀山县-#FF0000", "萧县-#FF0066", "灵璧县-#FF0000", "泗县-#FF0066"],
            chaohushis:["居巢区-#FF0066", "庐江县-#FF0000", "无为县-#FF0066", "含山县-#FF0000", "和县-#FF0066"
            ],
            liuanshis:["金安区-#FF0066", "裕安区-#FF0000", "寿县-#FF0066", "霍邱县-#FF0000","舒城县-#FF0066",
                "金寨县-#FF0066", "霍山县-#FF0000"],
            haozhoushis:["谯城区-#FF0066", "涡阳县-#FF0000", "蒙城县-#FF0066", "利辛县-#FF0000"],
            chizhoushis:["贵池区-#FF0066", "东至县-#FF0000", "石台县-#FF0066", "青阳县-#FF0000"],
            xuanchengshis:["宣州区-#FF0066", "郎溪县-#FF0000", "广德县-#FF0066", "泾县-#FF0000","绩溪县-#FF0066",
                "旌德县-#FF0066", "宁国市-#FF0000"],
            fuzhoushis:["鼓楼区-#FF0066", "台江区-#FF0000", "仓山区-#FF0066", "马尾区-#FF0000","晋安区-#FF0066",
                "闽侯县-#FF0066", "连江县-#FF0000","罗源县-#FF0066", "闽清县-#FF0000", "永泰县-#FF0066", "平潭县-#FF0000",
                "福清市-#FF0000", "长乐市-#FF0066"],
            xiamenshis:["思明区-#FF0066", "海沧区-#FF0000", "湖里区-#FF0066", "集美区-#FF0000", "同安区-#FF0066",
                "翔安区-#FF0066"],
            putianshis:["城厢区-#FF0066", "涵江区-#FF0000", "荔城区-#FF0066", "秀屿区-#FF0000","仙游县-#FF0066"],
            sanmingshis:[ "梅列区-#FF0066", "三元区-#FF0000", "明溪县-#FF0066", "清流县-#FF0000","宁化县-#FF0066",
                "大田县-#FF0066", "尤溪县-#FF0000","沙县-#FF0066", "将乐县-#FF0000", "泰宁县-#FF0066", "建宁县-#FF0000",
                "永安市-#FF0000"],
            quanzhoushis:[ "鲤城区-#FF0066", "丰泽区-#FF0000", "洛江区-#FF0066", "泉港区-#FF0000", "惠安县-#FF0066",
                "安溪县-#FF0066", "永春县-#FF0066", "德化县-#FF0000", "金门县-#FF0066", "石狮市-#FF0000","晋江市-#FF0066",
                "南安市-#FF0066"],
            zhangzhoushis:["芗城区-#FF0066", "龙文区-#FF0000", "云霄县-#FF0066", "漳浦县-#FF0000","诏安县-#FF0066",
                "长泰县-#FF0066", "东山县-#FF0000","南靖县-#FF0066", "平和县-#FF0000", "华安县-#FF0066", "龙海市-#FF0000"],
            nanpingshis:["延平区-#FF0066", "顺昌县-#FF0000", "浦城县-#FF0066", "光泽县-#FF0000", "松溪县-#FF0066",
                "政和县-#FF0066", "邵武市-#FF0000", "武夷山市-#FF0066", "建瓯市-#FF0000", "建阳市-#FF0066"],
            longyanshis:["新罗区-#FF0066", "长汀县-#FF0000", "永定县-#FF0066", "上杭县-#FF0000", "武平县-#FF0066",
                "连城县-#FF0066", "漳平市-#FF0066"],
            ningdeshis:["蕉城区-#FF0066", "霞浦县-#FF0000", "古田县-#FF0066", "屏南县-#FF0000","寿宁县-#FF0066",
                "周宁县-#FF0066", "柘荣县-#FF0000","福安市-#FF0066", "福鼎市-#FF0000"],
            nanchangshis:["东湖区-#FF0066", "西湖区-#FF0000", "青云谱区-#FF0066", "湾里区-#FF0000", "青山湖区-#FF0066",
                "南昌县-#FF0066", "新建县-#FF0000", "安义县-#FF0066", "进贤县-#FF0000"],
            jingdezhenshis:["昌江区-#FF0066", "珠山区-#FF0000", "浮梁县-#FF0066", "乐平市-#FF0000"],
            pingxiangshis:[ "安源区-#FF0066", "湘东区-#FF0000", "莲花县-#FF0066", "上栗县-#FF0000","芦溪县-#FF0066"],
            jiujiangshis:["庐山区-#FF0066", "浔阳区-#FF0000", "九江县-#FF0066", "武宁县-#FF0000", "修水县-#FF0066",
                "永修县-#FF0066", "德安县-#FF0000", "星子县-#FF0066", "都昌县-#FF0000","湖口县-#FF0066",
                "彭泽县-#FF0066", "瑞昌市-#FF0000"],
            xinyushis:["渝水区-#FF0066", "渝水区-#FF0000"],
            yintanshis:["月湖区-#FF0066", "余江县-#FF0000", "贵溪市-#FF0066"],
            ganzhoushis:["章贡区-#FF0066", "赣县-#FF0000", "信丰县-#FF0066", "大余县-#FF0000", "上犹县-#FF0066",
                "崇义县-#FF0066", "安远县-#FF0000", "龙南县-#FF0066", "定南县-#FF0000","全南县-#FF0066", "宁都县-#FF0000", "于都县-#FF0066", "都昌县-#FF0000","湖口县-#FF0066",
                "兴国县-#FF0066", "会昌县-#FF0000","寻乌县-#FF0066", "石城县-#FF0000", "瑞金市-#FF0066", "南康市-#FF0000"],
            jianshis:["吉州区-#FF0066", "青原区-#FF0000", "吉安县-#FF0066", "吉水县-#FF0000", "峡江县-#FF0066",
                "新干县-#FF0066", "永丰县-#FF0000", "泰和县-#FF0066", "遂川县-#FF0000","万安县-#FF0066",
                "安福县-#FF0066", "永新县-#FF0000", "井冈山市-#FF0066"],
            yichongshis:[ "袁州区-#FF0066", "奉新县-#FF0000", "万载县-#FF0066", "上高县-#FF0000", "宜丰县-#FF0066",
                "靖安县-#FF0066", "铜鼓县-#FF0000", "丰城市-#FF0066", "樟树市-#FF0000","高安市-#FF0066"],
            wuzhoushis:["临川区-#FF0066", "南城县-#FF0000", "黎川县-#FF0066", "南丰县-#FF0000", "崇仁县-#FF0066",
                "乐安县-#FF0066", "宜黄县-#FF0000", "金溪县-#FF0066", "资溪县-#FF0000","东乡县-#FF0066",
                "广昌县-#FF0066"],
            shangraoshis:["信州区-#FF0066", "上饶县-#FF0000", "广丰县-#FF0066", "玉山县-#FF0000", "铅山县-#FF0066",
                "横峰县-#FF0066", "弋阳县-#FF0000", "余干县-#FF0066", "鄱阳县-#FF0000","万年县-#FF0066", "婺源县-#FF0000", "德兴市-#FF0066"
            ],jinanshis:["历下区-#FF0066", "市中区-#FF0000", "槐荫区-#FF0066", "天桥区-#FF0000", "历城区-#FF0066",
                "长清区-#FF0066", "平阴县-#FF0000", "济阳县-#FF0066", "商河县-#FF0000","章丘市-#FF0066"],
            qindaoshis:[ "市南区-#FF0066", "市北区-#FF0000", "四方区-#FF0066", "黄岛区-#FF0000", "崂山区-#FF0066",
                "李沧区-#FF0066", "城阳区-#FF0000", "胶州市-#FF0066", "即墨市-#FF0000","平度市-#FF0066",
                "胶南市-#FF0066", "莱西市-#FF0000"],
            ziboshis:["张店区-#FF0066", "博山区-#FF0000", "临淄区-#FF0066", "周村区-#FF0000", "桓台县-#FF0066",
                "高青县-#FF0066", "沂源县-#FF0000"],
            zaozhuangshis:[ "市中区-#FF0066", "薛城区-#FF0000", "峄城区-#FF0066", "台儿庄区-#FF0000", "山亭区-#FF0066",
                "滕州市-#FF0066"],
            dongyinshis:["东营区-#FF0066", "河口区-#FF0000", "垦利县-#FF0066", "利津县-#FF0000", "广饶县-#FF0066"],
            yantaishis:["芝罘区-#FF0066", "福山区-#FF0000", "牟平区-#FF0066", "莱山区-#FF0000", "长岛县-#FF0066",
                "龙口市-#FF0066", "莱阳市-#FF0000","莱州市-#FF0066", "蓬莱市-#FF0000", "招远市-#FF0066", "栖霞市-#FF0000", "海阳市-#FF0066"
            ],
            weifangshis:[ "潍城区-#FF0066", "寒亭区-#FF0000", "坊子区-#FF0066", "奎文区-#FF0000", "临朐县-#FF0066",
                "昌乐县-#FF0066", "青州市-#FF0066", "诸城市-#FF0000", "寿光市-#FF0066", "安丘市-#FF0000",
                "高密市-#FF0066", "昌邑市-#FF0000"],
            jiningshis:[ "市中区-#FF0066", "任城区-#FF0000", "微山县-#FF0066", "鱼台县-#FF0000", "金乡县-#FF0066",
                "嘉祥县-#FF0066","汶上县-#FF0066", "泗水县-#FF0000", "梁山县-#FF0066", "曲阜市-#FF0000", "兖州市-#FF0066",
                "邹城市-#FF0066"],
            qinanshis:["泰山区-#FF0066", "岱岳区-#FF0000", "宁阳县-#FF0066", "东平县-#FF0000", "新泰市-#FF0066",
                "肥城市-#FF0066"],
            weihaishis:[ "环翠区-#FF0066", "文登市-#FF0000", "荣成市-#FF0066", "乳山市-#FF0000"],
            rizhaoshis:["东港区-#FF0066", "岚山区-#FF0000", "五莲县-#FF0066", "莒县-#FF0000"],
            laiwushis:[ "莱城区-#FF0066", "钢城区-#FF0000"],
            linxishis:[ "兰山区-#FF0066", "罗庄区-#FF0000", "河东区-#FF0066", "沂南县-#FF0000", "郯城县-#FF0066",
                "沂水县-#FF0066",  "苍山县-#FF0066", "费县-#FF0000", "平邑县-#FF0066", "莒南县-#FF0000", "金乡县-#FF0066",
                "蒙阴县-#FF0066","临沭县-#FF0066"],
            dezhoushis:["德城区-#FF0066", "陵县-#FF0000", "宁津县-#FF0066", "庆云县-#FF0000", "临邑县-#FF0066",
                "齐河县-#FF0066","平原县-#FF0066", "夏津县-#FF0000", "武城县-#FF0066", "乐陵市-#FF0000", "兖州市-#FF0066",
                "禹城市-#FF0066"],
            liaochengshis:[
                "东昌府区-#FF0066", "阳谷县-#FF0000", "莘县-#FF0066", "茌平县-#FF0000", "东阿县-#FF0066",
                "冠县-#FF0066","高唐县-#FF0066","临清市-#FF0066"
            ],binzhoushis:[
                "滨城区-#FF0066", "惠民县-#FF0000", "阳信县-#FF0066", "无棣县-#FF0000", "沾化县-#FF0066",
                "博兴县-#FF0066","邹平县-#FF0066"
            ],mudanshis:[
                "曹县-#FF0066", "单县-#FF0000", "成武县-#FF0066", "巨野县-#FF0000", "郓城县-#FF0066",
                "鄄城县-#FF0066","定陶县-#FF0066", "东明县-#FF0000"
            ],zhenzhoushis:[
                "中原区-#FF0066", "二七区-#FF0000", "管城回族区-#FF0066", "金水区-#FF0000", "上街区-#FF0066",
                "惠济区-#FF0066","中牟县-#FF0066","巩义市-#FF0066", "荥阳市-#FF0000", "新密市-#FF0066", "新郑市-#FF0000", "登封市-#FF0066"
            ],kaifenshis:[
                "龙亭区-#FF0066", "顺河回族区-#FF0000", "鼓楼区-#FF0066", "杞县-#FF0000", "通许县-#FF0066",
                "尉氏县-#FF0066","开封县-#FF0066", "兰考县-#FF0000"
            ],luoyangshis:[
                "老城区-#FF0066", "西工区-#FF0000", "涧西区-#FF0066", "吉利区-#FF0000", "洛龙区-#FF0066",
                "孟津县-#FF0066","新安县-#FF0066", "栾川县-#FF0000","嵩县-#FF0066", "汝阳县-#FF0000", "宜阳县-#FF0066", "洛宁县-#FF0000", "伊川县-#FF0066",
                "偃师市-#FF0066"
            ],
            pingdingshanshis:[
                "新华区-#FF0066", "卫东区-#FF0000", "石龙区-#FF0066", "湛河区-#FF0000", "宝丰县-#FF0066",
                "叶县-#FF0066","鲁山县-#FF0066", "郏县-#FF0000","舞钢市-#FF0066", "汝州市-#FF0000"
            ],
            anyangshis:[
                "文峰区-#FF0066", "北关区-#FF0000", "殷都区-#FF0066", "龙安区-#FF0000", "安阳县-#FF0066",
                "汤阴县-#FF0066","滑县-#FF0066", "内黄县-#FF0000","林州市-#FF0066"
            ],
            hebishis:[
                "鹤山区-#FF0066", "山城区-#FF0000", "淇滨区-#FF0066", "浚县-#FF0000", "淇县-#FF0066"
            ],
            xinxiangshis:[
                "红旗区-#FF0066", "卫滨区-#FF0000", "凤泉区-#FF0066", "新乡县-#FF0000", "获嘉县-#FF0066",
                "原阳县-#FF0066","延津县-#FF0066", "封丘县-#FF0000","长垣县-#FF0066","卫辉市-#FF0066", "辉县市-#FF0000"
            ],
            jiaozuoshis:[
                "解放区-#FF0066", "中站区-#FF0000", "马村区-#FF0066", "山阳区-#FF0000", "修武县-#FF0066",
                "博爱县-#FF0066","武陟县-#FF0066", "温县-#FF0000","济源市-#FF0066","沁阳市-#FF0066", "孟州市-#FF0000"
            ],
            puyangshis:[
                "华龙区-#FF0066", "清丰县-#FF0000", "南乐县-#FF0066", "范县-#FF0000", "台前县-#FF0066","濮阳县-#FF0000"
            ],
            xuchangshis:[
                "魏都区-#FF0066", "许昌县-#FF0000", "鄢陵县-#FF0066", "襄城县-#FF0000", "禹州市-#FF0066",
                "长葛市-#FF0066"
            ],
            luheshis:[
                "郾城区-#FF0066", "召陵区-#FF0000", "舞阳县-#FF0066", "临颍县-#FF0000"
            ],
            sanmenxiashis:[
                "湖滨区-#FF0066", "渑池县-#FF0000", "陕县-#FF0066", "卢氏县-#FF0000", "义马市-#FF0066","灵宝市-#FF0000"
            ]
            ,nanyangshis:[
                "宛城区-#FF0066", "卧龙区-#FF0000", "南召县-#FF0066", "方城县-#FF0000", "西峡县-#FF0066",
                "镇平县-#FF0066","内乡县-#FF0066", "淅川县-#FF0000","社旗县-#FF0066","唐河县-#FF0066", "新野县-#FF0000"
                ,"桐柏县-#FF0066", "邓州市-#FF0000"
            ],
            shangqiushis:[
                "梁园区-#FF0066", "睢阳区-#FF0000", "民权县-#FF0066", "睢县-#FF0000", "宁陵县-#FF0066",
                "柘城县-#FF0066", "虞城县-#FF0066", "夏邑县-#FF0000", "永城市-#FF0066"
            ],
            xinyangshis:[
                "浉河区-#FF0066", "平桥区-#FF0000", "罗山县-#FF0066", "光山县-#FF0000", "新县-#FF0066",
                "商城县-#FF0066","固始县-#FF0066", "潢川县-#FF0000", "淮滨县-#FF0066", "息县-#FF0000"
            ],
            zhoukoushis:[
                "扶沟县-#FF0066", "西华县-#FF0000", "商水县-#FF0066", "沈丘县-#FF0000", "郸城县-#FF0066",
                "淮阳县-#FF0066","太康县-#FF0066", "鹿邑县-#FF0000","项城市-#FF0066"
            ],
            zhumadianshis:[
                "驿城区-#FF0066", "西平县-#FF0000", "上蔡县-#FF0066", "平舆县-#FF0000", "正阳县-#FF0066",
                "确山县-#FF0066", "泌阳县-#FF0066", "汝南县-#FF0000", "遂平县-#FF0066", "新蔡县-#FF0000"
            ],
            wuhanshis:[
                "江岸区-#FF0066", "江汉区-#FF0000", "硚口区-#FF0066", "汉阳区-#FF0000", "武昌区-#FF0066",
                "青山区-#FF0066","洪山区-#FF0066", "东西湖区-#FF0000","汉南区-#FF0066","蔡甸区-#FF0066", "江夏区-#FF0000"
                ,"黄陂区-#FF0066", "新洲区-#FF0000"
            ],
            huangshishis:[
                "黄石港区-#FF0066", "西塞山区-#FF0000", "下陆区-#FF0066", "铁山区-#FF0000", "阳新县-#FF0066",
                "大冶市-#FF0066"
            ],
            shiyanshis:[
                "茅箭区-#FF0066", "张湾区-#FF0000", "郧县-#FF0066", "郧西县-#FF0000", "竹山县-#FF0066",
                "竹溪县-#FF0066","房县-#FF0066", "丹江口市-#FF0000"
            ],
            yichangshis:[
                "西陵区-#FF0066", "伍家岗区-#FF0000", "点军区-#FF0066", "猇亭区-#FF0000", "夷陵区-#FF0066",
                "远安县-#FF0066","兴山县-#FF0066", "秭归县-#FF0000","长阳土家族自治县-#FF0066","五峰土家族自治县-#FF0066", "宜都市-#FF0000"
                ,"当阳市-#FF0066", "枝江市-#FF0000"
            ],
            xiangfanshis:[
                "襄城区-#FF0066", "樊城区-#FF0000", "襄阳区-#FF0066", "南漳县-#FF0000", "谷城县-#FF0066",
                "保康县-#FF0066","老河口市-#FF0066", "枣阳市-#FF0000","宜城市-#FF0066"
            ],
            ezhoushis:[
                "梁子湖区-#FF0066", "华容区-#FF0000", "鄂城区-#FF0066"
            ],
            jinmenshis:[
                "东宝区-#FF0066", "掇刀区-#FF0000", "京山县-#FF0066", "沙洋县-#FF0000", "钟祥市-#FF0066"
            ],
            xiaoganshis:[
                "孝南区-#FF0066", "孝昌县-#FF0000", "大悟县-#FF0066", "云梦县-#FF0000", "应城市-#FF0066",
                "安陆市-#FF0066","汉川市-#FF0066"
            ],
            jinzhoushis:[
                "沙市区-#FF0066", "荆州区-#FF0000", "公安县-#FF0066", "监利县-#FF0000", "江陵县-#FF0066",
                "石首市-#FF0066","洪湖市-#FF0066", "松滋市-#FF0000"
            ],
            huanggangshis:[
                "黄州区-#FF0066", "团风县-#FF0000", "红安县-#FF0066", "罗田县-#FF0000", "英山县-#FF0066",
                "浠水县-#FF0066","蕲春县-#FF0066", "黄梅县-#FF0000","麻城市-#FF0066", "武穴市-#FF0066"
            ],
            xianningshis:[
                "咸安区-#FF0066", "嘉鱼县-#FF0000", "通城县-#FF0066", "崇阳县-#FF0000", "通山县-#FF0066",
                "赤壁市-#FF0066"
            ],
            suizhoushis:[
                "曾都区-#FF0066", "广水市-#FF0000"
            ],
            enhitujiamiaozuzizhizhous:[
                "恩施市-#FF0066", "利川市-#FF0000", "建始县-#FF0066", "巴东县-#FF0000", "宣恩县-#FF0066",
                "咸丰县-#FF0066","来凤县-#FF0066", "鹤峰县-#FF0000"
            ],
            xiantaoshis:[
                "潜江市-#FF0066", "天门市-#FF0000","神农架林区-#FF0066"
            ],
            changshashis:[
                "芙蓉区-#FF0066", "天心区-#FF0000", "岳麓区-#FF0066", "开福区-#FF0000", "雨花区-#FF0066",
                "长沙县-#FF0066","望城县-#FF0066", "宁乡县-#FF0000","浏阳市-#FF0066"
            ],
            zhuzhoushis:[
                "荷塘区-#FF0066", "芦淞区-#FF0000", "石峰区-#FF0066", "天元区-#FF0000", "宣恩县-#FF0066",
                "株洲县-#FF0066","攸县-#FF0066", "茶陵县-#FF0000", "炎陵县-#FF0066", "醴陵市-#FF0000"
            ],
            xiangtanshis:[
                "雨湖区-#FF0066", "岳塘区-#FF0000", "湘潭县-#FF0066", "湘乡市-#FF0000", "韶山市-#FF0066"
            ],
            hengyangshis:[
                "珠晖区-#FF0066", "雁峰区-#FF0000", "石鼓区-#FF0066", "蒸湘区-#FF0000", "南岳区-#FF0066",
                "衡阳县-#FF0066","衡南县-#FF0066", "衡山县-#FF0000","衡东县-#FF0066","祁东县-#FF0066", "耒阳市-#FF0000", "常宁市-#FF0066"
            ],
            shaoyangshis:[
                "双清区-#FF0066", "大祥区-#FF0000", "北塔区-#FF0066", "邵东县-#FF0000", "新邵县-#FF0066",
                "邵阳县-#FF0066","隆回县-#FF0066", "洞口县-#FF0000", "绥宁县-#FF0066", "新宁县-#FF0000",
                "城步苗族自治县-#FF0066", "武冈市-#FF0000"
            ],
            yueyangshis:[
                "岳阳楼区-#FF0066", "云溪区-#FF0000", "君山区-#FF0066", "岳阳县-#FF0000", "华容县-#FF0066",
                "湘阴县-#FF0066","平江县-#FF0066", "汨罗市-#FF0000", "临湘市-#FF0066"
            ],
            changdeshis:[
                "武陵区-#FF0066", "鼎城区-#FF0000", "安乡县-#FF0066", "汉寿县-#FF0000", "澧县-#FF0066",
                "临澧县-#FF0066","桃源县-#FF0066", "津市市-#FF0000"
            ],
            zhangjiajieshis:[
                "永定区-#FF0066", "武陵源区-#FF0000", "慈利县-#FF0066", "桑植县-#FF0000"
            ],
            yiyangshis:[
                "资阳区-#FF0066", "赫山区-#FF0000", "南县-#FF0066", "桃江县-#FF0000", "安化县-#FF0066",
                "沅江市-#FF0066"
            ],
            binzhoushis:[
                "北湖区-#FF0066", "苏仙区-#FF0000", "桂阳县-#FF0066", "宜章县-#FF0000", "永兴县-#FF0066",
                "嘉禾县-#FF0066","临武县-#FF0066", "汝城县-#FF0000","桂东县-#FF0066", "安仁县-#FF0000",
                "资兴市-#FF0066"
            ],
            yongzhoushis:[
                "冷水滩区-#FF0066", "祁阳县-#FF0000", "东安县-#FF0066", "双牌县-#FF0000","道县-#FF0066", "江永县-#FF0000", "宁远县-#FF0066", "蓝山县-#FF0000", "新田县-#FF0066",
                "江华瑶族自治县-#FF0066"
            ],
            huaihuashis:[
                "鹤城区-#FF0066", "中方县-#FF0000", "沅陵县-#FF0066", "辰溪县-#FF0000", "溆浦县-#FF0066",
                "会同县-#FF0066","麻阳苗族自治县-#FF0066", "新晃侗族自治县-#FF0000","芷江侗族自治县-#FF0066", "靖州苗族侗族自治县-#FF0000", "通道侗族自治县-#FF0066", "洪江市-#FF0000"
            ],
            loudishis:[
                "娄星区-#FF0066", "双峰县-#FF0000", "新化县-#FF0066", "冷水江市-#FF0000", "涟源市-#FF0066"
            ],
            xiangxitujiazumiaozuzizhizhous:[
                "吉首市-#FF0066", "泸溪县-#FF0000", "凤凰县-#FF0066", "花垣县-#FF0000","保靖县-#FF0066", "古丈县-#FF0000", "永顺县-#FF0066", "龙山县-#FF0000"
            ],
            guangzhoushis:[
                "荔湾区-#FF0066", "越秀区-#FF0000", "海珠区-#FF0066", "天河区-#FF0000","白云区-#FF0066", "黄埔区-	#FF0000", "番禺区-#FF0066", "花都区-#FF0000", "增城市-#FF0066",
                "从化市-#FF0066"
            ],
            shaoguanshis:[
                "武江区-#FF0066", "浈江区-#FF0000", "曲江区-#FF0066", "始兴县-#FF0000", "仁化县-#FF0066",
                "翁源县-#FF0066","乳源瑶族自治县-#FF0066", "新丰县-#FF0000","乐昌市-#FF0066", "南雄市-#FF0000"
            ],
            shenzhenshis:[
                "罗湖区-#FF0066", "福田区-#FF0000", "南山区-#FF0066", "宝安区-#FF0000","龙岗区-#FF0066", "黄埔区-	#FF0000", "番禺区-#FF0066", "花都区-#FF0000", "增城市-#FF0066",
                "盐田区-#FF0066"
            ],
            zhuhaishis:[
                "香洲区-#FF0066", "斗门区-#FF0000", "金湾区-#FF0066"
            ],
            shantoushis:[
                "龙湖区-#FF0066", "金平区-#FF0000", "潮阳区-#FF0066", "潮南区-#FF0000", "澄海区-#FF0066",
                "南澳县-#FF0066"
            ],
            foshanshis:[
                "南海区-#FF0066", "顺德区-#FF0000", "三水区-#FF0066", "高明区-#FF0000"
            ],
            jiangmenshis:[
                "新会区-#FF0066", "台山市-#FF0000", "开平市-#FF0066", "鹤山市-#FF0000","恩平市-#FF0066"
            ],
            zhanjiangshis:[
                "赤坎区-#FF0066", "霞山区-#FF0000", "坡头区-#FF0066", "麻章区-#FF0000", "遂溪县-#FF0066",
                "徐闻县-#FF0066","廉江市-#FF0066", "雷州市-#FF0000", "吴川市-#FF0066"
            ],
            maomingshis:[
                "茂南区-#FF0066", "茂港区-#FF0000", "电白县-#FF0066", "高州市-#FF0000","化州市-#FF0066",
                "信宜市-#FF0066"
            ],
            zhaoqinshis:[
                "端州区-#FF0066", "鼎湖区-#FF0000", "广宁县-#FF0066", "怀集县-#FF0000", "封开县-#FF0066",
                "德庆县-#FF0066","高要市-#FF0066", "四会市-#FF0000"
            ],
            huizhoushis:[
                "惠城区-#FF0066", "惠阳区-#FF0000", "博罗县-#FF0066", "惠东县-#FF0000","龙门县-#FF0066"
            ],
            meizhoushis:[
                "梅江区-#FF0066", "梅县-#FF0000", "大埔县-#FF0066", "丰顺县-#FF0000", "五华县-#FF0066",
                "平远县-#FF0066","蕉岭县-#FF0066", "兴宁市-#FF0000"
            ],
            shanweishis:[
                "海丰县-#FF0066", "陆河县-#FF0000", "陆丰市-#FF0066"
            ],
            heyuanshis:[
                "源城区-#FF0066", "紫金县-#FF0000", "龙川县-#FF0066", "连平县-#FF0000", "和平县-#FF0066",
                "东源县-#FF0066"
            ],
            yangjiangshis:[
                "江城区-#FF0066", "阳西县-#FF0000", "阳东县-#FF0066", "阳春市-#FF0000"
            ],
            qingyuanshis:[
                "清城区-#FF0066", "佛冈县-#FF0000", "阳山县-#FF0066", "连山壮族瑶族自治县-#FF0000", "连南瑶族自治县-#FF0066",
                "清新县-#FF0066","英德市-#FF0066", "连州市-#FF0000"
            ],
            dongguanshis:[
                "东莞市-#FF0066"
            ],
            zhongshanshis:[
                "中山市-#FF0066"
            ],
            chaozhoushis:[
                "湘桥区-#FF0066", "潮安县-#FF0000", "饶平县-#FF0066"
            ],
            jieyangshis:[
                "揭东县-#FF0066", "揭西县-#FF0000", "惠来县-#FF0066", "普宁市-#FF0000"
            ],
            yunfushis:[
                "云城区-#FF0066", "新兴县-#FF0000", "郁南县-#FF0066", "云安县-#FF0000", "罗定市-#FF0066"
            ],
            nanningshis:[
                "兴宁区-#FF0066", "江南区-#FF0000", "西乡塘区-#FF0066", "良庆区-#FF0000", "邕宁区-#FF0066",
                "武鸣县-#FF0066","隆安县-#FF0066", "马山县-#FF0000","上林县-#FF0066", "宾阳县-#FF0000", "横县-#FF0066"
            ],
            liuzhoushis:[
                "柳南区-#FF0066", "柳江县-#FF0000", "柳城县-#FF0066", "鹿寨县-#FF0000", "融安县-#FF0066",
                "融水苗族自治县-#FF0066","三江侗族自治县-#FF0066"
            ],
            guilinshis:[
                "阳朔县-#FF0066", "临桂县-#FF0000", "灵川县-#FF0066", "全州县-#FF0000", "兴安县-#FF0066",
                "永福县-#FF0066","灌阳县-#FF0066", "龙胜各族自治县-#FF0000","资源县-#FF0066", "平乐县-#FF0000",
                "恭城瑶族自治县-#FF0066"
            ],
            wuzhoushis:[
                "苍梧县-#FF0066", "藤县-#FF0000", "蒙山县-#FF0066", "岑溪市-#FF0000"
            ],
            beihaishis:[
                "铁山港区-#FF0066", "合浦县-#FF0000"
            ],
            fangchenggangshis:[
                "港口区-#FF0066", "防城区-#FF0000", "上思县-#FF0066", "东兴市-#FF0000"
            ],
            qinzhoushis:[
                "钦北区-#FF0066", "灵山县-#FF0000", "浦北县-#FF0066"
            ],
            guigangshis:[
                "覃塘区-#FF0066", "平南县-#FF0000", "桂平市-#FF0066"
            ],
            yulinshis:[
                "容县-#FF0066", "陆川县-#FF0000", "博白县-#FF0066", "兴业县-#FF0000","北流市-#FF0066"
            ],
            baiseshis:[
                "田阳县-#FF0066", "田东县-#FF0000", "平果县-#FF0066", "德保县-#FF0000", "靖西县-#FF0066",
                "那坡县-#FF0066","凌云县-#FF0066", "乐业县-#FF0000","田林县-#FF0066", "西林县-#FF0000",
                "隆林各族自治县-#FF0066"
            ],
            hezhoushis:[
                "昭平县-#FF0066", "钟山县-#FF0000", "富川瑶族自治县-#FF0066"
            ],
            hechishis:[
                "金城江区-#FF0066", "南丹县-#FF0000", "天峨县-#FF0066", "凤山县-#FF0000", "东兰县-#FF0066",
                "罗城仫佬族自治县-#FF0066","环江毛南族自治县-#FF0066", "巴马瑶族自治县-#FF0000","都安瑶族自治县-#FF0066", "大化瑶族自治县-#FF0000",
                "宜州市-#FF0066"
            ],
            laibinshis:[
                "忻城县-#FF0066", "象州县-#FF0000", "武宣县-#FF0066", "金秀瑶族自治县-#FF0000","合山市-#FF0066"
            ],
            chongzuoshis:[
                "田阳县-#FF0066", "田东县-#FF0000", "平果县-#FF0066", "德保县-#FF0000", "靖西县-#FF0066",
                "那坡县-#FF0066","凌云县-#FF0066", "乐业县-#FF0000","田林县-#FF0066", "西林县-#FF0000",
                "隆林各族自治县-#FF0066"
            ],
            haikoushis:[
                "秀英区-#FF0066", "龙华区-#FF0000", "琼山区-#FF0066", "美兰区-#FF0000"
            ],
            sanyashis:[
                "三亚市-#FF0066"
            ],
            wuzhishanshis:[
                "五指山市-#FF0066", "琼海市-#FF0000", "儋州市-#FF0066", "文昌市-#FF0000", "万宁市-#FF0066",
                "东方市-#FF0066","凌云县-#FF0066", "屯昌县-#FF0000","澄迈县-#FF0066", "临高县-#FF0000",
                "白沙黎族自治县-#FF0066","昌江黎族自治县-#FF0066", "乐东黎族自治县-#FF0000", "陵水黎族自治县-#FF0066",
                "保亭黎族苗族自治县-#FF0066","琼中黎族苗族自治县-#FF0066"
            ],
            chongqinshis:[
                "万州区-#FF0066", "涪陵区-#FF0000", "渝中区-#FF0066", "大渡口区-#FF0000", "江北区-#FF0066",
                "沙坪坝区-#FF0000", "九龙坡区-#FF0066", "南岸区-#33FF00", "北碚区-#33FF00", "万盛区-#33FF00", "双桥区-#FF0000",
                "渝北区-#FF0066", "巴南区-#FF0000", "黔江区-#33FF00","长寿区-#FF0066", "綦江县-#FF0066", "潼南县-#FF0066",
                "铜梁县-#FF0000", "大足县-#FF0000", "璧山县-#FF0066", "梁平县-#FF0000", "城口县-#FF0066", "丰都县-#FF0000",
                "垫江县-#33FF00","武隆县-#FF0066","忠县-#33FF00","开县-#FF0066","云阳县-#FF0066", "奉节县-#FF0000", "巫山县-#FF0066",
                "巫溪县-#FF0066","石柱土家族自治县-#FF0066","秀山土家族苗族自治县-#FF0066","酉阳土家族苗族自治县-#FF0066", "彭水苗族土家族自治县-#FF0000"
            ],
            chengdushis:[
                "锦江区-#FF0066", "青羊区-#FF0000", "金牛区-#FF0066", "武侯区-#FF0000", "成华区-#FF0066",
                "龙泉驿区-#FF0066","青白江区-#FF0066", "新都区-#FF0000","温江区-#FF0066", "金堂县-#FF0000",
                "双流县-#FF0066","郫县-#FF0066", "大邑县-#FF0000", "蒲江县-#33FF00","新津县-#FF0066", "都江堰市-#FF0066", "彭州市-#FF0066",
                "邛崃市-#FF0000", "崇州市-#FF0000"
            ],
            zigongshis:[
                "自流井区-#FF0066", "贡井区-#FF0000", "大安区-#FF0066", "沿滩区-#FF0000", "荣县-#FF0066",
                "富顺县-#FF0066"
            ],
            panzhihuashis:[
                "东区-#FF0066", "西区-#FF0000", "仁和区-#33FF00","米易县-#FF0066","盐边县-#33FF00"
            ],
            luzhoushis:[
                "江阳区-#FF0066", "纳溪区-#FF0000", "龙马潭区-#FF0066", "泸县-#FF0000", "合江县-#FF0066",
                "叙永县-#FF0000", "古蔺县-#33FF00"
            ],
            deyangshis:[
                "旌阳区-#FF0000", "中江县-#FF0000", "罗江县-#FF0000", "广汉市-#FF0066", "什邡市-#FF0066",
                "绵竹市-#FF0066"
            ],
            mianyangshis:[
                "涪城区-#FF0000", "游仙区-#FF0066", "三台县-#FF0000", "盐亭县-#FF0066", "安县-#FF0000",
                "梓潼县-#33FF00", "北川羌族自治县-#FF0000", "平武县-#FF0066", "江油市-#FF0000"
            ],
            guangyuanshis:[
                "市中区-#FF0000", "元坝区-#FF0066", "朝天区-#FF0000", "旺苍县-#FF0066", "青川县-#33FF00",
                "剑阁县-#FF0066", "汉中市-#FF0000", "榆林市-#33FF00", "安康市-#FF0000", "商洛市-#FF0066"
            ],
            suiningshis:[
                "船山区-#FF0000", "安居区-#FF0066", "蓬溪县-#FF0000", "射洪县-#FCFBBB", "大英县-#FF0066"
            ],
            neijiangshis:[
                "市中区-#FF0000", "东兴区-#FF0066", "威远县-#FF0066", "资中县-#FF0000"
            ],
            leshanshis:[
                "市中区-#FF0000", "沙湾区-#FF0066", "五通桥区-#FF0000", "金口河区-#FF0066", "犍为县-#33FF00","沐川县-#33FF00", "峨边彝族自治县-#33FF00", "夹江县-#FF0000", "马边彝族自治县-#FF0066", "峨眉山市-#FF0000"
            ],
            nanchongshis:[
                "顺庆区-#33FF00", "高坪区-#33FF00", "南部县-#FF0000", "营山县-#FF0066", "蓬安县-#FF0000",
                "仪陇县-#FF0000", "西充县-#33FF00", "阆中市-#FF0000"
            ],
            meishanshis:[
                "东坡区-#FF0000", "仁寿县-#FF0066", "彭山县-#FF0000", "洪雅县-#FF0000", "丹棱县-#FF0066",
                "青神县-#FF0000"
            ],
            yibinshis:[
                "翠屏区-#FF0066", "宜宾县-#FF0000", "南溪县-#FF0066", "江安县-#33FF00", "长宁县-#FF0000",
                "高县-#FF0000", "珙县-#FF0066", "筠连县-#FF0000", "兴文县-#33FF00", "屏山县-#FF0000"
            ],
            guanganshis:[
                "岳池县-#FF0066", "武胜县-#FF0000", "邻水县-#FF0066", "华蓥市-#33FF00"
            ],
            dazhoushis:[
                "通川区-#FF0000", "达县-#FF0066", "宣汉县-#FF0000", "开江县-#FF0066", "大竹县-#33FF00",
                "渠县-#FF0066", "万源市-#FF0000"
            ],
            yaanshis:[
                "雨城区-#FF0000", "名山县-#FF0066", "荥经县-#FF0000", "汉源县-#FF0000", "石棉县-#FF0066",
                "天全县-#FF0000","芦山县-#FF0000", "宝兴县-#FF0066"
            ],
            bazhongshis:[
                "巴州区-#FF0066", "通江县-#FF0000", "南江县-#FF0066", "平昌县-#33FF00"
            ],
            ziyangshis:[
                "雁江区-#FF0000", "安岳县-#FF0066", "乐至县-#FF0000", "简阳市-#FF0000"
            ],
            abazangzuqiangzuzizhizhous:[
                "汶川县-#FF0000", "理县-#FF0000", "茂县-#FF0000", "松潘县-#FF0066", "九寨沟县-#FF0066",
                "金川县-#FF0066","小金县-#FF0000", "黑水县-#FF0066", "马尔康县-#FF0000", "壤塘县-#FF0000",
                "阿坝县-#FF0000", "若尔盖县-#FF0066", "红原县-#FF0000"
            ],
            ganzizangzuzizhizhous:[
                "康定县-#FF0000", "泸定县-#FF0066", "丹巴县-#FF0000", "九龙县-#FF0066", "雅江县-#FF0000",
                "道孚县-#33FF00", "炉霍县-#FF0000", "甘孜县-#FF0066", "新龙县-#FF0000","德格县-#FF0000", "白玉县-#FF0000", "石渠县-#FF0000", "色达县-#FF0066", "理塘县-#FF0066",
                "巴塘县-#FF0066","乡城县-#FF0000","稻城县-#33FF00","得荣县-#FF0000"
            ],
            liangshanyizuzizhizhous:[
                "西昌市-#FF0000", "木里藏族自治县-#FF0066", "盐源县-#FF0000", "德昌县-#FF0066", "会理县-#33FF00",
                "会东县-#FF0066", "宁南县-#FF0000", "普格县-#33FF00", "布拖县-#FF0000", "金阳县-#FF0066",
                "昭觉县-#FF0000", "喜德县-#FF0000", "冕宁县-#FF0000", "越西县-#FF0066", "甘洛县-#FF0066",
                "美姑县-#FF0066","雷波县-#FF0000"
            ],
            guiyangshis:[
                "南明区-#FF0000", "云岩区-#FF0066", "乌当区-#FF0000", "白云区-#FCFBBB", "小河区-#FF0066","开阳县-#FF0000", "息烽县-#FF0066", "修文县-#FF0000", "清镇市-#FF0066"
            ],
            liupanshuishis:[
                "钟山区-#FF0000", "六枝特区-#FF0066", "水城县-#FF0066", "盘县-#FF0000"
            ],
            zunyishis:[
                "红花岗区-#FF0000", "汇川区-#FF0066", "遵义县-#FF0000", "桐梓县-#FF0066", "绥阳县-#33FF00","正安县-#33FF00", "道真仡佬族苗族自治县-#33FF00", "务川仡佬族苗族自治县-#FF0000", "凤冈县-#FF0066", "湄潭县-#FF0000",
                "余庆县-#33FF00", "习水县-#33FF00", "赤水市-#FF0000", "仁怀市-#FF0066"
            ],
            anshunshis:[
                "西秀区-#33FF00", "平坝县-#33FF00", "普定县-#FF0000", "镇宁布依族苗族自治县-#FF0066", "关岭布依族苗族自治县-#FF0000",
                "紫云苗族布依族自治县-#FF0000"
            ],
            tongrediqus:[
                "铜仁市-#FF0000", "江口县-#FF0066", "玉屏侗族自治县-#FF0000", "石阡县-#FF0000", "思南县-#FF0066",
                "印江土家族苗族自治县-#FF0000","德江县-#FF0000", "沿河土家族自治县-#FF0066", "松桃苗族自治县-#FF0000", "万山特区-#FCFBBB"
            ],
            xingyishis:[
                "兴仁县-#33FF00", "普安县-#33FF00", "晴隆县-#FF0000", "贞丰县-#FF0066", "望谟县-#FF0000",
                "册亨县-#FF0000", "安龙县-#33FF00"
            ],
            bijieditus:[
                "毕节市-#FF0000", "大方县-#FF0066", "黔西县-#FF0000", "金沙县-#FF0000", "织金县-#FF0066",
                "纳雍县-#FF0000","赫章县-#33FF00"
            ],
            qiandongnanmiaozutongzuzizhizhous:[
                "凯里市-#FF0066", "黄平县-#FF0000", "施秉县-#FF0066", "三穗县-#33FF00", "镇远县-#FF0000",
                "岑巩县-#FF0000", "天柱县-#FF0066", "锦屏县-#FF0000", "剑河县-#33FF00", "台江县-#FF0000",
                "黎平县-#33FF00", "榕江县-#33FF00", "从江县-#FF0000", "雷山县-#FF0066", "麻江县-#FF0000",
                "丹寨县-#FF0000"
            ],
            qiannanbuyizumiaozuzizhizhous:[
                "都匀市-#FF0066", "福泉市-#FF0000", "荔波县-#FF0066", "贵定县-#33FF00", "瓮安县-#FF0000",
                "独山县-#FF0000", "平塘县-#FF0066", "罗甸县-#FF0000", "长顺县-#33FF00", "龙里县-#FF0000",
                "惠水县-#33FF00", "三都水族自治县-#33FF00"
            ],
            kunmingshis:[
                "五华区-#FF0066", "盘龙区-#FF0000", "官渡区-#FF0066", "西山区-#33FF00","东川区-#FF0000", "呈贡县-#FF0066",
                "晋宁县-#FF0000", "富民县-#FF0000", "宜良县-#FF0066","石林彝族自治县-#FF0000","嵩明县-#33FF00","禄劝彝族苗族自治县-#FF0000",
                "寻甸回族彝族自治县-#FF0066", "安宁市-#33FF00"
            ],
            qujingshis:[
                "麒麟区-#FF0000", "马龙县-#FF0066", "陆良县-#FF0000", "师宗县-#FF0066", "罗平县-#33FF00",
                "富源县-#FF0066", "会泽县-#FF0000","沾益县-#FF0000", "宣威市-#FF0000"
            ],
            yuxishis:[
                "江川县-#FF0000", "澄江县-#FF0066", "通海县-#FF0000", "华宁县-#FF0000", "易门县-#FF0066",
                "峨山彝族自治县-#FF0000","新平彝族傣族自治县-#FF0000"
            ],
            baoshanshis:[
                "隆阳区-#FF0066", "施甸县-#FF0000", "腾冲县-#FF0066", "龙陵县-#33FF00","昌宁县-#FF0000"
            ],
            shaotongshis:[
                "昭阳区-#FF0000", "鲁甸县-#FF0066", "巧家县-#FF0000", "盐津县-#FF0000","大关县-#FF0000", "理县-#FF0000", "茂县-#FF0000", "松潘县-#FF0066", "九寨沟县-#FF0066",
                "永善县-#FF0066","绥江县-#FF0000", "镇雄县-#FF0066","彝良县-#FF0000", "威信县-#FF0066", "通海县-#FF0000", "华宁县-#FF0000", "易门县-#FF0066",
                "水富县-#FF0000"
            ],

            lijiangshis:[
                "古城区-#FF0000", "玉龙纳西族自治县-#FF0000", "永胜县-#FF0000", "华坪县-#FF0066", "宁蒗彝族自治县-#FF0066"
            ],
            mojianghanizuzizhixians:[
                "景东彝族自治县-#FF0000", "景谷傣族彝族自治县-#FF0066", "江城哈尼族彝族自治县-#FF0000", "澜沧拉祜族自治县-#FF0000", "西盟佤族自治县-#FF0066"
            ] ,
            lincangshis:[
                "临翔区-#FF0000", "凤庆县-#FF0066", "云县-#FF0000", "永德县-#FF0066", "镇康县-#FF0000",
                "耿马傣族佤族自治县-#33FF00", "沧源佤族自治县-#FF0000"
            ],
            chuxiongyizuzizhizhous:[
                "个旧市-#FF0000", "开远市-#FF0066", "蒙自县-#FF0000", "屏边苗族自治县-#FF0066", "建水县-#33FF00",
                "石屏县-#FF0066", "弥勒县-#FF0000", "泸西县-#33FF00", "元阳县-#FF0000","红河县-#FF0066", "绿春县-#FF0000","河口瑶族自治县-#FF0066"
            ],
            honghehanizuyizuzizhizhous:[
                "南明区-#FF0000", "云岩区-#FF0066", "乌当区-#FF0000", "白云区-#FCFBBB", "小河区-#FF0066","开阳县-#FF0000", "息烽县-#FF0066", "修文县-#FF0000", "清镇市-#FF0066"
            ],
            wenshanzhuangzumiaozuzizhizhous:[
                "文山县-#FF0000", "砚山县-#FF0066", "西畴县-#FF0066", "麻栗坡县-#FF0000","马关县-#FF0000", "丘北县-#FF0066", "广南县-#FF0000", "富宁县-#FF0066"
            ],
            xishuangbanladaizuzizhizhous:[
                "景洪市-#FF0000", "勐海县-#FF0066", "勐腊县-#FF0000"
            ],
            dalibaizuzizhizhous:[
                "大理市-#33FF00", "漾濞彝族自治县-#33FF00", "祥云县-#FF0000", "宾川县-#FF0066", "弥渡县-#FF0000",
                "南涧彝族自治县-#FF0000","巍山彝族回族自治县-#FF0000", "永平县-#FF0066", "云龙县-#FF0066","洱源县-#FF0066", "剑川县-#FF0000", "鹤庆县-#FF0000"
            ],
            dehongdaizujingbozuzizhizhous:[
                "瑞丽市-#FF0000", "潞西市-#FF0066", "梁河县-#FF0000", "盈江县-#FF0000", "陇川县-#FF0066"
            ],
            lujianglisuzuzizhizhous:[
                "泸水县-#33FF00", "福贡县-#33FF00", "贡山独龙族怒族自治县-#FF0000", "兰坪白族普米族自治县-#FF0066"
            ],

            diqingzangzuzizhizhous:[
                "香格里拉县-#FF0066", "德钦县-#FF0000", "维西傈僳族自治县-#FF0066"
            ],
            lasashis:[
                "城关区-#FF0000", "林周县-#FF0066", "当雄县-#FF0000", "尼木县-#FF0066", "曲水县-#33FF00",
                "堆龙德庆县-#FF0066", "达孜县-#FF0000","墨竹工卡县-#FF0066"
            ],
            changdudiqus:[
                "昌都县-#FF0000", "江达县-#FF0066", "贡觉县-#FF0000", "类乌齐县-#FF0000", "丁青县-#FF0066",
                "察雅县-#FF0000","八宿县-#FF0000", "左贡县-#FF0066","芒康县-#FF0000", "洛隆县-#FF0066", "边坝县-#FF0000"
            ],
            shannandiqus:[
                "乃东县-#FF0066", "扎囊县-#FF0000", "贡嘎县-#FF0066", "桑日县-#33FF00","琼结县-#FF0000", "曲松县-#FF0066", "措美县-#FF0000", "洛扎县-#FF0066", "加查县-#33FF00",
                "隆子县-#FF0066", "错那县-#FF0000","浪卡子县-#FF0000"
            ],
            rikazediqus:[
                "日喀则市-#FF0000", "南木林县-#FF0066", "江孜县-#FF0000", "定日县-#FF0000","萨迦县-#FF0000", "拉孜县-#FF0000",
                "谢通门县-#FF0000", "白朗县-#FF0066", "仁布县-#FF0066",
                "康马县-#FF0066","定结县-#FF0000","仲巴县-#FF0000", "亚东县-#FF0066", "吉隆县-#FF0000", "聂拉木县-#FF0000","岗巴县-#33FF00","萨嘎县-#FF0000"
            ],

            naqudiqus:[
                "那曲县-#FF0000", "嘉黎县-#FF0000", "比如县-#FF0000", "聂荣县-#FF0066", "安多县-#FF0066",
                "申扎县-#FF0066","索县-#FF0000", "班戈县-#FF0066", "巴青县-#FF0000", "尼玛县-#FF0000"
            ],
            alidiqus:[
                "普兰县-#FF0000", "札达县-#FF0066", "噶尔县-#FF0000", "日土县-#FF0066", "革吉县-#FF0000",
                "改则县-#33FF00", "措勤县-#FF0000"
            ],
            linzhidiqus:[
                "林芝县-#FF0000", "工布江达县-#FF0066", "米林县-#FF0000", "墨脱县-#FF0066", "波密县-#33FF00",
                "察隅县-#FF0066", "朗县-#FF0000"
            ],
            xianshis:[
                "新城区-#FF0000", "碑林区-#FF0066", "莲湖区-#FF0000", "灞桥区-#FCFBBB", "未央区-#FF0066",
                "雁塔区-#FF0000", "阎良区-#FF0066", "临潼区-#FF0000", "长安区-#FF0066","蓝田县-#FF0000", "周至县-#FF0000", "比如县-#FF0000", "聂荣县-#FF0066", "安多县-#FF0066",
                "户县-#FF0066","索县-#FF0000", "高陵县-#FF0066"
            ],

            tongchuanshis:[
                "王益区-#FF0000", "印台区-#FF0066", "耀州区-#FF0000", "宜君县-#FF0066"
            ],
            baojishis:[
                "渭滨区-#33FF00", "金台区-#33FF00", "陈仓区-#FF0000", "凤翔县-#FF0066", "岐山县-#FF0000",
                "扶风县-#FF0000","眉县-#FF0000", "陇县-#FF0066", "千阳县-#FF0000", "麟游县-#FCFBBB", "凤县-#FF0066",
                "太白县-#FF0000"
            ],
            xianyangshis:[
                "秦都区-#FF0000", "杨凌区-#FF0066", "渭城区-#FF0000", "三原县-#FF0000", "泾阳县-#FF0066",
                "乾县-#FF0000","礼泉县-#FF0000", "永寿县-#FF0066", "彬县-#FF0000", "长武县-#FCFBBB","旬邑县-#33FF00", "淳化县-#33FF00", "武功县-#FF0000", "兴平市-#FF0066"
            ],
            weinanshis:[
                "临渭区-#33FF00", "华县-#33FF00", "潼关县-#FF0000", "大荔县-#FF0066", "合阳县-#FF0000",
                "澄城县-#FF0000", "蒲城县-#33FF00","白水县-#33FF00", "富平县-#33FF00", "韩城市-#FF0000", "华阴市-#FF0066"
            ],
            yananshis:[
                "宝塔区-#FF0000", "延长县-#FF0066", "延川县-#FF0000", "子长县-#FF0000", "安塞县-#FF0066",
                "志丹县-#FF0000","甘泉县-#33FF00", "富县-#33FF00", "洛川县-#33FF00", "宜川县-#FF0000", "黄龙县-#FF0066", "黄陵县-#FF0000"
            ],
            hanzhongshis:[
                "汉台区-#FF0066", "南郑县-#FF0000", "城固县-#FF0066", "洋县-#33FF00", "西乡县-#FF0000",
                "勉县-#FF0000", "略阳县-#FF0066", "镇巴县-#FF0000", "留坝县-#33FF00", "佛坪县-#FF0000"
            ],
            yulinshis:[
                "榆阳区-#FF0066", "神木县-#FF0000", "府谷县-#FF0066", "横山县-#33FF00", "靖边县-#FF0000",
                "定边县-#FF0000", "绥德县-#FF0066", "米脂县-#FF0000", "佳县-#33FF00", "吴堡县-#FF0000",
                "清涧县-#33FF00", "子洲县-#33FF00"
            ],
            ankangshis:[
                "汉滨区-#FF0066", "汉阴县-#FF0000", "石泉县-#FF0066", "宁陕县-#33FF00","紫阳县-#FF0000", "岚皋县-#FF0066",
                "平利县-#FF0000", "镇坪县-#FF0000", "旬阳县-#FF0066","白河县-#FF0000"
            ],
            shangluoshis:[
                "商州区-#FF0000", "洛南县-#FF0066", "丹凤县-#FF0000", "商南县-#FF0066", "山阳县-#33FF00",
                "镇安县-#FF0066", "柞水县-#FF0000"
            ],
            nanzhoushis:[
                "城关区-#FF0000", "西固区-#FF0066", "红古区-#FF0000", "永登县-#FF0000", "皋兰县-#FF0066",
                "榆中县-#FF0000"
            ],
            jiayuguanshis:[
                "嘉峪关市-#FF0066"
            ],
            jinchangshis:[
                "金川区-#FF0000", "永昌县-#FF0066"
            ],

            baiyinshis:[
                "白银区-#FF0000", "平川区-#FF0000", "靖远县-#FF0000", "会宁县-#FF0066", "景泰县-#FF0066"
            ],
            tianshuishis:[
                "清水县-#FF0000", "秦安县-#FF0066", "甘谷县-#FF0000", "武山县-#FF0000", "张家川回族自治县-#FF0066"
            ],
            wuweishis:[
                "凉州区-#FF0000", "民勤县-#FF0066", "古浪县-#FF0000", "天祝藏族自治县-#FF0066"
            ],
            zhangyeshis:[
                "甘州区-#FF0000", "肃南裕固族自治县-#FF0066", "民乐县-#FF0000", "临泽县-#FF0066", "高台县-#33FF00",
                "山丹县-#FF0066"
            ],
            pingliangshis:[
                "崆峒区-#FF0000", "泾川县-#FF0066", "灵台县-#FF0000", "崇信县-#FCFBBB", "华亭县-#FF0066","庄浪县-#FF0000", "静宁县-#FF0066"
            ],
            jiuquanshis:[
                "肃州区-#FF0000", "金塔县-#FF0066", "肃北蒙古族自治县-#FF0066", "阿克塞哈萨克族自治县-#FF0000","玉门市-#FF0000", "敦煌市-#FF0066","瓜州县-#33FF00"
            ],
            qinyangshis:[
                "西峰区-#FF0000", "庆城县-#FF0066", "环县-#FF0000","华池县-#FF0000", "合水县-#FF0000", "正宁县-#FF0000", "宁县-#FF0066", "镇原县-#FF0066"
            ],
            dingxishis:[
                "安定区-#33FF00", "通渭县-#33FF00", "陇西县-#FF0000", "渭源县-#FF0066", "临洮县-#FF0000",
                "漳县-#FF0000","岷县-#FF0000"
            ],
            longnanshis:[
                "武都区-#FF0000", "成县-#FF0066", "文县-#FF0000", "宕昌县-#FF0000", "康县-#FF0066","西和县-#FF0000", "礼县-#FF0066", "徽县-#FF0066", "两当县-#FF0000"
            ],
            linxiahuizuzizhizhous:[
                "临夏县-#33FF00", "康乐县-#33FF00", "永靖县-#FF0000", "广河县-#FF0066", "和政县-#33FF00", "东乡族自治县-#33FF00"
            ],

            gannanzangzuzizhizhous:[
                "合作市-#FF0066", "临潭县-#FF0000", "卓尼县-#FF0066","舟曲县#FF0000", "迭部县-#FF0066", "玛曲县-#FF0000", "碌曲县-#FCFBBB", "夏河县-#FF0066"
            ],
            xiningshis:[
                "城东区-#FF0000", "城中区-#FF0066", "城西区-#FF0000", "城北区-#FF0066", "大通回族土族自治县-#33FF00",
                "湟中县-#FF0066", "湟源县-#FF0000"
            ],

            haidongdiqus:[
                "平安县-#FF0000", "民和回族土族自治县-#FF0066", "乐都县-#FF0000", "互助土族自治县-#FF0066", "化隆回族自治县-#33FF00",
                "循化撒拉族自治县-#FF0066"
            ],
            haibeizangzuzizhizhous:[
                "门源回族自治县-#FF0000", "祁连县-#FF0066", "海晏县-#FF0000", "刚察县-#FF0000"
            ],
            huangnanzangzuzizhizhous:[
                "同仁县-#FF0066", "尖扎县-#FF0000", "泽库县-#FF0066", "河南蒙古族自治县-#33FF00"
            ],
            hainanzangzuzizhizhous:[
                "共和县-#FF0000", "同德县-#FF0066", "贵德县-#FF0000", "兴海县-#FF0000","贵南县-#FF0000"
            ],

            guoluozangzuzizhizhous:[
                "玛沁县-#FF0000", "班玛县-#FF0000", "甘德县-#FF0000", "达日县-#FF0066", "久治县-#FF0066","玛多县-#FF0000"
            ],
            yushuzangzuzizhizhous:[
                "玉树县-#FF0000", "杂多县-#FF0066", "称多县-#FF0000", "治多县-#FF0000", "囊谦县-#FF0066","曲麻莱县-#FF0000"
            ],
            haiximengguzuzangzuzizhizhous:[
                "格尔木市-#FF0000", "德令哈市-#FF0066", "乌兰县-#FF0000", "都兰县-#FF0066", "天峻县-#FF0000"
            ],
            yinchuanshis:[
                "兴庆区-#FF0000", "西夏区-#FF0066", "金凤区-#FF0000", "永宁县-#FF0066", "贺兰县-#33FF00",
                "贺兰县-#FF0066"
            ],
            shizuishanshis:[
                "大武口区-#FF0000", "惠农区-#FF0066", "平罗县-#FF0000"
            ],
            wuzhongshis:[
                "利通区-#FF0000", "盐池县-#FF0066", "同心县-#FF0066", "青铜峡市-#FF0000"
            ],
            guyuanshis:[
                "原州区-#FF0000", "西吉县-#FF0066", "隆德县-#FF0	000","泾源县-#FF0000", "彭阳县-#FF0066"
            ],
            zhongweishis:[
                "沙坡头区-#33FF00", "中宁县-#33FF00", "海原县-#FF0000"
            ],
            wulumuqishis:[
                "天山区-#FF0000", "沙依巴克区-#FF0066", "新市区-#FF0000", "水磨沟区-#FF0000", "头屯河区-#FF0066",
                "达坂城区-#FF0066","东山区-#FF0000", "乌鲁木齐县-#FF0066"
            ],
            kelamayishis:[
                "独山子区-#33FF00", "克拉玛依区-#33FF00", "白碱滩区-#FF0000", "乌尔禾区-#FF0066"
            ],
//
            tulufandiqus:[
                "吐鲁番市-#FF0000", "鄯善县-#FF0000", "托克逊县-#FF0000"
            ],
            hamidiqus:[
                "哈密市-#FF0000", "伊吾县-#FF0066"
            ],
            changjihuizuzizhizhous:[
                "昌吉市-#FF0000", "阜康市-#FF0066", "米泉市-#FF0000", "呼图壁县-#FF0066", "玛纳斯县-#33FF00",
                "奇台县-#FF0066", "吉木萨尔县-#FF0000","木垒哈萨克自治县-#33FF00"
            ],
            boertalamengguzizhizhous:[
                "博乐市-#FF0000", "精河县-#FF0066", "温泉县-#FF0000"
            ],

            bayinguolengmengguzizhizhous:[
                "库尔勒市-#FF0000", "轮台县-#FF0066", "尉犁县-#FF0000", "若羌县-#FF0066","且末县-#FF0000", "焉耆回族自治县-#FF0066", "和静县-#FF0000", "和硕县-#FF0066",
                "博湖县-#FF0000"],
            akesudiqus:[
                "温宿县-#33FF00", "库车县-#33FF00", "沙雅县-#FF0000", "新和县-#FF0066", "拜城县-#FF0000",
                "乌什县-#FF0000","阿瓦提县-#FF0000", "柯坪县-#FF0066"
            ],
            atushishis:[
                "阿克陶县-#FF0000", "阿合奇县-#FF0066", "乌恰县-#FF0000"
            ],
            kashidiqus:[
                "喀什市-#33FF00", "疏附县-#33FF00", "疏勒县-#FF0000", "英吉沙县-#FF0066", "泽普县-#FF0000",
                "莎车县-#FF0000", "叶城县-#33FF00","麦盖提县-#33FF00", "岳普湖县-#33FF00", "伽师县-#FF0000", "巴楚县-#FF0066"
            ],
            hetiandiqus:[
                "和田市-#FF0000", "和田县-#FF0066", "墨玉县-#FF0000", "皮山县-#FF0000", "洛浦县-#FF0066",
                "策勒县-#FF0000","于田县-#33FF00", "民丰县-#33FF00"
            ],
            yilihasakezizhizhous:[
                "伊宁市-#FF0066", "奎屯市-#FF0000", "伊宁县-#FF0066", "察布查尔锡伯自治县-#33FF00", "霍城县-#FF0000",
                "巩留县-#FF0000", "新源县-#FF0066", "昭苏县-#FF0000", "特克斯县-#33FF00", "尼勒克县-#FF0000"
            ],
            tachengdiqus:[
                "塔城市-#FF0066", "乌苏市-#FF0000", "额敏县-#FF0066", "沙湾县-#33FF00", "托里县-#FF0000",
                "裕民县-#FF0000", "和布克赛尔蒙古自治县-#FF0066"
            ],
            aletaidiqus:[
                "阿勒泰市-#FF0066", "布尔津县-#FF0000", "富蕴县-#FF0066", "福海县-#33FF00","哈巴河县-#FF0000", "青河县-#FF0066",
                "吉木乃县-#FF0000"
            ],
            shihezishis:[
                "阿拉尔市-#FF0000", "图木舒克市-#FF0066", "五家渠市-#FF0000"
            ]
        };
        return areaData;
    },
    getAreaData:function getAreaData(){
        return $.areaData();
    },
    drawAreaBoundary:function drawAreaBoundary(province,city,areaData,flag){
        if(city=="北京市"){
            $.drawColor(province,"北京市",areaData.beijingshis,flag);
        }else if(city=="天津市"){
            $.drawColor(province,"天津市",areaData.tianjingshis,flag);
        }else if(city=="石家庄市"){
            $.drawColor(province,"石家庄市",areaData.shijiazhuangshis,flag);
        }else if(city=="唐山市"){
            $.drawColor(province,"唐山市",areaData.tangshanshis,flag);
        }else if(city=="秦皇岛市"){
            $.drawColor(province,"秦皇岛市",areaData.qinghuangdaoshis,flag);
        }else if(city=="邯郸市"){
            $.drawColor(province,"邯郸市",areaData.handanshis,flag);
        }else if(city=="邢台市"){
            $.drawColor(province,"邢台市",areaData.xingtaishis,flag);
        }else if(city=="保定市"){
            $.drawColor(province,"保定市",areaData.baodingshis,flag);
        }else if(city=="张家口市"){
            $.drawColor(province,"张家口市",areaData.zhangjiakoushis,flag);
        }else if(city=="承德市"){
            $.drawColor(province,"承德市",areaData.chengdeshis,flag);
        }else if(city=="沧州市"){
            $.drawColor(province,"沧州市",areaData.cangzhoushis,flag);
        }else if(city=="廊坊市"){
            $.drawColor(province,"廊坊市",areaData.langfangshis,flag);
        }else if(city=="衡水市"){
            $.drawColor(province,"衡水市",areaData.hengshuishis,flag);
        }else if(city=="太原市"){
            $.drawColor(province,"太原市",areaData.taiyuanshis,flag);
        }else if(city=="大同市"){
            $.drawColor(province,"大同市",areaData.datongshis,flag);
        }else if(city=="阳泉市"){
            $.drawColor(province,"阳泉市",areaData.yangquanshis,flag);
        }else if(city=="长治市"){
            $.drawColor(province,"长治市",areaData.changzhishis,flag);
        }else if(city=="晋城市"){
            $.drawColor(province,"晋城市",areaData.jinchengshis,flag);
        }else if(city=="朔州市"){
            $.drawColor(province,"朔州市",areaData.suzhoushis,flag);
        }else if(city=="晋中市"){
            $.drawColor(province,"晋中市",areaData.jinzhongshis,flag);
        }else if(city=="运城市"){
            $.drawColor(province,"运城市",areaData.yunchengshis,flag);
        }else if(city=="忻州市"){
            $.drawColor(province,"忻州市",areaData.xinzhoushis,flag);
        }else if(city=="临汾市"){
            $.drawColor(province,"临汾市",areaData.linfenshis,flag);
        }else if(city=="吕梁市"){
            $.drawColor(province,"吕梁市",areaData.lvliangshis,flag);
        }else if(city=="呼和浩特市"){
            $.drawColor(province,"呼和浩特市",areaData.huhehaoteshis,flag);
        }else if(city=="包头市"){
            $.drawColor(province,"包头市",areaData.baotoushis,flag);
        }else if(city=="乌海市"){
            $.drawColor(province,"乌海市",areaData.wuhaishis,flag);
        }else if(city=="赤峰市"){
            $.drawColor(province,"赤峰市",areaData.chifengshis,flag);
        }else if(city=="通辽市"){
            $.drawColor(province,"通辽市",areaData.tongliaoshis,flag);
        }else if(city=="鄂尔多斯市"){
            $.drawColor(province,"鄂尔多斯市",areaData.eerduosishis,flag);
        }else if(city=="呼伦贝尔市"){
            $.drawColor(province,"呼伦贝尔市",areaData.hulunbeiershis,flag);
        }else if(city=="巴彦淖尔市"){
            $.drawColor(province,"巴彦淖尔市",areaData.bayanzhuoershis,flag);
        }else if(city=="乌兰察布市"){
            $.drawColor(province,"乌兰察布市",areaData.wulanchabushis,flag);
        }else if(city=="兴安盟"){
            $.drawColor(province,"兴安盟",areaData.xinganmenshis,flag);
        }else if(city=="锡林郭勒盟"){
            $.drawColor(province,"锡林郭勒盟",areaData.xilinguolemens,flag);
        }else if(city=="阿拉善盟"){
            $.drawColor(province,"阿拉善盟",areaData.alashanmens,flag);
        }else if(city=="沈阳市"){
            $.drawColor(province,"沈阳市",areaData.shenyangshis,flag);
        }else if(city=="大连市"){
            $.drawColor(province,"大连市",areaData.dalianshis,flag);
        }else if(city=="鞍山市"){
            $.drawColor(province,"鞍山市",areaData.anshanshis,flag);
        }else if(city=="抚顺市"){
            $.drawColor(province,"抚顺市",areaData.fushunshis,flag);
        }else if(city=="本溪市"){
            $.drawColor(province,"本溪市",areaData.benxishis,flag);
        }else if(city=="丹东市"){
            $.drawColor(province,"丹东市",areaData.dandongshis,flag);
        }else if(city=="锦州市"){
            $.drawColor(province,"锦州市",areaData.jinzhoushis,flag);
        }else if(city=="营口市"){
            $.drawColor(province,"营口市",areaData.yinkoushis,flag);
        }else if(city=="阜新市"){
            $.drawColor(province,"阜新市",areaData.buxinshis,flag);
        }else if(city=="辽阳市"){
            $.drawColor(province,"辽阳市",areaData.liaoyangshis,flag);
        }else if(city=="盘锦市"){
            $.drawColor(province,"盘锦市",areaData.panjinshis,flag);
        }else if(city=="铁岭市"){
            $.drawColor(province,"铁岭市",areaData.tielingshis,flag);
        }else if(city=="朝阳市"){
            $.drawColor(province,"朝阳市",areaData.chaoyangshis,flag);
        }else if(city=="葫芦岛市"){
            $.drawColor(province,"葫芦岛市",areaData.huludaoshis,flag);
        }else if(city=="长春市"){
            $.drawColor(province,"长春市",areaData.changchunshis,flag);
        }else if(city=="吉林市"){
            $.drawColor(province,"吉林市",areaData.jilinshis,flag);
        }else if(city=="四平市"){
            $.drawColor(province,"四平市",areaData.sipingshis,flag);
        }else if(city=="辽源市"){
            $.drawColor(province,"辽源市",areaData.liaoyuanshis,flag);
        }else if(city=="通化市"){
            $.drawColor(province,"通化市",areaData.tonghuashis,flag);
        }else if(city=="白山市"){
            $.drawColor(province,"白山市",areaData.baishanshis,flag);
        }else if(city=="松原市"){
            $.drawColor(province,"松原市",areaData.songyuanshis,flag);
        }else if(city=="白城市"){
            $.drawColor(province,"白城市",areaData.baichengshis,flag);
        }else if(city=="延边朝鲜族自治州"){
            $.drawColor(province,"延边朝鲜族自治州",areaData.yanbianchaoxianzuzizhizhous,flag);
        }else if(city=="哈尔滨市"){
            $.drawColor(province,"哈尔滨市",areaData.haerbinshis,flag);
        }else if(city=="齐齐哈尔市"){
            $.drawColor(province,"齐齐哈尔市",areaData.qiqihaershis,flag);
        }else if(city=="鸡西市"){
            $.drawColor(province,"鸡西市",areaData.jixishis,flag);
        }else if(city=="鹤岗市"){
            $.drawColor(province,"鹤岗市",areaData.hegangshis,flag);
        }else if(city=="双鸭山市"){
            $.drawColor(province,"双鸭山市",areaData.shuangyashanshis,flag);
        }else if(city=="大庆市"){
            $.drawColor(province,"大庆市",areaData.daqinshis,flag);
        }else if(city=="伊春市"){
            $.drawColor(province,"伊春市",areaData.yichunshis,flag);
        }else if(city=="佳木斯市"){
            $.drawColor(province,"佳木斯市",areaData.jiamusishis,flag);
        }else if(city=="七台河市"){
            $.drawColor(province,"七台河市",areaData.qitaiheshis,flag);
        }else if(city=="牡丹江市"){
            $.drawColor(province,"牡丹江市",areaData.mudanjiangshis,flag);
        }else if(city=="黑河市"){
            $.drawColor(province,"黑河市",areaData.heiheshis,flag);
        }else if(city=="绥化市"){
            $.drawColor(province,"绥化市",areaData.suihuashis,flag);
        }else if(city=="大兴安岭地区"){
            $.drawColor(province,"大兴安岭地区",areaData.daxinganlings,flag);
        }else if(city=="上海市"){
            $.drawColor(province,"上海市",areaData.shanghaishis,flag);
        }else if(city=="南京市"){
            $.drawColor(province,"南京市",areaData.nanjingshis,flag);
        }else if(city=="无锡市"){
            $.drawColor(province,"无锡市",areaData.wuxishis,flag);
        }else if(city=="徐州市"){
            $.drawColor(province,"徐州市",areaData.xuzhoushis,flag);
        }else if(city=="常州市"){
            $.drawColor(province,"常州市",areaData.changzhoushis,flag);
        }else if(city=="苏州市"){
            $.drawColor(province,"苏州市",areaData.suzhoushis,flag);
        }else if(city=="南通市"){
            $.drawColor(province,"南通市",areaData.nantongshis,flag);
        }else if(city=="连云港市"){
            $.drawColor(province,"连云港市",areaData.lianyungangshis,flag);
        }else if(city=="淮安市"){
            $.drawColor(province,"淮安市",areaData.huaianshis,flag);
        }else if(city=="盐城市"){
            $.drawColor(province,"盐城市",areaData.yanchengshis,flag);
        }else if(city=="扬州市"){
            $.drawColor(province,"扬州市",areaData.yangzhoushis,flag);
        }else if(city=="镇江市"){
            $.drawColor(province,"镇江市",areaData.zhenjiangshis,flag);
        }else if(city=="泰州市"){
            $.drawColor(province,"泰州市",areaData.taizhoushis,flag);
        }else if(city=="宿迁市"){
            $.drawColor(province,"宿迁市",areaData.suqianshis,flag);
        }else if(city=="杭州市"){
            $.drawColor(province,"杭州市",areaData.hangzhoushis,flag);
        }else if(city=="宁波市"){
            $.drawColor(province,"宁波市",areaData.ningboshis,flag);
        }else if(city=="温州市"){
            $.drawColor(province,"温州市",areaData.wenzhoushis,flag);
        }else if(city=="嘉兴市"){
            $.drawColor(province,"嘉兴市",areaData.jiaxingshis,flag);
        }else if(city=="湖州市"){
            $.drawColor(province,"湖州市",areaData.huzhoushis,flag);
        }else if(city=="绍兴市"){
            $.drawColor(province,"绍兴市",areaData.shaoxinshis,flag);
        }else if(city=="金华市"){
            $.drawColor(province,"金华市",areaData.jinhuashis,flag);
        }else if(city=="衢州市"){
            $.drawColor(province,"衢州市",areaData.quzhoushis,flag);
        }else if(city=="舟山市"){
            $.drawColor(province,"舟山市",areaData.zhoushanshis,flag);
        }else if(city=="台州市"){
            $.drawColor(province,"台州市",areaData.tazhoushis,flag);
        }else if(city=="丽水市"){
            $.drawColor(province,"丽水市",areaData.lishuishis,flag);
        }else if(city=="合肥市"){
            $.drawColor(province,"合肥市",areaData.hefeishis,flag);
        }else if(city=="芜湖市"){
            $.drawColor(province,"芜湖市",areaData.wuhushis,flag);
        }else if(city=="蚌埠市"){
            $.drawColor(province,"蚌埠市",areaData.bangbushis,flag);
        }else if(city=="淮南市"){
            $.drawColor(province,"淮南市",areaData.huainanshis,flag);
        }else if(city=="马鞍山市"){
            $.drawColor(province,"马鞍山市",areaData.maanshanshis,flag);
        }else if(city=="淮北市"){
            $.drawColor(province,"淮北市",areaData.huaibeishis,flag);
        }else if(city=="铜陵市"){
            $.drawColor(province,"铜陵市",areaData.tonglinshis,flag);
        }else if(city=="安庆市"){
            $.drawColor(province,"安庆市",areaData.anqinshis,flag);
        }else if(city=="黄山市"){
            $.drawColor(province,"黄山市",areaData.huangshanshis,flag);
        }else if(city=="滁州市"){
            $.drawColor(province,"滁州市",areaData.xuzhoushis,flag);
        }else if(city=="阜阳市"){
            $.drawColor(province,"阜阳市",areaData.buyangshis,flag);
        }else if(city=="宿州市"){
            $.drawColor(province,"宿州市",areaData.suzhoushis,flag);
        }else if(city=="巢湖市"){
            $.drawColor(province,"巢湖市",areaData.chaohushis,flag);
        }else if(city=="六安市"){
            $.drawColor(province,"六安市",areaData.liuanshis,flag);
        }else if(city=="亳州市"){
            $.drawColor(province,"亳州市",areaData.haozhoushis,flag);
        }else if(city=="池州市"){
            $.drawColor(province,"池州市",areaData.chizhoushis,flag);
        }else if(city=="宣城市"){
            $.drawColor(province,"宣城市",areaData.xuanchengshis,flag);
        }else if(city=="福州市"){
            $.drawColor(province,"福州市",areaData.fuzhoushis,flag);
        }else if(city=="厦门市"){
            $.drawColor(province,"厦门市",areaData.xiamenshis,flag);
        }else if(city=="莆田市"){
            $.drawColor(province,"莆田市",areaData.putianshis,flag);
        }else if(city=="三明市"){
            $.drawColor(province,"三明市",areaData.sanmingshis,flag);
        }else if(city=="泉州市"){
            $.drawColor(province,"泉州市",areaData.quanzhoushis,flag);
        }else if(city=="漳州市"){
            $.drawColor(province,"漳州市",areaData.zhangzhoushis,flag);
        }else if(city=="南平市"){
            $.drawColor(province,"南平市",areaData.nanpingshis,flag);
        }else if(city=="龙岩市"){
            $.drawColor(province,"龙岩市",areaData.longyanshis,flag);
        }else if(city=="宁德市"){
            $.drawColor(province,"宁德市",areaData.ningdeshis,flag);
        }else if(city=="南昌市"){
            $.drawColor(province,"南昌市",areaData.nanchangshis,flag);
        }else if(city=="景德镇市"){
            $.drawColor(province,"景德镇市",areaData.jingdezhenshis,flag);
        }else if(city=="萍乡市"){
            $.drawColor(province,"萍乡市",areaData.pingxiangshis,flag);
        }else if(city=="九江市"){
            $.drawColor(province,"九江市",areaData.jiujiangshis,flag);
        }else if(city=="新余市"){
            $.drawColor(province,"新余市",areaData.xinyushis,flag);
        }else if(city=="鹰潭市"){
            $.drawColor(province,"鹰潭市",areaData.yintanshis,flag);
        }else if(city=="赣州市"){
            $.drawColor(province,"赣州市",areaData.ganzhoushis,flag);
        }else if(city=="吉安市"){
            $.drawColor(province,"吉安市",areaData.jianshis,flag);
        }else if(city=="宜春市"){
            $.drawColor(province,"宜春市",areaData.yichongshis,flag);
        }else if(city=="抚州市"){
            $.drawColor(province,"抚州市",areaData.wuzhoushis,flag);
        }else if(city=="上饶市"){
            $.drawColor(province,"上饶市",areaData.shangraoshis,flag);
        }else if(city=="济南市"){
            $.drawColor(province,"济南市",areaData.jinanshis,flag);
        }else if(city=="青岛市"){
            $.drawColor(province,"青岛市",areaData.qindaoshis,flag);
        }else if(city=="淄博市"){
            $.drawColor(province,"淄博市",areaData.ziboshis,flag);
        }else if(city=="枣庄市"){
            $.drawColor(province,"枣庄市",areaData.zaozhuangshis,flag);
        }else if(city=="东营市"){
            $.drawColor(province,"东营市",areaData.dongyinshis,flag);
        }else if(city=="烟台市"){
            $.drawColor(province,"烟台市",areaData.yantaishis,flag);
        }else if(city=="潍坊市"){
            $.drawColor(province,"潍坊市",areaData.weifangshis,flag);
        }else if(city=="济宁市"){
            $.drawColor(province,"济宁市",areaData.jiningshis,flag);
        }else if(city=="泰安市"){
            $.drawColor(province,"泰安市",areaData.qinanshis,flag);
        }else if(city=="威海市"){
            $.drawColor(province,"威海市",areaData.weihaishis,flag);
        }else if(city=="日照市"){
            $.drawColor(province,"日照市",areaData.rizhaoshis,flag);
        }else if(city=="莱芜市"){
            $.drawColor(province,"莱芜市",areaData.laiwushis,flag);
        }else if(city=="临沂市"){
            $.drawColor(province,"临沂市",areaData.linxishis,flag);
        }else if(city=="德州市"){
            $.drawColor(province,"德州市",areaData.dezhoushis,flag);
        }else if(city=="聊城市"){
            $.drawColor(province,"聊城市",areaData.liaochengshis,flag);
        }else if(city=="滨州市"){
            $.drawColor(province,"滨州市",areaData.binzhoushis,flag);
        }else if(city=="牡丹区"){
            $.drawColor(province,"牡丹区",areaData.mudanshis,flag);
        }else if(city=="郑州市"){
            $.drawColor(province,"郑州市",areaData.zhenzhoushis,flag);
        }else if(city=="开封市"){
            $.drawColor(province,"开封市",areaData.kaifenshis,flag);
        }else if(city=="洛阳市"){
            $.drawColor(province,"洛阳市",areaData.luoyangshis,flag);
        }else if(city=="平顶山市"){
            $.drawColor(province,"平顶山市",areaData.pingdingshanshis,flag);
        }else if(city=="安阳市"){
            $.drawColor(province,"安阳市",areaData.anyangshis,flag);
        }else if(city=="鹤壁市"){
            $.drawColor(province,"鹤壁市",areaData.hebishis,flag);
        }else if(city=="新乡市"){
            $.drawColor(province,"新乡市",areaData.xinxiangshis,flag);
        }else if(city=="焦作市"){
            $.drawColor(province,"焦作市",areaData.jiaozuoshis,flag);
        }else if(city=="濮阳市"){
            $.drawColor(province,"濮阳市",areaData.puyangshis,flag);
        }else if(city=="许昌市"){
            $.drawColor(province,"许昌市",areaData.xuchangshis,flag);
        }else if(city=="漯河市"){
            $.drawColor(province,"漯河市",areaData.luoheshis,flag);
        }else if(city=="三门峡市"){
            $.drawColor(province,"三门峡市",areaData.sanmenxiashis,flag);
        }else if(city=="南阳市"){
            $.drawColor(province,"南阳市",areaData.nanyangshis,flag);
        }else if(city=="商丘市"){
            $.drawColor(province,"商丘市",areaData.shangqiushis,flag);
        }else if(city=="信阳市"){
            $.drawColor(province,"信阳市",areaData.xinyangshis,flag);
        }else if(city=="周口市"){
            $.drawColor(province,"周口市",areaData.zhoukoushis,flag);
        }else if(city=="驻马店市"){
            $.drawColor(province,"驻马店市",areaData.zhumadianshis,flag);
        }else if(city=="武汉市"){
            $.drawColor(province,"武汉市",areaData.wuhanshis,flag);
        }else if(city=="黄石市"){
            $.drawColor(province,"黄石市",areaData.huangshishis,flag);
        }else if(city=="十堰市"){
            $.drawColor(province,"十堰市",areaData.shiyanshis,flag);
        }else if(city=="宜昌市"){
            $.drawColor(province,"宜昌市",areaData.yichangshis,flag);
        }else if(city=="襄樊市"){
            $.drawColor(province,"襄樊市",areaData.xiangfanshis,flag);
        }else if(city=="鄂州市"){
            $.drawColor(province,"鄂州市",areaData.ezhoushis,flag);
        }else if(city=="荆门市"){
            $.drawColor(province,"荆门市",areaData.jinmenshis,flag);
        }else if(city=="孝感市"){
            $.drawColor(province,"孝感市",areaData.xiaoganshis,flag);
        }else if(city=="荆州市"){
            $.drawColor(province,"荆州市",areaData.jinzhoushis,flag);
        }else if(city=="黄冈市"){
            $.drawColor(province,"黄冈市",areaData.huanggangshis,flag);
        }else if(city=="咸宁市"){
            $.drawColor(province,"咸宁市",areaData.xianningshis,flag);
        }else if(city=="随州市"){
            $.drawColor(province,"随州市",areaData.suizhoushis),flag;
        }else if(city=="恩施土家族苗族自治州"){
            $.drawColor(province,"恩施土家族苗族自治州",areaData.enshitujiazumiaozuzizhizhous,flag);
        }else if(city=="仙桃市"){
            $.drawColor(province,"仙桃市",areaData.xiantaoshis,flag);
        }else if(city=="长沙市"){
            $.drawColor(province,"长沙市",areaData.changshashis,flag);
        }else if(city=="株洲市"){
            $.drawColor(province,"株洲市",areaData.zhuzhoushis,flag);
        }else if(city=="湘潭市"){
            $.drawColor(province,"湘潭市",areaData.xiangtanshis,flag);
        }else if(city=="衡阳市"){
            $.drawColor(province,"衡阳市",areaData.hengyangshis,flag);
        }else if(city=="邵阳市"){
            $.drawColor(province,"邵阳市",areaData.shaoyangshis,flag);
        }else if(city=="岳阳市"){
            $.drawColor(province,"岳阳市",areaData.yueyangshis,flag);
        }else if(city=="常德市"){
            $.drawColor(province,"常德市",areaData.changdeshis,flag);
        }else if(city=="张家界市"){
            $.drawColor(province,"张家界市",areaData.zhangjiajieshis,flag);
        }else if(city=="益阳市"){
            $.drawColor(province,"益阳市",areaData.yiyangshis,flag);
        }else if(city=="郴州市"){
            $.drawColor(province,"郴州市",areaData.binzhoushis,flag);
        }else if(city=="永州市"){
            $.drawColor(province,"永州市",areaData.yongzhoushis,flag);
        }else if(city=="怀化市"){
            $.drawColor(province,"怀化市",areaData.huaihuashis,flag);
        }else if(city=="娄底市"){
            $.drawColor(province,"娄底市",areaData.loudishis,flag);
        }else if(city=="湘西土家族苗族自治州"){
            $.drawColor(province,"湘西土家族苗族自治州",areaData.xiangxitujiazumiaozuzizhizhous,flag);
        }else if(city=="广州市"){
            $.drawColor(province,"广州市",areaData.guangzhoushis,flag);
        }else if(city=="韶关市"){
            $.drawColor(province,"韶关市",areaData.shaoguanshis,flag);
        }else if(city=="深圳市"){
            $.drawColor(province,"深圳市",areaData.shenzhenshis,flag);
        }else if(city=="珠海市"){
            $.drawColor(province,"珠海市",areaData.zhuhaishis,flag);
        }else if(city=="汕头市"){
            $.drawColor(province,"汕头市",areaData.shantoushis,flag);
        }else if(city=="佛山市"){
            $.drawColor(province,"佛山市",areaData.foshanshis,flag);
        }else if(city=="江门市"){
            $.drawColor(province,"江门市",areaData.jiangmenshis,flag);
        }else if(city=="湛江市"){
            $.drawColor(province,"湛江市",areaData.zhanjiangshis,flag);
        }else if(city=="茂名市"){
            $.drawColor(province,"茂名市",areaData.maomingshis,flag);
        }else if(city=="肇庆市"){
            $.drawColor(province,"肇庆市",areaData.zhaoqinshis,flag);
        }else if(city=="惠州市"){
            $.drawColor(province,"惠州市",areaData.huizhoushis,flag);
        }else if(city=="梅州市"){
            $.drawColor(province,"梅州市",areaData.meizhoushis,flag);
        }else if(city=="汕尾市"){
            $.drawColor(province,"汕尾市",areaData.shanweishis,flag);
        }else if(city=="河源市"){
            $.drawColor(province,"河源市",areaData.heyuanshis,flag);
        }else if(city=="阳江市"){
            $.drawColor(province,"阳江市",areaData.yangjiangshis,flag);
        }else if(city=="清远市"){
            $.drawColor(province,"清远市",areaData.qingyuanshis,flag);
        }else if(city=="东莞市"){
            $.drawColor(province,"东莞市",areaData.dongguanshis,flag);
        }else if(city=="中山市"){
            $.drawColor(province,"中山市",areaData.zhongshanshis,flag);
        }else if(city=="潮州市"){
            $.drawColor(province,"潮州市",areaData.chaozhoushis,flag);
        }else if(city=="揭阳市"){
            $.drawColor(province,"揭阳市",areaData.jieyangshis,flag);
        }else if(city=="云浮市"){
            $.drawColor(province,"云浮市",areaData.yunfushis,flag);
        }else if(city=="南宁市"){
            $.drawColor(province,"南宁市",areaData.nanningshis,flag);
        }else if(city=="柳州市"){
            $.drawColor(province,"柳州市",areaData.guilinshis,flag);
        }else if(city=="桂林市"){
            $.drawColor(province,"桂林市",areaData.guilinshis,flag);
        }else if(city=="梧州市"){
            $.drawColor(province,"梧州市",areaData.wuzhoushis,flag);
        }else if(city=="北海市"){
            $.drawColor(province,"北海市",areaData.beihaishis,flag);
        }else if(city=="防城港市"){
            $.drawColor(province,"防城港市",areaData.fangchenggangshis,flag);
        }else if(city=="钦州市"){
            $.drawColor(province,"钦州市",areaData.qinzhoushis,flag);
        }else if(city=="贵港市"){
            $.drawColor(province,"贵港市",areaData.guigangshis,flag);
        }else if(city=="玉林市"){
            $.drawColor(province,"玉林市",areaData.yulinshis,flag);
        }else if(city=="百色市"){
            $.drawColor(province,"百色市",areaData.baiseshis,flag);
        }else if(city=="贺州市"){
            $.drawColor(province,"贺州市",areaData.hezhoushis,flag);
        }else if(city=="河池市"){
            $.drawColor(province,"河池市",areaData.hechishis,flag);
        }else if(city=="来宾市"){
            $.drawColor(province,"来宾市",areaData.laibinshis,flag);
        }else if(city=="崇左市"){
            $.drawColor(province,"崇左市",areaData.chongzuoshis,flag);
        }else if(city=="海口市"){
            $.drawColor(province,"海口市",areaData.haikoushis,flag);
        }else if(city=="三亚市"){
            $.drawColor(province,"三亚市",areaData.sanyashis,flag);
        }else if(city=="五指山市"){
            $.drawColor(province,"五指山市",areaData.wuzhishanshis,flag);
        }else if(city=="重庆市"){
            $.drawColor(province,"重庆市",areaData.chongqinshis,flag);
        }else if(city=="成都市"){
            $.drawColor(province,"成都市",areaData.chengdushis,flag);
        }else if(city=="自贡市"){
            $.drawColor(province,"自贡市",areaData.zigongshis,flag);
        }else if(city=="攀枝花市"){
            $.drawColor(province,"攀枝花市",areaData.panzhihuashis,flag);
        }else if(city=="泸州市"){
            $.drawColor(province,"泸州市",areaData.luzhoushis,flag);
        }else if(city=="德阳市"){
            $.drawColor(province,"德阳市",areaData.deyangshis,flag);
        }else if(city=="绵阳市"){
            $.drawColor(province,"绵阳市",areaData.mianyangshis,flag);
        }else if(city=="广元市"){
            $.drawColor(province,"广元市",areaData.guangyuanshis,flag);
        }else if(city=="遂宁市"){
            $.drawColor(province,"遂宁市",areaData.suiningshis,flag);
        }else if(city=="内江市"){
            $.drawColor(province,"内江市",areaData.neijiangshis,flag);
        }else if(city=="乐山市"){
            $.drawColor(province,"乐山市",areaData.leshanshis,flag);
        }else if(city=="南充市"){
            $.drawColor(province,"南充市",areaData.nanchongshis,flag);
        }else if(city=="眉山市"){
            $.drawColor(province,"眉山市",areaData.meishanshis,flag);
        }else if(city=="宜宾市"){
            $.drawColor(province,"宜宾市",areaData.yibinshis,flag);
        }else if(city=="广安市"){
            $.drawColor(province,"广安市",areaData.guanganshis,flag);
        }else if(city=="达州市"){
            $.drawColor(province,"达州市",areaData.dazhoushis,flag);
        }else if(city=="雅安市"){
            $.drawColor(province,"雅安市",areaData.yaanshis,flag);
        }else if(city=="巴中市"){
            $.drawColor(province,"巴中市",areaData.bazhongshis,flag);
        }else if(city=="资阳市"){
            $.drawColor(province,"资阳市",areaData.ziyangshis,flag);
        }else if(city=="阿坝藏族羌族自治州"){
            $.drawColor(province,"阿坝藏族羌族自治州",areaData.abazangzuqiangzuzizhizhous,flag);
        }else if(city=="甘孜藏族自治州"){
            $.drawColor(province,"甘孜藏族自治州",areaData.ganzizangzuzizhizhous,flag);
        }else if(city=="凉山彝族自治州"){
            $.drawColor(province,"凉山彝族自治州",areaData.liangshanyizuzizhizhous,flag);
        }else if(city=="贵阳市"){
            $.drawColor(province,"贵阳市",areaData.guiyangshis,flag);
        }else if(city=="六盘水市"){
            $.drawColor(province,"六盘水市",areaData.liupanshuishis,flag);
        }else if(city=="遵义市"){
            $.drawColor(province,"遵义市",areaData.zunyishis,flag);
        }else if(city=="安顺市"){
            $.drawColor(province,"安顺市",areaData.anshunshis,flag);
        }else if(city=="铜仁地区"){
            $.drawColor(province,"铜仁地区",areaData.tongrediqus,flag);
        }else if(city=="兴义市"){
            $.drawColor(province,"兴义市",areaData.xingyishis,flag);
        }else if(city=="毕节地区"){
            $.drawColor(province,"毕节地区",areaData.bijieditus,flag);
        }else if(city=="黔东南苗族侗族自治州"){
            $.drawColor(province,"黔东南苗族侗族自治州",areaData.qiandongnanmiaozutongzuzizhizhous,flag);
        }else if(city=="黔南布依族苗族自治州"){
            $.drawColor(province,"黔南布依族苗族自治州",areaData.qiannanbuyizumiaozuzizhizhous,flag);
        }else if(city=="昆明市"){
            $.drawColor(province,"昆明市",areaData.kunmingshis,flag);
        }else if(city=="曲靖市"){
            $.drawColor(province,"曲靖市",areaData.qujingshis,flag);
        }else if(city=="玉溪市"){
            $.drawColor(province,"玉溪市",areaData.yuxishis,flag);
        }else if(city=="保山市"){
            $.drawColor(province,"保山市",areaData.baoshanshis,flag);
        }else if(city=="昭通市"){
            $.drawColor(province,"昭通市",areaData.shaotongshis,flag);
        }else if(city=="丽江市"){
            $.drawColor(province,"丽江市",areaData.lijiangshis,flag);
        }else if(city=="墨江哈尼族自治县"){
            $.drawColor(province,"墨江哈尼族自治县",areaData.mojianghanizuzizhixians,flag);
        }else if(city=="临沧市"){
            $.drawColor(province,"临沧市",areaData.lincangshis,flag);
        }else if(city=="楚雄彝族自治州"){
            $.drawColor(province,"楚雄彝族自治州",areaData.chuxiongyizuzizhizhous,flag);
        }else if(city=="红河哈尼族彝族自治州"){
            $.drawColor(province,"红河哈尼族彝族自治州",areaData.honghehanizuyizuzizhizhous,flag);
        }else if(city=="文山壮族苗族自治州"){
            $.drawColor(province,"文山壮族苗族自治州",areaData.wenshanzhuangzumiaozuzizhizhous,flag);
        }else if(city=="西双版纳傣族自治州"){
            $.drawColor(province,"西双版纳傣族自治州",areaData.xishuangbanladaizuzizhizhous,flag);
        }else if(city=="大理白族自治州"){
            $.drawColor(province,"大理白族自治州",areaData.dalibaizuzizhizhous,flag);
        }else if(city=="德宏傣族景颇族自治州"){
            $.drawColor(province,"德宏傣族景颇族自治州",areaData.dehongdaizujingbozuzizhizhous,flag);
        }else if(city=="怒江傈僳族自治州"){
            $.drawColor(province,"怒江傈僳族自治州",areaData.lujianglisuzuzizhizhous,flag);
        }else if(city=="迪庆藏族自治州"){
            $.drawColor(province,"迪庆藏族自治州",areaData.diqingzangzuzizhizhous,flag);
        }else if(city=="拉萨市"){
            $.drawColor(province,"拉萨市",areaData.lasashis,flag);
        }else if(city=="昌都地区"){
            $.drawColor(province,"昌都地区",areaData.changdudiqus,flag);
        }else if(city=="山南地区"){
            $.drawColor(province,"山南地区",areaData.shannandiqus,flag);
        }else if(city=="日喀则地区"){
            $.drawColor(province,"日喀则地区",areaData.rikazediqus,flag);
        }else if(city=="那曲地区"){
            $.drawColor(province,"那曲地区",areaData.naqudiqus,flag);
        }else if(city=="阿里地区"){
            $.drawColor(province,"阿里地区",areaData.alidiqus,flag);
        }else if(city=="林芝地区"){
            $.drawColor(province,"林芝地区",areaData.linzhidiqus,flag);
        }else if(city=="西安市"){
            $.drawColor(province,"西安市",areaData.xianshis,flag);
        }else if(city=="铜川市"){
            $.drawColor(province,"铜川市",areaData.tongchuanshis,flag);
        }else if(city=="宝鸡市"){
            $.drawColor(province,"宝鸡市",areaData.baojishis,flag);
        }else if(city=="咸阳市"){
            $.drawColor(province,"咸阳市",areaData.xianyangshis,flag);
        }else if(city=="渭南市"){
            $.drawColor(province,"渭南市",areaData.weinanshis,flag);
        }else if(city=="延安市"){
            $.drawColor(province,"延安市",areaData.yananshis,flag);
        }else if(city=="汉中市"){
            $.drawColor(province,"汉中市",areaData.hanzhongshis,flag);
        }else if(city=="榆林市"){
            $.drawColor(province,"榆林市",areaData.yulinshis,flag);
        }else if(city=="安康市"){
            $.drawColor(province,"安康市",areaData.ankangshis,flag);
        }else if(city=="商洛市"){
            $.drawColor(province,"商洛市",areaData.shangluoshis,flag);
        }else if(city=="兰州市"){
            $.drawColor(province,"兰州市",areaData.nanzhoushis,flag);
        }else if(city=="嘉峪关市"){
            $.drawColor(province,"嘉峪关市",areaData.jiayuguanshis,flag);
        }else if(city=="金昌市"){
            $.drawColor(province,"金昌市",areaData.jinchangshis,flag);
        }else if(city=="白银市"){
            $.drawColor(province,"白银市",areaData.baiyinshis,flag);
        }else if(city=="天水市"){
            $.drawColor(province,"天水市",areaData.tianshuishis,flag);
        }else if(city=="武威市"){
            $.drawColor(province,"武威市",areaData.wuweishis,flag);
        }else if(city=="张掖市"){
            $.drawColor(province,"张掖市",areaData.zhangyeshis,flag);
        }else if(city=="平凉市"){
            $.drawColor(province,"平凉市",areaData.pingliangshis,flag);
        }else if(city=="酒泉市"){
            $.drawColor(province,"酒泉市",areaData.jiuquanshis,flag);
        }else if(city=="庆阳市"){
            $.drawColor(province,"庆阳市",areaData.qinyangshis,flag);
        }else if(city=="定西市"){
            $.drawColor(province,"定西市",areaData.dingxishis,flag);
        }else if(city=="陇南市"){
            $.drawColor(province,"陇南市",areaData.longnanshis,flag);
        }else if(city=="临夏回族自治州"){
            $.drawColor(province,"临夏回族自治州",areaData.linxiahuizuzizhizhous,flag);
        }else if(city=="甘南藏族自治州"){
            $.drawColor(province,"甘南藏族自治州",areaData.gannanzangzuzizhizhous,flag);
        }else if(city=="西宁市"){
            $.drawColor(province,"西宁市",areaData.xiningshis,flag);
        }else if(city=="海东地区"){
            $.drawColor(province,"海东地区",areaData.haidongdiqus,flag);
        }else if(city=="海北藏族自治州"){
            $.drawColor(province,"海北藏族自治州",areaData.haibeizangzuzizhizhous,flag);
        }else if(city=="黄南藏族自治州"){
            $.drawColor(province,"黄南藏族自治州",areaData.huangnanzangzuzizhizhous,flag);
        }else if(city=="海南藏族自治州"){
            $.drawColor(province,"海南藏族自治州",areaData.hainanzangzuzizhizhous,flag);
        }else if(city=="果洛藏族自治州"){
            $.drawColor(province,"果洛藏族自治州",areaData.guoluozangzuzizhizhous,flag);
        }else if(city=="玉树藏族自治州"){
            $.drawColor(province,"玉树藏族自治州",areaData.yushuzangzuzizhizhous,flag);
        }else if(city=="海西蒙古族藏族自治州"){
            $.drawColor(province,"海西蒙古族藏族自治州",areaData.haiximengguzuzangzuzizhizhous,flag);
        }else if(city=="银川市"){
            $.drawColor(province,"银川市",areaData.yinchuanshis,flag);
        }else if(city=="石嘴山市"){
            $.drawColor(province,"石嘴山市",areaData.shizuishanshis,flag);
        }else if(city=="吴忠市"){
            $.drawColor(province,"吴忠市",areaData.wuzhongshis,flag);
        }else if(city=="固原市"){
            $.drawColor(province,"固原市",areaData.guyuanshis,flag);
        }else if(city=="中卫市"){
            $.drawColor(province,"中卫市",areaData.zhongweishis,flag);
        }else if(city=="乌鲁木齐市"){
            $.drawColor(province,"乌鲁木齐市",areaData.wulumuqishis,flag);
        }else if(city=="克拉玛依市"){
            $.drawColor(province,"克拉玛依市",areaData.kelamayishis,flag);
        }else if(city=="吐鲁番地区"){
            $.drawColor(province,"吐鲁番地区",areaData.tulufandiqus,flag);
        }else if(city=="哈密地区"){
            $.drawColor(province,"哈密地区",areaData.hamidiqus,flag);
        }else if(city=="昌吉回族自治州"){
            $.drawColor(province,"昌吉回族自治州",areaData.changjihuizuzizhizhous,flag);
        }else if(city=="博尔塔拉蒙古自治州"){
            $.drawColor(province,"博尔塔拉蒙古自治州",areaData.boertalamengguzizhizhous,flag);
        }else if(city=="巴音郭楞蒙古自治州"){
            $.drawColor(province,"巴音郭楞蒙古自治州",areaData.bayinguolengmengguzizhizhous,flag);
        }else if(city=="阿克苏地区"){
            $.drawColor(province,"阿克苏地区",areaData.akesudiqus,flag);
        }else if(city=="阿图什市"){
            $.drawColor(province,"阿图什市",areaData.atushishis,flag);
        }else if(city=="喀什地区"){
            $.drawColor(province,"喀什地区",areaData.kashidiqus,flag);
        }else if(city=="和田地区"){
            $.drawColor(province,"和田地区",areaData.hetiandiqus,flag);
        }else if(city=="伊犁哈萨克自治州"){
            $.drawColor(province,"伊犁哈萨克自治州",areaData.yilihasakezizhizhous,flag);
        }else if(city=="塔城地区"){
            $.drawColor(province,"塔城地区",areaData.tachengdiqus,flag);
        }else if(city=="阿勒泰地区"){
            $.drawColor(province,"阿勒泰地区",areaData.aletaidiqus,flag);
        }else if(city=="石河子市"){
            $.drawColor(province,"石河子市",areaData.shihezishis,flag);
        }
    },
    drawColor:function drawColor(province,city,array,flag){
        if(province!=null&&city==null){
            for(var i=0;i<array.length;i++){
                $.getBoundary(province,null,array[i],flag);
            }
        }else if(province!=null&&city!=null){
            for(var i=0;i<array.length;i++){
                $.getBoundary(province,city,array[i],flag);
            }
        }else if(province==null&&city==null){
            for(var i=0;i<array.length;i++){
                $.getBoundary(null,null,array[i],flag);
            }
        }
},
    getBoundary:function getBoundary(province,city,data,flag){
    if(province!=null&&city==null){
        $.drawBoundary("areaRisk.jsp",province,null,null,data,flag);
    }else if(province!=null&&city!=null){
        $.drawBoundary("companyRisk.jsp",province,city,null,data,flag);
    }else if(province==null&&city==null){
        $.drawBoundary("cityRisk.jsp",null,null,null,data,flag);
    }
},
    drawBoundary:function getBoundary(url,province,city,area,data,flag){
    var bdary=new BMap.Boundary();
    bdary.get(data.split("-")[0],function(rs){
        console.log(rs);
        var maxNum=-1,maxPly;
        var color=data.split("-")[1];
        var count=rs.boundaries.length;
        for(var i=0;i<count;i++){
            var ply=new BMap.Polygon(rs.boundaries[i],{strokeWeight:1,strokeOpacity:0.5,fillColor:color,strokeColor:"#000000"});
            map.addOverlay(ply);
            if(flag==0){       //flag为0时有点击事件，flag为1时没有点击事件
            ply.addEventListener("click",function(e){
                name=data.split("-")[0];
                var latlng=e.point;
                var info=new BMap.InfoWindow(name+" "+latlng.lat+","+latlng.lng,{width:220});
                map.openInfoWindow(info,latlng);
                //高亮闪烁显示鼠标点击的省
                delay=0;
                for (flashTimes=0;flashTimes<3;flashTimes++){
                    delay+=400;
                    setTimeout(function(){
                        ply.setFillColor("#FFFF00");
                    },delay);

                    delay+=400;
                    setTimeout(function(){
                        ply.setFillColor(color);
                    },delay);
                }
                if(province==null&&city==null&&area==null){
                    location =url+"?province="+encodeURI(name)+"&lat="+encodeURI(latlng.lat)+"&lng="+encodeURI(latlng.lng);
                }else if(province!=null&&city==null&&area==null){
                    location=url+"?province="+province+"&city="+encodeURI(name)+"&lat="+encodeURI(latlng.lat)+"&lng="+encodeURI(latlng.lng);
                }else if(province!=null&&city!=null&&area==null){
                    location=url+"?province="+province+"&city="+encodeURI(city)+"&area="+encodeURI(name)+"&lat="+encodeURI(latlng.lat)+"&lng="+encodeURI(latlng.lng);
                }else if(url==null&&province!=null&&city==null&&area==null){

                }
            });
        }else if(flag==1){

        }
        }
        if(maxPly){
            map.setViewport(maxPly.getPoints());
        }
    });
},
    drawProvinceBoundary:function drawProvinceBoundary(data,flag){
        for(var i=0;i<data.length;i++){
            $.getBoundary(null,null,data[i],flag);
        }
    },
    initProvince: function initProvince(country,size,flag){
            $.initMap(country,size);
            $.clearAllMarker;
            var provinceArray=$.getProvinceData();
            $.drawProvinceBoundary(provinceArray,flag);
    },
    initCity:function initCity(province,size,flag){
        $.initMap(province,size);
        $.clearAllMarker;
        var cityArray= $.getCityData();
        $.drawCityBoundary(province,cityArray,flag);
    },
    initArea:function initArea(province,city,size,flag){
        $.initMap(city,size);
        $.clearAllMarker;
        var areaData= $.getAreaData();
        $.drawAreaBoundary(province,city,areaData,flag);
    },
    initProvinceWithDataRule:function initProvinceWithDataRule(country,size,flag){
        $.initMap(country,size);
        $.clearAllMarker;
        /*var provinceArray=$.getProvinceData();
        $.drawProvinceBoundaryWithDataRule(province,provinceArray,flag);*/
        $.post($.URL.dataRuleAddress.getProvinceAndColorWithDataRole,null,getProvinceCallBack,"json");
        function getProvinceCallBack(data){
            $.getProvinceWithRule(data,flag);
        }
     /*   var data ={code:"200",data:[{"province":"辽宁","color":"#FF3300"},{"province":"内蒙古自治区","color":"#33FF00"},{"province":"广西","color":"#FF0000"},
            {"province":"湖北","color":"#FF3300"},{"province":"云南","color":"#FF3300"}
        ] }
        $.getProvinceWithRule(data,flag);*/
},
    initCityWithDataRule:function initCityWithDataRule(province,size,flag){
        $.initMap(province,size);
        $.clearAllMarker;
        /*根据省以及session查出这个人的city*/
        //var jsonString={};
        $.post($.URL.dataRuleAddress.getCityAndColorWithDataRole,{"province":province},getCityCallBack,"json");
        function getCityCallBack(data){
            $.getCityWithRule(province,data,flag);
        }
/*        var data ={code:"200",data:[{"city":"武汉市","color":"#FF0066"},{"city":"黄石市","color":"#33FF00"},{"city":"十堰市","color":"#FF0066"},
            {"city":"鄂州市","color":"#FF0066"},{"city":"荆门市","color":"#33FF00"}
        ] }
        if(province=="湖北"){
            $.getCityWithRule(province,data,flag);
        }*/
    },
    initAreaWithDataRule:function initAreaWithDataRule(province,city,size,flag){
        $.initMap(city,size);
        $.clearAllMarker;
        /*根据省和市以及session查出这个人的area*/
        $.post($.URL.dataRuleAddress.getAreaAndColorWithDataRole,{"province":province ,"city":city},getAreaCallBack,"json");
        function getAreaCallBack(data){
            $.getAreaWithRule(province,city,data,flag);
        }
/*        var data ={code:"200",data:[{"area":"江岸区","color":"#FF0066"},{"area":"江汉区","color":"#33FF00"},{"area":"硚口区","color":"#FF0066"},
            {"area":"汉阳区","color":"#FF0066"}
        ] }
        if(province=="湖北"&&city=="武汉市"){
            $.getAreaWithRule(province,city,data,flag);
        }*/
    },

    showProvinceRisk:function showProvinceRisk(flag)
    {
        if(flag==0){
          $.getProvinceRiskValueShow();
        }else if(flag==1){
          $.getProvinceRiskValue();
        }
        $.initProvinceWithDataRule("中国",5,flag);
    },

    showCityRisk:function showCityRisk(province,flag)
    {
        if(flag==0){
            $.getCityAvgRiskValueShow(province);
        }else if(flag==1){
            $.getCityAvgRiskValue(province);
        }
        $.initCityWithDataRule(province,8,flag);
    },

    showAreaRisk:function showAreaRisk(province,city,flag)
    {
        if(flag==0){
            $.getAreaAvgRiskValueShow(province,city);
        }else if(flag==1){
            $.getAreaAvgRiskValue(province,city);
        }
        $.initAreaWithDataRule(province,city,10,flag);
    },
    showCompanyRisk:function showCompanyRisk(city,area,size){
    $.initAndAddMarker(city,area);
    $.initMap(area,size);
},
    drawCircle:function drawCircle(flag){
    var myDrawingManagerObject = new BMapLib.DrawingManager(map, {isOpen: flag,
        drawingType: BMAP_DRAWING_CIRCLE, enableDrawingTool: true,
        enableCalculate: false});
    myDrawingManagerObject.setDrawingMode(BMAP_DRAWING_CIRCLE);
    myDrawingManagerObject.addEventListener("overlaycomplete", function(e) {
        var radius=e.overlay.getRadius();
        var centerlng= e.overlay.getCenter().lng;
        var centerlat= e.overlay.getCenter().lat;
        var circledata={};
        circledata.radius=radius;
        circledata.centerlng=centerlng;
        circledata.centerlat=centerlat;
        $.post($.URL.craneinspectreport.getCraneInspectReportInfoFromCircle,circledata,getCraneInspectReportInfoFromCircleCallback,"json");
        function getCraneInspectReportInfoFromCircleCallback(data){
            if(data.code=200){
                $("#rankTitle").html("");
                $("#riskrankContent").html("");
                if(data.data[0]==undefined){
                    $("#riskrankContent").append("对不起,数据不存在!");
                }else{
                    $("#rankTitle").html("");
                    $("#riskrankContent").html("");
                    var rankTitle="<div id='riskttitle'><span class='rtitlerank'>风险排名</span><span class='rtitleItem'>企业</span><span class='rtitleriskItem'>风险值</span></div>";
                    $("#rankTitle").append(rankTitle);
                    for(i=0;i<data.data.length;i++){
                    /*var j=1;
                    for(var i=0;i<data.data.length;i++){
                        if(i>0){
                            preValue=data.data[i-1].riskValue;
                            if(data.data[i].riskValue==preValue)
                                j=j;
                            else
                            {
                                j++;
                            }
                        }*/
                        var rankContent;
                        if(i%2==0){
                            rankContent="<div class='riskcontentEven' id='riskcontent"+data.data[i].id+"'>" +"<span class='rrank'>"+(i+1)+"</span>" +"<span class='rcontentItem'><span class='unitFont'>"+data.data[i].unitAddress+"</span></span>" +"<span class='riskItem'><span class='riskFont'>"+data.data[i].riskValue+"</span></span></div>"
                        }else{
                            rankContent="<div class='riskcontent' id='riskcontent"+data.data[i].id+"'>" +"<span class='rrank'>"+(i+1)+"</span>" +"<span class='rcontentItem'><span class='unitFont'>"+data.data[i].unitAddress+"</span></span>" +"<span class='riskItem'><span class='riskFont'>"+data.data[i].riskValue+"</span></span></div>"
                        }
                       rankContent="<div class='riskcontent' id='riskcontent"+data.data[i].id+"'>" +"<span class='rrank'>"+(i+1)+"</span>" +"<span class='rcontentItem'><span class='unitFont'>"+data.data[i].unitAddress+"</span></span>" +"<span class='riskItem'><span class='riskFont'>"+data.data[i].riskValue+"</span></span></div>"
                        $("#riskrankContent").append(rankContent);
                        $.rightTabMouseEvent("riskcontent"+data.data[i].id);
                    }
                }
            }
        }

    });
},
    drawLine:function drawLine(flag){
        var myDrawingManagerObject = new BMapLib.DrawingManager(map,{isOpen: flag,
            drawingType: BMAP_DRAWING_POLYLINE, enableDrawingTool: true,
            enableCalculate: false});
        myDrawingManagerObject.setDrawingMode(BMAP_DRAWING_POLYLINE);
        myDrawingManagerObject.addEventListener("overlaycomplete",function(e){

        });
    },
    dragAbleNavigate:function dragAbleNavigate(address){
        var transit = new BMap.DrivingRoute(map, {
            renderOptions: {
                map: map,
                panel: "rank",
                enableDragging : true //起终点可进行拖拽
            }
        });
        transit.search("汉口站",address);
    },
    drawProvinceBoundaryWithRule:function drawProvinceBoundaryWithRule(data,flag){
        var bdary=new BMap.Boundary();
        bdary.get(data.province,function(rs){
            console.log(rs);
            var maxNum=-1,maxPly;
            var color=data.color;
            var count=rs.boundaries.length;
            for(var i=0;i<count;i++){
                var ply=new BMap.Polygon(rs.boundaries[i],{strokeWeight:1,strokeOpacity:0.5,fillColor:color,fillOpacity:0.3,strokeColor:"#000000"});
                map.addOverlay(ply);
                if(flag==0){       //flag为0时有点击事件，flag为1时没有点击事件
                    ply.addEventListener("click",function(e){
                        name=data.province;
                        var latlng=e.point;
                        var info=new BMap.InfoWindow(name+" "+latlng.lat+","+latlng.lng,{width:220});
                        map.openInfoWindow(info,latlng);
                        //高亮闪烁显示鼠标点击的省
                        delay=0;
                        for (flashTimes=0;flashTimes<3;flashTimes++){
                            delay+=400;
                            setTimeout(function(){
                                ply.setFillColor("#FFFF00");
                            },delay);

                            delay+=400;
                            setTimeout(function(){
                                ply.setFillColor(color);
                            },delay);
                        }
                        location ="cityRisk.jsp?province="+encodeURI(name)+"&lat="+encodeURI(latlng.lat)+"&lng="+encodeURI(latlng.lng);
                    });
                }else if(flag==1){

                }
            }
            if(maxPly){
                map.setViewport(maxPly.getPoints());
            }
        });
    },
    drawCityBoundaryWithRule:function drawCityBoundaryWithRule(province,data,flag){
        var bdary=new BMap.Boundary();
        bdary.get(data.city,function(rs){
            console.log(rs);
            var maxNum=-1,maxPly;
            var color=data.color;
            var count=rs.boundaries.length;
            for(var i=0;i<count;i++){
                var ply=new BMap.Polygon(rs.boundaries[i],{strokeWeight:1,strokeOpacity:0.5,fillColor:color,fillOpacity:0.3,strokeColor:"#000000"});
                map.addOverlay(ply);
                if(flag==0){       //flag为0时有点击事件，flag为1时没有点击事件
                    ply.addEventListener("click",function(e){
                        name=data.city;
                        var latlng=e.point;
                        var info=new BMap.InfoWindow(name+" "+latlng.lat+","+latlng.lng,{width:220});
                        map.openInfoWindow(info,latlng);
                        //高亮闪烁显示鼠标点击的省
                        delay=0;
                        for (flashTimes=0;flashTimes<3;flashTimes++){
                            delay+=400;
                            setTimeout(function(){
                                ply.setFillColor("#FFFF00");
                            },delay);

                            delay+=400;
                            setTimeout(function(){
                                ply.setFillColor(color);
                            },delay);
                        }
                        location="areaRisk.jsp?province="+province+"&city="+encodeURI(name)+"&lat="+encodeURI(latlng.lat)+"&lng="+encodeURI(latlng.lng);
                    });
                }else if(flag==1){

                }
            }
            if(maxPly){
                map.setViewport(maxPly.getPoints());
            }
        });
    },
    drawAreaBoundaryWithRule:function drawAreaBoundaryWithRule(province,city,data,flag){
        var bdary=new BMap.Boundary();
        bdary.get(data.area,function(rs){
            console.log(rs);
            var maxNum=-1,maxPly;
            var color=data.color;
            var count=rs.boundaries.length;
            for(var i=0;i<count;i++){
                var ply=new BMap.Polygon(rs.boundaries[i],{strokeWeight:1,strokeOpacity:0.5,fillColor:color,fillOpacity:0.3,strokeColor:"#000000"});
                map.addOverlay(ply);
                if(flag==0){       //flag为0时有点击事件，flag为1时没有点击事件
                    ply.addEventListener("click",function(e){
                        name=data.area;
                        var latlng=e.point;
                        var info=new BMap.InfoWindow(name+" "+latlng.lat+","+latlng.lng,{width:220});
                        map.openInfoWindow(info,latlng);
                        //高亮闪烁显示鼠标点击的省
                        delay=0;
                        for (flashTimes=0;flashTimes<3;flashTimes++){
                            delay+=400;
                            setTimeout(function(){
                                ply.setFillColor("#FFFF00");
                            },delay);

                            delay+=400;
                            setTimeout(function(){
                                ply.setFillColor(color);
                            },delay);
                        }
                        location="companyRisk.jsp?province="+province+"&city="+encodeURI(city)+"&area="+encodeURI(name)+"&lat="+encodeURI(latlng.lat)+"&lng="+encodeURI(latlng.lng);
                    });
                }else if(flag==1){

                }
            }
            if(maxPly){
                map.setViewport(maxPly.getPoints());
            }
        });
    },
    getProvinceWithRule:function getProvinceWithRule(data,flag){
        if(data.code==200){
            for(i=0;i<data.data.length;i++){
                $.drawProvinceBoundaryWithRule(data.data[i],flag);
            }
        }
    },
    getCityWithRule:function getCityWithRule(province,data,flag){
        if(data.code==200){
            for(i=0;i<data.data.length;i++){
                $.drawCityBoundaryWithRule(province,data.data[i],flag);
            }
        }
    },
    getAreaWithRule:function getAreaWithRule(province,city,data,flag){
         if(data.code==200){
             for(i=0;i<data.data.length;i++){
                 $.drawAreaBoundaryWithRule(province,city,data.data[i],flag);
             }
         }
    }

});