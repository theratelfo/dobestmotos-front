package com.dobestmotos.dobestmotosspring.products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping
public class ProductsHomeController {

	@Autowired
	private ProductService productService;

	@GetMapping("/products")
	public String products(Model model, 
			@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "28") int size,
			@RequestParam(defaultValue = "") String cat,
			@RequestParam(defaultValue = "") String subcat) {		
		return productService.products(model,page, size, cat, subcat);                	
	}
}