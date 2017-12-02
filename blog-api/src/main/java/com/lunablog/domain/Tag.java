package com.lunablog.domain;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"label"})
public class Tag {

	private int id;
	private String label;
}
