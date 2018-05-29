import { Quality, Position, Role, TeamStatus } from './enums';

export class User {
    username: string;
    email: string;
    password: string;
    level: number;
    experience: number;
    coins: number;
    dollars: number;
    energy: number;
    maxEnergy: number;
    hasTeam: boolean;
}

export class FullName {
    firstName: string;
    lastName: string;
}

export class BasePlayer {
    fullName: FullName;
    quality: string;
    overall: number;
    nationality: string;
    league: string;
    club: string;
}

export class Player {
    id: number;
    basePlayer: BasePlayer;
    headshotImgUrl: string;
    multiplier: number;
    position: string;
    currentOverall: number;
    role: string;
    currentLevel: number;
    maxLevel: number;
    tradeable: boolean;
    teamStatus: string;
    isInSquadBuilder: boolean;
    user?: User;
}

export class AITeam {
    name: string;
    crestUrl: string;
    defence: number;
    midfield: number;
    attack: number;
}

export class StorePack {
    description: string;
    quality?: string;
    numberOfPlayers?: number;
    roles?: string;
    position?: string;
    priceInCoins?: number;
    priceInDollars?: number;
    priceInRealLife?: number;
    coins?: number;
    dollars?: number;
}
