/* local files */
import { Settings } from "../types/server";
import { Interaction } from "./interaction";
import { Callback } from "../interface/callback";


/* 3rd party modules */
import nacl from "tweetnacl";
import bodyParser from "body-parser";
import express from "express";


export class Server {
    private server: any;
    private settings: Settings;
    private events: Map<string, Callback> = new Map();

    constructor(settings: Settings) {
        if (!settings.publicKey) new Error("Please provide an public key!").name = "NoPublicKey";
        
        this.settings = settings;
        this.settings.port = settings.port || 4000;
    }

    start() {
        this.server = express();

        // Middleware
        this.server.use(bodyParser.json({
            verify: (req: any, res: any, buf: any) => {
              req.rawBody = buf
            }
        }))

        this.server.listen(this.settings.port, () => console.log(`Server started @ http://localhost:${this.settings.port}`))
        this.index()
    }

    private index() {
        // POST Index route.
        this.server.post('/', async (req: any, res: any) => {
            // Validate requestion
            if (!this.validate(req)) return res.status(400).send("invalid request signature");

            switch(req.body.type) {
                case 1:
                    // Acknowledge ping
                    res.status(200).send({
                        type: 1
                    });
                    break;

                case 2:
                    // Handle application command
                    this.emit('interaction', (new Interaction(req, res)));
                    break;

                case 3:
                    // Message component
                    this.emit('message_component', (req.body, res));
                    break;

                case 4:
                    this.emit('autocomplete', (req.body, res));
                    // Application command autocomplete
                    break;
            
                default:
                    res.status(400).send("invalid action");
            }

        })
    }

    private validate(req: any) {
        const signature = req.headers['x-signature-ed25519'];
        const timestamp = req.headers['x-signature-timestamp'];
        const rawBody = req.rawBody;

        const isVerified = nacl.sign.detached.verify(
            Buffer.from(timestamp + rawBody),
            Buffer.from(signature, 'hex'),
            Buffer.from(this.settings.publicKey, 'hex')
        )

        return isVerified;
    }


    on(event: string, callback: Callback) { this.events.set(event, callback); }

    emit(event: string, data?: any) {
        let callback = this.events.get(event);
        if (!callback) return;
        callback(data);
    }

}