import { CinModel } from "cints-core";
import { Outlet } from "react-router-dom";

interface Props {
  model: CinModel;
}

export default function CinIndexPage({ model }: Props) {
  return (
    <div>
      <h2>{model.constructor.name} Index</h2>
      <Outlet />
    </div>
  );
}
