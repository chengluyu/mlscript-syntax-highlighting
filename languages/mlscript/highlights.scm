; Highlight function and class names following their declaration keywords.
(source_file
  (identifier) @keyword
  .
  (identifier) @function
  (#eq? @keyword "fun"))

(source_file
  (identifier) @keyword
  .
  (identifier) @type
  (#eq? @keyword "class"))

((identifier) @keyword
  (#match? @keyword "^(class|module|type|mixin|let|of|is|extends|this|if|and|then|else)$"))

((identifier) @boolean
  (#match? @boolean "^(true|false)$"))

((identifier) @type.builtin
  (#match? @type.builtin "^(anything|nothing|string|int|number|bool)$"))

((identifier) @type
  (#match? @type "^[A-Z][A-Za-z0-9]*$"))

(type_variable) @type
(number) @number
(string) @string
(string_content) @string
(escape_sequence) @string.escape
(operator) @operator
(punctuation) @punctuation.delimiter

[
  (line_comment)
  (block_comment)
] @comment

[
  "("
  ")"
  "{"
  "}"
  "["
  "]"
] @punctuation.bracket
