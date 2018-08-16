function mergeChildren (sourceChildren, targetChildren, options) {
  sourceChildren.forEach(itemInSource => {
    if (targetChildren.some(itemInTarget => itemInTarget[options.siblingUniqueKey] === itemInSource[options.siblingUniqueKey])) {
      const sameInTarget = targetChildren.find(aItem => aItem[options.siblingUniqueKey] === itemInSource[options.siblingUniqueKey])
      if (!itemInSource.hasOwnProperty(options.childrenKey)) {
        itemInSource[options.childrenKey] = sameInTarget[options.childrenKey]
      } else if (sameInTarget.hasOwnProperty(options.childrenKey)) {
        itemInSource[options.childrenKey] = mergeChildren(
          itemInSource[options.childrenKey],
          sameInTarget[options.childrenKey],
          options
        )
      }
    }
  })

  targetChildren.forEach(item => {
    if (!sourceChildren.some(itemInSource => itemInSource[options.siblingUniqueKey] === item[options.siblingUniqueKey])) {
      sourceChildren.push(item)
    }
  })

  return sourceChildren
}

export class Tree {
  static assign (sourceTree, targetTree, options = {
    siblingUniqueKey: 'id',
    childrenKey: 'children'
  }) {
    if (targetTree.length === 0) return sourceTree
    if (sourceTree.length === 0) {
      return sourceTree.concat(targetTree)
    }
    return mergeChildren(sourceTree, targetTree, options)
  }
}
