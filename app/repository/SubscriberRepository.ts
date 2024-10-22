import { inject, injectable } from "inversify";
import { ISubscriberModel } from "../model/SubscriberModel";
import Types from "../ioc/types";
import { or } from "sequelize";

export interface ISubscriberRepository {
	getUserByEmailAndOrganization(email: string, org: string): Promise<any>;
	addSubscriber(firstName: string, lastName: string, email: string, org: string): Promise<any>;
}


@injectable()
export class SubscriberRepository implements ISubscriberRepository {

	constructor(
		@inject(Types.Model.Subscriber) private subscriberModel: ISubscriberModel
	) { }

	async getUserByEmailAndOrganization(email: string, org: string): Promise<any> {
		return await this.subscriberModel.find({ email: email, organizationId: org }).exec();
	}

	async addSubscriber(firstName: string, lastName: string, email: string, org: string): Promise<any> {
		return await this.subscriberModel.create({ 
			firstName: firstName, 
			lastName: lastName, 
			email: email, 
			organizationId: org
			});
	}
}
