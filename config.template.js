
/**
 * Global configuration object.
 */
const config = {
  'api': {
    'host': 'http://127.0.0.1',
    'port': '8087',
    'prefix': '/api',
    'timeout': '30s'
  },
  'coinMarketCap': {
    'api': 'http://api.coinmarketcap.com/v1/ticker/',
    'ticker': 'observer'
  },
  'db': {
    'host': '127.0.0.1',
    'port': '27017',
    'name': 'rview',
    'user': 'rview',
    'pass': 'rview'
  },
  'freegeoip': {
    'api': 'https://extreme-ip-lookup.com/json/'
  },
  'rpc': {
    'host': '127.0.0.1',
    'port': '9568',
    'user': 'test',
    'pass': 'test',
    'timeout': 10000, // 10 seconds
  }
};

module.exports = config;
