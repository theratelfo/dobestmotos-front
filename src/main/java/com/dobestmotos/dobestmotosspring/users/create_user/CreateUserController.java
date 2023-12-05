package com.dobestmotos.dobestmotosspring.users.create_user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dobestmotos.dobestmotosspring.database.models.Usuario;

@RestController
@RequestMapping("/api/users")
public class CreateUserController {

	@Autowired
	private CreateUserService createUserService;

	@PostMapping("/create")
	public ResponseEntity<String> createUser(@RequestBody CreateUserRequestModel createUserRequestModel) {

		try {
			// Crear usuario
			final Usuario usuario = createUserService.createUser(createUserRequestModel);

			// Puedes devolver más información si es necesario, como el ID del usuario
			// creado
			return new ResponseEntity<>("Usuario creado con éxito", HttpStatus.CREATED);

		} catch (CreateUserRequestValidator.ValidationException e) {
			// Manejar errores de validación
			return new ResponseEntity<>("Error de validación: " + e.getMessage(), HttpStatus.BAD_REQUEST);
		} catch (Exception e) {
			// Manejar otros errores
			return new ResponseEntity<>("Error interno del servidor", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
