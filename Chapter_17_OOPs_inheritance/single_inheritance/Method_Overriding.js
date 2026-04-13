class baseTest {
    setup() {
        console.log("Base setup");
    }
}
class LoginTest extends baseTest {
    setup() {
        console.log("LoginTest setup");
    }
}

let login = new LoginTest();
login.setup();