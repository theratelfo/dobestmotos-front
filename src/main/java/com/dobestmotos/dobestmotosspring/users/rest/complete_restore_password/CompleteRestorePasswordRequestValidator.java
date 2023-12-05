package com.dobestmotos.dobestmotosspring.users.rest.complete_restore_password;

import java.util.Set;

import org.springframework.stereotype.Component;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;

@Component
public class CompleteRestorePasswordRequestValidator {

	public static void validate(CompleteRestorePasswordRequestModel requestModel) throws ValidationException {
		
        // Configurar el validador
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();

        // Validar el objeto
        Set<ConstraintViolation<CompleteRestorePasswordRequestModel>> violations = validator.validate(requestModel);

        // Verificar violaciones y lanzar una excepción si es necesario
        if (!violations.isEmpty()) {
            throw new ValidationException(violations);
        }
    }

    public static class ValidationException extends Exception {
        private final Set<ConstraintViolation<CompleteRestorePasswordRequestModel>> violations;

        public ValidationException(Set<ConstraintViolation<CompleteRestorePasswordRequestModel>> violations) {
            this.violations = violations;
        }

        public Set<ConstraintViolation<CompleteRestorePasswordRequestModel>> getViolations() {
            return violations;
        }
    }
}
