import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)

export class Database {
  #database = {}

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database))
  }

  constructor() {
    fs.readFile(databasePath)
      .then(data => this.#database = JSON.parse(data))
      .catch(() => this.#persist())
  }

  select(table) {
    let data = this.#database[table] ?? []
    return data
  }

  insert(table, data) {

    if (Array.isArray(this.#database[table])) this.#database[table].push(data)
    else this.#database[table] = [data]

    this.#persist()
    return data
  }

  delete(table, id) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if (rowIndex > -1) {
      this.#database[table].splice(rowIndex, 1)
      this.#persist()
    }
  }

  update(table, id, data) {
    const rowIndex = this.#database[table].findIndex(row => row.id === id)

    if (rowIndex > -1) {
      const rowData = this.#database[table][rowIndex]
      for (const key in data) {
        if (data[key]) rowData[key] = data[key]
      }

      this.#persist()
    }
  }

}