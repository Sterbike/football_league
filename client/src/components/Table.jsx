import React from "react";

export default function Table({
  data,
  limit = 5,
  title = "Tabella",
  columns = [
    { key: "team", label: "Csapat", render: (row) => (
      <span className="font-bold flex items-center gap-2">
        {row.logo && (
          <img src={row.logo} alt={row.team + ' logó'} className="w-8 h-8 object-contain" />
        )}
        {row.team}
      </span>
    ) },
    { key: "points", label: "Pont" }
  ]
}) {
  const shownRows = data.slice(0, limit);
  return (
    <div className="bg-secondary dark:bg-secondary-dark rounded-lg shadow p-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <table className="w-full text-left border-separate border-spacing-y-1">
        <thead>
          <tr>
            {columns.map((col, idx) => (
              <th key={col.key} className="py-1">{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {shownRows.map((row, i) => (
            <tr
              key={row.id}
              className={
                `transition-colors bg-background dark:bg-background-dark hover:bg-accent hover:text-background dark:hover:bg-accent dark:hover:text-background cursor-pointer ` +
                (i === 0 ? 'text-accent dark:text-accent font-extrabold text-lg' : '')
              }
            >
              {columns.map((col, idx) => (
                <td
                  key={col.key}
                  className={`py-2 px-2 ${idx === 0 ? 'rounded-l' : ''} ${idx === columns.length - 1 ? 'rounded-r' : ''}`}
                >
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
