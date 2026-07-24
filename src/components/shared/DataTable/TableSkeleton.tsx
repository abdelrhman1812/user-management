import type React from "react";

interface TableSkeletonProps {
  columnsCount: number;
  selectable?: boolean;
  rowsCount?: number;
}

export const TableSkeleton: React.FC<TableSkeletonProps> = ({
  columnsCount,
  selectable = false,
  rowsCount = 5,
}) => {
  return (
    <>
      {Array.from({ length: rowsCount }).map((_, rowIndex) => (
        <tr key={rowIndex} className="animate-pulse border-b border-slate-200">
          {selectable && (
            <td className="p-3.5 text-center">
              <div className="h-4 w-4 rounded bg-slate-200 mx-auto" />
            </td>
          )}
          {Array.from({ length: columnsCount }).map((_, colIndex) => (
            <td key={colIndex} className="p-3.5">
              <div
                className="h-4 rounded bg-slate-200"
                style={{
                  width:
                    colIndex === 0 ? "60%" : colIndex === 1 ? "80%" : "45%",
                }}
              />
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};
