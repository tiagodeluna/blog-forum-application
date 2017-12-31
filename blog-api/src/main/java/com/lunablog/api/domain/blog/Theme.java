package com.lunablog.api.domain.blog;

import org.springframework.data.annotation.Id;

public class Theme {

	@Id
	private String id;
	private Object layoutType;
	private Object stylesheet;
}
