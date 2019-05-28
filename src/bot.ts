import { Client } from 'discord.js'
import { loadCommands, loadEvents, loadDashboard } from './utils/loader';
import Command from './interfaces/command';
import Event from './interfaces/event';
import { MongoClient, Collection, Db as Database } from 'mongodb';
import { User, Server, Permission, Tag } from './interfaces/databaseStructures';

export default class Bot {
    client: Client = new Client({ disableEveryone: true });
    commands: Command[] = [];
    events: Event[] = [];

    users: Collection<User>;
    servers: Collection<Server>;
    permissions: Collection<Permission>;
    tags: Collection<Tag>;

    music: any = {};

    async start(token: string): Promise<void> {
        process.on('unhandledRejection', console.error);

        let conn: MongoClient = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        let database: Database = conn.db('izel');

        this.users = database.collection('users');
        this.servers = database.collection('servers');
        this.permissions = database.collection('permissions');
        this.tags = database.collection('tags');

        loadEvents(this);
        loadCommands(this);
        loadDashboard();

        this.client.login(token);
    }
}
