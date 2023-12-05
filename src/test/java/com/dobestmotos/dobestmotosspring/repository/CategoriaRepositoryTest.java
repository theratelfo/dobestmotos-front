package com.dobestmotos.dobestmotosspring.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.transaction.annotation.Transactional;

import com.dobestmotos.dobestmotosspring.database.models.Categoria;
import com.dobestmotos.dobestmotosspring.database.repository.CategoriaRepository;

import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;

@SpringBootTest
@TestPropertySource(locations = "classpath:application.properties") // Puedes crear un archivo de propiedades específico para pruebas
@Transactional // Para asegurar que las transacciones sean revertidas después de cada prueba
public class CategoriaRepositoryTest {

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Test
    public void testFindAll() {
    	
    	List<Categoria> resultPage = categoriaRepository.findAll();

        // Verificaciones
        // Puedes realizar más verificaciones según sea necesario
        assertTrue(resultPage.size()>0);
        // Puedes verificar otros aspectos de la página, como el contenido, el número total de elementos, etc.
    }
}
