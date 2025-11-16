import { byteSize } from "./blob.ts";

export class Operations {
  constructor() {}

  public calculateByteSize(fileContent: string): number {
    return byteSize(fileContent);
  }

  public calculateLineCount(fileContent: string): number {
    return fileContent.split(/\r?\n/g).length;
  }

  public calculateWordCount(fileContent: string): number {
    return fileContent.trim().split(/\s+/).length;
  }

  public calculateCharacterCount(fileContent: string): number {
    return fileContent.length;
  }

  public calculateLineWordByte(fileContent: string): string {
    const size: number = this.calculateByteSize(fileContent);
    const lines: number = this.calculateLineCount(fileContent);
    const words: number = this.calculateWordCount(fileContent);
    return `${lines} ${words} ${size}`;
  }
}
