package com.lunablog.api.domain;

import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.index.Indexed;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of={"label"})
public class Tag {

	@Indexed(unique=true)
	private String label;
	@Transient
	private String styleClass;
	
	public Tag(String label) {
		this.label = label;
	}
}
