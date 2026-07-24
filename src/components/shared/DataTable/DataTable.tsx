import { useState } from "react";
import type { DataTableProps } from "./dataTable.types";

export default function DataTable<T>({
  columns,
  data,
  selectable = false,
  onSelectionChange,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);

  const toggleRow = (item: T, checked: boolean) => {
    let updatedRows: T[];

    if (checked) {
      updatedRows = [...selectedRows, item];
    } else {
      updatedRows = selectedRows.filter((row) => row !== item);
    }

    setSelectedRows(updatedRows);
    onSelectionChange?.(updatedRows);
  };

  const toggleAll = (checked: boolean) => {
    const updatedRows = checked ? data : [];

    setSelectedRows(updatedRows);
    onSelectionChange?.(updatedRows);
  };

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b bg-gray-100">
          {selectable && (
            <th className="p-3">
              <input
                type="checkbox"
                checked={data.length > 0 && selectedRows.length === data.length}
                onChange={(e) => toggleAll(e.target.checked)}
              />
            </th>
          )}

          {columns.map((col) => (
            <th key={String(col.key)} className="p-3 text-left">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex} className="border-b">
            {selectable && (
              <td className="p-3">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(item)}
                  onChange={(e) => toggleRow(item, e.target.checked)}
                />
              </td>
            )}

            {columns.map((col) => (
              <td key={String(col.key)} className="p-3">
                {col.element ? col.element(item) : String(item[col.key])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
