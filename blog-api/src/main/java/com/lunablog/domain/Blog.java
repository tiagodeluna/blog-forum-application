package com.lunablog.domain;

import java.util.Date;
import java.util.List;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"id", "url"})
public class Blog {

	private int id;
	private String name;
	private String url;
	private String description;
	private Date creationDate;
	private List<Category> categories;
	private List<SocialMediaAccount> socialMediaAccounts;
	private Author owner;
	private List<Author> collaborators;
	private List<Post> posts;
	private List<Category> postCategories;
	private List<Tag> postTags;
	
}
