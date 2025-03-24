import { useState } from "react";

export function List() {
  return <h2>Hello World!!</h2>;
}
interface ComposersProps {
  composerName: string;
  age: number;
  hits: string[];
}
export function Composers(props: ComposersProps) {
  let [selectIndex, setSelectIndex] = useState(-1);
  return (
    <>
      <h1>Welcome Users</h1>
      <h2>The Best Composers of All Time</h2>
      <h3>Composer Name:{props.composerName}</h3>
      <h3>Age:{props.age}</h3>
      <ul className="list-group">
        {props.hits.map((m, index) => (
          <li
            key={index}
            className={
              selectIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectIndex(index)}
          >
            {m}
          </li>
        ))}
      </ul>
    </>
  );
}
