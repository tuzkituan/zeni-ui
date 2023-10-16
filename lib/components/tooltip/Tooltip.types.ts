import type { Placement } from "@floating-ui/react";

export interface ITooltip {
  initialOpen?: boolean;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}
