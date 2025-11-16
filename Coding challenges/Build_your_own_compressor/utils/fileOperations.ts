import { countFreqChars } from "./countFreq";
import * as fs from "fs";

export async function readFile(
  filePath: string
): Promise<Map<string, number> | undefined> {
  const readStream: fs.ReadStream = fs.createReadStream(filePath, {
    encoding: "utf8",
  });
  let fequencyTable: Map<string, number> = new Map();
  try {
    for await (const chunk of readStream) {
      const chunkFreqMap = countFreqChars(chunk);
      chunkFreqMap.forEach((count, char) => {
        fequencyTable.set(char, (fequencyTable.get(char) || 0) + count);
      });
    }
    return fequencyTable;
  } catch (error: any) {
    console.error(`Error reading file: ${error.message}`);
  }
}

export async function writeHeaders(fileName: string, data: string, format: string): Promise<void> {
  const headers = {
    frequencyTable: data,
    headerEnd: "###END_HEADERS###",
  }

  fs.writeFileSync(`${fileName}.${format}`, JSON.stringify(headers), { encoding: "utf8" });
}