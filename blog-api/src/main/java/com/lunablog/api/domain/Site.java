package com.lunablog.api.domain;

import java.util.Date;
import java.util.List;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"id", "url"})
public class Site {

	private int id;
	private String name;
	private String url;
	private String description;
	private Date creationDate;
	private Author owner;
	private List<Author> collaborators;
	private List<Category> categories;
	private List<Post> posts;

	private int themeId;
}
