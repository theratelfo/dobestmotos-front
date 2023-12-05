package com.dobestmotos.dobestmotosspring.users.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpSession;

@Service
public class LogoutService {

	@Autowired
    private HttpSession httpSession;

    // Método para cerrar sesión
    public void logout() {
        // Invalidar la sesión
        httpSession.invalidate();
    }
}
