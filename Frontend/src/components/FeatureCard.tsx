import { ElementType } from "react";

interface Args {
    Icon: ElementType;
    title: string;
    description: string;
    iconColor: string;
    titleColor: string;
}

export const FeatureCard = ({ Icon, title, description, iconColor, titleColor }: Args) => {
    return (
        <div className='bg-white/10 backdrop-blur-lg rounded-lg'>
            <div className='p-6 flex items-center'>
                <Icon className={`w-12 h-12 mr-4 ${iconColor}`} />
                <div>
                    <h2 className={`text-xl font-semibold mb-2 font-mono ${titleColor}`}>{title}</h2>
                    <p className='text-indigo-100 font-mono'>{description}</p>
                </div>
            </div>
        </div>
    )
}
