const { assert } = require('console');

suite('Global Tests', () => {
  console.log('잉?');
  test('page has a valid title', () => {
    assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
  });
});
