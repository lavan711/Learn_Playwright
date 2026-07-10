class BaseTest {
    lav_ready(): void {
        console.log("[BASE] Open browser");
    }
    lav_done(): void {
        console.log("[BASE] Close browser");
    }
}
class LoginTest extends BaseTest {

    override lav_ready(): void {
        console.log("[LoginTest] Open browser");
        console.log("[LoginTest] Maximize");
    }
}

class APITest extends BaseTest {

    override lav_ready(): void {
        console.log("[APITest] No Browser!");
    }
}

let test = new LoginTest();
test.lav_ready();

let apitest = new APITest();
apitest.lav_ready();