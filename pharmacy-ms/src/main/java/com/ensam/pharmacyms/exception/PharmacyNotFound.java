package com.ensam.pharmacyms.exception;

public class PharmacyNotFound extends RuntimeException{
    public PharmacyNotFound(String message) {
        super(message);
    }
}
