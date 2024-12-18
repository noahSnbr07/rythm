function debug<T>(message: string): void {
   const time: string = new Date().toISOString().slice(0, 19).replace('T', ' ');
   console.log(`%c[${time}] ${message}`, "background: rgba(255, 127, 0, 0.1); color: orangered; font-size: 24px; font-weight: bold; padding: 4px;");
}

export { debug };