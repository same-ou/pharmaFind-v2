package com.ensam.pharmacyms.pharmacy;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PharmacyRepository extends MongoRepository<Pharmacy, String> {
}
