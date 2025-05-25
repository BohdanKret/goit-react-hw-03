import css from "./SearchBox.module.css";
import { useId } from "react";

export default function SearchBox({ value, onSearch }) {
  const id = useId();

  return (
    <div className={css.searchBox}>
      <label htmlFor={id} className={css.searchBoxLabel}>
        Find contacts by name
      </label>
      <div className={css.inputWrapper}>
        <input
          type="text"
          id={id}
          className={css.searchBoxInput}
          value={value}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
