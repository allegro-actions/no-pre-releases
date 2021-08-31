[![CI](https://github.com/allegro-actions/no-pre-releases/actions/workflows/ci.yml/badge.svg)](https://github.com/allegro-actions/no-pre-releases/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/allegro-actions/no-pre-releases/branch/main/graph/badge.svg?token=YJ3Z8ZKL2F)](https://codecov.io/gh/allegro-actions/no-pre-releases)

# allegro-actions/no-pre-releases

This action ensures that your project does not use `beta` or `@tag` dependencies.

## Basic usage:

```yaml
- name: Disable floating dependencies in package.json
  if: github.ref == 'refs/heads/master'
  uses: allegro-actions/no-pre-releases@v1
  ```

## Configuration

```yaml
- name: Disable tagged dependencies in package.json
  if: github.ref == 'refs/heads/master'
  uses: allegro-actions/no-pre-releases@v1
  with:
    allow-beta: true
    allow-tags: false
  ```