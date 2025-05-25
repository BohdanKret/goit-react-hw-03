import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox() {
  const id = useId();

  return (
    <div className={css.searchBox}>
      <label htmlFor={id} className={css.searchBoxLabel}>
        Find contacts by name
      </label>
      <input type="text" id={id} className={css.searchBoxInput} />
    </div>
  );
}
