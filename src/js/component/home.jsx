import React, {useState} from "react";

// include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// create your first component

function NewTask({createTask}) {
    return (
        <input type="text" className="focus"
            placeholder={"Escribe una tarea"}
            onKeyPress={createTask}/>
    )
}

const Home = () => {
    const [task, setTask] = useState([]);
    const [counter, setCounter] = useState(0);

    function createTask(e) {
        if (e.key === "Enter" && e.target.value != "") {
            setTask([
                ...task,
                e.target.value
            ]);
            e.target.value = "";
            setCounter(counter + 1)
        }
    }
    return (
        <div>
            <h1 className="todo-header">To do List</h1>
            <div id="mainContainer">
                <NewTask createTask={createTask}></NewTask>
                <ul>{
                    task.map((tarea, index) => {
                        return (
                            <li key={index}>
                                {}
                                {tarea}
                                <span className="fa fa-trash"
                                    onClick={
                                        () => (task.splice(index, 1), setCounter(counter - 1))
                                }></span>
                            </li>
                        )
                    })
                } </ul>
                <div>
                    <h5>{
                        task.length == 0 ? "No task to do" : `${counter} task left`
                    }</h5>
                </div>
            </div>
            <div id="h2"></div>
            <div id="h3"></div>
        </div>
    );

};
export default Home;
