package com.ensam.pharmacyms.exception;

import org.apache.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(PharmacyNotFound.class)
    public ResponseEntity<String> handle(PharmacyNotFound exception){
        return ResponseEntity.status(HttpStatus.SC_NOT_FOUND).body(exception.getMessage());
    }
}
