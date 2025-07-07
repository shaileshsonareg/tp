package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/emp")
public class EmployeeApi {
    
    @RequestMapping(path="/list",method = RequestMethod.GET)
    public List<Employee> getEmps(@RequestParam("name") String name, @RequestParam("num2") int num2) {
        List<Employee> emps = new ArrayList<>();

        System.out.println("Name: " + name);

        emps.add(new Employee(1, "Sahil", 25000));
        emps.add(new Employee(2, "Komal", 21000));

        List<Employee> filtered = new ArrayList<>();

        filtered = emps
        .stream()
        .filter((e) -> e.getName().equals(name))
        .collect(Collectors.toList());

        return filtered;
    }

}
