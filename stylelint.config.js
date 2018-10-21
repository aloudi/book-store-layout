module.exports = {
  extends: [
    "stylelint-config-standard"
  ],
  plugins: [],
  rules: {
    indentation: 2,
    "block-closing-brace-newline-before": "always",
    "rule-empty-line-before": "always",
    "number-leading-zero": null,
    "selector-pseudo-class-no-unknown": [true, {
      ignorePseudoClasses: ["global"]
    }],
    "selector-class-pattern": "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$"
  }
};
