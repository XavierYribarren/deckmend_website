import { useState } from 'react'
import { cardKey, TAG_COLORS } from '../../data/cards'
import { useI18n } from '../../i18n/context'
import typo from '../type.module.css'
import { LabelBoxesDemo } from './LabelBoxesDemo'
import { MissingCardsDemo } from './MissingCardsDemo'
import { NewDeckDemo } from './NewDeckDemo'
import { RebuildDemo } from './RebuildDemo'
import { StepRow } from './StepRow'
import styles from './steps.module.css'

// 7♥, 2♠ et D♦ (Q♦) manquent au départ
const INITIAL_MISSING = { [cardKey('♥', 6)]: true, [cardKey('♠', 1)]: true, [cardKey('♦', 11)]: true }

export function StepsSection() {
  const { t } = useI18n()
  // Le paquet créé à l'étape 2 est celui qu'on complète à l'étape 3
  // Tant que l'utilisateur n'a rien saisi, le nom par défaut suit la langue
  const [customName, setName] = useState<string | null>(null)
  const name = customName ?? t.cards.decks.bicycleRed
  const [colorIdx, setColorIdx] = useState(0)
  const [missing, setMissing] = useState<Record<string, boolean>>(INITIAL_MISSING)

  return (
    <section id="etapes" className={styles.section}>
      <h2 data-reveal className={`${typo.sectionTitle} ${styles.sectionTitle}`}>{t.steps.title}</h2>

      <StepRow index={0} panelClassName={styles.panelBoxes}>
        <LabelBoxesDemo />
      </StepRow>

      <StepRow index={1} panelClassName={styles.panelCenter}>
        <NewDeckDemo name={name} onName={setName} colorIdx={colorIdx} onColor={setColorIdx} />
      </StepRow>

      <StepRow index={2} panelClassName={styles.panelGrid}>
        <MissingCardsDemo
          name={name}
          color={TAG_COLORS[colorIdx]}
          missing={missing}
          onToggle={(k) => setMissing((m) => ({ ...m, [k]: !m[k] }))}
        />
      </StepRow>

      <StepRow index={3} panelClassName={`${styles.panelCenter} ${styles.panelTall}`}>
        <RebuildDemo />
      </StepRow>
    </section>
  )
}
