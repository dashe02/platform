package org.whut.platform.business.craneinspectreport.test;

import org.whut.platform.fundamental.jxl.model.ExcelMap;
import org.whut.platform.fundamental.jxl.utils.JxlExportImportUtils;

import java.io.File;

/**
 * Created with IntelliJ IDEA.
 * User: hadoop
 * Date: 14-11-17
 * Time: 下午2:22
 * To change this template use File | Settings | File Templates.
 */
public class CraneReportTest {
    private static JxlExportImportUtils jxlExportImportUtils;
    private static ExcelMap excelMap=new ExcelMap();
    public static void parseExcel(String path){
        File file=new File(path);
        excelMap=jxlExportImportUtils.analysisExcel(file);
        System.out.println(excelMap.getHeads());

    }
    public static void main(String[] args){

    }
}
