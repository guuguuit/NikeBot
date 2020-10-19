package nike;

import nike.proxy.IProxy;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.redis.core.RedisTemplate;

import java.util.Set;

@SpringBootApplication
public class DemoApplication implements ApplicationRunner {

    private Logger logger = LoggerFactory.getLogger(DemoApplication.class);

    @Value("${role}")
    private  String role;

    @Value("${ipPolicy}")
    private   Integer ipPolicy;

    @Autowired
    RedisTemplate redisTemplate;



    public static void main(String[] args) {
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        System.out.println(">>>>>>>>>>>此为示例程序 严重阉割版本....>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        System.out.println("阉割掉了，过akamai，破akamai，监控，热品补货提醒，bot全流程，登录等核心模块");
        System.out.println(">>>>>>>>>>>需要程序请联系作者QQ:   27789007  >>>>>>>>>>>>>>>>>>>>>>>>>>");
        System.out.println(">>>>>>>>>>>如要运行本示例，请先修改配置文件中的mysql,redis ip端口等配置信息");
        System.out.println(">>>>>>>>>>>>>>>>用户名&密码  zuozhe   zuozhe  >>>>>>>>><<<<<<<<<<<<<<");
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<");
        SpringApplication.run(DemoApplication.class, args);
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        if(ipPolicy!=8888)
        IProxy.init(ipPolicy);
        logger.info("初始化IP....");
        if("platform".equals(role.trim())){
            logger.info("大后台..开始启动.");
        }
    }
}
