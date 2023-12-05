package com.dobestmotos.dobestmotosspring.users.restore_password_home;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dobestmotos.dobestmotosspring.database.models.Usuario;
import com.dobestmotos.dobestmotosspring.database.repository.UserRepository;

@Service
public class RestorePasswordHomeService {

	@Autowired
	private UserRepository userRepository;

	public String requestPassword(Integer uuid) {

		final Usuario usuario = userRepository.findByUniqueValue(uuid);

		if (usuario != null) {
			return "restore_password/home";
		} else {
			return "restore_password/invalid_home";
		}

	}

}
