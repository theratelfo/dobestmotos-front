package com.dobestmotos.dobestmotosspring.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.transaction.annotation.Transactional;

import com.dobestmotos.dobestmotosspring.database.models.Producto;
import com.dobestmotos.dobestmotosspring.database.repository.ProductsRepository;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
@TestPropertySource(locations = "classpath:application.properties") // Puedes crear un archivo de propiedades específico para pruebas
@Transactional // Para asegurar que las transacciones sean revertidas después de cada prueba
public class ProductsRepositoryTest {

    @Autowired
    private ProductsRepository productsRepository;

    @Test
    public void testFindAll() {
    	
    	 // Llamada al método del repositorio con paginación
        int page = 0;
        int size = 10;
        Page<Producto> resultPage = productsRepository.findAll(PageRequest.of(page, size));

        // Verificaciones
        // Puedes realizar más verificaciones según sea necesario
        assertEquals(size, resultPage.getSize()); // Ajusta según el tamaño de página esperado
        // Puedes verificar otros aspectos de la página, como el contenido, el número total de elementos, etc.
    }
}
