package com.dobestmotos.dobestmotosspring.products.rest.get_paginated_products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import com.dobestmotos.dobestmotosspring.database.models.Producto;
import com.dobestmotos.dobestmotosspring.products.utils.ProductsFilterManager;

@Service
public class GetPaginatedProductsService {

	@Autowired
	private ProductsFilterManager productsFilterManager;
	
	public Page<Producto> getPaginatedProducts(int page, int size, String codigoCategoria, String codigoSubcategoria) {
		
		Page<Producto> paginatedProducts = productsFilterManager.filter(page, size, codigoCategoria, codigoSubcategoria);
		return paginatedProducts;
	}
}
