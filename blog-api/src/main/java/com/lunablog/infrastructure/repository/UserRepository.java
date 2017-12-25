package com.lunablog.infrastructure.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.lunablog.domain.User;

public interface UserRepository extends MongoRepository<User, String> {
	
	public User findByUsernameAndPassword(String username, String password);

}
