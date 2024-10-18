import type { APIRoute } from 'astro'
import { prisma } from '~/lib/prisma'

export const GET: APIRoute = async () => {
  const tasks = await prisma.task.findMany()

  return new Response(JSON.stringify(tasks), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const POST: APIRoute = async ({ request, redirect }) => {
  console.log('POST request received')

  const formData = await request.formData()
  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const dueDate = formData.get('dueDate') as string

  try {
    await prisma.task.create({
      data: {
        title,
        description,
        dueDate: dueDate ? new Date(dueDate) : null
      }
    })

    return redirect('/tasks')
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: 'Failed to create task' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
