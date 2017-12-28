package com.lunablog.api;

import java.util.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.lunablog.api.domain.User;
import com.lunablog.api.infrastructure.repository.UserRepository;

@SpringBootApplication
public class MyApplication {
	
    public static void main(String[] args) {
    	ApplicationContext context = SpringApplication.run(MyApplication.class, args);
    	
    	UserRepository repo = context.getBean(UserRepository.class);
//    	repo.deleteAll();
//    	User user = new User();
//    	user.setName("Neil Gaiman");
//    	user.setUsername("neilgaiman");
//    	user.setPassword("sandman");
//    	user.setEmail("neilgaiman@gmail.com");
//    	user.setRegistrationDate(new Date());
//    	repo.save(user);
    	
        System.out.println("Running application...");
    }
}
