import { Container } from 'inversify';
import Types from './types';
import { SessionMiddleware } from '../middleware/session';
import { GetTestimonialUseCase, IGetTestimonialUseCase } from '../usercase/getTestimonials';
import { GetPageUseCase, IGetPageUseCase } from '../usercase/getPageUseCase';
import { CacheService, ICacheService } from '../service/cacheService';
import { AddSubscriberUseCase, IAddSubscriberUseCase } from '../usercase/addSubscriberUseCase';
import { ISubscriberRepository, SubscriberRepository } from '../repository/SubscriberRepository';
import { ISubscriberModel, Subscriber } from '../model/SubscriberModel';
import { GetProjectUseCase, IGetProjectUseCase } from '../usercase/getProjectUseCase';

const container = new Container();


// User Case Binding
container
	.bind<IGetTestimonialUseCase>(Types.UseCase.GetTestimonialUseCase)
	.to(GetTestimonialUseCase);
container
	.bind<IGetPageUseCase>(Types.UseCase.GetPageUseCase)
	.to(GetPageUseCase);
container
	.bind<IGetProjectUseCase>(Types.UseCase.GetProjectUseCase)
	.to(GetProjectUseCase);
container
	.bind<IAddSubscriberUseCase>(Types.UseCase.AddSubscriberUseCase)
	.to(AddSubscriberUseCase);


// Services
container.bind<ICacheService>(Types.Service.CacheService).to(CacheService)

// Middleware
container.bind<SessionMiddleware>(SessionMiddleware).toSelf();

// // Repository
// container.bind<ISubscriberRepository>(Types.Repository.Subscriber).to(SubscriberRepository)

// Model
// container
// 	.bind<ISubscriberModel>(Types.Model.Subscriber)
// 	.toConstantValue(Subscriber);


export default container;
