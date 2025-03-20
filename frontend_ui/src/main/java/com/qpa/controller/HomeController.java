package com.qpa.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
public class HomeController {
    @GetMapping({"/", "/index"})
    public String HomePage() {
        return "index";
    }

    @GetMapping("/login")
    public String LoginPage() {
        return "login";
    }

    @GetMapping("/userdashboard")
    public String UserDashboard() {
        return "userdashboard";
    }

    
}
