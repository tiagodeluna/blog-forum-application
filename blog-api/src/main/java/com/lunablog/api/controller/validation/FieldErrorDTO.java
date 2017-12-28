package com.lunablog.api.controller.validation;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FieldErrorDTO {
	
	private String field;
    private String message;
 
    public FieldErrorDTO(String field, String message) {
        this.field = field;
        this.message = message;
    }
}
