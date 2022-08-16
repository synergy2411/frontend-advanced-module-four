import { Invoice } from "./model/Invoices";
import { Payment } from "./model/Payments";
window.onload = function () {
    const title = document.querySelector("#title");
    const btnAdd = document.querySelector("#btn-add");
    // const btnAdd : HTMLButtonElement = <HTMLButtonElement> document.querySelector("#btn-add")
    const paymentType = document.querySelector("#payment-type");
    const amount = document.querySelector("#amount");
    const createdAt = document.querySelector("#created-at");
    btnAdd.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Payment type : ", paymentType.value);
        let doc;
        if (paymentType.value === "payment") {
            doc = new Payment(title.value, Number(amount.value), new Date(createdAt.value));
        }
        else {
            doc = new Invoice(title.value, Number(amount.value), new Date(createdAt.value));
        }
        console.log(doc);
    });
};
