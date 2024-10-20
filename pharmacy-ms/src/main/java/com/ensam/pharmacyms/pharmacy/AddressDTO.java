package com.ensam.pharmacyms.pharmacy;

import lombok.*;

@Getter @Setter
@AllArgsConstructor @NoArgsConstructor @Builder
public class AddressDTO {
    private String street;
    private String city;
    private String zip;
    private double latitude;
    private double longitude;
}
