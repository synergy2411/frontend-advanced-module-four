import { HasFormatter } from "./hasFormatter.interface";

export class ListTemplate {
    constructor(private container: HTMLUListElement) { }
    render(paymentType: string, doc: HasFormatter) {
        const li = document.createElement("li") as HTMLLIElement;
        const h3 = document.createElement("h3") as HTMLHeadingElement;
        const p = document.createElement("p") as HTMLParagraphElement;
        h3.innerHTML = paymentType.toUpperCase();
        h3.classList.add("text-center")
        p.innerHTML = doc.format()
        if (paymentType === "payment") {
            li.style.backgroundColor = "red"
        } else {
            li.style.backgroundColor = "green"
        }
        li.classList.add("list-group-item")
        li.append(h3)
        li.append(p)
        this.container.appendChild(li)
    }
}