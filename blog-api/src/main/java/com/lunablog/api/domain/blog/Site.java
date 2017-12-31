package com.lunablog.api.domain.blog;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;

import com.lunablog.api.domain.Post;
import com.lunablog.api.domain.User;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"id", "url"})
public class Site {

	@Id
	private String id;
	private String name;
	@Indexed(unique=true)
	private String url;
	private String description;
	private Date creationDate;
	private User owner;
	private List<User> collaborators;
	private List<Category> categories;
	private List<Post> posts;

	private int themeId;
}
