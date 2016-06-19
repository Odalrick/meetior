import React from 'react'

const styles = require('./CardHolder.less')

function makeCascade(index, children) {
  if (index === 0) {
    return (
      <div className={styles.cascade} >
        <div className={styles.content} >
          {children[index]}
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.cascade} >
        {makeCascade(index - 1, children)}
        <div className={styles.content} >
          {children[index]}
        </div>
      </div>
    )
  }
}

function CardHolder(props) {
  const children = React.Children.toArray(props.children)
  const cascade = makeCascade(children.length - 1, children)

  return (
    <div className={styles.wrapper} style={{ paddingTop: children.length * 50 }} >
      <div className={styles.innerWrapper} >
        {cascade}
      </div>
    </div>
  )

}

CardHolder.propTypes = {
  children: React.PropTypes.arrayOf(React.PropTypes.node),
}

export default CardHolder
