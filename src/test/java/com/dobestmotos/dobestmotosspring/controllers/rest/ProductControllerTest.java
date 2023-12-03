package com.dobestmotos.dobestmotosspring.controllers.rest;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.dobestmotos.dobestmotosspring.models.Producto;
import com.dobestmotos.dobestmotosspring.services.ProductService;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

@WebMvcTest(ProductController.class)
@AutoConfigureMockMvc
public class ProductControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ProductService productService;

    @Test
    public void testGetPaginatedProducts() throws Exception {
        
        final List<Producto> dummyProducts = createDummyProducts();
        
        // Configuración del servicio mock
        int page = 0;
        int size = 10;
        Page<Producto> dummyPage = new PageImpl<>(dummyProducts, PageRequest.of(page, size), dummyProducts.size());
        when(productService.getPaginatedProducts(page, size)).thenReturn(dummyPage);

        // Realiza la solicitud y verifica el resultado
        mockMvc.perform(MockMvcRequestBuilders.get("/api/productos/paginated"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.content").exists());
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
