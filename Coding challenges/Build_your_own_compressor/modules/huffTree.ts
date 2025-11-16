import { Heap } from "heap-js";
import { HuffBaseModule } from "../dtos/huffBaseModule";
import { HuffLeadNode } from "./huffLeadNode";
import { HuffInternalNode } from "./huffInternalNode";


export class HuffTree {
  private root: HuffLeadNode | HuffInternalNode;

  /** Constructor for leaf node */
  constructor(element: string, weight: number);
  /** Constructor for internal node */
  constructor(left: HuffBaseModule, right: HuffBaseModule, weight: number);
  constructor(
    elementOrLeft: string | HuffBaseModule,
    weightOrRight: number | HuffBaseModule,
    weight?: number
  ) {
    if (
      typeof elementOrLeft === "string" &&
      typeof weightOrRight === "number"
    ) {
      // Leaf node constructor
      this.root = new HuffLeadNode(elementOrLeft, weightOrRight);
    } else if (
      typeof elementOrLeft === "object" &&
      typeof weightOrRight === "object" &&
      typeof weight === "number"
    ) {
      // Internal node constructor
      this.root = new HuffInternalNode(weight, elementOrLeft, weightOrRight);
    } else {
      throw new Error("Invalid constructor arguments");
    }
  }

  getRoot(): HuffLeadNode | HuffInternalNode {
    return this.root;
  }

  weight(): number {
    return this.root.weight();
  }

  left(): HuffTree | null {
    if (this.root instanceof HuffInternalNode) {
      const leftChild = this.root.leftChild();
      const tree = Object.create(HuffTree.prototype);
      tree.root = leftChild;
      return tree;
    }
    return null;
  }

  right(): HuffTree | null {
    if (this.root instanceof HuffInternalNode) {
      const rightChild = this.root.rightChild();
      const tree = Object.create(HuffTree.prototype);
      tree.root = rightChild;
      return tree;
    }
    return null;
  }

  static buildTree(heap: Heap<HuffTree>): HuffTree | null {
    if (heap.size() === 0) {
      return null;
    }

    let tmp1: HuffTree;
    let tmp2: HuffTree;
    let tmp3: HuffTree | null = null;

    while (heap.size() > 1) {
      tmp1 = heap.pop()!;
      tmp2 = heap.pop()!;
      tmp3 = new HuffTree(
        tmp1.getRoot(),
        tmp2.getRoot(),
        tmp1.weight() + tmp2.weight()
      );
      heap.push(tmp3);
    }
    return tmp3;
  }
}
