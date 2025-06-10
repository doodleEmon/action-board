export default async function ActionPanelSSR() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5", {
    cache: "no-store"
  });
  const data = await res.json();

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">SSR</h2>
      <ul className="list-disc pl-4">
        {data.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
