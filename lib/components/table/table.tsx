/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { useComponentStyle } from "../../customization/styles/theme.context";
import { ITable, ITableRecord } from "./table.types";

export const Table = (props: ITable) => {
  const theme = useComponentStyle("Table");
  const {
    className = "",
    columns = [],
    data = [],
    isBordered = false,
    // isLoading = false,
    onRow,
    showHeader = true,
    size,
    ...restProps
  } = props;

  const classes = useMemo(() => {
    return twMerge(
      theme.base(),
      theme.tableBorder({
        isBordered,
      }),
      className
    );
  }, [className, isBordered, theme]);

  const rowClasses = useMemo(() => {
    return twMerge(theme.row());
  }, [theme]);

  const thClasses = useMemo(() => {
    return twMerge(
      theme.cell({ size }),
      theme.tableBorder({
        isBordered,
      }),
      theme.th()
    );
  }, [size, isBordered, theme]);

  const tdClasses = useMemo(() => {
    return twMerge(
      theme.cell({
        size,
      }),
      theme.tableBorder({
        isBordered,
      }),
      theme.td()
    );
  }, [size, isBordered, theme]);

  const renderTh = () => {
    if (!showHeader) return null;
    return (
      <tr>
        {columns.map((x) => (
          <th key={x.key} className={thClasses}>
            {x.title}
          </th>
        ))}
      </tr>
    );
  };

  const renderTd = () => {
    return data.map((x: ITableRecord, index: number) => {
      return (
        <tr
          key={JSON.stringify(x)}
          {...(onRow
            ? {
                onClick: () => onRow(x, index),
                style: {
                  cursor: "pointer",
                },
              }
            : null)}
          className={rowClasses}
        >
          {columns.map((t) => {
            const cellValue = x[t.dataIndex];
            return (
              <td
                key={t.key}
                className={tdClasses}
                style={{
                  ...(t.width
                    ? {
                        width: t.width,
                      }
                    : null),
                }}
              >
                {cellValue}
              </td>
            );
          })}
        </tr>
      );
    });
  };

  const renderTable = () => {
    return (
      <>
        {renderTh()}
        {renderTd()}
      </>
    );
  };

  return (
    <table className={classes} {...restProps}>
      {renderTable()}
    </table>
  );
};
