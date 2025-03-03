import { FlagRouter } from "@medusajs/utils"
import { Router } from "express"
import "reflect-metadata"
import { Region } from "../../../.."
import TaxInclusivePricingFeatureFlag from "../../../../loaders/feature-flags/tax-inclusive-pricing"
import { DeleteResponse, PaginatedResponse } from "../../../../types/common"
import middlewares from "../../../middlewares"

const route = Router()

export default (app, featureFlagRouter: FlagRouter) => {
  app.use("/regions", route)

  if (featureFlagRouter.isFeatureEnabled(TaxInclusivePricingFeatureFlag.key)) {
    defaultAdminRegionFields.push("includes_tax")
  }

  route.get("/", middlewares.wrap(require("./list-regions").default))
  route.get("/:region_id", middlewares.wrap(require("./get-region").default))

  route.get(
    "/:region_id/fulfillment-options",
    middlewares.wrap(require("./get-fulfillment-options").default)
  )

  route.post("/", middlewares.wrap(require("./create-region").default))
  route.post(
    "/:region_id",
    middlewares.wrap(require("./update-region").default)
  )

  route.delete(
    "/:region_id",
    middlewares.wrap(require("./delete-region").default)
  )

  route.post(
    "/:region_id/countries",
    middlewares.wrap(require("./add-country").default)
  )
  route.delete(
    "/:region_id/countries/:country_code",
    middlewares.wrap(require("./remove-country").default)
  )

  route.post(
    "/:region_id/payment-providers",
    middlewares.wrap(require("./add-payment-provider").default)
  )
  route.delete(
    "/:region_id/payment-providers/:provider_id",
    middlewares.wrap(require("./remove-payment-provider").default)
  )

  route.post(
    "/:region_id/fulfillment-providers",
    middlewares.wrap(require("./add-fulfillment-provider").default)
  )
  route.delete(
    "/:region_id/fulfillment-providers/:provider_id",
    middlewares.wrap(require("./remove-fulfillment-provider").default)
  )

  return app
}

export const defaultAdminRegionFields: (keyof Region)[] = [
  "id",
  "name",
  "automatic_taxes",
  "gift_cards_taxable",
  "tax_provider_id",
  "currency_code",
  "tax_rate",
  "tax_code",
  "created_at",
  "updated_at",
  "deleted_at",
  "metadata",
]

export const defaultAdminRegionRelations = [
  "countries",
  "payment_providers",
  "fulfillment_providers",
]

/**
 * @schema AdminRegionsRes
 * type: object
 * description: "The region's details."
 * x-expanded-relations:
 *   field: region
 *   relations:
 *     - countries
 *     - fulfillment_providers
 *     - payment_providers
 *   eager:
 *     - fulfillment_providers
 *     - payment_providers
 * required:
 *   - region
 * properties:
 *   region:
 *     description: "Region details."
 *     $ref: "#/components/schemas/Region"
 */
export type AdminRegionsRes = {
  region: Region
}

/**
 * @schema AdminRegionsListRes
 * type: object
 * description: "The list of regions with pagination fields."
 * x-expanded-relations:
 *   field: regions
 *   relations:
 *     - countries
 *     - fulfillment_providers
 *     - payment_providers
 *   eager:
 *     - fulfillment_providers
 *     - payment_providers
 * required:
 *   - regions
 *   - count
 *   - offset
 *   - limit
 * properties:
 *   regions:
 *     type: array
 *     description: "An array of regions details."
 *     items:
 *       $ref: "#/components/schemas/Region"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of regions skipped when retrieving the regions.
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export type AdminRegionsListRes = PaginatedResponse & {
  regions: Region[]
}

/**
 * @schema AdminRegionsDeleteRes
 * type: object
 * required:
 *   - id
 *   - object
 *   - deleted
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Region.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: region
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export type AdminRegionsDeleteRes = DeleteResponse

export class FulfillmentOption {
  provider_id: string
  options: unknown[]
}

/**
 * @schema AdminGetRegionsRegionFulfillmentOptionsRes
 * type: object
 * description: "The list of fulfillment options in a region."
 * required:
 *   - fulfillment_options
 * properties:
 *   fulfillment_options:
 *     type: array
 *     description: Fulfillment providers details.
 *     items:
 *       type: object
 *       required:
 *         - provider_id
 *         - options
 *       properties:
 *         provider_id:
 *           description: ID of the fulfillment provider
 *           type: string
 *         options:
 *           description: fulfillment provider options
 *           type: array
 *           items:
 *             type: object
 *             example:
 *               - id: "manual-fulfillment"
 *               - id: "manual-fulfillment-return"
 *                 is_return: true
 */
export class AdminGetRegionsRegionFulfillmentOptionsRes {
  fulfillment_options: FulfillmentOption[]
}

export * from "./add-country"
export * from "./add-fulfillment-provider"
export * from "./add-payment-provider"
export * from "./create-region"
export * from "./list-regions"
export * from "./update-region"
