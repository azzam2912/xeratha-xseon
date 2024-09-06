import { Client, Databases, Account } from "appwrite";
import { PUBLIC_WRITEAPP_ENDPOINT, PUBLIC_WRITEAPP_PROJECT } from "$env/static/public";

const client = new Client();
client
    .setEndpoint(PUBLIC_WRITEAPP_ENDPOINT)
    .setProject(PUBLIC_WRITEAPP_PROJECT);

export const account = new Account(client);
export const databases = new Databases(client);
