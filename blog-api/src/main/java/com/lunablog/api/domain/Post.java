package com.lunablog.api.domain;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"id", "customUrl"})
public class Post {

	@Id
	private String id;
	@DBRef
	private User author;
	private String title;
	private String customUrl;
	private String content;
	private Date publicationDate;
	private Date lastUpdate;
	private List<Tag> tags;
	private List<Category> categories;
	private List<Comment> comments;
}
