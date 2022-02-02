import { InteractionData } from "../types/Discord";
import { Button } from "./Button";
import { Slash } from "./Slash";

export class Interaction {

    private req: any;
    private res: any;
    public data: InteractionData;

    constructor(req: { body: InteractionData }, res: any) {
        this.data = req.body;
        this.req = req;
        this.res = res;

        this.processInteraction();
    }

    private processInteraction() {
         if (this.req.body.type == 2) {
            this.data = new Slash(this.req, this.res);
         } else if (this.req.body.type == 3) {
             this.data = new Button(this.req, this.res);
         }
    }

    isSlashCommand(): this is { data: Slash } {
        return (this.data as Slash).type == "SLASH";
    }

    isButton(): this is { data: Button} {
        return (this.data as Button).type == "BUTTON";
    }

    isAutocomplete() {

    }
}