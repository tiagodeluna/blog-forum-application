package com.lunablog.api.domain;

import java.util.Date;

import org.springframework.data.mongodb.core.mapping.DBRef;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Comment {

	@DBRef
	private User author;
	private String title;
	private String content;
	private Date publicationDate;
}
