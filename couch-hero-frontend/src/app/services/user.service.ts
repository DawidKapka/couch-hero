import {Injectable} from "@angular/core";
import {User} from "../shared/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private user: User = {username: 'Jane', points: 150};
    private friend: User = {username: 'Mary', points: 60};

    getUsername(): string { return this.user.username; }

    getPoints(): number { return this.user.points; }

    getUser(): User { return this.user; }

    getFriend(): User { return this.friend}
}
