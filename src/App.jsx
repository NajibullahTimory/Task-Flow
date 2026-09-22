import { useState } from "react";

import Form from "./Fetures/Form";
import Cards from "./Fetures/Cards";
import Header from "./Fetures/Header";
import Table from "./Fetures/Table";

const App = () => {
  const [tasks, setTasks] = useState([]);

  function addTask(newTask) {
    setTasks((oldTasks) => [
      ...oldTasks,
      {
        id: Date.now(),
        ...newTask,
      },
    ]);
  }

  return (
    <main>
      <Header />
      <Cards />

      <Form onAdd={addTask} />

      <Table tasks={tasks} />
    </main>
  );
};

export default App;