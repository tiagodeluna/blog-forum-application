package com.lunablog.domain;

import java.util.Date;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Author extends User {

	private String description;
	private Date dateOfBirth;
	private List<SocialMediaAccount> socialMediaAccounts;
	
	public void addSocialMediaAccount(SocialMediaAccount account) {
		this.socialMediaAccounts.removeIf(
				a -> a.getSocialMedia().equals(account.getSocialMedia()));
		this.socialMediaAccounts.add(account);
	}
}
