import { Button } from "../structs/Button"
import { Slash } from "../structs/Slash"

export type EmbedAuthor = { name: string, icon_url: string, url?: string }
export type EmbedField = { name: string, value: string, inline?: boolean }
export type EmbedFooter = { text: string, icon_url: string }
export type EmbedImage = { url: string }

export type User = { avatar: string, discriminator: string, id: string, public_flags: number, username: string, bot?: boolean }

export type Embed = { title: string, description: string, color: number | undefined, url: string, author: EmbedAuthor, footer: EmbedFooter, image: EmbedImage, timestamp: Date | undefined, fields: Array<EmbedField> }
export type Message = { attachments?: Array<any>, author: User, components: Array<any>, channel_id: string, content?: string, edited_timestamp: string | null, embeds?: Array<Embed>, flags: number, id: string, mention_everyone: boolean, mention_roles: Array<any>, mentions: Array<any>, pinned: boolean, timestamp: string, tts: boolean, type: number }
export type InteractionOption = { name: string, type: number, value: string }
// export type InteractionData = { id: string, name: string, type: number, options?: Array<InteractionOption> }
export type InteractionMember = { avatar: string | null, communication_disabled_until: any | null, deaf: boolean, is_pending: boolean, joined_at: string, mute: false, nick: string | null, pending: boolean, permissions: string, premium_since: string | null, roles: Array<any>, user: User }
export type InteractionResponse = { content?: string, embeds?: Array<Embed>, flags?: number}

export type InteractionData = SlashPayload | MessageButton | SelectMenu;


export type Interactions = "SLASH" | "BUTTON" | "MENU" | "AUTOCOMPLETE";

export type SlashPayload = {
    type: "SLASH",
    options: Slash
}

export type MessageButton = {
    type: "BUTTON",
    options: Button
    
}

export type SelectMenu = {

}