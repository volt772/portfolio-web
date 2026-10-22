// Package suffixes: text descending, then numeric values descending.
// Entries without a project value keep their relative order at the end.
export function compareProjects(a, b) {
  const left = String(a.project ?? '').trim()
  const right = String(b.project ?? '').trim()
  if (!left || !right) return left ? -1 : right ? 1 : 0

  const leftIsNumber = /^\d+$/.test(left)
  const rightIsNumber = /^\d+$/.test(right)
  if (leftIsNumber !== rightIsNumber) return leftIsNumber ? 1 : -1
  return leftIsNumber
    ? Number(right) - Number(left)
    : right.localeCompare(left, 'en')
}
