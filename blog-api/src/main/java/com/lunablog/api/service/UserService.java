package com.lunablog.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lunablog.api.domain.User;
import com.lunablog.api.infrastructure.repository.UserRepository;

@Service
public class UserService {

	private UserRepository repository;
	
	@Autowired
	public UserService(UserRepository userRepository) {
		this.repository = userRepository;
	}
	
	public User update(String id, User user) {
		//TODO Implement
		
    	User currentUser = repository.findOne(id);
    	
    	if (currentUser == null) {
//            return new Exception("Error");
        }
    	
    	//TODO Check whether each property is fulfilled in 'user'
    	currentUser.setEmail(user.getEmail());
    	currentUser.setName(user.getName());
    	//TODO Do HASH password
//    	currentUser.setPassword(user.getPassword());
    	repository.save(currentUser);

		return currentUser;
	}
	
	public User login(String username, String password) throws Exception {
		//Get user by username
		User user = repository.findByUsername(username);
		
		//TODO Create (or find) specific exceptions to throw
		if (user == null) {
			throw new Exception("User unexistent");
		}
		
		//TODO Validate HASHED password
		if (!user.getPassword().equals(password)) {
			throw new Exception("Password is invalid");
		}
		
		//TODO Register login (session?)
		
		return user;
	}
}
