import ulog from 'ulog';
localStorage.setItem('log', 'INFO');

const log = ulog('entry.js');

const main = () => {
  const name = "main()";
  log.info(`${name} executed.`);
};
main();


import { anotherOne } from "./another-one";
anotherOne();
