import { ReactSVG } from "react-svg";

interface Props {
    iconName: string;
    name: string;
}

export default function TechnologyItem({ iconName, name }: Props) {
    return <div className="flex flex-col space-y-2 items-center justify-center">
        <ReactSVG src={`icons/${iconName}`} />
        <h3 className="text-[0.70rem] font-thin text-neutral-300 text-center md:text-[0.8rem]">{name}</h3>
    </div>

}