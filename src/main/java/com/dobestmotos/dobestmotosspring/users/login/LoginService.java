package com.dobestmotos.dobestmotosspring.users.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.dobestmotos.dobestmotosspring.database.models.Usuario;
import com.dobestmotos.dobestmotosspring.database.repository.UserRepository;

import jakarta.servlet.http.HttpSession;

@Service
@SessionAttributes("usuarioSesion")
public class LoginService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private LoginRequestValidator loginRequestValidator;

	@Autowired
	private HttpSession httpSession;

	// Método para realizar el inicio de sesión
	public Usuario login(LoginRequestModel loginRequestModel) throws LoginRequestValidator.ValidationException {
		// Validar la solicitud del inicio de sesión
		loginRequestValidator.validate(loginRequestModel);

		// Consultar el repositorio para encontrar el usuario por email y contraseña
		Usuario usuario = userRepository.findByEmailAndPassword(loginRequestModel.getEmail(),
				loginRequestModel.getPassword());

		// Verificar si el usuario fue encontrado
		if (usuario != null) {
			// Guardar el usuario en la sesión
			httpSession.setAttribute("usuarioSesion", usuario);

			// Aquí puedes realizar acciones adicionales antes de guardar el usuario en la
			// sesión
			// Por ejemplo, puedes usar Spring Security para gestionar la sesión del usuario
			// En este ejemplo, simplemente se devuelve el usuario encontrado
			return usuario;
		} else {
			// Si las credenciales no coinciden, puedes lanzar una excepción o devolver null
			// según tu lógica
			return null;
		}
	}
}
