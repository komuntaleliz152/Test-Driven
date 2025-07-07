// This is a test file for the multiply function.
import { assert } from 'chai';
import multiply from '../multiply.js';

describe('Multiply', () => {
  it('should return 1 when multiplying 1 and 1', () => {
    assert.equal(multiply(1, 1), 1);
  });
});

// Test: multiplying 2 by 2 should return 4

it('should return 4 when multiplying 2 and 2', () => {
    assert.equal(multiply(2, 2), 4);
  });

// Test: multiplying 3 by 3 should return 9
  it('should return 9 when multiplying 3 and 3', () => {
    assert.equal(multiply(3, 3), 9);
  });

// Test: multiplying 4 by 4 should return 16
  it('should return 16 when multiplying 4 and 4', () => {
    assert.equal(multiply(4, 4), 16);
  });
