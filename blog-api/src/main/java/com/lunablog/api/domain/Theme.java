package com.lunablog.api.domain;

import org.springframework.data.annotation.Id;

public class Theme {

	@Id
	private String id;
	private Object layoutType;
	private Object stylesheet;
}
