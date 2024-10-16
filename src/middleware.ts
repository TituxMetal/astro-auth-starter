import { defineMiddleware } from 'astro:middleware'
import { libsql } from './lib/prisma'

export const onRequest = defineMiddleware(async (context, next) => {
  console.log('Sync database with Turso')

  await libsql.sync()

  return next()
})
