package com.ensam.pharmacyms.pharmacy;

import lombok.Getter;

@Getter
public class PharmacyRequest {
    private String name;
    private String phone;
    private String email;
    private String description;
    private AddressDTO address;

}
