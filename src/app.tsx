import globalCss from './style.css'; // global CSS

import styles, { stylesheet } from './style.module.css'; // CSS modules

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.title}>hello</div>
      <p className={styles.desc}>This is a panel. You can drag to move it.</p>
    </div>
  );
}

const hostElement = VM.getHostElement();
hostElement.addStyle([globalCss, stylesheet].join('\n'));
hostElement.root.appendChild((<Main />) as unknown as Node);

document
  .getElementById('main-nav')
  .insertAdjacentElement('afterend', hostElement.host);
