# zmodload zsh/zprof

# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

#
# plugins=(git zsh-autosuggestions zsh-completions zsh-nvm)
source ~/.zsh_plugins/git.plugin.zsh

if [[ -n $SSH_CONNECTION ]]; then
  export EDITOR='vim'
else
  export EDITOR='nvim'
fi

alias nn="nvim ."
alias nt="eza -alh --icons"
alias t="todo.sh"

if [ -f ~/.npm_token ]; then
  source ~/.npm_token
fi

export XDG_CONFIG_HOME="$HOME/.config"

export PATH="$HOME/.docker/bin:$PATH"

# Setup powerlevel10k (theme)
source /usr/local/share/powerlevel10k/powerlevel10k.zsh-theme
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh # To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.

# Setup autosuggestions
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh

# Setup asdf
. /usr/local/opt/asdf/libexec/asdf.sh
export ASDF_NODEJS_LEGACY_FILE_DYNAMIC_STRATEGY=latest_installed

# Setup zoxide
eval "$(zoxide init zsh)"

export AWS_PROFILE=jupiterone-dev

export LEDGER_FILE=$HOME/finance/2024.journal
# zprof
