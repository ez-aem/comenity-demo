export type OutputFormat = "xml" | "json";
export type cqStyleGroups = {
  readonly "@jcr:primaryType"?: string;
  readonly items: cqStyleGroup[];
}
export class CQStyleGroups {
  private "@jcr:primaryType": string = "nt:unstructured";
  private items: CQStyleGroup[];

  constructor(items?: CQStyleGroup[]) {
    this.items = items || [];
  }

  addStyleGroup(styleGroup: CQStyleGroup): void {
    this.items.push(styleGroup);
  }

  format(output: OutputFormat = "xml") {
    if (output === "xml") {
      return {
        ["@jcr:primaryType"]: this["@jcr:primaryType"],
        ...this.formatItems(output),
      }
    } else if (output === "json") {
      return {
        ["jcr:primaryType"]: this["@jcr:primaryType"],
        ...this.formatItems(output),
      }
    }
  }

  private formatItems(output?: OutputFormat) {
    let formattedItems = {};
    this.items.forEach((item: CQStyleGroup, i: number) => formattedItems[`item${i}`] = item.format(output));
    return formattedItems;
  }
}

export type cqStyleGroup = {
  readonly "@jcr:primaryType"?: string;
  "@cq:styleGroupLabel": string;
  "@cq:styleGroupMultiple"?: boolean;
  "cq:styles"?: CQStyle[];
}
export class CQStyleGroup{
  private "@jcr:primaryType": string = "nt:unstructured";
  "@cq:styleGroupLabel": string;
  "@cq:styleGroupMultiple"?: boolean;
  "cq:styles"?: CQStyle[];

  constructor(settings: cqStyleGroup) {
    if (!settings) throw new Error(`No Settings were passed: ${settings}`)
    this["@cq:styleGroupLabel"] = settings["@cq:styleGroupLabel"];
    this["@cq:styleGroupMultiple"] = settings["@cq:styleGroupMultiple"] || false;
    this["cq:styles"] = settings["cq:styles"] || [];
  }

  format(output: OutputFormat = "xml") {
    if (output === "xml") {
      return {
        ["@jcr:primaryType"]: this["@jcr:primaryType"],
        ["@cq:styleGroupLabel"]: this["@cq:styleGroupLabel"],
        ["@cq:styleGroupMultiple"]: this["@cq:styleGroupMultiple"],
        ["cq:styles"]: {
          "@jcr:primaryType": "nt:unstructured",
          ...this.formatStyles(output)
        }
      }
    } else if (output === "json") {
      return {
        ["jcr:primaryType"]: this["@jcr:primaryType"],
        ["cq:styleGroupLabel"]: this["@cq:styleGroupLabel"],
        ["cq:styleGroupMultiple"]: this["@cq:styleGroupMultiple"],
        ["cq:styles"]: {
          "jcr:primaryType": "nt:unstructured",
          ...this.formatStyles(output)
        }
      }
    }
  }

  private formatStyles(output?: OutputFormat) {
    let formattedStyles = {};
    this["cq:styles"].forEach((style, i) => formattedStyles[`item${i}`] = style.format(output))
    return formattedStyles;
  }

  addStyle(style: CQStyle): void {
    this["cq:styles"].push(style);
  }
}

export type cqStyle = {
  readonly "@jcr:primaryType"?: string;
  "@cq:styleId": string | number;
  "@cq:styleLabel": string | number;
  "@cq:styleClasses"?: string | number;
}
export class CQStyle {
  private "@jcr:primaryType": string = "nt:unstructured";
  "@cq:styleId": string | number;
  "@cq:styleLabel": string | number;
  "@cq:styleClasses"?: string | number;

  constructor(settings: cqStyle) {
    if (!settings) throw new Error(`No Settings were passed: ${settings}`)
    this["@cq:styleId"] = settings["@cq:styleId"];
    this["@cq:styleLabel"] = settings["@cq:styleLabel"];
    this["@cq:styleClasses"] = settings["@cq:styleClasses"] ||  settings["@cq:styleId"];
  }

  format(output: OutputFormat = "xml") {
    if (output === "xml") {
      return {
        "@jcr:primaryType": this["@jcr:primaryType"],
        "@cq:styleId": this["@cq:styleId"],
        "@cq:styleLabel": this["@cq:styleLabel"],
        "@cq:styleClasses": this["@cq:styleClasses"]
      }
    } else {
      return {
        "jcr:primaryType": this["@jcr:primaryType"],
        "cq:styleId": this["@cq:styleId"],
        "cq:styleLabel": this["@cq:styleLabel"],
        "cq:styleClasses": this["@cq:styleClasses"]
      }
    }
  }
}