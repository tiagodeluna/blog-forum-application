package com.lunablog.api.infrastructure.repository.mock;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.lunablog.api.domain.Category;
import com.lunablog.api.domain.Post;
import com.lunablog.api.domain.Tag;

@Component
public class PostRepository {

	private UserRepository userRepository;
	private List<Post> posts;

	@Autowired
	public PostRepository(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
		
		posts = new ArrayList<>();
		Post post = new Post();
		post.setAuthor(userRepository.findOne("1"));
		post.setTitle("Welcome to this forum");
		post.setContent("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "+
                    "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum "+
                    "dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
		post.setPublicationDate(new Date());
		Category cat = new Category("thoughts", "Thoughts");
		post.getCategories().add(cat);
		Tag tag1 = new Tag("welcome", "#4d85d1");
		Tag tag2 = new Tag("lorem-ipslum", "#df2d4f");
		post.getTags().add(tag1);
		post.getTags().add(tag2);
		save(post);
		
		Post post2 = new Post();
		post2.setAuthor(userRepository.findOne("1"));
		post2.setTitle("Path Matching in React Router v4");
		post2.setContent("React Router v4 is a pure React rewrite of the popular React package. Previous versions of React Router used configuration disguised as pseudo-components "
				+ "and would be difficult to understand. Now with v4, everything is now “just components”. ");
		post2.setPublicationDate(new Date());
		Category cat2 = new Category("technology", "Technology");
		post2.getCategories().add(cat2);
		Tag tag3 = new Tag("react", "#5aba59");
		post2.getTags().add(tag3);
		post2.getTags().add(tag2);
		save(post2);

	}

	public List<Post> findAll() {
		return posts;
	}

	public Post findOne(String id) {
		return posts.stream()
				.filter(u -> u.getId().equals(id))
				.findFirst()
				.orElse(null);
	}

	public Post save(Post post) {
		//Update
		int index = posts.indexOf(post);
		if (index >= 0) {
			return posts.set(index, post);
		}

		//Insert
		String id = Integer.toString(posts.size()+1);
		post.setId(id);
		posts.add(post);

		return post;
	}

	public List<Post> save(List<Post> postsToSave) {
		postsToSave.forEach(post -> post = this.save(post));
		return postsToSave;
	}

	public List<Post> findByAuthor(String authorId) {
		return this.posts.stream()
			.filter(p -> p.getAuthor().getId().equals(authorId))
			.collect(Collectors.toList());
	}
	
	public List<Post> findByTagLabel(String tagLabel) {
		return this.posts.stream()
			.filter(p -> p.getTags().stream()
						.anyMatch(t -> t.getLabel().equals(tagLabel)))
			.collect(Collectors.toList());
	}

}
