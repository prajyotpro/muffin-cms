import { inject, injectable } from "inversify";
import { Cache } from "../infrastructure/Cache";
// import Types from "../../ioc/types";


export interface ICacheService {
    getService(): Cache;
}

@injectable()
export class CacheService implements ICacheService {

    constructor(
        // @inject(Types.Repository.Project) private projectRepository: IProjectRepository
    ) { }

    getService(): Cache {
        return Cache.getInstance();
    }
}