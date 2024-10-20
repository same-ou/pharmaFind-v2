package com.ensam.pharmacyms.pharmacy;

import lombok.*;

@Setter
@Getter @AllArgsConstructor @NoArgsConstructor @Builder
public class PharmacyResponse {
    private String id;
    private String name;
    private String phone;
    private String email;
    private String description;
    private AddressDTO address;
    private String logoUrl;
    private String coverUrl;
}
