import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ConfirmDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
  isLoading?: boolean;
}

export function ConfirmDialog({
  isOpen,
  onOpenChange,
  onConfirm,
  title,
  description,
  isLoading = false,
}: ConfirmDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-107.5 rounded-xl">
        <DialogHeader className="items-center text-center space-y-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            <AlertTriangle className="h-7 w-7 text-red-600" />
          </div>

          <div className="space-y-1">
            <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>

            <DialogDescription className="text-sm leading-6 text-muted-foreground">
              {description}
            </DialogDescription>
          </div>
        </DialogHeader>

        <DialogFooter className="mt-6 ">
          <Button
            variant="outline"
            disabled={isLoading}
            onClick={() => onOpenChange(false)}
          >
            Cancel{" "}
          </Button>

          <Button
            variant={"destructive"}
            disabled={isLoading}
            onClick={onConfirm}
            className="min-w-28"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
