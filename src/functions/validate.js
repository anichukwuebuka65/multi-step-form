export default function validate(data, setErr) {
  const { email, name, number } = data;
  let validated = true;

  checkError(name, "name");
  checkError(email, "email");
  checkError(number, "number");

  return validated;

  function checkError(name, prefix) {
    if (!name) {
      setError(`${prefix}Error`);
      validated = false;
    }
  }

  function setError(errorName) {
    setErr((prev) => ({ ...prev, [errorName]: "this field is required" }));
  }
}
