import { Invoice } from "./model/Invoices.js";
import { ListTemplate } from "./model/list-container.js";
import { Payment } from "./model/Payments.js";
window.onload = function () {
    const title = document.querySelector("#title");
    const btnAdd = document.querySelector("#btn-add");
    // const btnAdd : HTMLButtonElement = <HTMLButtonElement> document.querySelector("#btn-add")
    const paymentType = document.querySelector("#payment-type");
    const amount = document.querySelector("#amount");
    const createdAt = document.querySelector("#created-at");
    const ulContainer = document.querySelector("#list-container");
    const list = new ListTemplate(ulContainer);
    btnAdd.addEventListener("click", function (event) {
        event.preventDefault();
        let doc;
        if (paymentType.value === "payment") {
            doc = new Payment(title.value, Number(amount.value), new Date(createdAt.value));
        }
        else {
            doc = new Invoice(title.value, Number(amount.value), new Date(createdAt.value));
        }
        list.render(paymentType.value, doc);
    });
};
