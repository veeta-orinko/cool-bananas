export const SHOW_COLLECTION = 'SHOW_COLLECTION'

export function showCollection(collection) {
  return {
    type: SHOW_COLLECTION,
    payload: collection,
  }
}
