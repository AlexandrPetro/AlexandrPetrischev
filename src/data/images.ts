// Все изображения сайта собраны в одном месте.
//
// Как заменить изображение:
// 1. Загрузи файл в GitHub в папку public/images/<проект>/.
// 2. В localImages ниже добавь соответствие: ключ изображения -> путь к новому файлу.
// 3. Сохрани изменения. Сайт автоматически соберётся заново.
//
// Путь указывается относительно папки public.

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
    files: { logo: 'ceb49', brief: '885f1', process: ['5c1c0', 'c6a39', '9eb52', 'fc9a7', '89872', '07b3a', '2a45a'] },
  },
  'tvoe-live': {
    base: 'https://www.figma.com/api/mcp/asset/97d7d5f4-c7e1-48aa-ac50-e0f7f23d5bfe',
    files: { logo: 'c412e.svg', designSystem: ['b0c87', '86ec0'], web: ['95388', '7980a', '1cede', '0ebba', '9da5d', 'bba69', 'd7d98', '04fed'] },
  },
  uprock: {
    base: 'https://www.figma.com/api/mcp/asset/bf6ee8e9-d0e0-4b6a-85f5-6df57f85eae6',
    files: { logo: 'eb103.svg' },
  },
  rassvetay: {
    base: 'https://www.figma.com/api/mcp/asset/63a0eff5-6770-4c84-a52e-5e74dbe1b7e6',
    files: { logo: 'd3b05.svg', advertising: ['e0ce5', 'a9a84'], loftScience: ['67862', '451a4'], rebrand: '92ade', originalSite: '899a0', redesign: ['071a0', 'b1edf', '67604', 'ca4d2', '19f07'] },
  },
} as const;

// Здесь указываются локальные изображения. Если ключа нет, показывается серый placeholder
// или исходное изображение из Figma — в зависимости от блока.
export const localImages: Record<string, Record<string, string>> = {
  '2b-agency': {
    'main_before_1': 'images/main/NIC_old1.png',
    'main_before_2': 'images/main/NIC_old2.png',
    'main_before_3': 'images/main/NIC_old3.png',
    'nic_main': 'images/main/NIC_mainpage.png',
    'nic_doctorpage': 'images/main/NIC_doctorpage.png',
    'nic_action_1': 'images/main/NIC_action1.png',
    'nic_action_2': 'images/main/NIC_action2.png',
    'nic_service': 'images/main/NIC_service.png',
    'nic_price': 'images/main/NIC_price.png',
    'nic_allcase': 'images/main/NIC_allcase.png',
    'nic_case': 'images/main/NIC_case.png',
    'nic_mobile': 'images/main/NIC_mobile.png',
    'nic_uikit_1': 'images/main/NIC_uikit1.png',
    'nic_uikit_2': 'images/main/NIC_uikit2.png',
    '2b_before': 'images/main/2b_before.png',
    '2b_hero': 'images/main/2b_hero.png',
    '2b_hero_open': 'images/main/2b_heroopen.png',
    '2b_case': 'images/main/2b_case.png',
    '2b_allpage': 'images/main/2b_allpage.png',
    '2b_mobile': 'images/main/2b_mobile.png',
  },
  'tvoe-live': {
    // Серые фреймы из Figma с приставкой Img_. Чтобы поставить своё изображение,
    // укажи путь к файлу относительно public, например:
    'Img_TvoeDS': 'images/main/Img_TvoeDS.png',
    'Img_TvoeDS2': 'images/main/Img_TvoeDS2.png',
    'Img_TvoeMainold_1': 'images/main/Img_TvoeMainold.png',
    'Img_TvoeMainold_2': 'images/main/Img_TvoeMainnew.png',
    'Img_TvoeSelection': 'images/main/Img_TvoeSelection.png',
    'Img_TvoeSelectionFilm': 'images/main/Img_TvoeSelectionFilm.png',
  },
  'yandex-crowd': {
    // Заглушки из Figma с приставкой img. Добавляй сюда свои PNG из public/images/yandex/.
    'img_analis': 'images/main/Yndx_analis.png',
    'img_analis2': 'images/main/Yndx_analis2.png',
    'img_concept': 'images/main/Yndx_concept.png',
    'img_ref': 'images/main/Yndx_ref.png',
    'img_prot': 'images/main/Yndx_prot.png',
    'img_design': 'images/main/Yndx_design.png',
  },
  uprock: {
    // Серые фреймы из Figma с приставкой img.
    // Положи свои файлы в public/images/uprock/ и замени '' на путь к файлу.
    'img_doordash': 'images/main/uprock_doordash.png',
    'img_yamaha': 'images/main/uprock_yamaha',
    'img_bazar': 'images/main/uprock_bazar',
    'img_ride': 'images/main/uprock_ride',
  },
  rassvetay: {},
};

const projectByBase: Record<string, string> = Object.fromEntries(Object.entries(imageSources).map(([project, source]) => [source.base, project]));

function localAsset(base: string, file: string) {
  const project = projectByBase[base];
  const localPath = project ? localImages[project]?.[file] : undefined;
  if (!localPath) return null;
  const siteBase = import.meta.env.BASE_URL || '/';
  return `${siteBase.replace(/\/$/, '')}/${localPath.replace(/^\//, '')}`;
}

export function imageUrl(base: string, file: string) {
  return localAsset(base, file) ?? `${base}/${file}`;
}

export function pngUrl(base: string, file: string) {
  return localAsset(base, file) ?? `${base}/${file}.png`;
}
