import { helper } from "@ember/component/helper";

export function equals(params) {
  const a = params[0];
  const b = params[1];
  return a == b;
}

export default helper(equals);
