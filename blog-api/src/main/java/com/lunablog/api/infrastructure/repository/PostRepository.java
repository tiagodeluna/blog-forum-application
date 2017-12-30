package com.lunablog.api.infrastructure.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.lunablog.api.domain.Post;

public interface PostRepository extends MongoRepository<Post, String> {

	/**
	 * Search for Posts by the Author Id.
	 * @param authorId Author Id
	 * @return The list of Posts found
	 */
	public List<Post> findByAuthor(String authorId);
	
	/**
	 * Search for Posts that have a Tag with the informed Label. 
	 * @param label Tag label
	 * @return The list of Posts found
	 */
	public List<Post> findByTagsLabel(String label);
}
