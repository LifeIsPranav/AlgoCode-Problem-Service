const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent){
  
  // Convert markdown to html
  const convertedHtml = marked.parse(markdownContent)
  
  // Sanatize html
  const sanatizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags
  })
  
  // Convert back to Markdown
  const turndownService = new TurndownService()
  const sanitizedMarkdown = turndownService.turndown(sanatizedHtml)
  return sanitizedMarkdown
}

module.exports = sanitizeMarkdownContent