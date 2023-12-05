package com.dobestmotos.dobestmotosspring.users.login;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import java.util.Set;

import org.springframework.stereotype.Component;

@Component
public class LoginRequestValidator {

	public static void validate(LoginRequestModel requestModel) throws ValidationException {
		// Configurar el validador
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();

		// Validar el objeto
		Set<ConstraintViolation<LoginRequestModel>> violations = validator.validate(requestModel);

		// Verificar violaciones y lanzar una excepción si es necesario
		if (!violations.isEmpty()) {
			throw new ValidationException(violations);
		}
	}

	public static class ValidationException extends Exception {
		private final Set<ConstraintViolation<LoginRequestModel>> violations;

		public ValidationException(Set<ConstraintViolation<LoginRequestModel>> violations) {
			this.violations = violations;
		}

		public Set<ConstraintViolation<LoginRequestModel>> getViolations() {
			return violations;
		}
	}
}
