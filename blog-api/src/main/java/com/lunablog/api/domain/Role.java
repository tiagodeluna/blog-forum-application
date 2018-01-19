package com.lunablog.api.domain;

import lombok.Getter;

@Getter
public enum Role {
	AUTHOR(1), //Can comment, write posts
	EDITOR(2), //Can comment, write posts and edit others' posts
	ADMINISTRATOR(3), //Can comment, write posts, edit others' posts and manage users
	BANNED(0); //Cannot do anything
	
	private int level;
	
	private Role(int level) {
		this.level = level;
	}
}
