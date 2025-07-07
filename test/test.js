// This is a test file for the multiply function.
import { assert } from 'chai';
import multiply from '../multiply.js';

describe('Multiply', () => {
  it('should return 1 when multiplying 1 and 1', () => {
    assert.equal(multiply(1, 1), 1);
  });
});
