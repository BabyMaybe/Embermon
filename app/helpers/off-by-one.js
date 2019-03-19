import { helper } from "@ember/component/helper";

export function offByOne(num /*, hash*/) {
  return parseInt(num) + 1;
}

export default helper(offByOne);
