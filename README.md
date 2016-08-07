# tablr
A module that generates plain-text tables from JSON data

A piece of JSON data you might want to process is:
``` javascript
[
  ["Lannister", "The Crownlands", "Hear me roar"],
  ["Stark", "The North", "Winter is coming"],
  ["Frey", "The Riverlands", "unknown"],
  ["Tyrell", "The Reach", "Growing strong"],
  ["Martell", "Dorne", "Unbowed, unbent, unbroken"],
  ["Greyjoy", "The Iron Islands", "We do not sow"],
  ["Arryn", "The vale of Arryn", "High as honor"],
  ["Targaryen", "n/a", "Fire and blood"]  
]
```
This data will be used in all the examples.

## tablr.simple

For the sample data you'll use the module like this:
``` javascript
console.log(
  tablr.simple( data )
)
```

And the output will look like this:
```
-------------------------------------------------------------
| Lannister | The Crownlands    | Hear me roar              |
-------------------------------------------------------------
| Stark     | The North         | Winter is coming          |
-------------------------------------------------------------
| Frey      | The Riverlands    | unknown                   |
-------------------------------------------------------------
| Tyrell    | The Reach         | Growing strong            |
-------------------------------------------------------------
| Martell   | Dorne             | Unbowed, unbent, unbroken |
-------------------------------------------------------------
| Greyjoy   | The Iron Islands  | We do not sow             |
-------------------------------------------------------------
| Arryn     | The vale of Arryn | High as honor             |
-------------------------------------------------------------
| Targaryen | n/a               | Fire and blood            |
-------------------------------------------------------------
```

## tablr.headed

Of course you might want to add a heading to the table.
``` javascript
console.log(
  tablr.headed(data, ['HOUSE', 'REGION', 'WORDS'])
)
```

And the output will look like this:
```
-------------------------------------------------------------
| HOUSE     | REGION            | WORDS                     |
-------------------------------------------------------------
| Lannister | The Crownlands    | Hear me roar              |
-------------------------------------------------------------
| Stark     | The North         | Winter is coming          |
-------------------------------------------------------------
| Frey      | The Riverlands    | unknown                   |
-------------------------------------------------------------
| Tyrell    | The Reach         | Growing strong            |
-------------------------------------------------------------
| Martell   | Dorne             | Unbowed, unbent, unbroken |
-------------------------------------------------------------
| Greyjoy   | The Iron Islands  | We do not sow             |
-------------------------------------------------------------
| Arryn     | The vale of Arryn | High as honor             |
-------------------------------------------------------------
| Targaryen | n/a               | Fire and blood            |
-------------------------------------------------------------
```
