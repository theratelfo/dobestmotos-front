package com.dobestmotos.dobestmotosspring.services;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import com.dobestmotos.dobestmotosspring.models.Producto;
import com.dobestmotos.dobestmotosspring.repository.ProductsRepository;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.Mockito.*;

@SpringBootTest
public class ProductServiceTest {

    @Mock
    private ProductsRepository productsRepository;

    @InjectMocks
    private ProductService productService;

    @Test
    public void testGetPaginatedProducts() {
        // Datos de prueba
        int page = 0;
        int size = 10;
        List<Producto> dummyProducts = createDummyProducts();
        Page<Producto> dummyPage = new PageImpl<>(dummyProducts);

        // Configuración del comportamiento del repositorio mock
        when(productsRepository.findAll(any(Pageable.class))).thenReturn(dummyPage);

        // Llamada al método del servicio
        Page<Producto> result = productService.getPaginatedProducts(page, size);

        // Verificaciones
        verify(productsRepository, times(1)).findAll(any(Pageable.class));
        // Asegúrate de realizar más verificaciones según sea necesario

        // Puedes realizar aserciones adicionales según tus requisitos
        // Por ejemplo, verifica que el tamaño de la página sea el esperado
        // assertEquals(size, result.getSize());
    }

    private List<Producto> createDummyProducts() {
        // Crea y devuelve una lista de productos ficticios
        List<Producto> dummyProducts = new ArrayList<>();
        dummyProducts.add(new Producto(/* atributos del producto 1 */));
        dummyProducts.add(new Producto(/* atributos del producto 2 */));
        // Agrega más productos según sea necesario
        return dummyProducts;
    }
}
