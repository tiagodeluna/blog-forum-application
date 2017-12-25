package com.lunablog.api.domain;

import java.util.Date;
import java.util.List;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"id", "customUrl"})
public class Post {

	private int id;
	private String title;
	private String customUrl;
	private String content;
	private Author author;
	private Date publicationDate;
	private Date lastUpdate;
	private List<Tag> tags;
	private List<Category> categories;
}
