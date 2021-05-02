module.exports = {
    printWidth: 100, // a readable compromise. "100 chars should be enough for anyone...""
    tabWidth: 4, // readability, very common default
    useTabs: false, // of course not!
    semi: true, // semicolons are NOT optional in javascript...
    singleQuote: false, // double quotes makes for consistency with json, stands out more visually, tooling such as emmet uses it.
    quoteProps: "consistent", // consistency is.. good..
    jsxSingleQuote: false, // ...so, consistently use double quotes
    trailingComma: "es5", // allow for objects and arrays. does not require use of es2017, which the "all" option does
    bracketSpacing: true, // readability
    jsxBracketSameLine: false, // readability
    arrowParens: "avoid", // since we use typescript, parens can not often be avoided. nice option in the few js files we have though
    proseWrap: "never", // this is mostly for leaving markdown alone (not breaking lines)
    htmlWhitespaceSensitivity: "css", // be as considerate as possible with regards to actually rendered whitespace
    endOfLine: "lf", // all files in all repos should use lf (for example enforced by `* text=auto eol=lf` in each repo’s `.gitattributes` file)
    embeddedLanguageFormatting: "auto", // let prettier try to do its best
};
