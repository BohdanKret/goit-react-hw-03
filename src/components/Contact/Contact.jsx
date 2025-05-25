import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number } }) {
  return (
    <div className={css.contactWrap}>
      <ul>
        <li className={css.contactItem}>
          <IoPerson className={css.icons} />
          <span className={css.cotactInfo}>{name}</span>
        </li>
        <li className={css.contactItem}>
          <FaPhoneAlt className={css.icons} />
          <span className={css.cotactInfo}>{number}</span>
        </li>
      </ul>
      <button className={css.deleteButton}>Delete</button>
    </div>
  );
}
