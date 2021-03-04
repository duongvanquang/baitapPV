const array = [
  ['A1', 'A2',],
  ['B1', 'B2', 'B3'],
  ['C1', 'C2', 'C3', 'C4'],
  ['D1', 'D2', 'D3', 'D4', 'D5']
]

const len = array.length

const combination = (i, preCombi) => {
   if (i === len) return
  console.log('\n')
  const array2 = array[i]
  for (let j = 0; j < array2.length; j++) {
    const log = preCombi ? `${preCombi},${array2[j]}` : `${array2[j]}`
    if (i + 1 === len) {
      console.log(`[${log}]`)
    } else {
      combination(i + 1, log)
    }

  }
}

combination(0, '')