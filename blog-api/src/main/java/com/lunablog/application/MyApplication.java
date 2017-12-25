package com.lunablog.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.lunablog.infrastructure.repository.UserRepository;

@SpringBootApplication
@ComponentScan(basePackages={"com.lunablog.controller",
		"com.lunablog.service.*",
		"com.lunablog.infrastructure.*",
		"com.lunablog.infrastructure.repository.*"})
public class MyApplication {
	
//	@Autowired
//	private UserRepository userRepository;
	
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
        System.out.println("Running application...");
    }
}
