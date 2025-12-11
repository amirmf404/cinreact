import type {
  CinFieldMetadata,
  colorHandler,
  Pagination,
  PaginationOptions,
} from "cints-core";

export interface IPropsCinTable<T extends Record<string, unknown>> {
  resizableColumns?: boolean;
  dataKey?: string;
  //   textOverflow?: TextOverflowEnum;
  exportable?: {
    enable?: boolean;
    path?: string;
  };
  enableActions?: boolean;
  columns: CinFieldMetadata[];
  multipleSelect?: boolean;
  colorHandler?: colorHandler;
  tableHeight?: string;

  paginator: boolean;
  rowsPerPageOptions?: number[];
  enableFilters?: boolean;
  enableSort?: boolean;
  enableGlobalSearch?: boolean;
  loadData?: (options: PaginationOptions) => Promise<Pagination<T>>;
  selectionMode?: "multiple" | "single";
}
