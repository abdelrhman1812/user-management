import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ReactNode } from "react";

export interface DropdownTableActionItem {
  label: string;
  icon?: ReactNode;
  element?: ReactNode;
  onClick?: () => void;
  preventClose?: boolean;
}

interface CustomDropdownTableProps {
  triggerIcon: ReactNode;
  triggerClass?: string;
  menuItems?: DropdownTableActionItem[];
  contentClass?: string;
}

const DropdownTableAction = ({
  triggerIcon,
  triggerClass = "",
  menuItems = [],
  contentClass = "",
}: CustomDropdownTableProps) => {
  return (
    <div className="relative inline-flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            className={`
              flex items-center justify-center 
              h-8 w-8 rounded-md 
              text-slate-600 hover:text-slate-900 
              hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 
              focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-1
              transition-colors duration-150 ease-in-out
              ${triggerClass}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {triggerIcon}
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          className={`
            min-w-[160px] p-1.5 
            bg-white dark:bg-slate-900 
            border border-slate-200 dark:border-slate-800 
            rounded-lg shadow-lg 
            space-y-0.5
            ${contentClass}
          `}
          align="end"
          side="bottom"
          sideOffset={5}
        >
          {menuItems.map((item, idx) => (
            <DropdownMenuItem
              key={idx}
              onSelect={(e) => {
                if (item.preventClose) {
                  e.preventDefault();
                }
              }}
              onClick={(e) => {
                e.stopPropagation();
                item.onClick?.();
              }}
              className="flex items-center justify-between gap-3 px-2.5 py-1.5 text-xs font-medium rounded-md cursor-pointer outline-none transition-colors duration-150 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                {item.icon && (
                  <span className="text-base leading-none opacity-80 shrink-0">
                    {item.icon}
                  </span>
                )}
                <span className="truncate">{item.label}</span>
              </div>

              {item.element && (
                <div
                  className="shrink-0 flex items-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.element}
                </div>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownTableAction;
