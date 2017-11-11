# Baseliner

A small utility that makes comparing objects easy.


## Install

Simply install the package in your project with npm, and you're ready to go.

```
npm install --save baseliner
```

## Usage

Baseliner exports a default function called `baseliner`, which takes in four arguments:

```
baseliner(baseObject, compareObject, key, compareFunction)
```

### Arguments

| Input     | Type      | Description       |
|:---       |:---       |:---               |
|`baseObject`| object   | The object acting as the baseline |
| `compareObject`| object | The object to compare to the baseline |
| `key`     | string    | The key on which to compare the objects |
|`compareFunction` | function | A function that compares two values |


### Returns
* Whatever `compareFunction` returns

### Example

Say we are have three friends, and we want to compare their ages.  We can use `baseliner` to help us do this.

```javascript
import baseliner from 'baseliner';

// Ages of the three friends
const legolas = { age: 600 };
const gimli = { age: 140 };
const aragorn = { age: 88 };

// function to compare ages--return true if older than the base
const compare = (base, obj) => obj > base;

// Say Gimli is our base
const vsLegolas = baseliner(gimli, legolas, "age", compare); // true
const vsAragorn = baseliner(gimli, aragorn, "age", compare); // false

```

## Contributing

Contributions are welcome!  Here are some suggestions:
* Links to use cases/examples
* Adding common comparison functions
* Additional utilities for advanced usage
* Update documentation/readme

## License
This project is licensed under the MIT License