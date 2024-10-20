package com.ensam.pharmacyms.pharmacy;

import org.springframework.data.geo.Point;
import org.springframework.stereotype.Service;

@Service
public class PharmacyMapperImpl implements PharmacyMapper {

    @Override
    public Pharmacy toPharmacy(PharmacyRequest pharmacyRequest) {
        if (pharmacyRequest == null) {
            return null;
        }
        Pharmacy.PharmacyBuilder pharmacy = Pharmacy.builder();
        pharmacy.name(pharmacyRequest.getName());
        pharmacy.phone(pharmacyRequest.getPhone());
        pharmacy.email(pharmacyRequest.getEmail());
        pharmacy.description(pharmacyRequest.getDescription());
        pharmacy.address(toAddress(pharmacyRequest.getAddress()));
        return pharmacy.build();
    }

    @Override
    public PharmacyResponse toPharmacyResponse(Pharmacy pharmacy) {
        if (pharmacy == null) {
            return null;
        }
        PharmacyResponse pharmacyResponse = new PharmacyResponse();
        pharmacyResponse.setId(pharmacy.getId());
        pharmacyResponse.setName(pharmacy.getName());
        pharmacyResponse.setPhone(pharmacy.getPhone());
        pharmacyResponse.setEmail(pharmacy.getEmail());
        pharmacyResponse.setDescription(pharmacy.getDescription());
        pharmacyResponse.setAddress(toAddressDTO(pharmacy.getAddress()));
        pharmacyResponse.setLogoUrl(pharmacy.getLogoUrl());
        pharmacyResponse.setCoverUrl(pharmacy.getCoverUrl());
        return pharmacyResponse;
    }

    @Override
    public Address toAddress(AddressDTO addressDTO) {
        if (addressDTO == null) {
            return null;
        }
        Address.AddressBuilder address = Address.builder();
        address.street(addressDTO.getStreet());
        address.city(addressDTO.getCity());
        address.zip(addressDTO.getZip());
        address.location(new Point(addressDTO.getLongitude(), addressDTO.getLatitude()));
        return address.build();
    }

    @Override
    public AddressDTO toAddressDTO(Address address) {
        if (address == null) {
            return null;
        }
        AddressDTO.AddressDTOBuilder addressDTO = AddressDTO.builder();
        addressDTO.street(address.getStreet());
        addressDTO.city(address.getCity());
        addressDTO.zip(address.getZip());
        addressDTO.longitude(address.getLocation().getX());
        addressDTO.latitude(address.getLocation().getY());
        return addressDTO.build();
    }
}
