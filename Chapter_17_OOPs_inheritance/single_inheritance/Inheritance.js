class BasePage{
    constructor(){
        console.log("BasePage Constructor");
    }
    open(){ 
        console.log("BasePage Open");
    }
    close(){
        console.log("BasePage Close");
    }
}   

class LoginPage extends BasePage{
}

let login = new LoginPage();
login.open();
login.close();

