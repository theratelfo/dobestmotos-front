package com.dobestmotos.dobestmotosspring.utils;

import org.springframework.stereotype.Component;

import java.nio.ByteBuffer;
import java.util.UUID;

@Component
public class UniqueNumberGenerator {

    public int generateUniqueNumber() {
        UUID uuid = UUID.randomUUID();
        long longValue = ByteBuffer.wrap(new byte[16])
                .putLong(uuid.getMostSignificantBits())
                .putLong(uuid.getLeastSignificantBits())
                .getLong();

        // Asegúrate de que el número sea positivo para evitar problemas con números negativos
        return Math.abs((int) longValue);
    }      
}
