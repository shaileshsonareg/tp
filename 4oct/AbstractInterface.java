interface DBConn {

    public void select();

    public void insert();

    public void delete();

    public void update();
     
}


class MySQL implements DBConn {

    public void select(){
        System.out.println("I am from select");
    }

    
    public void insert(){
        System.out.println("I am from insert");
    }

    
    public void delete(){
        System.out.println("I am from delete");
    }

    
    public void update(){
        System.out.println("I am from update");
    }
}

class Main {
    public static void main(String[] args) {
        MySQL obj = new MySQL();
        obj.select();
        obj.delete();
        obj.update();
        obj.insert();
    }
}