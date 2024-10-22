import axios from "axios";
import { inject, injectable } from "inversify";
import Types from "../ioc/types";
import { ICacheService } from "../service/cacheService";


export interface IGetPageUseCase {
    execute(params: any): Promise<any | null>;
}

@injectable()
export class GetPageUseCase implements IGetPageUseCase {

    constructor(
        @inject(Types.Service.CacheService) private cacheService: ICacheService
    ) { }

    async execute(params: any): Promise<any | null> {

        const cacheStore = this.cacheService.getService();

        let cachedPages = await cacheStore.client.get("neo-infracon-page");
        
        if(!cachedPages) 
        {
            console.log("no cache page")
            const response = await axios.get(
                `https://cdn.builder.io/api/v3/content/pages?apiKey=85eef57cd4724876b0ac970b64092c94&limit=100`
            );

            let investorRelationNotice = new Array()
            let annualReport = new Array()
            let financialResult = new Array()
            let noticeOfAgm = new Array()
            let annualReturn = new Array()
            let votingResult = new Array()
            let financialStatementSubsidiary = new Array()
            let SEBICircular = new Array()
            let investorGrievance = new Array()
            
            response.data.results.forEach((post: any) => {
                const data = post.data;
                // console.log(data)
                switch (data.category) {
                    case 'InvestorRelation':
                        switch (data.subcategory) {
                            case 'Notice':
                                investorRelationNotice.push(data)
                                break;
                            
                            case 'AnnualReport':
                                annualReport.push(data)
                                financialResult.push(data)
                                break;
                            
                            case 'FinancialResult':
                                financialResult.push(data)
                                break;

                            case 'NoticeAGM':
                                noticeOfAgm.push(data)
                                break;
                            
                            case 'AnnualReturn':
                                annualReturn.push(data)
                                break;

                            case 'VotingResult':
                                votingResult.push(data)
                                break;
                            
                            case 'FSOS':
                                financialStatementSubsidiary.push(data)
                                break;

                            case 'SEBICircular':
                                SEBICircular.push(data)
                                break;

                            case 'InvestorGrievance':
                                investorGrievance.push(data)
                                break;

                            default:
                                break;
                        }
                        break;
                
                    default:
                        break;
                }
            });

            cachedPages = {
                "investorRelationNotice": investorRelationNotice,
                "annualReport": annualReport,
                "financialResult": financialResult,
                "noticeOfAgm": noticeOfAgm,
                "annualReturn": annualReturn,
                "votingResult": votingResult,
                "financialStatementSubsidiary": financialStatementSubsidiary,
                "SEBICircular": SEBICircular,
                "investorGrievance": investorGrievance
            }
    
            await cacheStore.client.set("neo-infracon-page", cachedPages, 300);
        }

        return cachedPages;
    }
}