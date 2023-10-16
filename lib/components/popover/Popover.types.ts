import type { Placement } from "@floating-ui/react";

export interface IPopover {
  initialOpen?: boolean;
  placement?: Placement;
  modal?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
