package com.dobestmotos.dobestmotosspring.users.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class LoginHomeController {

	@GetMapping("/login")
	public String home() {
		return "login/home";
	}
}
