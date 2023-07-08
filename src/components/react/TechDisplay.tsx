import { useStore } from "@nanostores/react";
import TechnologyItem from "./TechnologyItem";
import { menuSelected } from "../../stores/technologyMenuStore";
import { technologies } from '../../data/technologies.json';



export default function TechDisplay() {

    const $menuSelected = useStore(menuSelected);

    const data = technologies.find(tech => tech.name == $menuSelected);

    const ItemsElem = data?.items.map(item => <TechnologyItem iconName={item.icon} name={item.name} key={item.name} />)

    return <div className="mt-3 py-5  bg-zinc-800/40 border border-zinc-800/90 md:mt-4">
        <div className="grid grid-cols-4 gap-6 justify-center">
            {ItemsElem}
        </div>
        <div></div>
    </div>
}