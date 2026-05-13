#!/usr/bin/env bash
# Local Jekyll preview. Installs the Bundler version from Gemfile.lock into the
# user gem directory (no sudo) and prepends that bin dir to PATH so macOS
# system Ruby does not stick on /usr/bin/bundle without the right Bundler.

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

USER_GEM_HOME="$(ruby -r rubygems -e 'print Gem.user_dir')"
USER_GEM_BIN="${USER_GEM_HOME}/bin"
mkdir -p "${USER_GEM_HOME}/cache" "${USER_GEM_BIN}"
export PATH="${USER_GEM_BIN}:${PATH}"

LOCK_BUNDLER="$(awk '/^BUNDLED WITH$/{getline; gsub(/^[[:space:]]+|[[:space:]]+$/, "", $0); print; exit}' Gemfile.lock)"
if [[ -z "${LOCK_BUNDLER}" ]]; then
  echo "Error: could not read Bundler version from Gemfile.lock (BUNDLED WITH)."
  exit 1
fi

if ! gem list bundler -i -v "${LOCK_BUNDLER}" >/dev/null 2>&1; then
  echo "Installing Bundler ${LOCK_BUNDLER} into user gem directory (gem install --user-install)..."
  gem install bundler -v "${LOCK_BUNDLER}" --user-install
fi

echo "Installing gems (bundle install)..."
bundle install

echo ""
echo "Starting Jekyll at http://127.0.0.1:4000 (Ctrl+C to stop)"
echo ""
bundle exec jekyll serve --host 0.0.0.0 --port 4000 --livereload
