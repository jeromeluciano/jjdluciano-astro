interface Props {
    name: string;
    selected: string;
    handler: () => void;
}
export default function MenuButton({ name, handler, selected }: Props) {
    return <button
        onClick={handler}
        id="tab-button"
        className={`tracking-wide ${selected == name ? "text-neutral-200 underline underline-offset-4" : "text-neutral-400"}`}
    >
        {name}
    </button>
}