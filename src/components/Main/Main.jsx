import { useState } from "react";

import cls from "./Main.module.css";

import image from "../../assets/images/Clipboard.svg";
import plus from "../../assets/icons/plus.svg";
import TaskCard from "../TaskCard/TaskCard";

export default function Main() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const isCompleteClick = (id) => {
    const result = list.map((el) => {
      if (el.id === id) {
        return {
          id: el.id,
          text: el.text,
          isComplete: !el.isComplete,
        };
      }
      return el;
    });

    setList(result);
  };

  const create = () => {
    const newEl = {
      id: list.length + 1,
      text: text,
      isComplete: false,
    };

    setList([...list, newEl]);
    setText("");
  };

  const deleteTask = (id) => {
    const listFiltered = list.filter((el) => {
      return el.id !== id;
    });
    setList(listFiltered);
  };

  const completedList = list.filter((el) => el.isComplete);

  return (
    <div className={cls.main}>
      <div className={cls.createForm}>
        <input
          placeholder="Добавить новую задачу..."
          className={cls.customInput}
          value={text}
          onChange={handleChange}
          type="text"
        />
        <button
          disabled={!text.trim()}
          onClick={create}
          className={cls.customButton}
        >
          <span>Создать</span>
          <img src={plus} alt="" />
        </button>
      </div>

      <div className={cls.taskList}>
        <div className={cls.header}>
          <div className={cls.headerBlock}>
            <span>Созданые задачи</span>
            <div className={cls.taskNumber}>{list.length}</div>
          </div>
          <div className={cls.headerBlock}>
            <span>Завершенные</span>
            <div className={cls.taskNumber}>
              {completedList.length} из {list.length}
            </div>
          </div>
        </div>
        <div className={cls.list}>
          {list.length > 0 ? (
            list.map((item) => {
              return (
                <TaskCard
                  item={item}
                  deleteTask={deleteTask}
                  isCompleteClick={isCompleteClick}
                />
              );
            })
          ) : (
            <div className={cls.empty}>
              <img src={image} alt="" />
              <span className={cls.emptyText}>
                У вас еще нет зарегистрированных задач Создавайте задачи и
                организуйте свои дела
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
