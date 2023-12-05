package com.dobestmotos.dobestmotosspring.database.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dobestmotos.dobestmotosspring.database.models.Subcategoria;

@Repository
public interface SubcategoriaRepository extends JpaRepository<Subcategoria, Long> {

	List<Subcategoria> findAll();

	List<Subcategoria> findByCodigoCategoria(final String codigoCategoria);

	List<Subcategoria> findByCodigoCategoriaIn(List<String> codigoCategorias);

	List<Subcategoria> findByCodigo(final String codigo);

}
