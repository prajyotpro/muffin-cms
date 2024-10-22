import { inject, injectable } from "inversify";
import Types from "../ioc/types";
// import { ISubscriberRepository } from "../repository/SubscriberRepository";


export interface IAddSubscriberUseCase {
    execute(params: any): Promise<any | null>;
}

@injectable()
export class AddSubscriberUseCase implements IAddSubscriberUseCase {

    constructor(
        // @inject(Types.Repository.Subscriber) private subscriberRepository: ISubscriberRepository
    ) { }

    async execute(params: any): Promise<any | null> {

        // const user = await this.subscriberRepository.getUserByEmailAndOrganization(params.email.trim(), "thebodyshrine")

        // if(!user.length) {
            
        //     const user = await this.subscriberRepository.addSubscriber(
        //         params.firstName.trim(),
        //         params.lastName.trim(),
        //         params.email.trim(), 
        //         "thebodyshrine"
        //     )

        //     return true;
        // }

        return false;
    }
}