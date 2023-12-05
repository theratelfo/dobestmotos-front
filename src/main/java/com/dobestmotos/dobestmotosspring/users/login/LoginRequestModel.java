package com.dobestmotos.dobestmotosspring.users.login;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class LoginRequestModel {

	@NotNull
    @Email
    @Size(max = 255)
	private String email;
	
	@NotNull
    @Size(max = 255)
	private String password;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
