import { HuffBaseModule } from "../dtos/huffBaseModule";

export class HuffInternalNode implements HuffBaseModule {
  private readonly _weight: number;
  private readonly _leftChild: HuffBaseModule;
  private readonly _rightChild: HuffBaseModule;

  constructor(weight: number, leftChild: HuffBaseModule, rightChild: HuffBaseModule) {
    this._weight = weight;
    this._leftChild = leftChild;
    this._rightChild = rightChild;
  }

  weight(): number {
    return this._weight;
  }

  isLeaf(): boolean {
    return false;
  }

  leftChild(): HuffBaseModule {
    return this._leftChild;
  }

  rightChild(): HuffBaseModule {
    return this._rightChild;
  }

}