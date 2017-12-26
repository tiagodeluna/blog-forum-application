package com.lunablog.api.infrastructure.repository;

import java.util.List;

import com.lunablog.api.domain.Post;

public interface PostRepository {

	public List<Post> findByAuthorId(String authorId);
}
