export default function useToggle(initial = false) {
  if (typeof initial !== "boolean") {
    console.warn(
      `useToggle(${initial}) is not being initialized with a boolean value.`
    );
  }

  const [value, setValue] = React.useState(initial);
  return [value, () => setValue((v) => !v)];
}
