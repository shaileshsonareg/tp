class Bank {

    int balance;

    public Bank(int b) {
        this.balance = b;
    }

    public void showBalance() {
        System.out.println("Available Balance: " + this.balance);
    }

    public void deposit(int amount){
        balance += amount;
    }

    
    public void withdraw(int amount){
        balance -= amount;
    }

}


class HDFC extends Bank {

    public HDFC(int b) {
        super(b);
    }

}

class SBI extends Bank {
    public SBI(int b) {
        super(b);
    }

    public void withdraw(int amount){
        balance = balance - amount - 100;
    }
}

class Main {

    public static void main(String args[]) {


        // Bank b1 = new Bank(1000);
        // HDFC b1 = new HDFC(1000);
        SBI b1 = new SBI(1000);
        b1.showBalance();
        b1.deposit(500);
        b1.showBalance(); //1500
        b1.withdraw(300);
        b1.showBalance(); //1100
    }

}