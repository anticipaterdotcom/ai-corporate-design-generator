# Setup (one-time, for maintainers)

Two separate things:

- **Live Storybook** (shows every brand from `tokens/`): needs **only GitHub Pages**
  enabled — **no** secrets. → Step 2.
- **AI generation of new brands** (`/generate`): additionally needs the two secrets
  + `ENGINE_REPO`. → Step 1.

None of this is ever committed to the repo.

> **Runners:** all workflows target **self-hosted** runners
> (`runs-on: [self-hosted, Linux, X64]`). You need at least one online self-hosted
> runner (repo- or org-level) with those labels. For **org-level** runners, the
> runner group must allow this **public** repository (Org → Settings → Actions →
> Runner groups → allow public repositories / this repo).

## 1 · Create secrets (only for AI generation)

Repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Name | Type | Value | Purpose |
| --- | --- | --- | --- |
| `DEVSHOT_API_KEY` | Secret | your `ds_...` key with AI access | calling the DevShot API |
| `ENGINE_TOKEN` | Secret | fine-grained PAT, **read-only** on your private engine repo | checking out the generation scripts |

As **Variables** (Settings → … → Actions → **Variables**; not secrets):

| Name | Value | Default |
| --- | --- | --- |
| `ENGINE_REPO` | `owner/repo` of your private engine repo (deliberately not in source) | – (required) |
| `DEVSHOT_MODEL` | e.g. `minimax` or `devshot-chat` | `minimax` |

> The name of the private engine repo is deliberately **not** in the public source,
> only in the `ENGINE_REPO` variable.

### Fine-grained PAT for `ENGINE_TOKEN`

GitHub → **Settings → Developer settings → Fine-grained tokens → Generate**:
- **Resource owner:** the owner of your private engine repo
- **Repository access:** only the private engine repo
- **Permissions:** Repository → **Contents: Read-only**
- Copy the token and store it as `ENGINE_TOKEN`.

## 2 · Enable GitHub Pages

Repo → **Settings → Pages → Build and deployment → Source: "GitHub Actions"**.

After that, `deploy-storybook.yml` deploys the Storybook on every push to `main`
(when `tokens/` or `storybook/` change) to:
`https://anticipaterdotcom.github.io/ai-corporate-design-generator/`

## 3 · Check permissions

Repo → **Settings → Actions → General**:
- **Workflow permissions:** "Read and write" (to commit artifacts into the PR).

## Security model (important)

- This repo is **public**. GitHub does **not** pass secrets to workflows from fork
  PRs — so auto-generation on every fork PR is intentionally **not** implemented.
- Generation is **maintainer-gated**: it only starts on a `/generate` comment from
  OWNER/MEMBER/COLLABORATOR, or via a manual dispatch.
- The `issue_comment` workflow runs in the context of the default branch (trusted)
  and executes **only the engine scripts**, never code from the PR — the brief is
  read purely as **data**.
- No `pull_request_target`. No key in the repo. No key in logs.

## Testing without a key

The generator has a **dry-run** (deterministic synthesis, no network):

```bash
python3 _engine/scripts/generate_brand.py --brief briefs/example-aurora-labs.yml \
  --dry-run --out-brands brands --out-agents agents --out-tokens tokens
```
