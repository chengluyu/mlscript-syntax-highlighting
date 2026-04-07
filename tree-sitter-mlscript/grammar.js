module.exports = grammar({
  name: "mlscript",

  extras: () => [/\s/],

  word: ($) => $.identifier,

  rules: {
    source_file: ($) => repeat($._token),

    _token: ($) =>
      choice(
        $.line_comment,
        $.block_comment,
        $.string,
        $.number,
        $.type_variable,
        $.identifier,
        $.operator,
        $.punctuation,
        "(",
        ")",
        "{",
        "}",
        "[",
        "]"
      ),

    identifier: () => /[_A-Za-z][_A-Za-z0-9]*/,
    type_variable: () => /'[A-Za-z_][A-Za-z0-9_]*/,
    number: () => /[0-9][0-9_]*/,

    string: ($) =>
      seq(
        '"',
        repeat(choice($.string_content, $.escape_sequence)),
        '"'
      ),

    string_content: () => token.immediate(prec(1, /[^"\\\n]+/)),
    escape_sequence: () =>
      token.immediate(
        seq(
          "\\",
          choice(/u[0-9a-fA-F]{4}/, /x[0-9a-fA-F]{2}/, /./)
        )
      ),

    line_comment: () => token(seq("//", /[^\n]*/)),
    block_comment: () =>
      token(
        seq(
          "/*",
          /[^*]*\*+([^/*][^*]*\*+)*/,
          "/"
        )
      ),

    operator: () => token(/[!$%&*+\-/:<=>?@\\^|~]+/),
    punctuation: () => token(/[.,;]/),
  },
});
