import styles from "./SearchForm.module.scss";

export default function SearchForm({ handleSubmit, ...delegated }) {
  return (
    <form className={styles["wrapper"]} onSubmit={handleSubmit}>
      <input type="text" {...delegated} />
    </form>
  );
}
