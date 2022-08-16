import { HasFormatter } from "./model/hasFormatter.interface"
import { Invoice } from "./model/Invoices.js"
import { ListTemplate } from "./model/list-container.js"
import { Payment } from "./model/Payments.js"

window.onload = function () {
    const title = document.querySelector("#title") as HTMLInputElement
    const btnAdd = document.querySelector("#btn-add") as HTMLButtonElement
    // const btnAdd : HTMLButtonElement = <HTMLButtonElement> document.querySelector("#btn-add")
    const paymentType = document.querySelector("#payment-type") as HTMLSelectElement
    const amount = document.querySelector("#amount") as HTMLInputElement
    const createdAt = document.querySelector("#created-at") as HTMLInputElement
    const ulContainer = document.querySelector("#list-container") as HTMLUListElement;
    const list = new ListTemplate(ulContainer);

    btnAdd.addEventListener("click", function (event: Event) {
        event.preventDefault();
        let doc: HasFormatter;
        if (paymentType.value === "payment") {
            doc = new Payment(title.value, Number(amount.value), new Date(createdAt.value))
        } else {
            doc = new Invoice(title.value, Number(amount.value), new Date(createdAt.value))
        }
        list.render(paymentType.value, doc)
    })
}