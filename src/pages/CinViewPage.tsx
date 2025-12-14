import { CinModel } from "cints-core";

interface Props {
  model: CinModel;
}

export default function CinViewPage({ model }: Props) {
  return <h3>{model.constructor.name} View</h3>;
}
