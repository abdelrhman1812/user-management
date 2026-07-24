export type Column<T> = {
  label: string;
  key: keyof T;
  element?: (item: T) => React.ReactNode;
};

export interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  selectable?: boolean;
  onSelectionChange?: (rows: T[]) => void;
  isPending: boolean;
  message?: string;
}
