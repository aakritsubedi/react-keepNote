import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newNote = () => {
  const progress = Math.random()
  return {
    content: namor.generate({ words: 8, numbers: 0 }),
    date: Date.now(),
    progress: Math.floor(progress * 100),
    status:
      progress > 0.85
        ? 'Completed'
        : progress > 0.50
        ? 'Pending'
        : 'Working on it',
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newNote()
      }
    })
  }

  return makeDataLevel()
}
