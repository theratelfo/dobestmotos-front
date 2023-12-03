package com.dobestmotos.dobestmotosspring.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class AboutController {

	@GetMapping("/about")
	public String home() {
		return "about/home";
	}
}
