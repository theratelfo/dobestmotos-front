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

import com.dobestmotos.dobestmotosspring.database.models.Producto;
import com.dobestmotos.dobestmotosspring.products.ProductService;
import com.dobestmotos.dobestmotosspring.products.categories.get_all_by_categoria.GetAllByCategoriaController;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

@WebMvcTest(GetAllByCategoriaController.class)
@AutoConfigureMockMvc
public class ProductControllerTest {


}
