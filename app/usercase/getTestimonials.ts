import { inject, injectable } from "inversify";
// import Types from "../../ioc/types";


export interface IGetTestimonialUseCase {
    execute(params: any): Promise<any | null>;
}

@injectable()
export class GetTestimonialUseCase implements IGetTestimonialUseCase {

    constructor(
        // @inject(Types.Repository.Project) private projectRepository: IProjectRepository
    ) { }

    async execute(params: any): Promise<any | null> {
        return [
            {
                name: "Priya Verma",
                username: "priya-verma",
                image: "/web-assets/uploads/2021/04/priyaverma1-150x150.jpeg",
                short: "From being an extremely active individual, who held a deep interest in the field of sports to becoming a couch potato after facing some serious sports injuries, life had indeed been very difficult. I ... ",
                details: '<p>From being an extremely active individual, who held deep interest in the field of sports to becoming a couch potato after facing some serious sports injuries, life had indeed been very difficult. I tried various alternatives to treat my injuries and get back on the field, but to no avail. A friend suggested that I go see Dr Sunny Shah and I must say this was my life’s best decision. After starting my program at The Body Shrine, I noticed improvement in my symptoms, elimination of pain and complete body mind healing. I look forward to start my “Return to Play” program with The Body Shrine.</p>'
            },
            {
                name: "Nisarg Shah",
                username: "nisarg-shah",
                image: "/web-assets/uploads/2021/04/nisargshah2-150x150.jpeg",
                short: "I had tried all the possible diet and workout fads bursting the internet to get in shape. I did not lose weight, but instead ending up falling sick. Around that time, I was introduced to Dr Sunny Shah... ",
                details: '<p>I had tried all the possible diet and workout fads bursting the internet to get in shape.I did not lose weight, but instead ending up falling sick. Around that time, I was introduced to Dr Sunny Shah’s The Body Shrine and that is where my real transformationjourney began.I must say the nutrition and workout plans that were customized to suit my requirement,did not just help me reach my fitness goals, but at the same time made me feel better about my body.I will forever remain indebted to Doctor and his team.</p>'
            }
        ]
    }
}