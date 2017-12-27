package com.lunablog.api.infrastructure.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.lunablog.api.domain.Post;

public interface PostRepository extends MongoRepository<Post, String> {

	public List<Post> findByAuthor(String authorId);
}
