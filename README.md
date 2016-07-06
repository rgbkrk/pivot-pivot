# Pivot Pivot #

PivotPivot is a data-grid component with pivot-table-like functionality for data display, filtering, and exploration. Can be used without React.

Demo: [http://rgbkrk.github.io/pivot-pivot/](http://rgbkrk.github.io/pivot-pivot/)

![Demo](http://i.imgur.com/BhPF2Cv.gif)

Forked from [react-pivot](https://github.com/davidguttman/react-pivot)

## Installation & Usage ##

<strong> Default (Browserify/webpack): </strong>

```
npm i -S pivot-pivot
```

```js
var React = require('react')
var ReactPivot = require('pivot-pivot')

React.render(
  <ReactPivot rows={rows}
              dimensions={dimensions}
              reduce={reduce}
              calculations={calculations}
              nPaginateRows={25} />,
  document.body
)
```

<strong> Classic (no React or Browserify): </strong>

Download [pivot-pivot-standalone-1.16.0.min.js](https://raw.githubusercontent.com/rgbkrk/pivot-pivot/master/dist/pivot-pivot-standalone-1.16.0.min.js)

```html
<script src='pivot-pivot-standalone-1.16.0.min.js'></script>
<script>
  ReactPivot(document.body, {
    rows: rows,
    dimensions: dimensions,
    calculations: calculations,
    reduce: reduce
  })
</script>
```

<strong> Custom (Browserify, no React): </strong>

```js
var ReactPivot = require('pivot-pivot/load')

ReactPivot(document.body, {
  rows: rows,
  dimensions: dimensions,
  reduce: reduce,
  calculations: calculations
})

```


## Example ##

```js
var React = require('react')
var ReactPivot = require('pivot-pivot')

React.render(
  <ReactPivot rows={rows}
              dimensions={dimensions}
              reduce={reduce}
              calculations={calculations} />,
  document.body
)
```

`ReactPivot` takes four arguments: `rows`, `dimensions`, `reduce` and `calculations`

`rows` is your data, just an array of objects:
```js
var rows = [
  {"firstName":"Francisco","lastName":"Brekke","state":"NY","transaction":{"amount":"399.73","date":"2012-02-02T08:00:00.000Z","business":"Kozey-Moore","name":"Checking Account 2297","type":"deposit","account":"82741327"}},
  {"firstName":"Francisco","lastName":"Brekke","state":"NY","transaction":{"amount":"768.84","date":"2012-02-02T08:00:00.000Z","business":"Herman-Langworth","name":"Money Market Account 9344","type":"deposit","account":"95753704"}}
]
```

`dimensions` is how you want to group your data. Maybe you want to get the total $$ by `firstName` and have the column title be `First Name`:

```js
var dimensions = [
  {value: 'firstName', title: 'First Name'}
]
```

`reduce` is how you calculate numbers for each group:

```js
var reduce = function(row, memo) {
  memo.amountTotal = (memo.amountTotal || 0) + parseFloat(row.transaction.amount)
  return memo
}
```

`calculations` is how you want to display the calculations done in `reduce`:

```js
var calculations = [
  {
    title: 'Amount', value: 'amountTotal',
    template: function(val, row) {
      return '$' + val.toFixed(2)
    }
  }
]
```

Plug them in and you're good to go!

```js

// Optional: set a default grouping with "activeDimensions"
React.render(
  <ReactPivot rows={rows}
              dimensions={dimensions}
              reduce={reduce}
              calculations={calculations}
              activeDimensions={['First Name']} />,
  document.body
)
```

See it all together in [example/basic.js](https://github.com/rgbkrk/pivot-pivotguttman/pivot-pivot/blob/master/example/basic.js)


### TODO ###

* Better Pagination
* Responsive Table

## License ##

MIT
