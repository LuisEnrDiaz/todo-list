import { SyntheticEvent } from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { TaskI } from "../types/typesTask";

import style from "./listTask.module.css";

export function ListTask({
    task,
    setListTask,
}: {
    task: TaskI;
    setListTask: any;
}) {
    const handleComplete = (event: SyntheticEvent) => {
        event.preventDefault();

        const listTask: Array<TaskI> = JSON.parse(
            localStorage.getItem("ListTask")!
        );

        const complete = listTask.map((e) => {
            if (e.task === task.task) {
                if (e.complete === false) {
                    return { task: task.task, complete: true };
                }
                return { task: task.task, complete: false };
            }
            return { task: e.task, complete: e.complete };
        });

        const newArray = setListTask(complete);

        localStorage.setItem("ListTask", JSON.stringify(newArray));
    };

    return (
        <li key={task.task} className={style.section_list_li}>
            {task.complete === false ? (
                <>
                    <p>{task.task}</p>
                    <div className={style.section_list_actions}>
                        <AiOutlineCheckCircle
                            style={{
                                color: "#2b9348",
                                margin: "0.5rem",
                                cursor: "pointer",
                            }}
                            onClick={handleComplete}
                        />
                    </div>
                </>
            ) : (
                <>
                    <p className={style.true}>{task.task}</p>
                    <div className={style.section_list_actions}>
                        <AiOutlineCloseCircle
                            style={{
                                color: "#bf211e",
                                margin: "0.5rem",
                                cursor: "pointer",
                            }}
                            onClick={handleComplete}
                        />
                    </div>
                </>
            )}
        </li>
    );
}
