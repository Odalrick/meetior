import React from 'react'
import Link from '../navigation/Link.jsx'
import IPropTypes from 'react-immutable-proptypes'

const styles = require('./Card.less')

function CardStatic(props) {
  const { draft, pending } = props
  const spinner = pending ? <div>Test pending</div> : <div>test not pending</div>

  const iconSrc = draft.get('icon') ? draft.get('icon') : 'http://placehold.it/100x100'
  return (
    <section className={styles.card} >
      <h1 className={styles.title} >{draft.get('title')}</h1>
      <div className={styles.icon} ><img src={iconSrc} />{spinner}</div>
      <div className={styles.description} >{draft.get('description')}</div>
    </section>
  )
}

CardStatic.propTypes = {
  draft: IPropTypes.map.isRequired,
  pending: React.PropTypes.bool,
}

export default CardStatic
