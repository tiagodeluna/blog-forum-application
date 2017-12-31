package com.lunablog.api.domain.blog;

import lombok.Getter;

@Getter
public enum SocialMediaEnum {
	FACEBOOK(1, "Facebook", "..."),
	TWITTER(2, "Twitter", "..."),
	INSTAGRAM(3, "Instagram", "..."),
	LINKEDIN(4, "LinkedIn", "...");
	
	private int id;
	private String name;
	private String url;
	
	private SocialMediaEnum(int id, String name, String url) {
		this.id = id;
		this.name = name;
		this.url = url;
	}
	
}
