import axios from "axios";
import { inject, injectable } from "inversify";
import Types from "../ioc/types";
import { ICacheService } from "../service/cacheService";


export interface IGetProjectUseCase {
    execute(params: any): Promise<any | null>;
}

@injectable()
export class GetProjectUseCase implements IGetProjectUseCase {

    constructor(
        @inject(Types.Service.CacheService) private cacheService: ICacheService
    ) { }

    async execute(params: any): Promise<any | null> {

        const cacheStore = this.cacheService.getService();

        let cachedprojects = await cacheStore.client.get("neo-infracon-project");
        
        if(!cachedprojects) 
        {
            console.log("no cache page")
            const response = await axios.get(
                `https://cdn.builder.io/api/v3/content/neo-infracon-ltd-project?apiKey=85eef57cd4724876b0ac970b64092c94`
            );

            let completed = new Array()
            let inProgress = new Array()
            let all = new Array()
            
            response.data.results.forEach((post: any) => {
                const data = post.data;
                all.push(data)

                // switch (data.type) {
                //     case 'Completed':
                //         completed.push(data)
                //         break;
                            
                //     case 'InProgress':
                //         inProgress.push(data)
                //         break;
                
                //     default:
                //         break;
                // }
            });

            cachedprojects = {
                "all": all,
                // "compleed": completed,
                // "inProgress": inProgress,
            }
    
            await cacheStore.client.set("neo-infracon-project", cachedprojects, 5);
        }

        return cachedprojects;
    }
}