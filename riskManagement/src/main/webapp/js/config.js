(function($){
    $.URL = {
        "power":{
            "add":"rs/power/add",
            "update":"rs/power/update",
            "delete":"rs/power/delete",
            "list":"rs/power/list"
        }  ,
        "address":{
            "getCityByProvince"  :"rs/address/getCityByProvince" ,
            "findIdByArea"  :"rs/address/findByArea/{province},{city},{area}",
            "getProvinceList":"rs/address/getProvinceList",
            "getAreaByProvinceAndCity":"rs/address/getAreaByProvinceAndCity"
        },
        "report":
        {
            "showCraneReport" :"rs/report/showCraneReport",
            "exportCraneReport":"rs/report/exportCraneReport",
            "showChinaChart":"rs/report/showChinaChart"
        }  ,
        "craneinspectreport":
        {
            "getUnitaddressByArea" :"rs/craneinspectreport/getUnitaddressByArea",
            "getAreaInfoByUnitAddress":"rs/craneinspectreport/getAreaInfoByUnitAddress",
            "getCraneInspectReportInfoByAddressAndEquipment":"rs/craneinspectreport/getCraneInspectReportInfoByAddressAndEquipment",
            "getAreaInfo":"rs/craneinspectreport/getAreaInfo",
            "showRiskRank":"rs/craneinspectreport/showRiskRank",
            "getOneUnitAddressInfo":"rs/craneinspectreport/getOneUnitAddressInfo",
            "getCraneInspectReportInfoById":"rs/craneinspectreport/getCraneInspectReportInfoById",
            "getCraneInspectReportInfoFromCircle":"rs/craneinspectreport/getCraneInspectReportInfoFromCircle"
        },
        "craneInspectReport":{
            "list":"rs/craneinspectreport/list",
            "upload" :"rs/craneinspectreport/upload",
            "addRepeat":"rs/craneinspectreport/addRepeat",
            "delete":"rs/craneinspectreport/delete"

        },
        "authority":{
            "add":"rs/authority/add"
        },
        "user":{
            "add":"rs/user/add",
            "update":"rs/user/update",
            "delete":"rs/user/delete",
            "list":"rs/user/list",
            "getId":"rs/user/getIdByName"
        },
        "authority":{
             "add":"rs/authority/add",
             "update":"rs/authority/update",
             "delete":"rs/authority/delete",
            "list":"rs/authority/list"
        },
        "userAuthority":{
              "add":"rs/userAuthority/add"
        },
        "riskColor":{
           "list":"rs/riskColor/list",
            "setColor":"rs/riskColor/setColor"
        }
    }
})(jQuery);