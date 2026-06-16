export interface Logger {
  error(message: string, context?: unknown): void;
  info(message: string): void;
}

export const logger: Logger = {
  error: (msg, ctx) => console.error(msg, ctx),
  info: (msg) => console.log(msg),
};