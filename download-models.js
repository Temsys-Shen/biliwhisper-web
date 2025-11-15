import { env, pipeline } from '@xenova/transformers';

env.remoteHost = 'https://hf-mirror.com';

const models = [
  'Xenova/whisper-tiny',
  'Xenova/whisper-base',
  'Xenova/whisper-small',
  'Xenova/whisper-medium',
];

// 指定 cache 目录为 public/models
env.useBrowserCache = false;  // Node 下有效
env.cacheDir = './public/models';

for (const modelName of models) {
  console.log(`Downloading ${modelName}...`);
  await pipeline('automatic-speech-recognition', modelName);
  console.log(`${modelName} downloaded!`);
}
