// import { DataTable } from "primereact/datatable";
// import { useRef, useState } from "react";

import { CinTablePropsInterface } from "./interfaces/CinTablePropsInterface";

export default function CinTable(
  props: CinTablePropsInterface<Record<string, unknown>>
) {
  console.log(props);

  return (
    <div className="card">{/* <DataTable value={value}></DataTable> */}</div>
  );
}
