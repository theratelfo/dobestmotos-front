package com.dobestmotos.dobestmotosspring.repository;

import com.dobestmotos.dobestmotosspring.models.Producto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductsRepository extends JpaRepository<Producto, Long> {

	Page<Producto> findAll(Pageable pageable);
}
