import { Client, Message } from 'discord.js';

export interface Command {
    run: (bot: Client, message: Message, args: string[]) => any;

    info: {
        names: string[],
        description: string,
        usage: string
    }
}