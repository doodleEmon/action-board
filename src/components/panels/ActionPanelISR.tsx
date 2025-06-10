type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function ActionPanelISR() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
    next: { revalidate: 10 }
  });
  const data: Todo[] = await res.json();

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">ISR</h2>
      <ul className="list-disc pl-4">
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
