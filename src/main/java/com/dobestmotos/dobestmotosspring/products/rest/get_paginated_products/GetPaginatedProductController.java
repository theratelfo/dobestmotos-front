package com.dobestmotos.dobestmotosspring.products.rest.get_paginated_products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dobestmotos.dobestmotosspring.database.models.Producto;

@RestController
@RequestMapping("/api/products")
public class GetPaginatedProductController {

	@Autowired
	private GetPaginatedProductsService getPaginatedProductService;

	@GetMapping("/get_paginated")
	public Page<Producto> getPaginatedProducts(@RequestParam(defaultValue = "0") int page,
			@RequestParam(defaultValue = "10") int size, @RequestParam(defaultValue = "") String cat,
			@RequestParam(defaultValue = "") String subcat) {
		return getPaginatedProductService.getPaginatedProducts(page, size, cat, subcat);
	}
}
