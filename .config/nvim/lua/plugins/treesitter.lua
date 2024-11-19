return {
  {
    "nvim-treesitter/nvim-treesitter",
    build = ":TSUpdate",
    config = function () 
      local configs = require("nvim-treesitter.configs")

      configs.setup {
        -- A list of parser names, or "all"
        ensure_installed = { 'typescript', 'javascript', 'html', 'css', 'lua', 'tsx', 'go', 'http', 'json', 'todotxt', 'markdown', 'yaml', 'dockerfile', 'markdown_inline', 'cpp', 'c', 'ledger' },
        -- Install parsers synchronously (only applied to `ensure_installed`)
        sync_install = false,
        highlight = {
          enable = true,
        }
      }
    end
  }
}

