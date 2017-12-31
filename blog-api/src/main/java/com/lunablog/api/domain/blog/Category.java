package com.lunablog.api.domain.blog;

import com.lunablog.api.domain.Tag;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Category extends Tag {

	private String name;
	
	public Category(String label, String name) {
		super(label);
		this.name = name;
	}
}
