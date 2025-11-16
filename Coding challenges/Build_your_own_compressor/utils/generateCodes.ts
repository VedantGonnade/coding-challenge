import { HuffLeadNode } from "../modules/huffLeadNode";
import { HuffTree } from "../modules/huffTree";

export function generateCodes(node: HuffTree | null, code: string = ""): Map<string, string> {
  const huffmanCodes = new Map<string, string>();

  if (!node) return huffmanCodes;

  // If it's a leaf node, save the character's code
  if (node.getRoot().isLeaf()) {
    const leafNode = node.getRoot() as HuffLeadNode;
    huffmanCodes.set(leafNode.value(), code || "0");
    return huffmanCodes;
  }

  const leftCodes = generateCodes(node.left(), code + "0");
  const rightCodes = generateCodes(node.right(), code + "1");

  leftCodes.forEach((code, char) => huffmanCodes.set(char, code));
  rightCodes.forEach((code, char) => huffmanCodes.set(char, code));

  return huffmanCodes;
}
