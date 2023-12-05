package com.dobestmotos.dobestmotosspring.users.rest.complete_restore_password;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.dobestmotos.dobestmotosspring.database.models.Usuario;
import com.dobestmotos.dobestmotosspring.database.repository.UserRepository;

@Service
public class CompleteRestorePasswordService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CompleteRestorePasswordRequestValidator completeRestorePasswordRequestValidator;

	public ResponseEntity<String> completeRestorePassword(CompleteRestorePasswordRequestModel completeRestorePasswordRequestModel) {

		try {

			completeRestorePasswordRequestValidator.validate(completeRestorePasswordRequestModel);

		} catch (CompleteRestorePasswordRequestValidator.ValidationException e) {
			// Manejar errores de validación
			return new ResponseEntity<>("Error de validación: " + e.getMessage(), HttpStatus.BAD_REQUEST);
		} catch (Exception e) {
			// Manejar otros errores
			return new ResponseEntity<>("Error interno del servidor", HttpStatus.INTERNAL_SERVER_ERROR);
		}

		final Usuario usuario = userRepository.findByEmail(completeRestorePasswordRequestModel.getEmail());

		if (usuario != null) {

			usuario.setUniqueValue(null);
			usuario.setPassword(completeRestorePasswordRequestModel.getPassword());
			userRepository.save(usuario);
			return new ResponseEntity<>("Contraseña actualizada", HttpStatus.OK);

		} else {
			return new ResponseEntity<>("No se encontro el email del usuario", HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
