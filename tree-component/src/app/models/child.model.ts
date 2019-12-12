import {GrandChild} from './grand-child.model';

export class Child {
  constructor(
    public Id: number,
    public Name: string,
    public GrandChildren: GrandChild[]
  ) {}
}
