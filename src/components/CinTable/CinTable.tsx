// import { DataTable } from "primereact/datatable";
// import { useRef, useState } from "react";

import type { IPropsCinTable } from "./interfaces/CinTableProps";

export default function CinTable(
  props: IPropsCinTable<Record<string, unknown>>
) {
  console.log(props);
  
  return (
    <div className="card">
      {/* <DataTable value={value}></DataTable> */}
    </div>
  );
}
