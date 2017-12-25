package com.lunablog.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = InvalidFileUrlException.ERROR_MESSAGE)
public class InvalidFileUrlException extends Exception {

	private static final long serialVersionUID = 1347763991046669159L;
	protected static final String ERROR_MESSAGE = "The provided URL is not valid";
	protected static final String ERROR_MESSAGE_WITH_URL = ERROR_MESSAGE + ": %s";

	public InvalidFileUrlException() {
		super(ERROR_MESSAGE);
	}

	public InvalidFileUrlException(Throwable cause) {
		super(ERROR_MESSAGE, cause);
	}

	public InvalidFileUrlException(String url, Throwable cause) {
		super(String.format(ERROR_MESSAGE_WITH_URL, url), cause);
	}

	public InvalidFileUrlException(String url) {
		super(String.format(ERROR_MESSAGE_WITH_URL, url));
	}

	
}
