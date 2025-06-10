"use client";

import { useQuery } from "@tanstack/react-query";

export default function ActionPanelCSR() {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then(res =>
        res.json()
      )
  });

  if (isLoading) return <p>Loading CSR...</p>;

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">CSR</h2>
      <ul className="list-disc pl-4">
        {data.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
