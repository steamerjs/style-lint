module.exports = {
    "extends": [
        "stylelint-config-standard"
    ],
    "rules": {
        "indentation": null,
        "no-missing-end-of-source-newline": null,
        "rule-empty-line-before": null,
        "no-eol-whitespace": null,
        "media-feature-name-no-unknown": null,
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