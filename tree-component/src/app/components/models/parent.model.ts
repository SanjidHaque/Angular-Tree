import {Child} from './child.model';

export class Parent {
  constructor(
    public Id: number,
    public Name: string,
    public Children: Child[]
  ) {}
}
