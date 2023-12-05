package com.dobestmotos.dobestmotosspring.database.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dobestmotos.dobestmotosspring.database.models.Producto;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductsRepository extends JpaRepository<Producto, Long> {

	Page<Producto> findAll(Pageable pageable);

	Page<Producto> findAllByCodigoProductoIn(List<String> codigosProducto, Pageable pageable);
}
