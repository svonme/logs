var log4js = require('log4js');
log4js.configure({
  appenders: {
    cheese: { type: 'file', filename: 'cheese.log' },
    log: { type: 'console' }
  },
  categories: { default: { appenders: ['log'], level: 'error' } }
});

const logger = log4js.getLogger();

logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
// logger.error('12121')
