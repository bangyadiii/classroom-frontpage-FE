export default function Button({ children, mode, as }) {
    const modes = {
        filled: "bg-orange hover:bg-amber-700 text-white font-medium",
        outlines: "border border-orange outline-1 font-medium text-orange",
    };
    let pickedMode = "filled";
    if (mode) pickedMode = modes[mode];

    return (
        <button className={`${modes[pickedMode]} py-3 px-6`}>{children}</button>
    );
}
