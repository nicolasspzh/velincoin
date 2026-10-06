# Design-Skills für Claude Code

Diese Skills liegen im Repository, damit jede Claude-Code-Session (auch in der
Cloud) sie automatisch hat. Sie stammen aus fremden Projekten und stehen unter
deren Lizenz; die Lizenzdatei liegt jeweils im Ordner des Skills.

| Ordner | Quelle | Stand | Lizenz |
|---|---|---|---|
| `ui-ux-pro-max/` | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | `477bcb2` | MIT |
| `impeccable/` | https://github.com/pbakaus/impeccable | `cf3d2fa` (Version 4.5.0) | Apache 2.0 |
| `animate/`, `animate-expo/`, `animation-vocabulary/`, `apple-design/`, `ask-sonner/`, `break-ui/`, `emil-design-eng/`, `find-animation-opportunities/`, `improve-animations/`, `mobile-native/`, `pick-ui-library/`, `prototype/`, `review-animations/`, `write-swift/` | https://github.com/emilkowalski/skills | `e8a175d` | MIT |
| `taste-skill/`, `redesign-skill/`, `minimalist-skill/`, `soft-skill/` | https://github.com/Leonxlnx/taste-skill | `ce26fc2` | MIT |

Die Dateien sind unverändert übernommen. Ausnahme: zwischengespeicherte
Python-Dateien (`__pycache__`) sind nicht enthalten.

Hinweis zu `ui-ux-pro-max`: Die Anleitung im Skill ruft das Suchskript über
`${CLAUDE_PLUGIN_ROOT}` auf. Als Projekt-Skill gibt es diese Variable nicht.
Das Skript läuft direkt so:

```
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<suche>" --design-system
```

Aktualisieren: das jeweilige Repository neu klonen und den Skill-Ordner ersetzen.
