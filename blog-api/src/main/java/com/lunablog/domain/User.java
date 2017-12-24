package com.lunablog.domain;

import java.util.Date;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"username"})
public class User {

	private int id;
	private String name;
	private String username;
	private String password;
	private String email;
	private Date registrationDate;
}
