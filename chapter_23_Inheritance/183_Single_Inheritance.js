class BasePage {

    constructor(pageName) {
        this.pageName = pageName;
    }

    open() {
        console.log("Opening the page ");
    }
    close() {
        console.log("Closing the page ");
    }
}

class LoginPage extends BasePage {

}

const page = new LoginPage("Login Page");
console.log(page.pageName);
page.open();
page.close();