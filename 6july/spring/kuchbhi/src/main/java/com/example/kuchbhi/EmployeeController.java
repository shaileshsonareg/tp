package com.example.kuchbhi;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;


@RestController
@RequestMapping("/emp")
public class EmployeeController {
    
    private final EmployeeRepository repo;

    public EmployeeController(EmployeeRepository repo) {
        this.repo = repo;
    }

    private List<Employee> emps = new ArrayList<>();

    @RequestMapping("/listing")
    public List<Employee> getAll() {

        emps.add(new Employee(1, "Sahil"));
        emps.add(new Employee(2, "Komal"));
        emps.add(new Employee(3, "Sarah"));

        // int offset = 10; 
        // int limit = 10;
        // String sql = "Select * from employees LIMIT " + offset + ", " + limit;

        return this.emps;
    }

    @RequestMapping("/list")
    public List<Employee> getFromDb() {

        return this.repo.findAll();

    }


    @RequestMapping(path="/test", method=RequestMethod.POST)
    public String test2() {
        return "Hello from test Post method";
    }
    

    @RequestMapping(path="/test", method=RequestMethod.GET)
    public String test() {
        return "Hello From test method inside EmpController";
    }

    @RequestMapping("/home")
    public String home() {
        return "Hello From home method inside EmpController";
    }
}
