package com.ensam.pharmacyms;

import com.ensam.pharmacyms.pharmacy.Address;
import com.ensam.pharmacyms.pharmacy.Pharmacy;
import com.ensam.pharmacyms.pharmacy.PharmacyRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.geo.Point;

@SpringBootApplication
public class PharmacyMsApplication {

    public static void main(String[] args) {
        SpringApplication.run(PharmacyMsApplication.class, args);
    }

    @Bean
    CommandLineRunner commandLineRunner(PharmacyRepository pharmacyRepository) {
        return  args -> {
            System.out.println("Hello");
            Pharmacy pharmacy = Pharmacy.builder()
                    .name("Pharmacy 1")
                    .address(Address.builder()
                            .city("Casablanca")
                            .zip("20200")
                            .street("Rue 1")
                            .location(new Point(33.5, -7.6))
                            .build())
                    .build();
            pharmacyRepository.save(pharmacy);
        };
    }

}
