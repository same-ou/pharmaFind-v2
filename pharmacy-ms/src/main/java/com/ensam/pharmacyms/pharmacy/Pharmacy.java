package com.ensam.pharmacyms.pharmacy;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter @Setter @ToString
@AllArgsConstructor @NoArgsConstructor @Builder
@Document
public class Pharmacy {
    @Id
    private String id;
    private String name;
    private String phone;
    private String email;
    private String description;
    private Address address;
    private String logoUrl;
    private String coverUrl;
}
