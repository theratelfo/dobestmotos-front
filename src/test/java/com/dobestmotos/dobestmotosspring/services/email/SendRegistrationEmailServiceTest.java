package com.dobestmotos.dobestmotosspring.services.email;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import com.dobestmotos.dobestmotosspring.email.SendRegistrationEmailService;

@ExtendWith(MockitoExtension.class)
public class SendRegistrationEmailServiceTest {

	@Mock
    private JavaMailSender javaMailSender;

    @InjectMocks
    private SendRegistrationEmailService sendRegistrationEmailService;

    @Test
    public void sendEmail_ShouldSendEmailSuccessfully() {
        // Arrange
        String to = "recipient@example.com";
        
        // Act
        //sendRegistrationEmailService.sendRegistrationEmail(to, "123456");

        // Assert
        verify(javaMailSender).send(any(SimpleMailMessage.class));
    }
}
