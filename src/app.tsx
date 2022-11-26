import { KAAGlobals } from './kaa';
import globalCss from './style.css'; // global CSS

import styles, { stylesheet } from './style.module.css'; // CSS modules
import type { IEpisodeAppData } from './types/kaa';
import { parseJSToObject } from './utils';

const getEpisode = async () => {
  const slug = appData.animeList.all[14].slug;
  const res = await fetch(slug);
  const dom = new DOMParser().parseFromString(await res.text(), 'text/html');
  const scriptTag = dom.querySelector(
    'body > script:nth-child(7)'
  )?.textContent;
  const episodeData = parseJSToObject(scriptTag, KAAGlobals)
    .appData as IEpisodeAppData;
  console.log(episodeData.episode);
};

function Main() {
  return (
    <div className={styles.main}>
      <h3 className={styles.title}>Better KickAssAnime</h3>
      <button onClick={getEpisode}>Test</button>
    </div>
  );
}

const hostElement = VM.getHostElement();
hostElement.addStyle([globalCss, stylesheet].join('\n'));
hostElement.root.appendChild((<Main />) as unknown as Node);

document
  .getElementById('main-nav')
  .insertAdjacentElement('afterend', hostElement.host);
