import { HuffTree } from "../modules/huffTree";
import { Heap } from "heap-js";
import { describe, it, expect } from "@jest/globals";
import { generateCodes } from "../utils/generateCodes";

describe("HuffTree", () => {
  describe("Constructor - Leaf Node", () => {
    it("should create a leaf node with character and weight", () => {
      const tree = new HuffTree("A", 5);

      expect(tree.weight()).toBe(5);
      expect(tree.getRoot()).toBeDefined();
    });
  });

  describe("Constructor - Internal Node", () => {
    it("should create an internal node from two leaf nodes", () => {
      const left = new HuffTree("A", 5);
      const right = new HuffTree("B", 3);
      const parent = new HuffTree(left.getRoot(), right.getRoot(), 8);

      expect(parent.weight()).toBe(8);
    });
  });

  describe("buildTree", () => {
    it("should return null for empty heap", () => {
      const heap = new Heap<HuffTree>((a, b) => a.weight() - b.weight());
      const result = HuffTree.buildTree(heap);

      expect(result).toBeNull();
    });


    it("should build balanced tree for equal frequencies", () => {
      const heap = new Heap<HuffTree>((a, b) => a.weight() - b.weight());

      heap.push(new HuffTree("C", 32));
      heap.push(new HuffTree("D", 42));
      heap.push(new HuffTree("E", 120));
      heap.push(new HuffTree("K", 7));
      heap.push(new HuffTree("L", 42));
      heap.push(new HuffTree("M", 24));
      heap.push(new HuffTree("U", 37));
      heap.push(new HuffTree("Z", 2));

      const result = HuffTree.buildTree(heap);
      expect(result).not.toBeNull();
      const root = result?.getRoot();
      expect(root?.isLeaf()).toBe(false);
      expect(result?.weight()).toBe(306);
    });
  });

  describe("assign codes", () => {
    it("should generate correct huffman codes", () => {
      const heap = new Heap<HuffTree>((a, b) => a.weight() - b.weight());

      heap.push(new HuffTree("C", 32));
      heap.push(new HuffTree("D", 42));
      heap.push(new HuffTree("E", 120));
      heap.push(new HuffTree("K", 7));
      heap.push(new HuffTree("L", 42));
      heap.push(new HuffTree("M", 24));
      heap.push(new HuffTree("U", 37));
      heap.push(new HuffTree("Z", 2));

      const tree = HuffTree.buildTree(heap);

      const huffmanCodes: Map<string, string> = generateCodes(tree, "");

      expect(huffmanCodes.get("E")).toBe("0");
      expect(huffmanCodes.get("U")).toBe("100");
      expect(huffmanCodes.get("D")).toBe("110");
      expect(huffmanCodes.get("L")).toBe("101");
      expect(huffmanCodes.get("C")).toBe("1110");
      expect(huffmanCodes.get("M")).toBe("11111");
      expect(huffmanCodes.get("K")).toBe("111101");
      expect(huffmanCodes.get("Z")).toBe("111100");

      
    });
  });
});
