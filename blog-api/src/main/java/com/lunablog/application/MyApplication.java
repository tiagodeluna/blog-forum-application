package com.lunablog.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"com.lunablog.controller",
		"com.lunablog.service.*",
		"com.lunablog.infrastructure.*"})
public class MyApplication {
	
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
        System.out.println("Running application...");
    }
}
