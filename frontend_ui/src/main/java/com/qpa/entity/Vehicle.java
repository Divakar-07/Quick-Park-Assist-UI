package com.qpa.entity;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.validation.constraints.*;

public class Vehicle {
    
    private Long vehicleId;

    @NotBlank(message = "Registration number is required")
    @Pattern(regexp = "^[A-Z]{2}\\d{2}[A-Z0-9]{6}$", message = "Invalid registration number format (e.g., UP16DS4141)")
    private String registrationNumber;

    @NotBlank(message = "Vehicle type is required")
    private String vehicleType;

    @NotBlank(message = "Brand is required")
    private String brand;

    @NotBlank(message = "Model is required")
    private String model;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @NotNull(message = "Registration date is required")
    private LocalDate registrationDate;

    @NotNull(message = "Status is required")
    private Status Vstatus;

    @NotNull(message = "User is required")
    private UserInfo userObj;

    public Vehicle() {
    }

    // Getters and Setters

    public enum Status { ACTIVE, INACTIVE }

    public Long getVehicleId() {
        return vehicleId;
    }

    public void setVehicleId(Long vehicleId) {
        this.vehicleId = vehicleId;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getVehicleType() {
        return vehicleType;
    }

    public void setVehicleType(String vehicleType) {
        this.vehicleType = vehicleType;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public LocalDate getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(LocalDate registrationDate) {
        this.registrationDate = registrationDate;
    }

    public Status getStatus() {
        return Vstatus;
    }

    public void setStatus(Status status) {
        this.Vstatus = status;
    }

    public UserInfo getUserObj() {
        return userObj;
    }

    public void setUserObj(UserInfo userObj) {
        this.userObj = userObj;
    }
}
