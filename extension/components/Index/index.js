import styles from '../../styles/Pages.module.css';

export default function Index({ navigateToPage }) {
  // Awesome Bodhi Apps
  // Subscribe Author -> Bodhi RSS
  // Share as Iframe
  // Transfer!
  // See the Reveal Things
  // Tag Things
  return (
    <div className={styles.container}>
      <main className={styles.main}>

        <h3 className={styles.title}>Bodhi Bodhi</h3>
        {/*hr></hr> */}
        <a href="https://projects.noncegeek.com/?tag=bodhi" target="_blank" rel="noreferrer">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Share this Asset
          </button>
        </a>
        <hr></hr>
        <a href="https://projects.noncegeek.com/?tag=bodhi" target="_blank" rel="noreferrer">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Tag this Asset
          </button>
        </a>
        <hr></hr>
        {/* <h3 className={styles.title}>Tag this asset</h3>
        <hr></hr> */}
        {/* <h3 className={styles.title}>Awesome Bodhi Apps</h3> */}
        <a href="https://projects.noncegeek.com/?tag=bodhi" target="_blank" rel="noreferrer">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            See Awesome Bodhi Apps
          </button>
        </a>
        {/* <p className={styles.description}>
          This is an example of a Browser Extension built with NEXT.JS. Please
          refer to the GitHub repo for running instructions and documentation
        </p> 
        
        <h1 className={styles.code}>Awesome Bodhi Apps</h1> 
        <p>{"[ - This is Index page content - ]"}</p>
        <p onClick={() => navigateToPage('new')}>{"Go to New Page >"}</p>*/}
      </main>
    </div>
  );
}
