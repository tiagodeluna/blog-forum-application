package com.lunablog.api.domain;

import java.util.Date;

import org.springframework.data.annotation.Id;

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
	private String username;
	private String password;
	private String email;
	private Date registrationDate;
}
