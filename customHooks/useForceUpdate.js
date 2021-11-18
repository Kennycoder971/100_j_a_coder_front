import { useState } from "react";
export default function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  setValue((value) => value + 1); // update the state to force render
}
