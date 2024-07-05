import { parse } from 'csv-parse'
import fs from 'node:fs';

const csvFilePath = new URL('../data.csv', import.meta.url)

async function processFile() {
  const parser = fs
    .createReadStream(csvFilePath)
    .pipe(parse({
      delimiter: ',',
      from_line: 2
    }))

  for await (const record of parser) {
    const [title, description] = record
    fetch('http://localhost:3333/tasks', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description
      })
    })
  }
}

(async () => {
  await processFile();
})()