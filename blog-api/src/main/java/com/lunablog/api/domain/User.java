package com.lunablog.api.domain;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"username"})
@Document
public class User {

	@Id
	private String id;
	private String name;
	@Indexed(unique=true)
	private String username;
	private String password;
	@Indexed(unique=true)
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
