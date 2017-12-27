package com.lunablog.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lunablog.api.domain.Post;
import com.lunablog.api.infrastructure.repository.PostRepository;

@RestController
@RequestMapping("/api/posts")
@CrossOrigin
public class PostController {

	private static final Logger LOGGER = LoggerFactory.getLogger(PostController.class);
	
	@Autowired
	private PostRepository repository;
	
    @PostMapping
    public ResponseEntity<Post> create(@Valid @RequestBody Post post) {
    	LOGGER.info("Creating post...");
        Post postSaved = repository.save(post);
        return ResponseEntity.status(HttpStatus.CREATED).body(postSaved);
    }

    @PostMapping(path = "bulk")
    public ResponseEntity<List<Post>> createBulk(@RequestBody List<Post> postList) {
    	LOGGER.info("Creating bulk posts...");
    	List<Post> postSaved = repository.save(postList);
        return ResponseEntity.status(HttpStatus.CREATED).body(postSaved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Post> update(@PathVariable String id, @Valid @RequestBody Post user) {
    	LOGGER.info(String.format("Updating post with id: %s", id));
    	Post currentPost = repository.findOne(id);
    	
    	if (currentPost == null) {
        	LOGGER.error(String.format("Post with id \"%s\" not found.", id));
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    	
    	//TODO Implement it!
//    	currentPost.setEmail(user.getEmail());
//    	currentPost.setName(user.getName());
//    	currentPost.setPassword(user.getPassword());
    	repository.save(currentPost);

    	return ResponseEntity.ok(currentPost);
    }

    @GetMapping
    public ResponseEntity<List<Post>> findAll() {
    	LOGGER.info("Finding all posts...");
        List<Post> postList = repository.findAll();
        return ResponseEntity.ok(postList);
    }

    @GetMapping("/author/{authorId}")
    public ResponseEntity<List<Post>> findByAuthorId(@PathVariable String authorId) {
    	LOGGER.info(String.format("Finding posts by author with id: %s", authorId));
        List<Post> posts = repository.findByAuthor(authorId);
        return posts == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(posts);
    }
}
