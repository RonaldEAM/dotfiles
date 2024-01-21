return {
  {
    "Exafunction/codeium.vim",
    event = 'BufEnter',
    tag = "1.6.13",
    init = function()
      vim.g.codeium_filetypes = {
        typescript = true,
        javascript = true,
        c = false,
        cpp = false,
      }
    end
  }
}
