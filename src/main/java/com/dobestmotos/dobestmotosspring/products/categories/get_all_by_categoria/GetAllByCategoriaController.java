package com.dobestmotos.dobestmotosspring.products.categories.get_all_by_categoria;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.dobestmotos.dobestmotosspring.database.models.Subcategoria;

@RestController
@RequestMapping("/api/products/categories")
public class GetAllByCategoriaController {

	@Autowired
	private GetAllByCategoriaService getAllByCategoriaService;

	@GetMapping("/get_all_by_categoria")
	public List<Subcategoria> getAllByCategoria(@RequestParam(defaultValue = "accesories") String codigoCategoria) {
		return getAllByCategoriaService.getByCodigoCategoria(codigoCategoria);
	}
}
