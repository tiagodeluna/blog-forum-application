package com.lunablog.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lunablog.api.domain.User;
import com.lunablog.api.infrastructure.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserRepository repository;
	
    @PostMapping
    public ResponseEntity<User> create(@Valid @RequestBody User user) {
    	LOGGER.info("Creating user...");
    	
    	User userSaved = repository.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(userSaved);
    }

    @PostMapping(path = "bulk")
    public ResponseEntity<List<User>> createBulk(@RequestBody List<User> userList) {
    	LOGGER.info("Creating bulk users...");
    	List<User> usersSaved = repository.save(userList);
        return ResponseEntity.status(HttpStatus.CREATED).body(usersSaved);
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> update(@PathVariable String id, @Valid @RequestBody User user) {
    	LOGGER.info(String.format("Updating user with id: %s", id));
    	User userRecovered = repository.findOne(id);
    	
    	if (userRecovered == null) {
        	LOGGER.error(String.format("User with id \"%s\" not found.", id));
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    	
    	BeanUtils.copyProperties(user, userRecovered, "id");
    	return ResponseEntity.ok(repository.save(userRecovered));
    }

    @GetMapping
    public ResponseEntity<List<User>> findAll() {
    	LOGGER.info("Finding all users...");
        List<User> userList = repository.findAll();
        return ResponseEntity.ok(userList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable String id) {
    	LOGGER.info(String.format("Finding user by id: %s", id));
        User user = repository.findOne(id);
        return user == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(user);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable String id) {
    	LOGGER.info(String.format("Delete user by id: %s", id));
    	User user = repository.findOne(id);
    	
    	if (user == null) {
    		return ResponseEntity.notFound().build();
    	}
    	
        repository.delete(user);
        return ResponseEntity.ok(user);
    }

}
