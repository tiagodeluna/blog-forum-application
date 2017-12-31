package com.lunablog.api.domain;

import java.util.Collection;
import java.util.Collections;
import java.util.Date;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@EqualsAndHashCode(of={"id"})
@Document
public class User implements UserDetails {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5022810525300247019L;
	
	@Id
	private String id;
	@NotEmpty
	private String name;
	@Indexed(unique=true)
	@NotEmpty
	private String username;
	@NotEmpty
	private String password;
	@Indexed(unique=true)
	@NotEmpty @Email
	private String email;
	private Date registrationDate = new Date();
	private Date lastLoginDate;
	private String profileDescription;
//	private Date dateOfBirth;
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return Collections.emptyList();
	}
	
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	
	@Override
	public boolean isEnabled() {
		return true;
	}
	
//	private List<SocialMediaAccount> socialMediaAccounts;
	
//	public void addSocialMediaAccount(SocialMediaAccount account) {
//		this.socialMediaAccounts.removeIf(
//				a -> a.getSocialMedia().equals(account.getSocialMedia()));
//		this.socialMediaAccounts.add(account);
//	}

}
