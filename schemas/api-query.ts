import { z } from "zod";

export const OrderQuery = z.object({
  sortOrder: z.enum(["asc", "desc"]).optional().default("asc"),
});

export const ApiGETItemsSchema = OrderQuery.extend({
  id: z.string().optional(),
});
