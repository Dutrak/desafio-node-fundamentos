import { Database } from "./database.js"
import { randomUUID } from 'node:crypto'
import { buildRoutePath } from "./utils/build-route-path.js"

const database = new Database

export const routes = [
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const tasks = database.select('tasks')
      return res.end(JSON.stringify(tasks))
    }
  },

  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const data = {
        id: randomUUID(),
        ...req.body,
        createdAt: new Date(),
        updatedAt: new Date(),
        completedAt: null
      }

      database.insert('tasks', data)

      return res.writeHead(201).end()
    }
  },

  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params
      const { title, description } = req.body

      const updatedAt = new Date()

      if (!id) return res.writeHead(404).end('ID not found')

      database.update('tasks', id, { title, description, updatedAt })

      return res.writeHead(204).end()
    }
  },

  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => {
      const { id } = req.params
      if (!id) return res.writeHead(404).end('ID not found')

      let completedAt = database.select('tasks', id).completedAt

      if (!completedAt) {
        completedAt = new Date()
      } else {
        completedAt = null
      }

      database.update('tasks', id, { completedAt })
      return res.writeHead(204).end()
    }
  },

  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params

      if (!id) return res.writeHead(404).end('ID not found')

      database.delete('tasks', id)

      return res.writeHead(204).end()
    }
  }

]