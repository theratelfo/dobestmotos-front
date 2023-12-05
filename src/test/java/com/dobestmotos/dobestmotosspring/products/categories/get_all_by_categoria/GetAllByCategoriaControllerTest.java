package com.dobestmotos.dobestmotosspring.products.categories.get_all_by_categoria;

import com.dobestmotos.dobestmotosspring.database.models.Subcategoria;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.when;

@WebMvcTest(GetAllByCategoriaController.class)
public class GetAllByCategoriaControllerTest {

    /*@Autowired
    private MockMvc mockMvc;

    @MockBean
    private GetAllByCategoriaService getAllByCategoriaService;

    @Test
    public void testGetAllByCategoria() throws Exception {
        // Datos de prueba
        String codigoCategoria = "accesories";
        List<Subcategoria> subcategorias = Arrays.asList(
                new Subcategoria("1", "Categoria 1", "sub1"),
                new Subcategoria("2", "Categoria 1", "sub2")
                // Agrega más datos según sea necesario
        );

        // Configuración del comportamiento del servicio mock
        when(getAllByCategoriaService.getByCodigoCategoria(codigoCategoria)).thenReturn(subcategorias);

        // Realiza la solicitud HTTP simulada y verifica la respuesta
        mockMvc.perform(MockMvcRequestBuilders.get("/api/products/categories/get_all_by_categoria")
                .param("codigoCategoria", codigoCategoria))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.length()").value(subcategorias.size()))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].nombre").value(subcategorias.get(0).getNombre()))
                .andExpect(MockMvcResultMatchers.jsonPath("$[1].codigo").value(subcategorias.get(1).getCodigo()));
        // Agrega más verificaciones según sea necesario
    }*/
}
