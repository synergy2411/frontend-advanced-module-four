export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(paymentType, doc) {
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");
        h3.innerHTML = paymentType.toUpperCase();
        h3.classList.add("text-center");
        p.innerHTML = doc.format();
        if (paymentType === "payment") {
            li.style.backgroundColor = "red";
        }
        else {
            li.style.backgroundColor = "green";
        }
        li.classList.add("list-group-item");
        li.append(h3);
        li.append(p);
        this.container.appendChild(li);
    }
}
