import { remultFresh } from "remult/remult-fresh";
import { JsonEntityFileStorage } from "remult/remult-server";
import { JsonDataProvider } from 'remult';
import { Task } from "../models/task.ts";

export const remultServer = remultFresh({
    entities: [Task],
    dataProvider: new JsonDataProvider(new JsonEntityFileStorage('./database')),
}, Response);

export const handler = remultServer.handle;
