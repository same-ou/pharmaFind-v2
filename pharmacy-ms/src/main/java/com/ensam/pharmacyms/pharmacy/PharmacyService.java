package com.ensam.pharmacyms.pharmacy;

import java.util.List;

public interface PharmacyService {
    PharmacyResponse addPharmacy(PharmacyRequest pharmacyRequest);
    PharmacyResponse getPharmacy(String id);
    PharmacyResponse updatePharmacy(String id, PharmacyRequest pharmacyRequest);
    void deletePharmacy(String id);
    List<PharmacyResponse> getAllPharmacies();
    List<PharmacyResponse> getNearPharmacies(double longitude, double latitude, double maxDistance);
}
