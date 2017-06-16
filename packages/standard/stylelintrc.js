module.exports = {
    "extends": [
        "stylelint-config-standard"
    ],
    "rules": {
        "indentation": ["tab"],
        "string-quotes": "double",
        "no-invalid-double-slash-comments": true,
        "declaration-empty-line-before": [ "always", {
            except: [
                "first-nested",
            ],
            ignore: [
                "after-declaration",
                "after-comment",
                "inside-single-line-block",
            ],
        }],
        "no-empty-source": true,
        "function-whitespace-after": "always",
    }
};