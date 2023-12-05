package com.dobestmotos.dobestmotosspring.email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class SendRestorePasswordEmailService {

	//@Autowired
    //private JavaMailSender javaMailSender;

    public void sendRegistrationEmail(final String to, final String link) {
    	
        /*SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Gracias por tu registro :)");
        message.setText("Hola " + to + ",\r\n"
        		+ "\r\n"
        		+ "Recibes este correo porque has solicitado restablecer tu contraseña en DoBestMotos. Si no has solicitado esto, puedes ignorar este mensaje.\r\n"
        		+ "\r\n"
        		+ "Para restablecer tu contraseña, haz clic en el siguiente enlace:\r\n"
        		+ "\r\n"
        		+ link + "\r\n"
        		+ "\r\n"
        		+ "Ten en cuenta que este enlace es válido por un tiempo limitado. Si no restableces tu contraseña antes de que expire, deberás solicitar un nuevo enlace.\r\n"
        		+ "\r\n"
        		+ "Si tienes algún problema o no has solicitado esto, por favor, ponte en contacto con nuestro equipo de soporte.\r\n"
        		+ "\r\n"
        		+ "¡Gracias!\r\n"
        		+ "\r\n"
        		+ "DoBestMotos\r\n");

        javaMailSender.send(message);*/
    }
}
