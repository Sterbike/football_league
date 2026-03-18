import React from "react";
import { useNavigate } from "react-router-dom";

export default function Table({
  data,
  limit = 5,
  title,
  showTitle = true,
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
  ],
  showRanking = true
}) {
  const shownRows = data.slice(0, limit);
  const navigate = useNavigate();
  return (
    <div className={
      `bg-secondary dark:bg-secondary-dark rounded-lg shadow p-4${showRanking ? ' pl-0' : ''}`
    }>
      {title && showTitle && (
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
      )}
      <table className="w-full text-left border-separate border-spacing-y-1">
        <thead>
          <tr>
            {showRanking && <th className="py-1 text-center">#</th>}
            {columns.map((col, idx) => (
              <th key={col.key} className="py-1">{col.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {shownRows.map((row, i) => {
            // Border color logic for Tabella (no title)
            // Click handler for league table
            const handleRowClick = () => {
              if (title && title.toLowerCase() === 'tabella' && row.id) {
                navigate(`/team/${row.id}`);
              }
            };
            let borderClass = '';
            if (title && title.toLowerCase() === 'tabella') {
              if (i < 4) borderClass = 'border-l-4 border-green-500';
              else if (i === 4) borderClass = 'border-l-4 border-blue-500';
              else if (i >= shownRows.length - 3) borderClass = 'border-l-4 border-red-500';
            }
            return (
              <tr key={row.id || row.name || i} className="group">
                {/* Ranking column, visually separated, not part of hover/clickable area */}
                {showRanking && (
                  <td className={
                    `py-2 px-2 font-bold text-center ${i === 0 ? 'text-accent dark:text-accent text-lg' : ''} ${borderClass}`
                  } style={{ borderTopLeftRadius: '0.5rem', borderBottomLeftRadius: '0.5rem' }}>
                    {i + 1}
                  </td>
                )}
                {/* Main columns, hover/clickable as a group */}
                {columns.map((col, idx) => (
                  <td
                    key={col.key}
                    className={
                      `py-2 px-2 transition-colors bg-background dark:bg-background-dark cursor-pointer ` +
                      'group-hover:bg-accent group-hover:text-background dark:group-hover:bg-accent dark:group-hover:text-background ' +
                      (i === 0 ? 'font-extrabold' : '') +
                      (idx === 0 ? ' rounded-l-none' : '') +
                      (idx === columns.length - 1 ? ' rounded-r' : '')
                    }
                    onClick={handleRowClick}
                  >
                    {col.render ? col.render(row, i, shownRows) : row[col.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
