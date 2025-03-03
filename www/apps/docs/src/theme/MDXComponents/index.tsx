// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents"
import CloudinaryImage from "@site/src/components/CloudinaryImage"
import MDXDetails from "./Details"
import MDXA from "./A"
import { Kbd, DetailsSummary, InlineCode } from "docs-ui"
import H1 from "./H1"

export default {
  // Re-use the default mapping
  ...MDXComponents,
  inlineCode: InlineCode,
  img: CloudinaryImage,
  details: MDXDetails,
  summary: DetailsSummary,
  a: MDXA,
  kbd: Kbd,
  h1: H1,
}
