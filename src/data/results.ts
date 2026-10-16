import data from './verified-results.json';
export const results = data;
export const artifact = 'https://github.com/DayenaJeong/cohe';
export const release = `${artifact}/releases/tag/v1.0-neurips2026`;
export const paper = 'https://neurips.cc/virtual/2026/poster/139659';
// No 2026 paper-specific proceedings URL was listed on 2026-10-16.
// Set this URL when the official proceedings entry is published.
export const proceedings = { url: null as string | null };
// Existing manuscript evidence absent from the frozen website JSON:
// Table 6 / Appendix Tables 23 and 35. These are displayed, not recomputed.
export const summaryEvidence = {
  generativeCER2: 0.0002,
  crossArchitectureRho: [0.856, 0.914] as const,
};
export const source = (path: string) => `${artifact}/blob/${data.artifactCommit}/${path}`;
export const number = (n: number, digits = 2) => n.toFixed(digits).replace('-', '−');
export const bibtex = `@inproceedings{jeong2026cohe,
  title = {COHE: Auditing Non-Transitivity in Sample Difficulty Proxies for Vision Models},
  author = {Jeong, Dayena and Choi, Sunglok},
  booktitle = {Advances in Neural Information Processing Systems},
  year = {2026},
  note = {Evaluations \\& Datasets Track},
  url = {https://neurips.cc/virtual/2026/poster/139659}
}`;
