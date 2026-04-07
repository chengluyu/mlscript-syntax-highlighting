# MLscript for Zed

This repository now includes a Zed language extension for MLscript.

## Scope

- Syntax highlighting only.
- No `outline.scm` is provided.
- No language server integration is included.

## Files

- `extension.toml`
- `languages/mlscript/config.toml`
- `languages/mlscript/highlights.scm`
- `languages/mlscript/brackets.scm`
- `tree-sitter-mlscript/`

## Local usage

1. Open Zed.
2. Run `zed: install dev extension`.
3. Select the repository root.
4. Open an `.mls` file.

The bundled Tree-sitter grammar is intentionally permissive and token-oriented so highlighting works without bringing over any outline-specific logic.
