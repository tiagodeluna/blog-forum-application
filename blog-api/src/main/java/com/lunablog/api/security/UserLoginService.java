package com.lunablog.api.security;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import com.lunablog.api.domain.User;
import com.lunablog.api.infrastructure.repository.UserRepository;

@Repository
public class UserLoginService implements UserDetailsService {

	@Autowired
	private UserRepository repository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = repository.findByUsername(username);
		
		if (user == null) {
			throw new UsernameNotFoundException("User '" + username + "' not found!");
		}
		
		//Update last login date
		user.setLastLoginDate(new Date());
		return repository.save(user);
	}
	
	public User findUserData(Authentication authentication) {
		User user = repository.findByUsername(authentication.getName()); 

		if (user == null) {
			throw new UsernameNotFoundException("User not found!");
		}
		return user;
	}

}
