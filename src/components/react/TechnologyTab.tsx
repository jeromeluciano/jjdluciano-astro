import { useStore } from "@nanostores/react";
import MenuButton from "./MenuButton";
import { menuSelected } from "../../stores/technologyMenuStore";

interface Props {
    technologies: {
        name: string;
        items: { icon: string, name: string }[]
    }[];
}

export default function TechnologyTab({ technologies }: Props) {
    const $menuSelected = useStore(menuSelected);

    const Menus = technologies.map(item => {
        return <MenuButton handler={() => menuSelected.set(item.name)} name={item.name} key={item.name} selected={$menuSelected} />
    })

    return <div className="text-sm mt-6 space-x-3">
        {Menus}
    </div>
}