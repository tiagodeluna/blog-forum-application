package com.lunablog.api.exception;

import java.io.IOException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_ACCEPTABLE, reason = UnacceptableContentException.ERROR_MESSAGE)
public class UnacceptableContentException extends IOException {

	private static final long serialVersionUID = -167767729014291654L;
	protected static final String ERROR_MESSAGE = "The URL content is not acceptable";
	
	public UnacceptableContentException() {
		super(ERROR_MESSAGE);
	}

	public UnacceptableContentException(Throwable cause) {
		super(ERROR_MESSAGE, cause);
	}
	
	

}
