export function getUserData (): {username: string, avatarUrl: string} {
  const user = localStorage.getItem('user')
  if (user == null) return null
  return JSON.parse(user)
}

export function getFavoritesAmount (): number {
  const favoritesAmount = localStorage.getItem('favoritesAmount')
  if (favoritesAmount == null) return 0
  return JSON.parse(favoritesAmount)
}
