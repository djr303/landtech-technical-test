const assert = require("assert");
const getPercentileRangeForHouses = require('../lib/stats');

describe("Stats", function () {
  it("should return the correct percentile ranges based on input", () => {
    const data = [
      { price: 1 },
      { price: 2 },
      { price: 3 },
      { price: 4 },
      { price: 5 },
      { price: 6 },
      { price: 7 },
      { price: 8 },
      { price: 9 },
      { price: 10 },
    ];

    const withRanges = getPercentileRangeForHouses(data);
    const expected = [
      { price: 1, range: '0-5p' },
      { price: 2, range: '5-25p' },
      { price: 3, range: '5-25p' },
      { price: 4, range: '25-75p' },
      { price: 5, range: '25-75p' },
      { price: 6, range: '25-75p' },
      { price: 7, range: '25-75p' },
      { price: 8, range: '25-75p' },
      { price: 9, range: '75-95p' },
      { price: 10, range: '75-95p' }
    ];

    assert.deepStrictEqual(withRanges, expected)
  });
});
