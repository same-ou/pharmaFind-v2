package com.ensam.pharmacyms.pharmacy;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/pharmacies")
@RequiredArgsConstructor
public class PharmacyController {
    private final PharmacyService pharmacyService;

    @GetMapping
    public ResponseEntity<List<PharmacyResponse>> getAllPharmacies(){
        return ResponseEntity.ok(pharmacyService.getAllPharmacies());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PharmacyResponse> getPharmacy(
            @PathVariable String id){
        return ResponseEntity.ok(pharmacyService.getPharmacy(id));
    }

    @PostMapping
    public ResponseEntity<PharmacyResponse> addPharmacy(
            @RequestBody PharmacyRequest pharmacyRequest){
        return ResponseEntity.ok(pharmacyService.addPharmacy(pharmacyRequest));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PharmacyResponse> updatePharmacy(
            @PathVariable String id,
            @RequestBody PharmacyRequest pharmacyRequest){
        return ResponseEntity.ok(pharmacyService.updatePharmacy(id, pharmacyRequest));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePharmacy(
            @PathVariable String id){
        pharmacyService.deletePharmacy(id);
        return ResponseEntity.ok().build();
    }
}
