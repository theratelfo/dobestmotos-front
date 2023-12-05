package com.dobestmotos.dobestmotosspring.users.create_user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dobestmotos.dobestmotosspring.database.models.Usuario;
import com.dobestmotos.dobestmotosspring.database.repository.UserRepository;

@Service
public class CreateUserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private CreateUserRequestValidator createUserRequestValidator;

	public Usuario createUser(CreateUserRequestModel createUserRequestModel)
			throws CreateUserRequestValidator.ValidationException {
		// Validar la solicitud del usuario
		createUserRequestValidator.validate(createUserRequestModel);

		// Crear un objeto Usuario a partir de la solicitud
		Usuario usuario = new Usuario();
		usuario.setEmail(createUserRequestModel.getEmail());
		usuario.setPassword(createUserRequestModel.getPassword());

		// Puedes agregar más lógica de negocio aquí antes de guardar el usuario

		// Guardar el usuario en la base de datos
		return userRepository.save(usuario);
	}
}
