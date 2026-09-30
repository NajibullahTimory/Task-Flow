import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Form() {
  const [Task, setTask] = useState([]);

  const getAllTasks = () => {
    axios.get("http://localhost:4000/").then((res) => {
      setTask(res.data);
    });
  };
  useEffect(() => {
    getAllTasks();
  }, []);

  const { register, getValues, reset } = useForm({
    defaultValues: {
      Task: "",
      Textarea: "",
      Degree: "Low",
    },
  });

  const submit = () => {
    const body = getValues();
    const { Task, Textarea, Degree } = body;

    axios
      .post(
        `http://localhost:4000/?Task=${Task}&Textarea=${Textarea}&Degree=${Degree}`,
      )
      .then(() => {
        getAllTasks();
        reset();
      });
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100">
      <div className="mx-auto grid w-full max-w-5xl gap-10">
        <header className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Task Manager
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Organize your day
          </h1>
          <p className="mt-3 text-slate-400">
            Add a task and keep everything in one place.
          </p>
        </header>

        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur sm:p-8">
          <div className="grid gap-5 md:grid-cols-3">
            <label className="grid gap-2 text-sm font-medium text-slate-300">
              Task name
              <input
                type="text"
                placeholder="What needs to be done?"
                className="h-12 rounded-xl border border-white/10 bg-slate-900/80 px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                {...register("Task", { required: true })}
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-300">
              Description
              <textarea
                placeholder="Add a few details..."
                className="min-h-12 resize-y rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                {...register("Textarea", { required: true })}
              />
            </label>

            <label className="grid gap-2 text-sm font-medium text-slate-300">
              Priority
              <select
                className="h-12 rounded-xl border border-white/10 bg-slate-900/80 px-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                {...register("Degree", { required: true })}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </label>
          </div>

          <button
            onClick={submit}
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-xl bg-cyan-400 px-6 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 active:scale-[0.98] md:w-auto"
          >
            Add task
            <span className="ml-2 text-lg">＋</span>
          </button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div>
              <h2 className="text-lg font-semibold">Your task</h2>
              <p className="mt-1 text-sm text-slate-400">
                Your latest task appears here.
              </p>
            </div>
            <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-white-300">
              TASK
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead className="bg-white/[0.03] text-xs uppercase tracking-wider text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-semibold">Task</th>
                  <th className="px-6 py-4 font-semibold">Description</th>
                  <th className="px-6 py-4 font-semibold">Priority</th>
                </tr>
              </thead>

              <tbody>
                {Task.map((tasks) => {
                  return (
                    <tr key={tasks.id}>
                      <td>{tasks.id}</td>
                      <td>{tasks.Task}</td>
                      <td>{tasks.Description}</td>
                      <td>{tasks.Degree}</td>
                      <td>
                        <button
                          onClick={() => {
                            axios.delete(`http://localhost:4000/${tasks.id}`);
                            getAllTasks();
                          }}
                          className="rounded-xl p-2 w-2 h-2"
                        >
                          🗑
                        </button>
                      </td>
                    </tr>
                  );
                })}{" "}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Form;
