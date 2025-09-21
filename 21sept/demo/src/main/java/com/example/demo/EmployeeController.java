package com.example.demo;

import com.example.demo.model.Employee;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

    private final List<Employee> employees = new ArrayList<>(
        List.of(
            new Employee(1, "Alice", 50000),
            new Employee(2, "Bob", 60000),
            new Employee(3, "Charlie", 55000)
        )
    );

    // GET all employees (no auth required)
    @GetMapping
    public List<Employee> getAll() {
        return employees;
    }

    // GET single employee
    @GetMapping("/{id}")
    public Employee getOne(@PathVariable int id) {
        return employees.stream()
                .filter(e -> e.getId() == id)
                .findFirst()
                .orElse(null);
    }

    // POST add new employee (auth required)
    @PostMapping
    public String add(@RequestBody Employee e) {
        employees.add(e);
        return "Employee added";
    }

    // PUT update salary/name (auth required)
    @PutMapping("/{id}")
    public String update(@PathVariable int id, @RequestBody Employee updated) {
        for (Employee e : employees) {
            if (e.getId() == id) {
                e.setName(updated.getName());
                e.setSalary(updated.getSalary());
                return "Employee updated";
            }
        }
        return "Not found";
    }

    // DELETE employee (auth required)
    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        employees.removeIf(e -> e.getId() == id);
        return "Employee deleted";
    }
}
