package com.lunablog.api.domain;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
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
	@DBRef @NotNull
	private User author;
	@NotEmpty
	private String title;
	private String customUrl;
	@NotEmpty
	private String content;
	@Indexed(direction=IndexDirection.DESCENDING)
	private Date publicationDate = new Date();
	private Date lastUpdate;
	private List<Tag> tags = new ArrayList<>();
	private List<Category> categories = new ArrayList<>();
	private List<Comment> comments = new ArrayList<>();
}
