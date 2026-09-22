function Table({ tasks }) {
  return (
    <table className="w-full border border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="border p-2">Title</th>
          <th className="border p-2">Description</th>
          <th className="border p-2">Degree</th>
        </tr>
      </thead>

      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td className="border p-2">{task.title}</td>
            <td className="border p-2">{task.description}</td>
            <td className="border p-2">{task.degree}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;