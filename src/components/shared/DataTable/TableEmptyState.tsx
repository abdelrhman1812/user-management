import type React from "react";

interface TableEmptyStateProps {
  colSpan: number;
  message?: string;
}

export const TableEmptyState: React.FC<TableEmptyStateProps> = ({
  colSpan,
  message = "No Data",
}) => {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className="p-8 text-center text-slate-500 font-medium"
      >
        {message}
      </td>
    </tr>
  );
};
