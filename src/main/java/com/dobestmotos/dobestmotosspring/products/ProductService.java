package com.dobestmotos.dobestmotosspring.products;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import com.dobestmotos.dobestmotosspring.database.models.Categoria;
import com.dobestmotos.dobestmotosspring.database.models.Producto;
import com.dobestmotos.dobestmotosspring.database.repository.CategoriaRepository;
import com.dobestmotos.dobestmotosspring.products.rest.PaginatedResponse;
import com.dobestmotos.dobestmotosspring.products.utils.ProductsFilterManager;

@Service
public class ProductService {

	@Autowired
	private CategoriaRepository categoriaRepository;

	@Autowired
	private ProductsFilterManager productsFilterManager;

	public String products(Model model, int page, int size, String codigoCategoria, String codigoSubcategoria) {

		Page<Producto> paginatedProducts = productsFilterManager.filter(page, size, codigoCategoria,
				codigoSubcategoria);

		PaginatedResponse<Producto> response = new PaginatedResponse<>();
		response.setContent(paginatedProducts.getContent());
		response.setTotalPages(paginatedProducts.getTotalPages());

		final List<Categoria> categorias = categoriaRepository.findAll();

		model.addAttribute("paginatedResponse", response);
		model.addAttribute("categories", categorias);
		model.addAttribute("currentPage", paginatedProducts.getNumber()); // Se suma 1 para ajustar el índice base

		return "products/home";
	}
}
