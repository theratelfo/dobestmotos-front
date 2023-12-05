package com.dobestmotos.dobestmotosspring.users.send_restore_link;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class SendRestoreLinkRequestModel {

	@NotNull
    @Email
    @Size(max = 255)
	private String email;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}	
}
