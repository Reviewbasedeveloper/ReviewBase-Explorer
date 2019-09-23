const params = {
  LAST_POW_BLOCK: 1000,
  ZEROCOIN_BLOCK_V2_START:1001
};

const avgBlockTime = 30; // 30 seconds

const blocksPerDay = (24 * 60 * 60) / avgBlockTime; // 2880

const blocksPerWeek = blocksPerDay * 7; // 20160

const blocksPerMonth = (blocksPerDay * 365.25) / 12; // 87660

const blocksPerYear = blocksPerDay * 365.25; // 1051920

const mncoins = 3000.0;

const getMNBlocksPerDay = (mns) => {
  return blocksPerDay / mns;
};

const getMNBlocksPerWeek = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 52);
};

const getMNBlocksPerMonth = (mns) => {
  return getMNBlocksPerDay(mns) * (365.25 / 12);
};

const getMNBlocksPerYear = (mns) => {
  return getMNBlocksPerDay(mns) * 365.25;
};

const getMNSubsidy = (nHeight = 0, nMasternodeCount = 0, nMoneySupply = 0) => {
  const blockValue = getSubsidy(nHeight);
  let ret = 0.0;

  switch (true){
        case (nHeight < 225):     ret = 0; break;
        case (nHeight <= 161280): ret = blockValue / 100.0 * 80.0; break;
        case (nHeight <= 362880): ret = blockValue / 100.0 * 85.0; break;
        default:                  ret = blockValue / 100.0 * 90.0; break;
    }

  return ret;
};

const getSubsidy = (nHeight = 1) => {
  let nSubsidy = 0.0;

   switch (true){
        case (nHeight == 1):       nSubsidy =  546000.0; break;
        case (nHeight <= 40320):   nSubsidy =  0.1;   break;
        case (nHeight <= 80640):   nSubsidy =  0.75;  break;
        case (nHeight <= 120960):  nSubsidy =  1.5;   break;
        case (nHeight <= 161280):  nSubsidy =  2.25;  break;
        case (nHeight <= 201600):  nSubsidy =  3.0;   break;
        case (nHeight <= 241920):  nSubsidy =  3.75;  break;
        case (nHeight <= 282240):  nSubsidy =  4.5;   break;
        case (nHeight <= 322560):  nSubsidy =  5.25;  break;
        case (nHeight <= 362880):  nSubsidy =  6.0;   break;
        case (nHeight <= 403200):  nSubsidy =  6.75;  break;
        case (nHeight <= 443520):  nSubsidy =  7.5;   break;
        case (nHeight <= 483840):  nSubsidy =  8.25;  break;
        case (nHeight <= 524160):  nSubsidy =  9.0;   break;
        case (nHeight <= 564480):  nSubsidy =  9.75;  break;
        case (nHeight <= 604800):  nSubsidy =  10.5;  break;
        case (nHeight <= 645120):  nSubsidy =  11.25; break;
        case (nHeight <= 685440):  nSubsidy =  12.0;  break;
        case (nHeight <= 725760):  nSubsidy =  12.75; break;
        case (nHeight <= 766080):  nSubsidy =  13.5;  break;
        case (nHeight <= 806400):  nSubsidy =  14.25; break;
        case (nHeight <= 1000000): nSubsidy =  15.0;  break;
        case (nHeight <= 2000000): nSubsidy =  13.5;  break;
        case (nHeight <= 3000000): nSubsidy =  12.0;  break;
        case (nHeight <= 4000000): nSubsidy =  10.5;  break;
        case (nHeight <= 5000000): nSubsidy =  9.0;   break;
        case (nHeight <= 6000000): nSubsidy =  7.5;   break;
        case (nHeight <= 7000000): nSubsidy =  6.0;   break;
        case (nHeight <= 8000000): nSubsidy =  4.5;   break;
                         default:  nSubsidy =  3.0;   break;
    }

  return nSubsidy;
};

const getROI = (subsidy, mns) => {
  return ((getMNBlocksPerYear(mns) * subsidy) / mncoins) * 100.0;
};

const isAddress = (s) => {
  return typeof(s) === 'string' && s.length === 34;
};

const isBlock = (s) => {
  return !isNaN(s) || (typeof(s) === 'string');
};

const isPoS = (b) => {
  return !!b && b.height > params.LAST_POW_BLOCK; // > 182700
};

const isTX = (s) => {
  return typeof(s) === 'string' && s.length === 64;
};

module.exports = {
  avgBlockTime,
  blocksPerDay,
  blocksPerMonth,
  blocksPerWeek,
  blocksPerYear,
  mncoins,
  params,
  getMNBlocksPerDay,
  getMNBlocksPerMonth,
  getMNBlocksPerWeek,
  getMNBlocksPerYear,
  getMNSubsidy,
  getSubsidy,
  getROI,
  isAddress,
  isBlock,
  isPoS,
  isTX
};