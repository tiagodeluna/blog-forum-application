package com.lunablog.api.security;

import com.lunablog.api.domain.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDataDTO {

	private String id;
	private String name;
	private String username;
	private String email;
	private String profileDescription;
	
	public static UserDataDTO build(User user) {
		if (user == null) {
			return null;
		}
		
		UserDataDTO userData = new UserDataDTO();
		userData.id = user.getId();
		userData.name = user.getName();
		userData.email = user.getEmail();
		userData.username = user.getUsername();
		userData.profileDescription = user.getProfileDescription();
		
		return userData;
		
	}
}
