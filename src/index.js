module.exports = function getZerosCount(number, base) {
  let res = 0; 
  let powIndex = 1;
  let powNumber;
  const simpleNumber = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
    47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
    103, 107, 109, 113, 127, 131, 137, 139, 149, 151,
    157, 163, 167, 173, 179, 181, 191, 193, 197, 199,
    211, 223,	227, 229, 233, 239, 241, 251]; 
  const simpleMultipliers = [];
  let powNumberTmp;
  let baseTmp = base;

  getMaxOfArray = numArray => Math.max.apply(null, numArray);
 
  /* поиск простых множителей базы, запись в массив */
  for (let i = 0; baseTmp >= simpleNumber[i]; i++) {
    if (baseTmp % simpleNumber[i] == 0) {
      simpleMultipliers.push(simpleNumber[i]);
      baseTmp /= simpleNumber[i];
      i = -1;
    }
  }

  powNumber = getMaxOfArray(simpleMultipliers);
  powNumberTmp = powNumber;

  /* сколько раз наибольший простой множитель повторяется в массиве */
  const countPowNumber = simpleMultipliers.filter(
    numberTmp => numberTmp == powNumber
    ).length;

  /* расчёт кол-ва нулей на основе полученного простого множителя базы*/  
  while (number / powNumberTmp >= 1) {
    res += Math.floor(number / powNumberTmp);
    powIndex++;
    powNumberTmp = Math.pow(powNumber, powIndex);
  }

  return Math.floor(res / countPowNumber); //делим на кол-во наибольших множителей
}