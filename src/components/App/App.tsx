import './app.scss';
import background from '../../images/background.jpg'
import { useState } from 'react';

//--START-- all codes btw the START and END comments are all prototypes
type allTodoProps = {
    name: string,
    completed: boolean
}
//--END--

//--START-- all codes btw the START and END comments are all helper functions
    // adds a new item to the list of exiting items of the todo list
    let addNewItemToTheList: (newItem: string, allList: allTodoProps[]) => allTodoProps[];
    addNewItemToTheList = (item: string, currentList: allTodoProps[]) => {
        return [...currentList, {name:item, completed: false}]
    }
//--END--

const App = () => {
    const [newTodo, setNewTodo] = useState<string>('')
    const [allItems, setAllItems] = useState<allTodoProps[]>([])

    // the function below updates the list of todo's
    const updateTheList = () => {
        const jimmy = addNewItemToTheList(newTodo, allItems)
        setAllItems(jimmy)
        setNewTodo('')
    }

    return (
        <div className="AppMain">
            <div className="todo_background">
                <img src={background} alt="" />
            </div>
            <div className="todo">
                <div className="todo__header">TODO</div>
                <div className="todo__input">
                    <input
                        value={newTodo}
                        onChange={(event) => setNewTodo(event.target.value)}
                        onKeyUp={(event) => {
                            if (event.keyCode === 13) { updateTheList() }
                        }}
                        type="text" placeholder='Add your todo here..'
                    />
                    <button>Add to list</button>
                </div>
                <div className="todo__final">
                    <div className="t_each_todo">
                        {allItems.map((ech: allTodoProps, ind) => {
                            return <div key={ech.name}><span>{ech.name}</span></div>
                        })}
                    </div>
                    <div className="t_highlights">
                        <div className="t_tasks">0 task</div>
                        <div className="t_followers">Followers</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;