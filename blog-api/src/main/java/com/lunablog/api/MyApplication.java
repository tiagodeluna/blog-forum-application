package com.lunablog.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class MyApplication {
	
    public static void main(String[] args) {
//    	ApplicationContext context = 
    	SpringApplication.run(MyApplication.class, args);
//    	UserRepository repo = context.getBean(UserRepository.class);
//    	repo.deleteAll();
    	
        System.out.println("Running application...");
    }
    
	@Bean
	public FilterRegistrationBean corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();
		config.setAllowCredentials(true);
		config.addAllowedOrigin("*");
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");
		source.registerCorsConfiguration("/**", config);
		FilterRegistrationBean bean = new FilterRegistrationBean(new CorsFilter(source));
		//Setting order to lower levels. Need to run from security filter.
		bean.setOrder(-100000);
		return bean;
	}
}
