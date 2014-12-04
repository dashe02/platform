package org.whut.inspectManagement.business.inspectResult.web;

import org.dom4j.Document;
import org.dom4j.Element;
import org.dom4j.io.SAXReader;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.whut.inspectManagement.business.inspectResult.entity.ImageBean;
import org.whut.inspectManagement.business.inspectResult.service.InspectTableRecordService;
import org.whut.platform.fundamental.logger.PlatformLogger;
import org.whut.platform.fundamental.util.json.JsonResultUtils;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 * User: John
 * Date: 14-5-13
 * Time: 下午2:12
 * To change this template use File | Settings | File Templates.
 */
@Component
@Path("/inspectResult")
public class InspectTableRecordServiceWeb {
    private static PlatformLogger logger = PlatformLogger.getLogger(InspectTableRecordServiceWeb.class);

    @Autowired
    private InspectTableRecordService inspectTableRecordService;

    @Produces(MediaType.APPLICATION_JSON +";charset=UTF-8")
    @Path("/upload")
    @POST
    public String upload(@Context HttpServletRequest request){
        if(request==null){
            return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.ERROR);
        }
        MultipartResolver resolver = new CommonsMultipartResolver(request.getSession().getServletContext());
        MultipartHttpServletRequest multipartRequest = resolver.resolveMultipart(request);
        try{
            //XML文档解析
            MultipartFile file = multipartRequest.getFile("filename");
            String filename = file.getOriginalFilename();

            String [] s = filename.split("\\.");
            if (s[s.length - 1].equals("xml")){
                InputStream inputStream = file.getInputStream();
                SAXReader sr = new SAXReader();
                Document document = sr.read(inputStream);
                Element root = document.getRootElement();
                // System.out.println(">>>>>>>>>"+root.getName());
                Map map = new HashMap();
                map = inspectTableRecordService.DomReadXml(document);
                System.out.println(map.get("flag").toString());
                if(Long.parseLong(map.get("flag").toString())==3){
                    return  JsonResultUtils.getCodeAndMesByString(JsonResultUtils.Code.ERROR.getCode(),"点检表不存在！");
                }
                else if(Long.parseLong(map.get("flag").toString())==2){
                    System.out.println("文件内容不合法！");
                    return  JsonResultUtils.getCodeAndMesByString(JsonResultUtils.Code.ERROR.getCode(),"文件内容不合法！");
                }
                else if(Long.parseLong(map.get("flag").toString())==1){
                    return  JsonResultUtils.getCodeAndMesByString(JsonResultUtils.Code.ERROR.getCode(),"点检结果已存在！");
                }
                else{
                    List<ImageBean> tempList = new ArrayList<ImageBean>();
                    tempList = (ArrayList<ImageBean>)map.get("list");
//                    return  JsonResultUtils.getCodeAndMesByString(JsonResultUtils.Code.SUCCESS.getCode(),"上传成功！");
                    logger.info(JsonResultUtils.getObjectResultByStringAsDefault(tempList, JsonResultUtils.Code.SUCCESS));
                    return JsonResultUtils.getObjectResultByStringAsDefault(tempList, JsonResultUtils.Code.SUCCESS);
                }
            } else {
                System.out.println("文件格式有误！");
                // return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.ERROR);
                return  JsonResultUtils.getCodeAndMesByString(JsonResultUtils.Code.ERROR.getCode(),"文件格式错误！");
            }

        }
        catch(Exception e){
            e.printStackTrace();
            logger.error(e.getMessage());
            return JsonResultUtils.getCodeAndMesByStringAsDefault(JsonResultUtils.Code.ERROR);
        }
    }

}
