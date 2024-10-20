package com.ensam.pharmacyms.pharmacy;

import lombok.*;
import org.springframework.data.geo.Point;
import org.springframework.data.mongodb.core.index.GeoSpatialIndexed;

@Builder
@AllArgsConstructor @NoArgsConstructor
@Getter @Setter
public class Address {
    private String street, city,  zip;
    private @GeoSpatialIndexed Point location;
}
