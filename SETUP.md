# Setup

This public repo runs **no GitHub Actions** (no runners here). It only:

- **serves the Storybook** from the `gh-pages` branch via GitHub Pages, and
- **holds the content** (`briefs/`, `brands/`, `agents/`, `tokens/`, `storybook/`).

All building and generation happens on **self-hosted runners in the private engine
repository**.

## 1 · GitHub Pages (this repo)

Repo → **Settings → Pages → Build and deployment**:
- **Source: "Deploy from a branch"**
- **Branch: `gh-pages` / `/ (root)`**

That's it — no Actions, no secrets on this repo. Pages serves whatever the private
engine pushes to `gh-pages`.

## 2 · The private engine (where the work runs)

The private engine repo holds the generation scripts + the self-hosted workflows
`Publish Public Storybook` and `Generate Brand`. Configure there:

| Kind | Name | Value |
| --- | --- | --- |
| Secret | `PUBLIC_REPO_TOKEN` | fine-grained PAT, **Contents: write** on *this* public repo |
| Secret | `DEVSHOT_API_KEY` | `ds_...` key with AI access (only for generation) |
| Variable | `PUBLIC_REPO` | `anticipaterdotcom/ai-corporate-design-generator` |
| Variable | `DEVSHOT_MODEL` | optional, default `minimax` |

- **Rebuild the Storybook:** run the engine's `Publish Public Storybook` workflow.
- **Generate a new brand:** run the engine's `Generate Brand` workflow with the
  brief path (e.g. `briefs/aurora-labs.yml`). It generates, commits here, and
  republishes the Storybook.

## Security model

- The public repo runs nothing and holds no secrets.
- Compute + secrets live in the private, self-hosted engine only.
- The `PUBLIC_REPO_TOKEN` PAT is scoped to `Contents: write` on this repo and
  never leaves the private repo's secret store.
- Brands are fictional; no real trademarks.
