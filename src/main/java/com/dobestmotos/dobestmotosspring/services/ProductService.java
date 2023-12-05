package com.dobestmotos.dobestmotosspring.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.dobestmotos.dobestmotosspring.models.Producto;
import com.dobestmotos.dobestmotosspring.repository.ProductsRepository;

@Service
public class ProductService {

	private final ProductsRepository productsRepository;

    public ProductService(ProductsRepository productsRepository) {
        this.productsRepository = productsRepository;
    }

    public Page<Producto> getPaginatedProducts(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return productsRepository.findAll(pageable);
    }
}

