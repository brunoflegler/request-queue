async function loadAll (id, files) {
  return Promise.all(
    files.map(async () => {
      try {
        return await isWaiting(files.length)
      } catch (err) {
        console.log(err)
      }
    })
  )
}

async function isWaiting (size) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // code

      resolve({ status: 'processado' })
    }, 100)
  })
}

module.exports = { loadAll }
