package com.lunablog.domain;

import java.util.Date;
import java.util.List;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"username"})
public class Author {

	private int id;
	private String name;
	private String username;
	private String password;
	private Date registrationDate;
	private String description;
	private Date dateOfBirth;
	private List<SocialMediaAccount> socialMediaAccounts;
	
	public void addSocialMediaAccount(SocialMediaAccount account) {
		this.socialMediaAccounts.removeIf(
				a -> a.getSocialMedia().equals(account.getSocialMedia()));
		this.socialMediaAccounts.add(account);
	}
}
