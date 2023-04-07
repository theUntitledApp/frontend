import { Image } from "react-native/types";
import { Observable } from "rxjs";
import { Reaction } from "./reaction";

export interface Reactable {
    reactionStream$: Observable<Reaction>;
    image: Image;
}