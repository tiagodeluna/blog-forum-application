package com.lunablog.api.controller;

import java.net.URI;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.lunablog.api.domain.User;
import com.lunablog.api.security.LoginDTO;
import com.lunablog.api.security.TokenAuthenticationService;
import com.lunablog.api.security.UserDataDTO;
import com.lunablog.api.security.UserLoginService;

@RestController
@CrossOrigin
public class LoginController {
	
	private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);
	
	@Value("${server.port}")
	private String SERVER_PORT;
	
	@Autowired
	private UserLoginService service;

	@PostMapping(value = "/api/public/login", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> doLogin(@Valid @RequestBody LoginDTO login) {
    	LOGGER.info(String.format("Logging in with username \"%s\"", login.getUsername()));
    	
		RestTemplate restTemplate = new RestTemplate();

		RequestEntity<LoginDTO> request = RequestEntity
				.post(URI.create("http://localhost:" + SERVER_PORT + "/api/login"))
				.contentType(MediaType.APPLICATION_JSON).body(login);
		try {
			ResponseEntity<String> response = restTemplate.exchange(request, String.class);
			return ResponseEntity.ok(
					response.getHeaders()
						.get(TokenAuthenticationService.AUTH_HEADER_NAME).get(0));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
		}
    }
	
    @RequestMapping(value = "/api/login/userdata", method = RequestMethod.GET)
    @ResponseBody
    public ResponseEntity<?> currentUserData(Authentication authentication) {
    	LOGGER.info(String.format("Finding user data for \"%s\"", authentication.getName()));
    	return ResponseEntity.ok(UserDataDTO.build((User) authentication.getDetails()));
//        User user = service.findUserData(authentication);
//    	return user == null ? ResponseEntity.notFound().build() 
//    			: ResponseEntity.ok(UserDataDTO.build(user));
    }
}
