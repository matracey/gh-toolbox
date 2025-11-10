import TurndownService from "turndown";
import { gfm } from "@joplin/turndown-plugin-gfm";

export interface TurndownOptions {
  headingStyle?: "setext" | "atx";
  hr?: string;
  bulletListMarker?: "-" | "+" | "*";
  codeBlockStyle?: "indented" | "fenced";
  fence?: string;
  emDelimiter?: "_" | "*";
  strongDelimiter?: "**" | "__";
  linkStyle?: "inlined" | "referenced";
  linkReferenceStyle?: "full" | "collapsed" | "shortcut";
  br?: string;
  blankReplacement?: (content: string, node: Node) => string;
  keepReplacement?: (content: string, node: Node) => string;
  defaultReplacement?: (content: string, node: Node) => string;
}

export const defaultTurndownOptions: TurndownOptions = {
  headingStyle: "atx",
  hr: "---",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  fence: "```",
  emDelimiter: "_",
  strongDelimiter: "**",
  linkStyle: "inlined",
  linkReferenceStyle: "full",
  br: "  ",
};

/**
 * Creates a configured Turndown service instance with GFM plugin
 */
export function createTurndownService(
  options: TurndownOptions = defaultTurndownOptions
): TurndownService {
  const turndownService = new TurndownService({
    headingStyle: options.headingStyle || defaultTurndownOptions.headingStyle,
    hr: options.hr || defaultTurndownOptions.hr,
    bulletListMarker:
      options.bulletListMarker || defaultTurndownOptions.bulletListMarker,
    codeBlockStyle:
      options.codeBlockStyle || defaultTurndownOptions.codeBlockStyle,
    fence: options.fence || defaultTurndownOptions.fence,
    emDelimiter: options.emDelimiter || defaultTurndownOptions.emDelimiter,
    strongDelimiter:
      options.strongDelimiter || defaultTurndownOptions.strongDelimiter,
    linkStyle: options.linkStyle || defaultTurndownOptions.linkStyle,
    linkReferenceStyle:
      options.linkReferenceStyle || defaultTurndownOptions.linkReferenceStyle,
    br: options.br || defaultTurndownOptions.br,
  });

  // Add GFM plugin for GitHub Flavored Markdown support
  turndownService.use(gfm);

  return turndownService;
}

/**
 * Convert HTML to Markdown using the provided Turndown service
 */
export function convertHtmlToMarkdown(
  html: string,
  turndownService: TurndownService
): string {
  try {
    if (!html || html.trim() === "") {
      return "";
    }
    return turndownService.turndown(html);
  } catch (error) {
    console.error("Error converting HTML to Markdown:", error);
    return `Error: ${
      error instanceof Error ? error.message : "Conversion failed"
    }`;
  }
}
