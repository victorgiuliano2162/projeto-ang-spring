package org.natuagro.api.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200")
public class UserController {

    @PostMapping
    public ResponseEntity<String> postData(@RequestBody Object data) {
        return ResponseEntity.ok("Dados recebidos");
    }
}
