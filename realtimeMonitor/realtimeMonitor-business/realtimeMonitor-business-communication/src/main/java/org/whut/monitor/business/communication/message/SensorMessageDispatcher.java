package org.whut.monitor.business.communication.message;

import org.apache.activemq.command.ActiveMQTextMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.whut.monitor.business.monitor.service.CollectorService;
import org.whut.platform.fundamental.communication.api.MessageDispatcher;
import org.whut.platform.fundamental.logger.PlatformLogger;
import org.whut.platform.fundamental.message.api.PlatformMessageProducer;
import org.whut.platform.fundamental.redis.connector.RedisConnector;

import javax.jms.MessageNotWriteableException;

/**
 * Created with IntelliJ IDEA.
 * User: xiaozhujun
 * Date: 14-6-5
 * Time: 下午7:26
 * To change this template use File | Settings | File Templates.
 */
public class SensorMessageDispatcher implements MessageDispatcher {

    public static final PlatformLogger logger = PlatformLogger.getLogger(SensorMessageDispatcher.class);

    private static final String destination = Constants.SENSOR_QUEUE_DESTINATION;

    @Autowired
    private PlatformMessageProducer platformMessageProducer;

    @Autowired
    private CollectorService collectorService;
    private RedisConnector redisConnector = new RedisConnector();

    @Override
    public void dispatchMessage(String messageBody) {
        if (messageBody!=null){
            logger.info("dispatch: "+messageBody);
            try {
                ActiveMQTextMessage message = new ActiveMQTextMessage();
                message.setText(messageBody);
                platformMessageProducer.sendTopic(destination,message);
            } catch (MessageNotWriteableException e) {
                e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
            }

        }
    }

    public PlatformMessageProducer getPlatformMessageProducer() {
        return platformMessageProducer;
    }

    public void setPlatformMessageProducer(PlatformMessageProducer platformMessageProducer) {
        this.platformMessageProducer = platformMessageProducer;
    }

    @Override
    public void exceptionProcess() {
        String sensorNum = redisConnector.get("sensorNum");
        System.out.println(sensorNum);
        collectorService.updateTimeByNumber(redisConnector.get("sensor:{"+sensorNum+"}:collector"),redisConnector.get("sensor:{"+sensorNum+"}:lastDate"));
        collectorService.updateStatusByNumber(redisConnector.get("sensor:{"+sensorNum+"}:collector"),"离线或异常");
    }
}
