import request from 'superagent'

const rootUrl = '/api/v1'

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

// GET /api/v1/dashboard
export function getDashboardContent() {
  return request.get(rootUrl + '/dashboard').then((res) => {
    let unshuffledArr = res.body
    return shuffle(unshuffledArr)
  })
}
