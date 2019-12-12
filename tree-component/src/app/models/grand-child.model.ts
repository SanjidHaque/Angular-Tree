import {DeepGrandChild} from './deep-grand-child.model';

export class GrandChild {
  constructor(
    public Id: number,
    public Name: string,
    public DeepGrandChildren: DeepGrandChild[]
  ) {}
}
