package com.lunablog.api.security;

import org.hibernate.validator.constraints.NotEmpty;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginDTO {

	@NotEmpty
	private String username;
	@NotEmpty
	private String password;
}
