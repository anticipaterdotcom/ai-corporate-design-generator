# Setup (einmalig, für Maintainer)

Damit die Generierung läuft, brauchst du **zwei Secrets** und **GitHub Pages**.
Nichts davon wird je ins Repo committet.

## 1 · Secrets anlegen

Repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Name | Typ | Wert | Zweck |
| --- | --- | --- | --- |
| `DEVSHOT_API_KEY` | Secret | dein `ds_...`-Key mit AI-Zugriff | Aufruf der DevShot-API |
| `ENGINE_TOKEN` | Secret | Fine-grained PAT, **read-only** auf dein privates Engine-Repo | Auschecken der Generierungs-Skripte + Storybook-Builder |

Als **Variables** (Settings → … → Actions → **Variables**; kein Secret):

| Name | Wert | Default |
| --- | --- | --- |
| `ENGINE_REPO` | `owner/repo` deines privaten Engine-Repos (bewusst nicht im Quellcode) | – (Pflicht) |
| `DEVSHOT_MODEL` | z. B. `minimax` oder `devshot-chat` | `minimax` |

> Der Name des privaten Engine-Repos steht bewusst **nicht** im öffentlichen Code,
> sondern nur in der Variable `ENGINE_REPO`.

### Fine-grained PAT für `ENGINE_TOKEN`

GitHub → **Settings → Developer settings → Fine-grained tokens → Generate**:
- **Resource owner:** der Owner deines privaten Engine-Repos
- **Repository access:** nur das private Engine-Repo
- **Permissions:** Repository → **Contents: Read-only**
- Token kopieren und als `ENGINE_TOKEN` speichern.

## 2 · GitHub Pages aktivieren

Repo → **Settings → Pages → Build and deployment → Source: „GitHub Actions"**.

Danach deployt der Workflow `deploy-storybook.yml` bei jedem Push auf `main`
(sobald `tokens/` sich ändert) das Storybook nach:
`https://anticipaterdotcom.github.io/ai-corporate-design-generator/`

## 3 · Berechtigungen prüfen

Repo → **Settings → Actions → General**:
- **Workflow permissions:** „Read and write" (für Commit der Artefakte in den PR).

## Sicherheitsmodell (wichtig)

- Dieses Repo ist **öffentlich**. GitHub gibt Secrets **nicht** an Workflows aus
  Fork-PRs weiter – Auto-Generierung auf jedem Fork-PR ist deshalb bewusst **nicht**
  eingebaut.
- Die Generierung ist **maintainer-gated**: sie startet nur bei
  `/generate`-Kommentar von OWNER/MEMBER/COLLABORATOR oder per manuellem Dispatch.
- Der `issue_comment`-Workflow läuft im Kontext des Default-Branch (vertrauenswürdig)
  und führt **nur die Engine-Skripte** aus, nie Code aus dem PR – der Brief wird
  ausschließlich als **Daten** gelesen.
- Kein `pull_request_target`. Kein Key im Repo. Kein Key in Logs.

## Testen ohne Key

Der Generator hat einen **Dry-Run** (deterministische Synthese ohne Netzwerk):

```bash
python3 _engine/scripts/generate_brand.py --brief briefs/example-aurora-labs.yml \
  --dry-run --out-brands brands --out-agents agents --out-tokens tokens
```
