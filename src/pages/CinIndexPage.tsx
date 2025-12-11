import { CinModel, getCinMetaData } from "cints-core";
// import CinTable from "../components/CinTable/CinTable";
// import { UserModel } from "../../example/src/models/UserModel";

export default function CinIndexPage({ model }: { model: CinModel }) {
  console.log("model ", getCinMetaData(model));

  return (
    <div className="card flex justify-center text-red-600 ">
      test test
      {/* <CinTable test="test "></CinTable> */}
    </div>
  );
}
