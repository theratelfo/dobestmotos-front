package com.dobestmotos.dobestmotosspring.repository;

import com.dobestmotos.dobestmotosspring.models.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
    // Puedes añadir métodos personalizados de consulta si es necesario
}
