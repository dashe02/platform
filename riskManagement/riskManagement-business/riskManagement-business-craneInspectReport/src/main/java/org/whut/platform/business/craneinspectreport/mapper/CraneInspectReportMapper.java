package org.whut.platform.business.craneinspectreport.mapper;
import org.apache.ibatis.annotations.Param;
import org.whut.platform.business.craneinspectreport.entity.CraneInspectReport;
import org.whut.platform.fundamental.orm.mapper.AbstractMapper;

import java.util.List;
import java.util.Map;


/**
 * Created with IntelliJ IDEA.
 * User: ThinkPad
 * Date: 14-3-17
 * Time: 下午10:39
 * To change this template use File | Settings | File Templates.
 */
public interface CraneInspectReportMapper extends AbstractMapper<CraneInspectReport> {
    public void insert(CraneInspectReport craneInspectReport);
    public void batchInsert(List<CraneInspectReport> craneInspectReports);
    public void updateURL(String singlePicURL);
    public List<CraneInspectReport> findByCondition(Map<String,Object> map);
    public String getReportNumber(String reportNumber);
    public List<CraneInspectReport> getInfoByAddressId(Long addressId);
    public List<CraneInspectReport> getInfoByUnitAddress(String unitAddress);
    public CraneInspectReport getCraneInspectReportByReportNumber(@Param("reportNumber") String reportNumber);
    public List<CraneInspectReport> getCraneInspectReportInfoByAddressAndEquipment(@Param("unitAddress") String unitAddress,@Param("equipmentVariety") String equipmentVariety);
    public List<CraneInspectReport> getUnitaddressByArea(@Param("province") String province,@Param("city") String city,@Param("area") String area);
    public Long findReportNumberByUnitAddress(String unitAddress);
    public List<CraneInspectReport>showRiskRank(@Param("city") String city,@Param("area") String area);
    public List<CraneInspectReport> showRiskRankByValueRange(@Param("startValue") float startValue,@Param("endValue") float endValue, @Param("city") String city, @Param("area") String area);
    public CraneInspectReport getOneUnitAddressInfo(String unitAddress);
    public List<CraneInspectReport> getCraneInspectReportInfoById(long id);
    public List<CraneInspectReport> getCraneInspectReportInfoFromCircle(@Param("maxLng") String maxLng,@Param("maxLat") String maxLat,@Param("minLng")String minLng,@Param("minLat") String minLat);
    /*
       新加入的，Sunhui
    */
    public List<CraneInspectReport> getEquipmentVarietyList();

    public float getAvgRiskValueByProvince(@Param("province") String province);
    public float getAvgRiskValueByProvinceAndCity(@Param("province") String province,@Param("city") String city);
    public List<Map<String,Float>> getProvinceAvgRiskValue();
    public List<Map<String,Float>> getCityAvgRiskValueByProvince(@Param("province") String province);
    public List<Map<String,Float>> getAreaAvgRiskValueByProvinceAndCity(@Param("province") String province,@Param("city") String city);
    public List<CraneInspectReport> fuzzyQuery(@Param("city") String city,@Param("area") String area,@Param("require") String require);
    public List<CraneInspectReport> fuzzyQueryByUnitAddress(@Param("city") String city,@Param("area") String area,@Param("require") String require);
    public List<CraneInspectReport> fuzzyQueryByUserPoint(@Param("city") String city,@Param("area") String area,@Param("require") String require);
    public List<CraneInspectReport> fuzzyQueryBySafeManager(@Param("city") String city,@Param("area") String area,@Param("require") String require);
    public List<CraneInspectReport> fuzzyQueryByEquipmentVariety(@Param("city") String city,@Param("area") String area,@Param("require") String require);
    public List<CraneInspectReport> fuzzyQueryByManufactureUnit(@Param("city") String city,@Param("area") String area,@Param("require") String require);
    public List<CraneInspectReport> getAreaInfo(@Param("city")String city,@Param("area")String area);
    public List<Map<String,Float>>getProvinceRiskRankFormRiskRange(@Param("startValue") float startValue,@Param("endValue")float endValue);
    public List<Map<String,Float>>getCityRiskRankFormRiskRange(@Param("startValue") float startValue,@Param("endValue")float endValue,@Param("province")String province);
    public List<Map<String,Float>>getAreaRiskRankFormRiskRange(@Param("startValue") float startValue,@Param("endValue")float endValue,@Param("province")String province,@Param("city")String city);

    public List<String> getCraneInfoByFuzzyUnitAddress(@Param("city") String city,@Param("area") String area,@Param("require") String require);
    public List<String> getCraneInfoByFuzzyUsePoint(@Param("city") String city,@Param("area") String area,@Param("require") String require);
    public List<String> getCraneInfoByFuzzySafeManager(@Param("city") String city,@Param("area") String area,@Param("require") String require);
    public List<String> getCraneInfoByFuzzyEquipmentVariety(@Param("city") String city,@Param("area") String area,@Param("require") String require);
    public List<String> getCraneInfoByFuzzyManufactureunit(@Param("city") String city,@Param("area") String area,@Param("require") String require);

    public long getCraneNumberByUnitAddress(String unitAddress);

}
