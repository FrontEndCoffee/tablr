'use strict'

const isArray = array => array instanceof Array
const isNum = number => typeof(number) === 'number'
const l = val => {
  if (val === undefined) throw 'InvalidColumnCountException'
  return val.toString().length
}

const isValidTable = table => isArray(table) &&
  table.filter(isArray).length === table.length

const getColumnWidth = (table, i) => {
  let maxWidth = 0
  table.map(row => {
    const colWidth = l(row[i])
    if (colWidth > maxWidth) maxWidth = colWidth
  })
  return maxWidth
}

const getColumnWidths = table => table[0].map(
  i => getColumnWidth(table, table[0].indexOf(i))
)

const repeat = (char, n) => {
  let str = ''
  for (var i=0; i<n; i++) str += char
  return str
}

const genRow = (row, cols) => {
  let str = '|'
  row.map(item => {
    const n = row.indexOf(item)
    const spacing = cols[n] - l(item)
    if (isNum(item)) str += repeat(' ', spacing)
    str += ' ' + item
    if (!isNum(item)) str += repeat(' ', spacing)
    str += ' |'
  })
  return str
}

const getTotalRowWidth = cols => cols.reduce(
  (total, colWidth) => total + colWidth
) + cols.length * 3 + 1

const genSimpleTable = table => {
  if (!isValidTable(table)) {
    throw 'InvalidTableException'
  }
  const cols = getColumnWidths(table)
  const width = getTotalRowWidth(cols)
  let str = ''
  table.map(row => {
    str += repeat('-', width) + '\n'
    str += genRow(row, cols) + '\n'
  })
  str += repeat('-', width)
  return str
}

module.exports = {

  simple: genSimpleTable,
  headed: (table, heading) => {
    table.unshift(heading)
    return genSimpleTable(table)
  }
}
