// Все изображения сайта собраны в одном месте.
// Чтобы заменить картинку, измени только значение в этом файле.

export const imageSources = {
  '2b-agency': {
    base: 'https://www.figma.com/api/mcp/asset/471fbf6b-a964-449a-88f4-f03f221b9477',
    files: {
      clinicOriginal: '02851',
      clinicFinal: ['6f0b4', '0cb4a', '2cb9d'],
      clinicExtra: ['0b767', 'bd6e2', '322df', '410ff', 'a948a', '0f5aa'],
      agencyRedesign: ['95ebc', '098d6', '340f0', '76124', '575c9', '1b67c'],
    },
  },
  'yandex-crowd': {
    base: 'https://www.figma.com/api/mcp/asset/4eab8378-6695-404d-b137-09629b1e94b1',
    files: {
      logo: 'ceb49',
      brief: '885f1',
      process: ['5c1c0', 'c6a39', '9eb52', 'fc9a7', '89872', '07b3a', '2a45a'],
    },
  },
  'tvoe-live': {
    base: 'https://www.figma.com/api/mcp/asset/97d7d5f4-c7e1-48aa-ac50-e0f7f23d5bfe',
    files: {
      logo: 'c412e.svg',
      designSystem: ['b0c87', '86ec0'],
      web: ['95388', '7980a', '1cede', '0ebba', '9da5d', 'bba69', 'd7d98', '04fed'],
    },
  },
  uprock: {
    base: 'https://www.figma.com/api/mcp/asset/bf6ee8e9-d0e0-4b6a-85f5-6df57f85eae6',
    files: {
      logo: 'eb103.svg',
      corporate: ['0a69c', '9d5d1', 'a206d', 'c8de1', 'c5182', 'a8a40', 'e5459', '6d87f', '551d9', '6820b', '17ba1', '0c8fb', '3ba22'],
      shop: ['8c2b8', '60ead', 'feb16', '85f0c', '5528d', '34695', 'ca87e'],
      mobile: ['28b97', 'dbfa8', '28d1a', 'e3438', '1b922', '283b6'],
    },
  },
  rassvetay: {
    base: 'https://www.figma.com/api/mcp/asset/63a0eff5-6770-4c84-a52e-5e74dbe1b7e6',
    files: {
      logo: 'd3b05.svg',
      advertising: ['e0ce5', 'a9a84'],
      loftScience: ['67862', '451a4'],
      rebrand: '92ade',
      originalSite: '899a0',
      redesign: ['071a0', 'b1edf', '67604', 'ca4d2', '19f07'],
    },
  },
} as const;

export function imageUrl(base: string, file: string) {
  return `${base}/${file}`;
}

export function pngUrl(base: string, file: string) {
  return imageUrl(base, `${file}.png`);
}
