package com.dobestmotos.dobestmotosspring.database.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dobestmotos.dobestmotosspring.database.models.ProductoXSubcategoria;

public interface ProductoXSubcategoriaRepository extends JpaRepository<ProductoXSubcategoria, Long> {

	List<ProductoXSubcategoria> findAllByCodigoSubcategoriaIn(final List<String> codigosSubcategoria);

	List<ProductoXSubcategoria> findAllByCodigoSubcategoria(final String codigoSubcategoria);
}
