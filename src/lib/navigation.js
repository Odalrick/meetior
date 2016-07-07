import I from 'immutable'

export function toUrl(inLink) {
  const link = inLink.toJS ? inLink.toJS() : inLink
  const url = ['', link.type]
  if (link.index !== undefined) {
    url.push('i')
    url.push(link.index)
  }
  url.push(link.id)
  if (link.id2) {
    url.push(link.id2)
  }
  return url.join('/')
}

const rawSearchLink = I.Map().set('type', 'search')
export function makeSearchLink(searchText) {
  return rawSearchLink
    .setIn(['query', 'q'], searchText)
}
