import { ApiGETItemsSchema } from "@/schemas/api-query";
import { z } from "zod";

export type ApiGETItems = z.infer<
  typeof ApiGETItemsSchema
>;
