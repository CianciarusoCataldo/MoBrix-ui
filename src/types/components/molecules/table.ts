import { BuilderComponent, MoBrixUiComponent } from "../../../types/global";

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Table component props
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Table
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type TableProps = {
  /** if true, the first row will be used as headers (and not generic data) */
  headers?: boolean;

  /** Table rows */
  rows?: BuilderComponent[][];

  /** Custom class-name applied on every table row */
  rowClassName?: string;

  /** Custom class-name applied on every table cell */
  cellClassName?: string;

  /** If `true`, pre-format content inside table cell */
  format?: boolean;
};

/**
 * {@link https://cianciarusocataldo.github.io/mobrix-ui MoBrix-ui} Table component
 *
 * @see https://cianciarusocataldo.github.io/mobrix-ui/components/molecules/Table
 *
 * @author Cataldo Cianciaruso <https://github.com/CianciarusoCataldo>
 *
 * @copyright 2023 Cataldo Cianciaruso
 */
export type TableComponent = MoBrixUiComponent<TableProps>;