import styles from '../styles/Home.module.css'
import { Grid, Box } from '@material-ui/core'
import Image from 'next/legacy/image'

export default function Home() {
  return (
    <div className={styles.page}>

    {/* Import a font from Google 
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@1,300&display=swap');
    </style>*/}

    <div className={styles.container}>
        {/* ------------ Top Half of Page ------------ */}
      
      <div className={styles.header}>

        {/* Grid container that centers in the middle of the screen */}
        <Grid container
              spacing={0}
              direction="row"
              alignItems="center"
              justifyContent="space-around"
              style={{minHeight:'50vh'}}>
        
          {/* ------------ Left Side Panel ------------ */}
        
          <Box className={styles.intro}> 

            <header> Hi, I'm Dylan Adams. </header>

            <header> 
              I'm currently a Senior B.S. Computer Science student at UNC Charlotte  <br/> 
              with a passion for programming <br/> 
              and web development.
            </header>

            <header>
              Scroll down to see my completed,<br/>
              current, and future <br/>
              Programming projects.

              {/* HTML for the Arrow */}
              <header style={{padding:0, paddingTop:'3vh'}}>
                &#8595;
              </header>

            </header>

          </Box>
        

          {/* ------------ Right Side Panel ------------ */}
          <Box className={styles.right} style={{background:'none'}}>
            <Image src='/Dylan-2.jpg' width={700} height={530} alt="Dylan Adams" className={styles.img} priority/>
          </Box>

        </Grid>

        {/* ------------ Social Links ------------ */}
        <header className={styles.text}> Find me on :</header>
        <Grid container
              spacing={0}
              direction="row"
              alignItems="center"
              justifyContent="center">
          
          
          <a href="https://www.linkedin.com/in/dylan-c-adams/" target='_blank'><Image src='/linkedin.png' width='45vw' height='45vh' alt="LinkedIn" /></a>
          <p style={{padding:'1vw'}} />
          <a href="https://github.com/DCAdams103" target='_blank'><Image src='/github.png'  width='45vw' height='45vh' alt="LinkedIn" /></a>

        </Grid>

      </div>  
      
      
    </div>

      {/* ------------ Bottom Half of Page ------------ */}

      <div className={styles.projectsContainer}>
        <header className={styles.textHeaders}> Completed Projects </header>
        {/* Divider Line */}
        <hr style={{width:'25%'}}/>

        {/* ------------------------------------------- Real Home Photography ------------------------------------------ */}

        <header className={styles.projectTitle}> <a href="https://www.rhomephotography.com" target="_blank"> Real Home Photography </a> </header>
        <hr style={{width:'15%'}}/>

        {/* Real Home Photography GitHub Link */}
        <header className={styles.text}> <a href="https://github.com/DCAdams103/Real-Home-Photography-Website" id='github' target="_blank"> View on Github </a></header>

        

        {/* Real Home Photography Description  */}
        <header className={styles.text}> 
          A responsive, and mobile-friendly website I designed for a <br/>
          local real estate photography business, Real Home Photography. 
        </header>

        {/* Real Home Photography Link */}
        <header className={styles.text}> 
          Successfully deployed at <a href="https://www.rhomephotography.com" target="_blank">www.rhomephotography.com</a>
        </header>

        <br/>

        {/* Real Home Photography Photo */}
        <Box className={styles.imageContainer}>
          <Image className={styles.images} layout='fill' src='/Frontpage1.png' alt="Real Home Photography" priority />
        </Box>

        <br/>

        {/* ------------------------------------------- Letterboxd Scraper ------------------------------------------ */}

        <header className={styles.projectTitle}> <a href="https://letterboxd-web-scraper.vercel.app/" target="_blank"> Letterboxd.com Web Scraper </a> </header>
        <hr style={{width:'15%'}}/>

        {/* Letterboxd Scraper GitHub Link */}
        <header className={styles.text}> <a href="https://github.com/DCAdams103/Letterboxd-Web-Scraper" id='github' target="_blank"> View on Github </a></header>

        {/* Letterboxd Scraper Description  */}
        <header className={styles.text}> 
          This website uses Axios and Cheerio to scrape information <br/>
          from a list of movies on letterboxd.com and shows the user <br/>
          a random movie for them to watch.  
        </header>

        {/* Letterboxd Scraper Link */}
        <header className={styles.text}> 
          Successfully deployed at <a href="https://letterboxd-web-scraper.vercel.app/" target="_blank">letterboxd-web-scraper.vercel.app</a>
        </header>

        <br />

        {/* Letterboxd Scraper Photo */}
        <Box className={styles.imageContainer}>
          <Image className={styles.images} layout='fill' src='/Letterboxd.png' alt="Letterboxd Web Scraper" priority />
        </Box>

        {/* ------------------------------------------- Current Projects ------------------------------------------ */}

        <header className={styles.textHeaders} id={styles.current}> Current Projects </header>
        <hr style={{width:'25%'}}/>

        {/* ------------------------------------------- Java Socket Program ------------------------------------------ */}

        {/* Java Socket Program GitHub Link */}
        <header className={styles.projectTitle}> <a href="https://github.com/DCAdams103/Pixie_ScreenFileSharing" target="_blank"> Java Socket Program </a> </header>
        <hr style={{width:'15%'}}/>

        <header className={styles.text}> <a href="https://github.com/DCAdams103/Pixie_ScreenFileSharing" target="_blank"> View on Github </a></header>

        {/* Java Socket Program Description */}
        <header className={styles.text}> 
          A project to learn about Java Sockets to allow the user to (eventually) <br/>
          send images, files and share their screen.
        </header>

        <br/>

        {/* Java Socket Program Images */}
        
        <Box className={styles.imageContainer}>
          <Image className={styles.images} layout='fill' src='/JavaSockets.png' alt="React Calendar page" priority />
        </Box>

        {/* ------------------------------------------- React Calendar ------------------------------------------

        {/* React Calendar GitHub Link
        <header className={styles.projectTitle}> <a href="https://github.com/DCAdams103/React-Calendar" target="_blank"> React Calendar </a> </header>
        <hr style={{width:'15%'}}/>

        <header className={styles.text}> <a href="https://github.com/DCAdams103/React-Calendar" target="_blank"> View on Github </a></header>

        {/* React Calendar Description
        <header className={styles.text}> 
          A personal project to make a basic calendar app that communicates with a database. <br/>
          It's built with Next.js, and connects to Google's Firebase for Authentication.
        </header>

        <br/>

        {/* React Calendar Images
        
        <Box className={styles.imageContainer}>
          <Image className={styles.images} layout='fill' src='/ReactCalendar.png' alt="React Calendar page" priority />
        </Box>

        {/* ------------------------------------------- React Auth ------------------------------------------ */}

        {/* <header className={styles.projectTitle}> <a href="https://github.com/DCAdams103/React-Auth" target="_blank"> React Authentication </a> </header>
        <hr style={{width:'15%'}}/>

        {/* React Auth GitHub Link
        <header className={styles.text}> <a href="https://github.com/DCAdams103/React-Auth" target="_blank"> View on Github </a></header>

        {/* React Auth Description
        <header className={styles.text}> 
          A personal project to learn more about authentication. <br/>
          It's built with Next.js, and connects to a local MySQL database.
        </header>

        <br/>

        {/* React Auth Images
        <Box className={styles.imageContainer}>
          <Image className={styles.images} layout='fill' src='/ReactAuth.png' alt="React Auth login page" priority />
        </Box>

        <br/> */}

        {/* ------------------------------------------- Future Projects ------------------------------------------ */}

        <header className={styles.textHeaders} id={styles.future}> Future Projects </header>

        <hr style={{width:'25%'}}/>

        {/* List */}
        <header className={styles.text}>
          I hope to accomplish and learn more about...
          <p></p>
          <ul>
            <li>C++ Paper Trading application</li>
            <li>Python data visualization</li>
            <li> Redux </li>
            <li> Back-end development </li>
            <li> Databases </li>
          </ul>
        </header>

        <br/>
        <br/>
      </div>

      

    </div>
    
  )
}
