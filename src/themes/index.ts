import Dark from "./dark"
import Default from "./default"

export interface Theme {
        name : string;
        colors: {
                primary : string;
        }
}

export { Dark, Default }; 