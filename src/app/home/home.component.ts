import { Component, OnInit } from "@angular/core";
import { DataService, IDataItem } from "../shared/data.service";
import {UserService} from "~/app/shared/services/user.service";
import {RouterExtensions} from "nativescript-angular";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    message = "You have successfully authenticated. This is where you build your core application functionality.";

    constructor(private userService: UserService, private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
    }

    logout() {
        this.userService.logout();
        this.routerExtensions.navigate(["/login"], { clearHistory: true });
    }
}
