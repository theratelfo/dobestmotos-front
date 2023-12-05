package com.dobestmotos.dobestmotosspring.products.categories.get_all_by_categoria;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import static org.junit.jupiter.api.Assertions.assertTrue;
import org.springframework.boot.test.context.SpringBootTest;

import com.dobestmotos.dobestmotosspring.database.models.Subcategoria;

@SpringBootTest
public class GetAllByCategoriaServiceTest {

	@Autowired
	private GetAllByCategoriaService getAllByCategoriaService;
	
	@Test
	public void getAllByCategoriaSeviceTest() {
		
		final List<Subcategoria> subcategorias = getAllByCategoriaService.getByCodigoCategoria("accessories");		
		assertTrue(subcategorias.size()>0);
	}
}
