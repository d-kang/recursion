// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var iterate = function(obj) {
    if (obj === null) { return 'null' }
    if (typeof obj === 'undefined' || typeof obj === 'function') { return; }
    if (Array.isArray(obj)) {
      return '[' +
      _.map(obj, item => (item === undefined || typeof item === 'function') ? 'null' : iterate(item))
      + ']';
    } else if (typeof obj === 'object') {
      var acc = '{'
      acc += _.reduce(obj, (acc, val, key) => {
        if(val !== undefined && typeof val !== 'function') {
          acc.push(`"${key}":${iterate(val)}`);
        }
        return acc;
      }, [])
      acc += '}';
      return acc;
    }
    else if (typeof obj === 'string') {
      return `"${obj}"`
    } else {
      // true, false, null, number
      return `${obj}`
    }
  }
  return iterate(obj)
};



// 9,
// null,
// true,
// false,
// 'Hello world',
// [],
// [8],
// ['hi'],
// [8, 'hi'],
// [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
// [8, [[], 3, 4]],
// [[[['foo']]]],
// {},
// {'a': 'apple'},
// {'foo': true, 'bar': false, 'baz': null},
// {'boolean, true': true, 'boolean, false': false, 'null': null },
// // basic nesting
// {'a': {'b': 'c'}},
// {'a': ['b', 'c']},
// [{'a': 'b'}, {'c': 'd'}],
// {'a': [], 'c': {}, 'b': true}
