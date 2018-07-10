import { HTTPVERB } from './httpVerb.type';

export class Hyperlink {
  href: string;
  rel: string;
  type: HTTPVERB;

  constructor(config?: Partial<Hyperlink>) {
    Object.assign(this, config);
  }
}
