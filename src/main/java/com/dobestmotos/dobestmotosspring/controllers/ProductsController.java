package com.dobestmotos.dobestmotosspring.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.dobestmotos.dobestmotosspring.controllers.rest.response.PaginatedResponse;
import com.dobestmotos.dobestmotosspring.models.Producto;
import com.dobestmotos.dobestmotosspring.services.ProductService;

@Controller
@RequestMapping
public class ProductsController {

	@Autowired
	private ProductService productService;

	@GetMapping("/products")
	public String home(Model model, @RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "28") int size) {
		
		Page<Producto> paginatedProducts = productService.getPaginatedProducts(page, size);

	    PaginatedResponse<Producto> response = new PaginatedResponse<>();
	    response.setContent(paginatedProducts.getContent());
	    response.setTotalPages(paginatedProducts.getTotalPages());	    

	    model.addAttribute("paginatedResponse", response);
	    model.addAttribute("currentPage", paginatedProducts.getNumber()); // Se suma 1 para ajustar el índice base

        return "products/home";        		
	}
}