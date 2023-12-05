package com.dobestmotos.dobestmotosspring.users.send_restore_link;

import jakarta.validation.ConstraintViolation;
import jakarta.validation.Validation;
import jakarta.validation.Validator;
import jakarta.validation.ValidatorFactory;
import java.util.Set;

import org.springframework.stereotype.Component;

@Component
public class SendRestoreLinkRequestValidator {

	public static void validate(SendRestoreLinkRequestModel requestModel) throws ValidationException {
		
		// Configurar el validador
		ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		Validator validator = factory.getValidator();

		// Validar el objeto
		Set<ConstraintViolation<SendRestoreLinkRequestModel>> violations = validator.validate(requestModel);

		// Verificar violaciones y lanzar una excepción si es necesario
		if (!violations.isEmpty()) {
			throw new ValidationException(violations);
		}
	}

	public static class ValidationException extends Exception {
		private final Set<ConstraintViolation<SendRestoreLinkRequestModel>> violations;

		public ValidationException(Set<ConstraintViolation<SendRestoreLinkRequestModel>> violations) {
			this.violations = violations;
		}

		public Set<ConstraintViolation<SendRestoreLinkRequestModel>> getViolations() {
			return violations;
		}
	}
}
