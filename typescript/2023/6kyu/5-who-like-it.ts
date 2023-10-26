export const likes = (a: string[]): string => {
  const whoLike: string[] = []
  const people = a.length
  if (people === 1) {
    return `${a[0]} likes this`
  } else if (people === 2) {
    return `${a[0]} and ${a[1]} like this`
  } else if (people === 3 && people > 1) {
    return `${a[0]}, ${a[1]} and ${a[2]} like this`
  } else if (people > 3) {
    whoLike.push(a[0], a[1])
    return `${whoLike.join(', ')} and ${people - whoLike.length} others like this`
  } else {
    return 'no one likes this'
  }
}


console.log(likes([])) // 'no one likes this');
console.log(likes(['Peter'])) // 'Peter likes this');
console.log(likes(['Jacob', 'Alex'])) // 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark'])) // 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])) // 'Alex, Jacob and 2 others like this')
