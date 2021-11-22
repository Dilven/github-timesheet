import { logger } from '@/config/logger'
import { methodHandler } from '@/helpers/api/method-handler'
import { withAsync } from '@/helpers/api/with-async'
import { withValidation } from '@/helpers/api/with-validation'
import { Item } from '@/models/item'
import { ApiGETItemsSchema } from '@/schemas/api-query'

export default methodHandler({
  get: withAsync(withValidation({
    query: ApiGETItemsSchema,
  })((req, _res): Item[] => {
    logger.info('params: ', req.query.id)
    return [{ id: '123' }]
  }))
})