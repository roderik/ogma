import { Ogma } from '@ogma/logger';
import { WriteStream } from 'fs';

export function createOgmaLogger(stream: WriteStream) {
  return new Ogma({
    application: 'Ogma Bench',
    stream,
    logLevel: 'INFO',
  });
}
