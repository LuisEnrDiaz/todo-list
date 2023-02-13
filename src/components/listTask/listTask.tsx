import style from "./listTask.module.css";
import {
    AiOutlineCheckCircle,
    AiFillEdit,
    AiOutlineCloseCircle,
} from "react-icons/ai";
export function ListTask({
    task,
}: {
    task: { task: string; complete: boolean };
}) {
    const handleDelete = () => {};
    return (
        <li key={task.task} className={style.section_list_li}>
            <p>{task.task}</p>
            <div className={style.section_list_actions}>
                <AiFillEdit
                    style={{
                        color: "#ffee32",
                        margin: "0.5rem",
                        cursor: "pointer",
                    }}
                />
                <AiOutlineCheckCircle
                    style={{
                        color: "#2b9348",
                        margin: "0.5rem",
                        cursor: "pointer",
                    }}
                />
                <AiOutlineCloseCircle
                    style={{
                        color: "#bf211e",
                        margin: "0.5rem",
                        cursor: "pointer",
                    }}
                    onClick={handleDelete}
                />
            </div>
        </li>
    );
}
