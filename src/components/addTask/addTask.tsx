import { SyntheticEvent, useEffect, useState } from "react";
import { ListTask } from "../listTask/listTask";
import { listTask } from "../types/types";
import style from "./addTask.module.css";

export function AddTask() {
    const [task, setTask] = useState("");
    const [listTask, setListTask] = useState<Array<listTask>>(() =>
        JSON.parse(localStorage.getItem("ListTask") || "[]")
    );

    const handleChange = (event: SyntheticEvent) => {
        const element = event.target as HTMLFormElement;
        setTask(element.value);
    };

    const handleForm = (event: SyntheticEvent) => {
        event.preventDefault();

        if (task === "") {
            return alert("Agrega una tarea");
        }

        setListTask([...listTask, { task: task, complete: false }]);

        setTask("");
    };

    useEffect(() => {
        localStorage.setItem("ListTask", JSON.stringify(listTask));
    }, [listTask]);

    return (
        <form onSubmit={handleForm}>
            <section className={style.section_add}>
                <input
                    type="text"
                    placeholder="Inserta una tarea....'Limpiar','Cocinar'"
                    value={task}
                    onChange={handleChange}
                />
                <button type="submit">Enviar</button>
            </section>
            <section className={style.section_list}>
                {listTask.length ? (
                    <ul>
                        {listTask.map((task) => (
                            <ListTask task={task} />
                        ))}
                    </ul>
                ) : (
                    <h2>Agrega una tarea</h2>
                )}
            </section>
        </form>
    );
}
