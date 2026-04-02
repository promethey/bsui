// border={{ color: "primary", width: 1, top: false }} -> "border border-primary border-1 border-top-0"
// border={true} -> "border"
// border={{ color="success" }} -> "border border-success"
// border={1} -> "border border-1"

const borderWidthList = [1, 2, 3, 4, 5];
const borderPropertyList = ["color", "width", "top", "end", "bottom", "start"];

function border(value) {
  const valueType = typeof value;

  if (valueType === "number") {
    if (borderWidthList.contains(value)) {
      return "border border-" + value;
    }

    return "";
  }

  if (valueType === "object") {
    let result = [];

    for (let [key, val] of Object.entries(value)) {
      if (borderPropertyList.contains(key)) {
        result.push("border-" + val);
      }
    }
  }
}
