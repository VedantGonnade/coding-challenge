export function countFreqChars(text: string): Map<string, number> {
  const freqMap: Map<string, number> = new Map();
  for (const char of text) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }
  return freqMap;
}
