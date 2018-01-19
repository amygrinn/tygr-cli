export { getConfig } from './config';
export { TygrConfig } from './tygr.config';

import { setConfig } from './config';

import { initialConfig, TYGR_CONFIG } from './tygr.config';

export function setupLocalConfig() {
  setConfig(TYGR_CONFIG, initialConfig, 'local');
}