// border={{ color: "primary", width: 1, top: 0 }} -> "border border-primary border-1 border-top-0"
// border={true} -> "border"
// border={{ color="success" }} -> "border border-success"
// border={1} -> "border border-1"
// border="top" -> "border-top"
// border="end" -> "border-end"
// border="bottom" -> "border-bottom"
// border="start" -> "border-start"
// border={{ aspect: "top", color: "primary" }} -> "border-top border-primary"

const BASE_CLASSNAME = 'border';
const borderWidthList = [1, 2, 3, 4, 5];
const borderPropertyList = ["color", "width", "top", "end", "bottom", "start"];
const borderDirectionsList = ["top", "end", "bottom", "start"];

export function border(value) {
  const valueType = typeof value;

  if (valueType === 'boolean') {
    return BASE_CLASSNAME;
  }

  if (valueType === 'string') {
    if (borderDirectionsList.includes(value)) {
      return `${BASE_CLASSNAME}-${value}`;
    }

    return "";
  }

  if (valueType === "number") {
    if (borderWidthList.includes(value)) {
      return [BASE_CLASSNAME, `${BASE_CLASSNAME}-${value}`].join(" ").trim();
    }

    return "";
  }

  if (valueType === "object") {
    let result = [];

    if (value?.aspect && borderDirectionsList.includes(value.aspect)) {
      result.push(`${BASE_CLASSNAME}-${value.aspect}`)
    } else {
      result.push(BASE_CLASSNAME);
    }

    for (let [key, val] of Object.entries(value)) {
      if (borderPropertyList.includes(key)) {
        // for top end bottom start
        if (borderDirectionsList.includes(key)) {
          result.push(`${BASE_CLASSNAME}-${key}-${val}`);
        } else {
          result.push(`${BASE_CLASSNAME}-${val}`);
        }    
      }
    }

    return result.join(" ").trim();
  }
}
