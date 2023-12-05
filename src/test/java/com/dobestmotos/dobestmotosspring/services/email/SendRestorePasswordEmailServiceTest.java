package com.dobestmotos.dobestmotosspring.services.email;

import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

import com.dobestmotos.dobestmotosspring.email.SendRestorePasswordEmailService;

@ExtendWith(MockitoExtension.class)
public class SendRestorePasswordEmailServiceTest {

	@Mock
    private JavaMailSender javaMailSender;

    @InjectMocks
    private SendRestorePasswordEmailService sendRestorePasswordEmailService;

    @Test
    public void sendRestorePasswordEmail_ShouldSendEmail() {
        // Arrange
        String to = "example@example.com";
        String link = "http://example.com/reset-password";

        // Act
        sendRestorePasswordEmailService.sendRegistrationEmail(to, link);

        // Assert
        verify(javaMailSender).send(ArgumentMatchers.any(SimpleMailMessage.class));
    }
}
