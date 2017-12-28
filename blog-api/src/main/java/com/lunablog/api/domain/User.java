package com.lunablog.api.domain;

import java.util.Date;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"id"})
@Document
public class User {

	@Id
	private String id;
	@NotEmpty
	private String name;
	@Indexed(unique=true) @NotNull
	private String username;
	@NotEmpty
	private String password;
	@Indexed(unique=true) @NotEmpty @Email
	private String email;
	private Date registrationDate = new Date();
	private Date lastLoginDate;
	private String profileDescription;
	private Date dateOfBirth;
	
//	private List<SocialMediaAccount> socialMediaAccounts;
	
//	public void addSocialMediaAccount(SocialMediaAccount account) {
//		this.socialMediaAccounts.removeIf(
//				a -> a.getSocialMedia().equals(account.getSocialMedia()));
//		this.socialMediaAccounts.add(account);
//	}

}
