package com.dobestmotos.dobestmotosspring.products.categories.get_all_by_categoria;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dobestmotos.dobestmotosspring.database.models.Subcategoria;
import com.dobestmotos.dobestmotosspring.database.repository.SubcategoriaRepository;

@Service
public class GetAllByCategoriaService {

	@Autowired
	private SubcategoriaRepository subcategoriaRepository;

	public List<Subcategoria> getByCodigoCategoria(final String codigoCategoria) {
		final List<Subcategoria> subcategorias = subcategoriaRepository.findByCodigoCategoria(codigoCategoria);
		return subcategorias;
	}
}
