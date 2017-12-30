package com.lunablog.api.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Repository;

import com.lunablog.api.infrastructure.repository.UserRepository;

@Repository
public class UserLoginService implements UserDetailsService {

	@Autowired
	private UserRepository repository;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		UserDetails user = repository.findByUsername(username);
		
		if (user == null) {
			throw new UsernameNotFoundException("User '" + username + "' not found!");
		}
		
		return user;
	}

}
