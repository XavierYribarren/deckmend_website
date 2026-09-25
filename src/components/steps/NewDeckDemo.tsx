import { useId } from 'react'
import { DECKS, TAG_COLORS } from '../../data/cards'
import { useI18n } from '../../i18n/context'
import { Dot } from '../primitives'
import styles from './steps.module.css'

interface Props {
  name: string
  onName: (name: string) => void
  colorIdx: number
  onColor: (idx: number) => void
}

export function NewDeckDemo({ name, onName, colorIdx, onColor }: Props) {
  const { t } = useI18n()
  const inputId = useId()
  const copy = t.steps.newDeck

  return (
    <div className={styles.form}>
      <div className={styles.formTitle}>{copy.title}</div>
      <div className={styles.field}>
        <label htmlFor={inputId}>{copy.name}</label>
        <input
          id={inputId}
          className={styles.input}
          value={name}
          maxLength={22}
          onChange={(e) => onName(e.target.value)}
        />
      </div>
      <fieldset className={styles.field}>
        <legend>{copy.color}</legend>
        <div className={styles.swatches}>
          {TAG_COLORS.map((color, i) => (
            <button
              key={color}
              type="button"
              className={styles.swatch}
              aria-label={copy.colors[i]}
              aria-pressed={i === colorIdx}
              style={{ background: color }}
              onClick={() => onColor(i)}
            />
          ))}
        </div>
      </fieldset>
      <div className={styles.deckList}>
        <div className={`${styles.deckRow} ${styles.deckRowNew}`}>
          <Dot color={TAG_COLORS[colorIdx]} />
          <span className={styles.deckName}>{name.trim() || t.cards.unnamed}</span>
          <span className={styles.deckCount}>52/52</span>
        </div>
        {DECKS.slice(1, 3).map((d) => (
          <div key={d.id} className={`${styles.deckRow} ${styles.deckRowMuted}`}>
            <Dot color={d.color} />
            <span className={styles.deckName}>{t.cards.decks[d.id]}</span>
            <span className={styles.deckCount}>{d.count}/52</span>
          </div>
        ))}
      </div>
    </div>
  )
}
