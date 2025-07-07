package com.example.demo;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
@RequestMapping("/demoapi")
public class DemoApi {
    
    @RequestMapping(path="/users", method=RequestMethod.GET)
    public String getUsers() {
        return "I am from users GET";
    }
    
    @RequestMapping(path="/users", method=RequestMethod.POST) 
    public String setUser () {
        return "I am from users POST";
    }

}
