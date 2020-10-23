export const justifyUrl = (url) => {
  const whiteList = ['/direct_v2/web/inbox', '/direct_v2/web/threads/']
  if(!url || typeof url !== 'string') return false
  return whiteList.some(v => url.indexOf(v) !== -1)
}