package com.dobestmotos.dobestmotosspring.users.create_user;

import java.util.Set;

import org.springframework.stereotype.Component;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;

@Component
public class CreateUserRequestValidator {

	public static void validate(CreateUserRequestModel requestModel) throws ValidationException {
		
        // Configurar el validador
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();

        // Validar el objeto
        Set<ConstraintViolation<CreateUserRequestModel>> violations = validator.validate(requestModel);

        // Verificar violaciones y lanzar una excepción si es necesario
        if (!violations.isEmpty()) {
            throw new ValidationException(violations);
        }
    }

    public static class ValidationException extends Exception {
        private final Set<ConstraintViolation<CreateUserRequestModel>> violations;

        public ValidationException(Set<ConstraintViolation<CreateUserRequestModel>> violations) {
            this.violations = violations;
        }

        public Set<ConstraintViolation<CreateUserRequestModel>> getViolations() {
            return violations;
        }
    }
}
