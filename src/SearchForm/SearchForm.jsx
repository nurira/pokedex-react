import useFocus from "../hooks/useFocus";

import styles from "./SearchForm.module.scss";

export default function SearchForm({ handleSubmit, ...delegated }) {
  const searchRef = React.useRef();
  useFocus(searchRef);

  return (
    <form className={styles["wrapper"]} onSubmit={handleSubmit}>
      <input type="text" placeholder="pikachu" ref={searchRef} {...delegated} />
    </form>
  );
}
