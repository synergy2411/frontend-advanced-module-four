import { Component } from '@angular/core';

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent {

  title: string = "My Awesome App";

  user = {
    firstName: "John",
    lastName: "Doe",
    dob: new Date("Dec 21, 1998"),
    income: 50000,
    company: "XYZ Company",
    votes: 120,
    avatar: "https://randomuser.me/api/portraits/men/1.jpg"
  }

  onMoreInfo(lastName: string, company: string) {
    alert(`Mr. ${lastName} is working with ${company}!`)
  }

  changeVotes(event: any) {
    this.user.votes = Number(event.target.value);
  }

}
