package com.dobestmotos.dobestmotosspring.users.rest.complete_restore_password;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class CompleteRestorePasswordController {

	@Autowired
	private CompleteRestorePasswordService completeRestorePasswordService;
	
	@PostMapping("/complete_restore_password")
	public ResponseEntity<String> createUser(@RequestBody CompleteRestorePasswordRequestModel completeRestorePasswordRequestModel) {		
		return completeRestorePasswordService.completeRestorePassword(completeRestorePasswordRequestModel);
	}
}
