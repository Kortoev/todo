import cls from "./TaskCard.module.css";

import Delete from "../../assets/icons/Layer 2.svg";

export default function TaskCard(props) {
  const { item, deleteTask, isCompleteClick } = props;

  return (
    <div className={cls.card}>
      {item.isComplete ? (
        <div
          className={cls.readyBtn}
          onClick={() => isCompleteClick(item.id)}
        ></div>
      ) : (
        <div
          className={cls.noReadyBtn}
          onClick={() => isCompleteClick(item.id)}
        ></div>
      )}
      <div className={cls.listText}>{item.text}</div>
      <button
        onClick={() => deleteTask(item.id)}
        className={cls.delete}
        disabled={!item.isComplete}
      >
        <img src={Delete} alt="" />
      </button>
    </div>
  );
}
