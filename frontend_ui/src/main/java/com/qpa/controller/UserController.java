package com.qpa.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qpa.entity.UserInfo;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {
    @PostMapping("/save")
public ResponseEntity<String> registerUser(@Valid @RequestBody UserInfo userInfo, BindingResult result) {
    if (result.hasErrors()) {
        return ResponseEntity.badRequest().body(result.getAllErrors().get(0).getDefaultMessage());
    }
    // Save user logic
    return ResponseEntity.ok("User registered successfully!");
}
}
