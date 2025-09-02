import java.util.LinkedList;

class Employee {
    int id;
    String name;

    Employee(int id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public String toString() {
        return "Employee{id=" + id + ", name='" + name + "'}";
    }
}

class Main {
    public static void main(String[] args) {
        Employee emp1 = new Employee(1, "Alice");
        Employee emp2 = new Employee(2, "Bob");

        LinkedList<Employee> employeeList = new LinkedList<>();
        employeeList.add(emp1);
        employeeList.add(emp2); 

        employeeList.add(new Employee(3, "Charlie"));

        System.out.println("First element in: " + employeeList.getFirst());

        for(Employee emp : employeeList) {
            System.out.println(emp.name);
        }

        System.out.println("Total employees: " + employeeList.size());

        employeeList.remove(1); // Remove Bob

        System.out.println("After removal, total employees: " + employeeList.size());

        System.out.println("Employees in list:"+ employeeList);
    }
}