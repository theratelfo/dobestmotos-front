package com.dobestmotos.dobestmotosspring.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SendRegistrationEmailService {

	//@Autowired
    //private JavaMailSender javaMailSender;

    /*public void sendRegistrationEmail(final String to, final String password) {
    	
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Gracias por tu registro :)");
        message.setText("¡Gracias por registrarte en DoBestMotos!\r\n"
        		+ "\r\n"
        		+ "Tu nombre de usuario: " + to + "\r\n"
        		+ "Contraseña: " + password + "\r\n"
        		+ "\r\n"
        		+ "¡Bienvenido a DoBestMotos y disfruta de tu experiencia!\r\n"
        		+ "\r\n"
        		+ "[Nombre de la Plataforma]\r\n"
        		+ "\r\n"
        		+ "");

        javaMailSender.send(message);
    }*/
}
