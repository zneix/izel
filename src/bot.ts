import { Client } from 'discord.js'
import { loadCommands, loadEvents, loadDashboard } from './utils/loader';
import { Command } from './interfaces/command';
import { Event } from './interfaces/event';
import { Db, MongoClient } from 'mongodb';
import { notify } from 'notify-send';
import { bot } from '.';

export class Bot {
    client: Client = new Client();
    commands: Command[] = [];
    events: Event[] = [];
    database: Db;

    start(token: string): void {
        process.on('unhandledRejection', err => {
            console.log(err);
        });

        MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true })
            .then(conn => {
                bot.database = conn.db('izel');
                loadEvents(this);
                loadCommands(this);
                loadDashboard(this);
                notify('Izel', 'Bot is ready');

                this.client.login(token);
            })
            .catch(console.error);
    }
}