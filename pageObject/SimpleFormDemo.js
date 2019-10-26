import BasePage from "./BasePage";

class SimpleFormDemo {

    open() {
        browser.url("basic-first-form-demo.html")
    }
    get userMessage(){
        return  $("#user-message");
    }
    get showMessageButton(){
        return $("/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[2]/form[1]/button[1]");
    }
    get messageText(){
        return $("#display").getText();
    }
    get fieldA(){
        return $("#sum1");
    }
    get fieldB(){
        return $("#sum2");
    }
    get getTotalButton(){
        return $("/html[1]/body[1]/div[2]/div[1]/div[2]/div[2]/div[2]/form[1]/button[1]");
    }
    get displayValueText(){
        return $("#displayvalue").getText();
    }

}

export default new SimpleFormDemo();