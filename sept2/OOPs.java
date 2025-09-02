interface Animal {
    void eat();
    void sleep();

    public void foo() {
        System.out.println("This is a default method in the interface.");
    }
}

class Dog implements Animal {
    @Override
    public void eat() {
        System.out.println("Dog is eating.");
    }

    @Override
    public void sleep() {
        System.out.println("Dog is sleeping.");
    }
}

class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        System.out.println("Dog Details:");
        dog.sleep();
        dog.foo();
        dog.eat();
    }
}