import Boom from "@hapi/boom";
import { NextApiRequest, NextApiResponse } from "next";
import { infer as ZodInferType, z, ZodObject, ZodType, ZodTypeAny } from "zod";

type SomeSchema = ZodType<any, any, any>;
type ObjectSchema<T extends {}> = ZodObject<T, "strip", ZodTypeAny, {}, {}>;

export const withValidation = <
  Body extends SomeSchema,
  Query extends SomeSchema,
  Headers extends SomeSchema,
  Schema extends
    | {}
    | { readonly body: ObjectSchema<Body> }
    | { readonly query: ObjectSchema<Query> }
    | { readonly headers: ObjectSchema<Headers> }
    | { readonly body: ObjectSchema<Body>; readonly query: ObjectSchema<Query> }
    | {
        readonly headers: ObjectSchema<Headers>;
        readonly query: ObjectSchema<Query>;
      }
    | {
        readonly body: ObjectSchema<Body>;
        readonly headers: ObjectSchema<Headers>;
      }
    | {
        readonly body: ObjectSchema<Body>;
        readonly query: ObjectSchema<Query>;
        readonly headers: ObjectSchema<Headers>;
      }
>(
  schema: Schema
) => {
  const schemaObj = z.object(schema);
  return <R extends NextApiRequest>(
      handler: (
        req: R & ZodInferType<typeof schemaObj>,
        res: NextApiResponse
      ) => unknown
    ) =>
    async (req: R, res: NextApiResponse) => {
      try {
        const validatedValues = schemaObj.parse(req);
        const request = { ...req, ...validatedValues };
        return handler(request, res);
      } catch (err) {
        throw Boom.badRequest((err as Error | undefined)?.message, err);
      }
    };
};
