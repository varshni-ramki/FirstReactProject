import { List } from "./components/List";
import { Composers } from "./components/List";

export function App() {
  const Songhits = ["Ennamo Edho", "Amali Thumali"];
  return (
    <>
      <List></List>;
      <Composers
        composerName="Harris Jayraj"
        age={50}
        hits={Songhits}
      ></Composers>
    </>
  );
}
