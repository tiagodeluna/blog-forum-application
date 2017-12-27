package com.lunablog.api.domain;

import org.springframework.data.mongodb.core.index.Indexed;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"label"})
public class Tag {

	@Indexed(unique=true)
	private String label;
}
