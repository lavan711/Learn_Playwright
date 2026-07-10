class Father {
    home(): void {
        console.log("2BHK");
    }
}

class Lavan extends Father {
    override home(): void {
        console.log("3BHK");
    }
}

let lavan = new Lavan();
let parent = new Father();
lavan.home();
parent.home();