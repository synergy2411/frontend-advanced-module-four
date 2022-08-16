import { HasFormatter } from "./model/hasFormatter.interface"
import { Invoice } from "./model/Invoices"
import { Payment } from "./model/Payments"

window.onload = function () {
    const title = document.querySelector("#title") as HTMLInputElement
    const btnAdd = document.querySelector("#btn-add") as HTMLButtonElement
    // const btnAdd : HTMLButtonElement = <HTMLButtonElement> document.querySelector("#btn-add")
    const paymentType = document.querySelector("#payment-type") as HTMLSelectElement
    const amount = document.querySelector("#amount") as HTMLInputElement
    const createdAt = document.querySelector("#created-at") as HTMLInputElement

    btnAdd.addEventListener("click", function (event: Event) {
        event.preventDefault();
        console.log("Payment type : ", paymentType.value);
        let doc: HasFormatter;
        if (paymentType.value === "payment") {
            doc = new Payment(title.value, Number(amount.value), new Date(createdAt.value))
        } else {
            doc = new Invoice(title.value, Number(amount.value), new Date(createdAt.value))
        }
        console.log(doc)
    })
}