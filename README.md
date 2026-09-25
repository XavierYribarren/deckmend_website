# Deckmend — site vitrine

Vite + React + TypeScript, CSS Modules. Maquette de référence : `design_source/Deckmend Site v2.dc.html` (non versionnée).

```bash
npm install
npm run dev      # développement
npm run build    # build de prod dans dist/
```

## Installation (PWA)

Deckmend est distribuée uniquement en app web installable. Les trois boutons (Android, iPhone, ordinateur)
pointent vers `APP_URL` et ouvrent un overlay d'instructions propre à chaque plateforme
(`src/components/InstallDialog.tsx`). Cmd/Ctrl + clic ouvre directement l'app.

L'adresse est dans `src/data/platforms.ts` et se surcharge au build :

```bash
VITE_APP_URL=https://app.deckmend.com npm run build
```

## Variante de hero

`?hero=B` dans l'URL affiche la variante B (titre plein cadre, média 16:9).

## Langues

La langue suit celle du navigateur (`navigator.languages`), avec repli sur l'anglais. `?lang=fr` ou `?lang=en` force une langue.

- `src/i18n/fr.ts` est le dictionnaire de référence : il définit le type `Messages`.
- Ajouter une langue : créer `src/i18n/xx.ts` typé `Messages` (TypeScript signale toute clé manquante), puis l'enregistrer dans `LOCALES` (`src/i18n/locales.ts`).
- Dans un composant : `const { t } = useI18n()`.
