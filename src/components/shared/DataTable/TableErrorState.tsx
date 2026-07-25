import { AlertCircle } from "lucide-react";

interface TableErrorStateProps {
  columnsCount: number;
  message?: string;
}

export const TableErrorState = ({
  columnsCount,
  message,
}: TableErrorStateProps) => {
  return (
    <tr>
      <td colSpan={columnsCount} className="p-8 text-center">
        <div className="mx-auto flex max-w-sm flex-col items-center justify-center rounded-lg bg-red-50 p-4 text-red-600 border border-red-100 shadow-sm">
          <AlertCircle className="mb-2 h-6 w-6 text-red-500" />
          <p className="font-semibold text-sm mb-1">Error Loading Data</p>
          <p className="text-xs text-red-500/90">{message}</p>
        </div>
      </td>
    </tr>
  );
};
