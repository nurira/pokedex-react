export default function useFocus(ref) {
  React.useEffect(() => {
    ref.current.focus();
  }, []);
}
