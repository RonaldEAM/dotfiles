# Git version checking
autoload -Uz is-at-least
git_version="${${(As: :)$(git version 2>/dev/null)}[3]}"

# Check if main exists and use instead of master
function git_main_branch() {
  command git rev-parse --git-dir &>/dev/null || return
  local ref
  for ref in refs/{heads,remotes/{origin,upstream}}/{main,trunk,mainline,default,stable,master}; do
    if command git show-ref -q --verify $ref; then
      echo ${ref:t}
      return 0
    fi
  done

  # If no main branch was found, fall back to master but return error
  echo master
  return 1
}

alias gl='git pull'
alias gcm='git checkout $(git_main_branch)'
alias gcb='git checkout -b'
alias gwta='git worktree add'
alias gwtls='git worktree list'
alias gwtrm='git worktree remove'
alias glo='git log --oneline --decorate'
alias gp='git push'
alias gfo='git fetch origin'
alias gco='git checkout'
alias gst='git status'
