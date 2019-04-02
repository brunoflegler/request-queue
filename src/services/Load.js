async function loadAll (id, files) {
  return Promise.all(
    files.map(async () => {
      try {
        await isWaiting(files.length)
      } catch (err) {
        console.log(err)
      }
    })
  )
}

async function isWaiting (size) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ status: 'processado' })
    }, 1000 * size)
  })
}

module.exports = { loadAll }
