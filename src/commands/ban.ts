import Command from '../interfaces/command';
import { Message, GuildMember } from 'discord.js';
import Messages from '../interfaces/messages';

export default class BanCommand implements Command {
    info = {
        names: ['ban'],
        description: 'Bannin crazy',
        usage: '&ban (ping) { reason }',
        category: 'admin'
    };

    run(message: Message, args: string[], messages: Messages): any {
        if(!message.member.hasPermission('BAN_MEMBERS'))
            return message.reply(messages.noPermission);
        if(!args.length)
            return message.reply(`${messages.use} \`${this.info.usage}\``);
        if(!args[0].match(/<@[0-9]{17,}>/))
            return message.reply(`${messages.use} \`${this.info.usage}\``);

        let member: GuildMember = message.guild.member(args[0].substring(2, 20) || message.guild.member(args[0].substring(2, 19)));
        if(!member)
            return message.reply(messages.couldNotFind);
        if(!member.bannable)
            return message.reply(messages.couldNotBan);

        member.user.send(
            messages.youWereBanned.replace('{}', message.guild.name)
            + ((args.length > 0) ? ': ' + args.join(' ') : '')
        ).then((): void => {
            member.ban();
            message.reply(messages.banned.replace('{}', member.user.username));
        });
    }
}
