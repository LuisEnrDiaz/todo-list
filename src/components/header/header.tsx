import style from "./header.module.css";

export function Header() {
    const title = "Todo-List";
    return (
        <header className={style.header}>
            <h1>{title}</h1>
        </header>
    );
}
