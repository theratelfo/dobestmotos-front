package com.dobestmotos.dobestmotosspring.users.create_user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class CreateUserRequestModel {

	@NotNull
    @Email
    @Size(max = 255)
	private String email;
	
	@NotNull
    @Size(max = 255)
	private String password;
	
	@NotNull
    @Size(max = 255)
	private String typePasswordAgain;
	
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
	public String getTypePasswordAgain() {
		return typePasswordAgain;
	}
	public void setTypePasswordAgain(String typePasswordAgain) {
		this.typePasswordAgain = typePasswordAgain;
	}
}
