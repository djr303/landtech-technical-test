const percentileOfScore = (data, index) => {

  const value = data[index].price;

  if (!data.length) {
      throw new Error('Data array is empty');
  }

  let lowerCount = 0;
  let sameCount = 0;

  for (let i = 0; i < data.length; i++) {

      if (data[i].price < value) {
          lowerCount++;
      } else if (data[i].price === value) {
          sameCount++;
      } else {
          break;
      }
  }
  const percentile = (lowerCount + 0.5 * sameCount) / data.length * 100;

  const ranges = [
    "0-5p",
    "5-25p",
    "25-75p",
    "75-95p",
    "95-100p"
  ]

  if (percentile <= 5){
    return ranges[0];
  } else if (percentile <= 25){
    return ranges[1];
  } else if (percentile <= 75){
    return ranges[2];
  } else if (percentile <= 95){
    return ranges[3];
  } else if (percentile <= 100){
    return ranges[4]
  }
};

const getPercentileRangeForHouses = (houses) => {
  const sortedData = houses.sort((a, b) => a.price - b.price)
  return sortedData.map((d, i) => {
    const range = percentileOfScore(sortedData, i);
    return { ...d, range}
  })
}

module.exports = getPercentileRangeForHouses