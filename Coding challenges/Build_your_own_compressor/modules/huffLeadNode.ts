import { HuffBaseModule } from "../dtos/huffBaseModule";

export class HuffLeadNode implements HuffBaseModule {
  private readonly _weight: number;
  private readonly _element: string;

  constructor(element: string, weight: number) {
    this._weight = weight;
    this._element = element;
  }

  value(): string {
    return this._element;
  }

  weight(): number {
    return this._weight;
  }

  isLeaf(): boolean {
    return true;
  }
}