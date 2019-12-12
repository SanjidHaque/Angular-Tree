import {Parent} from './parent.model';

export class Root {
  constructor(
    public Id: number,
    public Name: string,
    public Parents: Parent[]
  ) {

  }
}
