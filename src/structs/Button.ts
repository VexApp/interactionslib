import { InteractionData, InteractionMember, InteractionResponse, Interactions, Message } from "../types/Discord";

export class Button {
    private req: any;
    private res: any;

    private _member: InteractionMember; //  = { avatar: null, communication_disabled_until: null, deaf: false, is_pending: false, joined_at: '', mute: false, nick: null, pending: false, permissions: "", premium_since: null, roles: [], user: { avatar: "", discriminator: "", id: "", public_flags: 256, username: '' }};
    private _message: Message; //  { attachments: [], author: { avatar: "", bot: false, discriminator: "", id: "", public_flags: 256, username: "" }, channel_id: "", components: [], edited_timestamp: null, flags: 0, embeds: [], id: "", mention_everyone: false, mention_roles: [], pinned: false}
    private _data: InteractionData;
    private _application_id: string;
    private _id: string;
    private _guild_id: string;
    private _channel_id: string;
    private _guild_locale: string;
    private _locale: string;
    private _token: string;
    private _type: Interactions = "BUTTON";
    private _version: number;

    constructor(req: any, res: any) {

        this.req = req;
        this.res = res;

        this._member = req.body.member; 
        this._message = req.body.message;

        this._data = req.body.data;

        this._id = req.body.id;
        this._application_id = req.body.application_id;

        this._guild_id = req.body.guild_id;
        this._channel_id = req.body.channel_id;

        this._guild_locale = req.body.guild_locale;
        this._locale = req.body.locale;

        this._token = req.body.token;
        this._version = req.body.version;

    }

    get member(): InteractionMember { return this._member; }
    get message(): Message { return this._message; }

    get data(): InteractionData { return this._data; }

    get id(): string { return this._id; }
    get application_id(): string { return this._application_id}

    get guild_id(): string { return this._guild_id; }
    get channel_id(): string { return this._channel_id; }

    get guild_locale(): string { return this._guild_locale; }
    get locale(): string { return this._locale; }

    get token(): string { return this._token; }
    get version(): number { return this._version; }

    get type(): Interactions { return this._type; }

    async reply(data: string | InteractionResponse) {
        if (typeof(data) == 'string') {
            console.log('reply')
            return this.res.status(200).send({
                type: 4,
                data: {
                    content: data,
                }
            })
        } else {
            console.log('reply')
            return this.res.status(200).send({
                type: 4,
                data
            })
        }
    }
}