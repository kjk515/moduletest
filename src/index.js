import { cloneDeep } from 'lodash-es' // 번들링 포함되지 않음
import intersectionWith from 'lodash/intersectionWith' // 번들링 포함됨

import { funcCm1 } from './util/util-commonjs'; // 번들링 포함됨
import { funcEsm1 } from './util/util-esm'; // 번들링 포함되지 않음

export function libFunc() {
  console.log('indexFunc');
}

