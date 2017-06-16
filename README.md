## Tencent AlloyTeam JavaScript Code Guide Stylelint Configuration

## Installation

### Install Shareable Config

There are one configs contained in this repo:
* [@alloyteam/stylelint-config-standard](https://github.com/steamerjs/style-lint/tree/master/packages/standard)

```javascript
npm i --save-dev @alloyteam/stylelint-config-standard
```


### Global

```javascript
npm install -g stylelint

stylelint --config stylelintrc.js xxx.less
```

### Local

```javascript
npm install --save-dev stylelint

// in package.json
scripts: {
	lint: "stylelint --config stylelintrc.js xxx.less"
}

npm run lint
```

### Usage

* create .stylelintrc.js file
* if you would like standard code guide, please copy and paste following content

```javascript
module.exports = {
    "env": {},
    "extends": [
        "@alloyteam/stylelint-config-standard",
    ],
    "plugins": [],
    "rules": {},
    "globals": {}
};
```


## Reference 
* [Alloyteam Code Guide](http://alloyteam.github.io/CodeGuide)
* [Stylelint Code Guide](https://stylelint.io/user-guide/configuration/#extends)