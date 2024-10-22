import NodeCache from "node-cache";


export class Cache {
    private static instance: Cache;

    client: any;

    constructor() {
        this.client = new NodeCache();
    }

    public static getInstance(): Cache {
        if (!Cache.instance) {
            Cache.instance = new Cache();
        }
        return Cache.instance;
    }
}