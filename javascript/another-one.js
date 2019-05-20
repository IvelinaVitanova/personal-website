import ulog from "ulog";
const log = ulog("another-one.js");

const anotherOne = () => {
  const name = "anotherOne()";
  log.info(`${name} executed.`);
};


export { anotherOne };
