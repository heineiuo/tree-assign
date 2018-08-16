# Tree.assign

## Install

```
yarn add tree-assign
```


## Usage

`Tree.assign(tree1, tree2, options)`

`options.siblingUniqueKey`: `string`, default is `id`

`options.childrenKey`: `string`, default is `children`


```jsx
const { Tree } = require('.')

console.log(JSON.stringify(Tree.assign(
  [
    {
      id: '1',
      children: [
        { id: '1.1' },
        { id: '1.2' },
        { id: '1.5' }
      ]
    }
  ],
  [
    {
      id: '1',
      children: [
        { id: '1.2' },
        { id: '1.3' },
        { id: '1.4' },
        {
          id: '1.5',
          children: [
            {
              id: '1.5.1'
            }
          ]
        }
      ]
    }
  ]
), 2, 2))


```


## License 

MIT