#!/usr/bin/env ts-node

import { argv } from "process";
import { Operations } from "./modules/operations.ts";
import { FileReadResult, Utils } from "./modules/utils.ts";

const args: string[] = argv.slice(2);

const option = args[0];
const operations = new Operations();
const utils = new Utils();

async function main() {
  try {
    if (!process.stdin.isTTY) {
      const fileContent = await utils.readPipedInput(process.stdin);
      const data = performOperation(option, fileContent);
      utils.displayResultAndExit(data);
    } else {
      if (args.length === 0) {
        throw new Error(
          "No Arguments error: Please provide at least one argument"
        );
      }

      if (args.length === 1 && option.startsWith("-")) {
        throw new Error("No FileName error: Please provide a file name");
      }

      let fileName: string | undefined;
      if (args.length === 2) {
        fileName = args[1];
      } else if (!option.startsWith("-")) {
        fileName = option;
      }

      if (!fileName) {
        throw new Error("No FileName error: Please provide a file name");
      }

      const { success, content, error }: FileReadResult =
        utils.readFile(fileName);
      if (success && content) {
        const data = performOperation(option, content);
        utils.displayResultAndExit(data, fileName);
      } else {
        throw new Error(error);
      }
    }
  } catch (error: any) {
    utils.displayErrorAndExit(`An unexpected error occurred: ${error.message}`);
    process.exit(1);
  }
}

function performOperation(
  option: string,
  fileContent: string
): string | number {
  if (!fileContent) {
    throw new Error("file provided has no text");
  }

  switch (option) {
    case "-c":
      return operations.calculateByteSize(fileContent);
    case "-l":
      return operations.calculateLineCount(fileContent);
    case "-w":
      return operations.calculateWordCount(fileContent);
    case "-m":
      return operations.calculateCharacterCount(fileContent);
    default:
      return operations.calculateLineWordByte(fileContent);
  }
}

main();
