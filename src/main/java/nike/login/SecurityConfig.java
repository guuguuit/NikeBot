package nike.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity // 启用Spring Security的Web安全支持
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    /**
     * 登录处理
     * @param http
     * @throws Exception
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        // 开启登录配置
        //http.authorizeRequests()
//                // 标识访问 `/index` 这个接口，需要具备`ADMIN`角色
//                .antMatchers("/*").hasRole("ADMIN")
//                // 允许匿名的url - 可理解为放行接口 - 多个接口使用,分割
//                //.antMatchers("/", "/home").permitAll()
//                // 其余所有请求都需要认证
//                .anyRequest().authenticated()
//                .and()
//                // 设置登录认证页面
//                .formLogin()//.loginPage("/login")
//                // 登录成功后的处理接口 - 方式①
//                .loginProcessingUrl("/home")
//                // 自定义登陆用户名和密码属性名，默认为 username和password
//                .usernameParameter("123")
//                .passwordParameter("123")
//                // 登录成功后的处理器  - 方式②
//                .successHandler((req, resp, authentication) -> {
//                    resp.setContentType("application/json;charset=utf-8");
//                    PrintWriter out = resp.getWriter();
//                    out.write("登录成功...");
//                    out.flush();
//                })
//                // 配置登录失败的回调
//                .failureHandler((req, resp, exception) -> {
//                    resp.setContentType("application/json;charset=utf-8");
//                    PrintWriter out = resp.getWriter();
//                    out.write("登录失败...");
//                    out.flush();
//                })
//                .permitAll()//和表单登录相关的接口统统都直接通过
//                .and()
//                .logout().logoutUrl("/logout")
//                // 配置注销成功的回调
//                .logoutSuccessHandler((req, resp, authentication) -> {
//                    resp.setContentType("application/json;charset=utf-8");
//                    PrintWriter out = resp.getWriter();
//                    out.write("注销成功...");
//                    out.flush();
//                })
//                .permitAll()
//                .and()
//                .httpBasic()
//                .and()
//                // 关闭CSRF跨域
//                .csrf().disable();


        http.authorizeRequests()
                .antMatchers("/orderresult").permitAll()
                .antMatchers("/bot").permitAll()
                .antMatchers("/coordinator").permitAll()
                .antMatchers("/**").hasRole("VIP1")
                .anyRequest().authenticated()
                .and()
                .formLogin()
                .defaultSuccessUrl("/monitor").permitAll()
                .and()
                .logout().permitAll();
        http.csrf().disable();

    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        // 存中创建了一个用户，该用户的名称为user，密码为password，用户角色为USER
        // 对用户密码进行了加密
        auth.inMemoryAuthentication()
                .passwordEncoder(new BCryptPasswordEncoder())
                .withUser("123").password(new BCryptPasswordEncoder().encode("123")).roles("VIP1")
                .and()
                .withUser("zuozhe").password(new BCryptPasswordEncoder().encode("zuozhe")).roles("VIP1");
    }

    /**
     * 忽略拦截
     * @param web
     * @throws Exception
     */
    @Override
    public void configure(WebSecurity web) throws Exception {
        // 设置拦截忽略url - 会直接过滤该url - 将不会经过Spring Security过滤器链
//        web.ignoring().antMatchers("/orderresult");
//        web.ignoring().antMatchers("/orderresult");
        // 设置拦截忽略文件夹，可以对静态资源放行
        //web.ignoring().antMatchers("/css/**", "/js/**");
    }
}
