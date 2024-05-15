import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { useMemo } from "react";
import { Flex } from "../flex/flex";
import { Tray } from "@phosphor-icons/react";
import { Text } from "../text/text";
import { IEmpty } from "./empty.types";

export const Empty = (props: IEmpty) => {
  const theme = useComponentStyle("Empty");
  const {
    className = "",
    description = "",
    title = "Nothing's here",
    icon = <Tray size={38} weight="light" className={theme.icon()} />,
  } = props;

  const classes = useMemo(() => {
    return twMerge(theme.base(), className);
  }, [className, theme]);

  return (
    <Flex
      direction="column"
      className={classes}
      justify="center"
      align="center"
      gap={12}
    >
      {icon}
      <Flex direction="column" gap={2} className="mp-w-full">
        <Text className={theme.title()}>{title}</Text>
        {description && (
          <Text className={theme.description()}>{description}</Text>
        )}
      </Flex>
    </Flex>
  );
};
