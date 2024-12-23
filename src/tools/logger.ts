import loggerStyleSheet from "./logger.style";

function debug(message: string): void {
  const time: string = new Date().toISOString().slice(0, 19).replace("T", " ");
  console.log(`%c[${time}] ${message}`, loggerStyleSheet);
}

export { debug };
