import { useState } from "react";
import type { DataTableProps } from "./dataTable.types";
import { TableEmptyState } from "./TableEmptyState";
import { TableErrorState } from "./TableErrorState";
import { TableSkeleton } from "./TableSkeleton";

export default function DataTable<T>({
  columns,
  data,
  selectable = false,
  onSelectionChange,
  isPending = false,
  message,
  isError = false,
  error,
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
    <div className="w-full overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b bg-slate-50 text-slate-600 font-medium">
            {selectable && (
              <th className="p-3.5 w-12 text-center">
                <input
                  type="checkbox"
                  checked={
                    data.length > 0 && selectedRows.length === data.length
                  }
                  onChange={(e) => toggleAll(e.target.checked)}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer disabled:opacity-50"
                />
              </th>
            )}

            {columns.map((col) => (
              <th
                key={String(col.key)}
                className="p-3.5 font-semibold text-slate-700"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200 bg-white">
          {isPending ? (
            <TableSkeleton
              columnsCount={columns.length}
              selectable={selectable}
              rowsCount={5}
            />
          ) : isError ? (
            <TableErrorState
              columnsCount={columns.length + 1}
              message={error?.message}
            />
          ) : data.length === 0 ? (
            <TableEmptyState message={message} colSpan={columns.length} />
          ) : (
            data.map((item, rowIndex) => (
              <tr
                key={rowIndex}
                className="hover:bg-slate-50/80 transition-colors"
              >
                {selectable && (
                  <td className="p-3.5 text-center">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(item)}
                      onChange={(e) => toggleRow(item, e.target.checked)}
                      className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                  </td>
                )}

                {columns.map((col) => (
                  <td key={String(col.key)} className="p-3.5 text-slate-700">
                    {col.element
                      ? col.element(item)
                      : String(item[col.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
