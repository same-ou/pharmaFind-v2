package com.ensam.pharmacyms.pharmacy;

public interface PharmacyMapper {
    Pharmacy toPharmacy(PharmacyRequest pharmacyRequest);
    PharmacyResponse toPharmacyResponse(Pharmacy pharmacy);
    Address toAddress(AddressDTO addressDTO);
    AddressDTO toAddressDTO(Address address);
}
