# Deckmend — site vitrine

Vite + React + TypeScript, CSS Modules. Maquette de référence : `design_source/Deckmend Site v2.dc.html` (non versionnée).

```bash
npm install
npm run dev      # développement
npm run build    # build de prod dans dist/
```

## Téléchargements

Les boutons Android (APK) et iPhone (PWA, « Sur l'écran d'accueil ») ouvrent un overlay avec les instructions
d'installation (`src/components/DownloadDialog.tsx`). Liens : `src/data/platforms.ts`, textes : `src/i18n/`.
Les URLs se surchargent au build :

| Variable           | Défaut                                                            |
| ------------------ | ----------------------------------------------------------------- |
| `VITE_APK_URL`     | `/downloads/deckmend.apk` (→ `public/downloads/`, ignoré par git) |
| `VITE_PWA_URL`     | `/app/` (URL de l'app web installable)                            |
| `VITE_APP_VERSION` | `1.0.0`                                                           |

## Variante de hero

`?hero=B` dans l'URL affiche la variante B (titre plein cadre, média 16:9).

## Langues

La langue suit celle du navigateur (`navigator.languages`), avec repli sur l'anglais. `?lang=fr` ou `?lang=en` force une langue.

- `src/i18n/fr.ts` est le dictionnaire de référence : il définit le type `Messages`.
- Ajouter une langue : créer `src/i18n/xx.ts` typé `Messages` (TypeScript signale toute clé manquante), puis l'enregistrer dans `LOCALES` (`src/i18n/locales.ts`).
- Dans un composant : `const { t } = useI18n()`.
