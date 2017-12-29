package com.lunablog.api.infrastructure.repository.mock;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.lunablog.api.domain.User;

@Component
public class UserRepository {

	private List<User> users;

	public UserRepository() {
		super();
		users = new ArrayList<>();
		User user = new User();
		user.setName("Neil Gaiman");
		user.setEmail("neilgaiman@hotmail.com");
		user.setUsername(user.getEmail());
		user.setPassword("sandman");
		save(user);
	}

	public List<User> findAll() {
		return users;
	}

	public User findOne(String id) {
		return users.stream()
				.filter(u -> u.getId().equals(id))
				.findFirst()
				.orElse(null);
	}

	public User save(User user) {
		//Update
		int index = users.indexOf(user);
		if (index >= 0) {
			return users.set(index, user);
		}

		//Insert
		String id = Integer.toString(users.size()+1);
		user.setId(id);
		users.add(user);

		return user;
	}

	public List<User> save(List<User> usersToSave) {
		usersToSave.forEach(user -> user = this.save(user));
		return usersToSave;
	}

}
