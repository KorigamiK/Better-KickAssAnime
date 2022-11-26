import * as dom from '@violentmonkey/dom';
import * as ui from '@violentmonkey/ui';
import { IKAA } from './kaa';

declare global {
  const VM: typeof dom & typeof ui;

  namespace JSX {
    /**
     * JSX.Element can be different based on pragma in babel config:
     * - VNode   - when jsxFactory is VM.h
     * - DomNode - when jsxFactory is VM.hm
     */
    type Element = import('@gera2ld/jsx-dom').VNode;
  }

  namespace globalThis {
    const appData: IKAA;
    const appUrl: string;
    const apiUrl: string;
    const uploadUrl: string;
    const lowDetect: boolean;
    const adblockTimedNav: number;
    const sharingDm: string;
  }
}
