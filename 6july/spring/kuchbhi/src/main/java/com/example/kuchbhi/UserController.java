package com.example.kuchbhi;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {
 
    @RequestMapping("/test")
    public String test() {
        return "Hello From test method inside UserController";
    }

    @RequestMapping("/home")
    public String home() {
        return "Hello From home method inside UserController";
    }
    
}
