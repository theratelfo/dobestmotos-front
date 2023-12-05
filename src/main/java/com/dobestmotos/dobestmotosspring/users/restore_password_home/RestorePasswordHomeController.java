package com.dobestmotos.dobestmotosspring.users.restore_password_home;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class RestorePasswordHomeController {

	@Autowired
	private RestorePasswordHomeService restorePasswordService;
	
	@GetMapping("/restore_password/{uuid}")
	public String home(@PathVariable("uuid") Integer uuid) {
		return  restorePasswordService.requestPassword(uuid);						
	}
}
