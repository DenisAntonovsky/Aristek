export const groupBy = (arr, key) => {
  if (!arr || !key) {
    return new Error('not enough arguments')
  }
  const newObj = {}
  arr.forEach(things => {
    if (!Object.keys(things).includes(key)) { 
      return newObj 
    } else if (things[key] in newObj) {
      newObj[things[key]].push(things)
    } else {
      newObj[things[key]] = []
      newObj[things[key]].push(things)
    }  
  })
  return newObj
}