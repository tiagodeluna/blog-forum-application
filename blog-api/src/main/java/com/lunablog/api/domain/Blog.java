package com.lunablog.api.domain;

import java.util.List;

import com.lunablog.api.domain.widget.Widget;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Blog extends Site {

	private List<SocialMediaAccount> socialMediaAccounts;
	private List<Widget> widgets;
}
