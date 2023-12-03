package com.dobestmotos.dobestmotosspring.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class ContactController {

	@GetMapping("/contact")
	public String home() {
		return "contact/home";
	}
}
