import { useState } from "react";

function Form({ onAdd }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    degree: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("عنوان وظیفه را وارد کنید");
      return;
    }

    onAdd(form);

    setForm({
      title: "",
      description: "",
      degree: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-yellow-50 rounded-xl p-7 mb-5"
    >
      <h1 className="mb-3">Add Task</h1>

      <input
        type="text"
        placeholder="Task title..."
        className="w-full h-12 bg-gray-100 rounded-xl p-2 outline-none mb-3"
        name="title"
        value={form.title}
        onChange={handleChange}
      />

      <textarea
        placeholder="Description"
        className="w-full h-20 bg-gray-100 rounded-xl p-2 outline-none mb-3"
        name="description"
        value={form.description}
        onChange={handleChange}
      />

      <select
        className="p-3 bg-gray-100 mr-3 rounded-xl"
        name="degree"
        value={form.degree}
        onChange={handleChange}
      >
        <option value="">Degree را انتخاب کنید</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button
        type="submit"
        className="bg-blue-500 text-white px-5 h-10 rounded-xl active:scale-95"
      >
        Add
      </button>
    </form>
  );
}

export default Form;