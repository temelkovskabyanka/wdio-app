import SimpleFormDemo from "../pageObject/SimpleFormDemo";

describe("Simple Form Demo", () => {
   it("Simple Form Demo - Single Input Field", () => {
       let expected = "Zdravo Zoey";
       SimpleFormDemo.open();
       SimpleFormDemo.userMessage.setValue(expected);
       SimpleFormDemo.showMessageButton.click();
       expect(SimpleFormDemo.messageText).to.equal(expected);
   });

   it("Simple Form Demo - Two Input Fields", () => {
        let expected = "9";
        SimpleFormDemo.open();
        SimpleFormDemo.fieldA.setValue(3);
        SimpleFormDemo.fieldB.setValue(6);
        SimpleFormDemo.getTotalButton.click();
        expect(SimpleFormDemo.displayValueText).to.equal(expected);
   });
});