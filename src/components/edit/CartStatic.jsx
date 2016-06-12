import React from 'react'
import Link from '../navigation/Link.jsx'
import IPropTypes from 'react-immutable-proptypes'

const styles = require('./Card.css')

function CardStatic(props) {
  const { draft, pending } = props
  const spinner = pending ? <div>Test pending</div> : <div>test not pending</div>

  return (
    <section className={styles.card} >
      <div className={styles.titleInput} >
        <label>Titel</label> <span className={styles.titleInput} value={draft.get('title')} />
      </div>
      <div className={styles.imageInput} >
        <label>Bild</label> <img src={draft.get('icon')} />{spinner}
      </div>
      <div className={styles.descriptionInput} >
        <label>Beskrivning</label>
        <div className={styles.descriptionInput} >{draft.get('description')}</div>
      </div>
    </section>
  )
}

CardStatic.propTypes = {
  draft: IPropTypes.map.isRequired,
  pending: React.PropTypes.bool,
}

export default CardStatic
