import { Icon } from "@components/Icon";
import { User } from "../../business-logic/user";

export interface Reaction {
    icon: Icon;
}

export class LikeReaction implements Reaction {
    icon: Icon = 'friends';
}

export interface UserReaction {
    icon: Icon;
    user: User;
}