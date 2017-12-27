package com.lunablog.api.domain;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"username"})
public class User {

	@Id
	private String id;
	private String name;
	@Indexed(unique=true)
	private String username;
	private String password;
	@Indexed(unique=true)
	private String email;
	private Date registrationDate;
	private Date lastLoginDate;
}
