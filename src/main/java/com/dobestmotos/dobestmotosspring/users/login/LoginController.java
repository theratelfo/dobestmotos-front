package com.dobestmotos.dobestmotosspring.users.login;

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
public class LoginController {

	@Autowired
	private LoginService loginService;

	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody LoginRequestModel loginRequestModel) {
		try {
			// Intentar realizar el inicio de sesión
			Usuario usuario = loginService.login(loginRequestModel);

			if (usuario != null) {
				// Devolver un mensaje de éxito o cualquier información adicional que necesites
				return new ResponseEntity<>("Inicio de sesión exitoso", HttpStatus.OK);
			} else {
				// Devolver un mensaje de error si las credenciales son incorrectas
				return new ResponseEntity<>("Credenciales incorrectas", HttpStatus.UNAUTHORIZED);
			}
		} catch (LoginRequestValidator.ValidationException e) {
			// Devolver un mensaje de error si la validación falla
			return new ResponseEntity<>("Error de validación: " + e.getMessage(), HttpStatus.BAD_REQUEST);
		} catch (Exception e) {
			// Manejar otros errores internos del servidor
			return new ResponseEntity<>("Error interno del servidor", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
