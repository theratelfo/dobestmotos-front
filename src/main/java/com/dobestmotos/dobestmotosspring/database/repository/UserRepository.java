package com.dobestmotos.dobestmotosspring.database.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dobestmotos.dobestmotosspring.database.models.Usuario;

public interface UserRepository extends JpaRepository<Usuario, Long> {

	// Método para encontrar un Usuario por dirección de correo electrónico
	Usuario findByEmail(String email);

	// Método para encontrar un Usuario por dirección de correo electrónico y
	// contraseña
	Usuario findByEmailAndPassword(String email, String password);

	// Método para actualizar un Usuario
	Usuario save(Usuario usuario);

	Usuario findByUniqueValue(Integer uuid);
}
