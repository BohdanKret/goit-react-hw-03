export default function Contact({ data: {id, name, number} }) {
  return (
    <div className="contactWrap">
      <ul>
        <li>
          <svg width="24" height="24" className="mob-menu-icons icons">
            <use href="/icons.svg#icon-person"></use>
          </svg>
          <span className="contactName">{name}</span>
        </li>
        <li>
          <svg width="24" height="24" className="mob-menu-icons icons">
            <use href="/icons.svg#icon-phone"></use>
          </svg>
          <span className="cotactNumb">{number}</span>
        </li>
      </ul>
      <button>Delete</button>
    </div>
  );
}
