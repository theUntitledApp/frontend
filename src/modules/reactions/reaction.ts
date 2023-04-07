import { Icon } from "../../components/Icon";

export interface Reaction {
    icon: Icon;
}

export class LikeReaction implements Reaction {
    icon: Icon = 'friends';
}