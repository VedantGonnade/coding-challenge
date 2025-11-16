import { HuffTree } from "./modules/huffTree";
import { Heap } from "heap-js";
import { generateCodes } from './utils/generateCodes';
import { readFile, writeHeaders } from './utils/fileOperations';


const argument = process.argv.slice(2);
const outputFile = argument[1];

if (argument.length === 0) {
  console.error("Please provide a file path as an argument.");
  process.exit(1);
}

if (outputFile.length === 0) {
console.error("Please provide an output file path as an argument.");
process.exit(1);
}


const fequencyTable = await readFile(argument[0]);
const heap = new Heap<HuffTree>((a, b) => a.weight() - b.weight());
fequencyTable!.forEach((freq, char) => {
  heap.push(new HuffTree(char, freq));
});
const heapTree = HuffTree.buildTree(heap);
console.log(heapTree);

generateCodes(heapTree);

writeHeaders(outputFile, JSON.stringify(Object.fromEntries(fequencyTable!)), "json");

