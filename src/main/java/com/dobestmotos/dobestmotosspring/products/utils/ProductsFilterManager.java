package com.dobestmotos.dobestmotosspring.products.utils;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import com.dobestmotos.dobestmotosspring.database.models.Producto;
import com.dobestmotos.dobestmotosspring.database.models.ProductoXSubcategoria;
import com.dobestmotos.dobestmotosspring.database.models.Subcategoria;
import com.dobestmotos.dobestmotosspring.database.repository.ProductoXSubcategoriaRepository;
import com.dobestmotos.dobestmotosspring.database.repository.ProductsRepository;
import com.dobestmotos.dobestmotosspring.database.repository.SubcategoriaRepository;

@Component
public class ProductsFilterManager {

	@Autowired
	private ProductsRepository productsRepository;

	@Autowired
	private SubcategoriaRepository subcategoriaRepository;

	@Autowired
	private ProductoXSubcategoriaRepository productoXSubcategoriaRepository;

	public Page<Producto> filter(int page, int size, String codigoCategoria, String codigoSubcategoria) {

		Pageable pageable = PageRequest.of(page, size);

		boolean cat = false;
		boolean subcat = false;

		Page<Producto> paginatedProducts = null;
		if (codigoCategoria.isBlank() && codigoSubcategoria.isBlank()) {
			paginatedProducts = productsRepository.findAll(pageable);
		} else if (!codigoCategoria.isBlank()) {
			cat = true;
			subcat = true;

		} else {
			subcat = true;
		}

		List<String> codigosCategoria;
		if (cat) {

			final List<Subcategoria> subcategorias = subcategoriaRepository.findByCodigoCategoria(codigoCategoria);

			codigosCategoria = subcategorias.stream().map(Subcategoria::getCodigoCategoria)
					.collect(Collectors.toList());
		}

		if (subcat) {

			List<ProductoXSubcategoria> productosXSubcategorias;
			if (cat) {
				productosXSubcategorias = productoXSubcategoriaRepository
						.findAllByCodigoSubcategoria(codigoSubcategoria);
			} else {
				productosXSubcategorias = productoXSubcategoriaRepository
						.findAllByCodigoSubcategoria(codigoSubcategoria);
			}

			final List<String> codigosProductos = productosXSubcategorias.stream()
					.map(ProductoXSubcategoria::getCodigoProducto).collect(Collectors.toList());

			paginatedProducts = productsRepository.findAllByCodigoProductoIn(codigosProductos, pageable);
		}

		return paginatedProducts;
	}
}
