package com.ensam.pharmacyms.pharmacy;

import com.ensam.pharmacyms.exception.PharmacyNotFound;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PharmacyServiceImpl implements PharmacyService {
    private final PharmacyRepository pharmacyRepository;
    private final PharmacyMapper pharmacyMapper;

    @Override
    public PharmacyResponse addPharmacy(PharmacyRequest pharmacyRequest) {
        Pharmacy pharmacy = pharmacyMapper.toPharmacy(pharmacyRequest);
        Pharmacy savedPharmacy = pharmacyRepository.save(pharmacy);
        return pharmacyMapper.toPharmacyResponse(savedPharmacy);
    }

    @Override
    public PharmacyResponse getPharmacy(String id) {
        return pharmacyRepository.findById(id)
                .map(pharmacyMapper::toPharmacyResponse)
                .orElseThrow(() -> new PharmacyNotFound("Pharmacy not found"));
    }

    @Override
    public PharmacyResponse updatePharmacy(String id, PharmacyRequest pharmacyRequest) {
        // todo implement
        return null;
    }

    @Override
    public void deletePharmacy(String id) {
        pharmacyRepository.deleteById(id);
    }

    @Override
    public List<PharmacyResponse> getAllPharmacies() {
        List<Pharmacy> pharmacies = pharmacyRepository.findAll();
        return pharmacies.stream()
                .map(pharmacyMapper::toPharmacyResponse)
                .toList();
    }

    @Override
    public List<PharmacyResponse> getNearPharmacies(double longitude, double latitude, double maxDistance) {
        return List.of();
    }
}
