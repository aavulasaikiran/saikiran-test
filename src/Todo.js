import { useEffect, useState } from 'react';
import React from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    var arr = [];
    for (var i = 0; i < 4; i++) {
      var element = {
        id: i,
        name: `Hello${i}`,
        isComplete: false
      };
      arr.push(element);
    }
    setTasks(arr);
  }, []);

  const Complete = id => {
    var arr = tasks;
    arr[id].isComplete = true;
    setTasks(arr);
  };

  const Delete = id => {
    var arr = tasks;
    arr.splice(id, 1);
    setTasks(arr);
  };

  return (
    <div>
      {tasks?.map(t => {
        return (
          <div>
            <p>{t.id}</p>
            <p>{t.isComplete ? t.name.strike() : t.name}</p>
            <button className="complete-btn" onClick={() => Complete(t.id)}>
              complete
            </button>
            <button className="delete-btn" onClick={() => Delete(t.id)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Todo;
