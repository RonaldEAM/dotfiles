return {
  {
    "hrsh7th/cmp-buffer",
    event = { "BufReadPost", "BufNewFile", "BufWritePre" },
  },
  {
    "hrsh7th/cmp-path",
    event = { "BufReadPost", "BufNewFile", "BufWritePre" },
  },
  {
    "hrsh7th/cmp-vsnip",
    event = { "BufReadPost", "BufNewFile", "BufWritePre" },
  },

  -- [[ Status bar ]]
  {
    "j-hui/fidget.nvim",
    tag = "v1.1.0",
    config = function()
      require("fidget").setup()
    end
  },

  -- [[ Git ]]
  {
    "tpope/vim-fugitive",
    keys = {
      { "<leader>gs", ":G<CR>" },
      { "<leader>gl", ":0Gclog<CR>" },
      { "<leader>ge", ":Gedit<CR>" },
    }
  },
  
  "whiteinge/diffconflicts",
  {
    "almo7aya/openingh.nvim",
    keys = {
      { "<leader>ghr", ":OpenInGHRepo<CR>" },
      { "<leader>ghf", ":OpenInGHFile<CR>" },
    }
  },

  -- [[ Directories ]]
  {
    "nvim-tree/nvim-web-devicons",
    config = function()
      require('nvim-web-devicons').setup({
        strict = true,
        override_by_extension = {
          ["js"] = {
            icon = "",
            color = "#F1F134",
            cterm_color = "227",
            name = "Js",
          }
        }
      })
    end
  },
  "christoomey/vim-tmux-navigator",

  -- [[ Editor ]]
  {
    "raimondi/delimitmate",
    event = { "BufReadPost", "BufNewFile", "BufWritePre" },
  },
  {
    "tpope/vim-commentary",
    event = { "BufReadPost", "BufNewFile", "BufWritePre" },
  },
  {
    "karb94/neoscroll.nvim",
    event = { "BufReadPost", "BufNewFile", "BufWritePre" },
    config = function()
      require("neoscroll").setup()
    end
  },
  "tpope/vim-sleuth",
  {
    'fei6409/log-highlight.nvim',
    config = function()
        require('log-highlight').setup {}
    end
  },
  {
    'stevearc/oil.nvim',
    opts = {},
    -- Optional dependencies
    dependencies = { "nvim-tree/nvim-web-devicons" },
    config = function()
      require('oil').setup( {
        win_options = {
          signcolumn = "yes:2",
        },
      })
      vim.keymap.set("n", "-", "<CMD>Oil<CR>", { desc = "Open parent directory" })
    end
  },
  {
    "refractalize/oil-git-status.nvim",
    dependencies = {
      "stevearc/oil.nvim",
    },
    config = true,
  },
  {
    "supermaven-inc/supermaven-nvim",
    config = function()
      require("supermaven-nvim").setup({})
    end,
  },
}
