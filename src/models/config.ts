import * as env from 'dotenv'
import { channelID } from '../config.json';

export const token: string = process.env.DISCORD_TOKEN;
export const nasaToken: string = process.env.DISCORD_TOKEN;
export const chID: string = channelID;