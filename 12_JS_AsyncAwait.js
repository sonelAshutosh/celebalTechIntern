//  JS Async Await

async function example() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('foo')
      resolve('foo')
    }, 1000)
  })
  console.log('bar')
}

example()
console.log('Async Await Example')
