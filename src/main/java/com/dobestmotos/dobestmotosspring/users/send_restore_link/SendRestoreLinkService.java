package com.dobestmotos.dobestmotosspring.users.send_restore_link;

import com.dobestmotos.dobestmotosspring.database.models.Usuario;
import com.dobestmotos.dobestmotosspring.database.repository.UserRepository;
import com.dobestmotos.dobestmotosspring.email.SendRestorePasswordEmailService;
import com.dobestmotos.dobestmotosspring.utils.UniqueNumberGenerator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SendRestoreLinkService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SendRestoreLinkRequestValidator sendRestoreLinkRequestValidator;       
    
    @Autowired
    private UniqueNumberGenerator uniqueNumberGenerator;
    
    @Autowired
    private SendRestorePasswordEmailService sendRestorePasswordEmailService;

    // Método para realizar el inicio de sesión
    public SendRestoreLinkResponseModel login(SendRestoreLinkRequestModel sendRestoreLinkRequestModel) throws SendRestoreLinkRequestValidator.ValidationException {
    	
        // Validar la solicitud del inicio de sesión
    	sendRestoreLinkRequestValidator.validate(sendRestoreLinkRequestModel);

        // Consultar el repositorio para encontrar el usuario por email y contraseña
        Usuario usuario = userRepository.findByEmail(sendRestoreLinkRequestModel.getEmail());
        
        if (usuario != null) {
            // El usuario existe, continuar con el proceso de restablecimiento de contraseña
        	
        	final int uniqueId = uniqueNumberGenerator.generateUniqueNumber();
        	
        	final String url = "http://google.com/restore_password" + uniqueId;
        	
        	usuario.setUniqueValue(uniqueId);        	
        	userRepository.save(usuario);
        	
        	sendRestorePasswordEmailService.sendRegistrationEmail(usuario.getEmail(), url);
        	
            return new SendRestoreLinkResponseModel(true, "Se ha enviado un correo electrónico de restablecimiento de contraseña.", sendRestoreLinkRequestModel.getEmail());
        } else {
            // El usuario no existe
            return new SendRestoreLinkResponseModel(false, "La dirección de correo electrónico no está registrada en nuestro sistema.", sendRestoreLinkRequestModel.getEmail());
        }
        
    }
}
