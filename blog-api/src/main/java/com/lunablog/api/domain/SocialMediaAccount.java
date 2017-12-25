package com.lunablog.api.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"socialMedia", "userId"})
public class SocialMediaAccount {

	private int id;
	//The Equals implementation considers just the socialMedia because the same Author can only have one account per social media type.
	private SocialMediaEnum socialMedia;
	private String userId;
	private String customUrl;
}
