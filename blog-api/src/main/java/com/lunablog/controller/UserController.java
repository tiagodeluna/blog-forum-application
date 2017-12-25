package com.lunablog.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lunablog.domain.User;

@RestController
@RequestMapping("/api/users")
public class UserController {
    
//    @Autowired
//    private DishRepository dishRepository;
//
//    @Autowired
//    private DishService dishService;

    @PostMapping
    public ResponseEntity<User> create(@Valid @RequestBody User user) {
//        Dish dishSaved = dishRepository.save(dish);
//        return ResponseEntity.status(HttpStatus.CREATED).body(dishSaved);
    	return null;
    }

    @PostMapping(path = "bulk")
    public ResponseEntity<List<User>> createBulk(@RequestBody List<User> userList) {
//        dishList.stream().forEach(dishRepository::save);
//        return ResponseEntity.status(HttpStatus.CREATED).body(dishList);
    	return null;
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> update(@PathVariable String id, @Valid @RequestBody User user) {
//        return ResponseEntity.ok(dishService.update(id, dish));
    	return null;
    }

    @GetMapping
    public ResponseEntity<List<User>> findAll() {
//        List<User> dishList = dishRepository.findAll();
//        return ResponseEntity.ok(dishList);
    	return null;
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> findById(@PathVariable String id) {
//        Dish dish = dishService.findById(id);
//        return dish == null ? ResponseEntity.notFound().build() : ResponseEntity.ok(dish);
    	return null;
    }

}
