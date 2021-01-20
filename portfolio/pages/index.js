import styles from '../styles/Home.module.css'
import { Grid, Box } from '@material-ui/core'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.page}>

    {/* Import a font from Google */}
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@1,300&display=swap');
    </style>

      {/* ------------ Top Half of Page ------------ */}
      
      <div className={styles.header}>

        {/* Grid container that centers in the middle of the screen */}
        <Grid container
              spacing={0}
              direction="row"
              alignItems="center"
              justify="space-around"
              style={{minHeight:'50vh'}}>
          
          {/* ------------ Left Side Panel ------------ */}
          
            <Box className={styles.intro}> 

              <header className={styles.text}> Hi, I'm Dylan Adams. </header>

              <header className={styles.text} style={{fontSize:'calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));'}}> 
                I'm a Freshman B.S. Computer Science student  <br/> 
                at UNC Charlotte with a passion for <br/> 
                programming and web development.
              </header>

              <br/>
              <br/>

              <header className={styles.text} style={{fontSize:'calc(14px + (24 - 14) * ((100vw - 300px) / (1600 - 300)));'}}>
                Scroll down to see my completed,<br/>
                current, and future <br/>
                Web Development projects.

                {/* HTML for the Arrow */}
                <header className={styles.text} style={{padding:0}}>
                  &#8595;
                </header>

              </header>

            </Box>
          

          {/* ------------ Right Side Panel ------------ */}
          <Box className={styles.right} style={{background:'none'}}>
            <Image src='/Dylan-2.jpg' width={700} height={530} alt="Dylan Adams" className={styles.img} />
          </Box>

        </Grid>

        <header className={styles.text} style={{fontSize:'20px'}}> Find me on :</header>
        <Grid container
              spacing={0}
              direction="row"
              alignItems="center"
              justify="center"
              style={{minHeight:'10vh'}}>
          
          
          <a href="https://www.linkedin.com/in/dylan-c-adams/" target='_blank'><Image src='/linkedin.png' width={40} height={40} alt="LinkedIn" /></a>
          <p style={{padding:'1vw'}} />
          <a href="https://github.com/DCAdams103" target='_blank'><Image src='/github.png'  width={40} height={40} alt="LinkedIn" /></a>

        </Grid>
      </div>

      {/* ------------ Bottom Half of Page ------------ */}

      <header className={styles.text} style={{fontSize:'60px'}}> Completed Projects </header>
      {/* Divider Line */}
      <hr style={{width:'25%'}}/>

      <header className={styles.projectTitle}> <a href="https://www.rhomephotography.com" target="_blank"> Real Home Photography </a> </header>
      <hr style={{width:'15%'}}/>

      <header className={styles.text} style={{fontSize:'25px', paddingTop:'0'}}> <a href="https://github.com/DCAdams103/Real-Home-Photography-Website" target="_blank"> View on Github </a></header>
      
      <header className={styles.text} style={{fontSize:'25px'}}> 
          A responsive, and mobile-friendly website I designed for a <br/>
          local real estate photography business, Real Home Photography. 
      </header>
      <header className={styles.text} style={{fontSize:'25px', paddingTop:'1%'}}> 
          Successfully deployed at <a href="https://www.rhomephotography.com" target="_blank">www.rhomephotography.com</a>
      </header>

      <br/>

      <Box style={{paddingLeft:'10vw', paddingRight:'10vw'}}>
        <Image layout="responsive" src='/Frontpage1.png' width='10vw' height='5vh'  alt="Real Home Photography Front Page" />
      </Box>

      <br/>

      <header className={styles.text} style={{fontSize:'60px'}}> Current Projects </header>
      <hr style={{width:'25%'}}/>

      <header className={styles.projectTitle}> <a href="https://github.com/DCAdams103/React-Auth" target="_blank"> React Authentication </a> </header>
      <hr style={{width:'15%'}}/>

      <header className={styles.text} style={{fontSize:'25px', paddingTop:'0'}}> <a href="https://github.com/DCAdams103/React-Auth" target="_blank"> View on Github </a></header>
      
      <header className={styles.text} style={{fontSize:'25px'}}> 
          A personal project to learn more about authentication. <br/>
          It's built with Next.js, and connects to a local MySQL database.
      </header>

      <br/>

      <Box style={{paddingLeft:'10vw', paddingRight:'10vw'}}>
        <Image layout="responsive" src='/ReactAuth.png' width='10vw' height='5vh'  alt="Real Home Photography Front Page" />
      </Box>

      <br/>

      <header className={styles.text} style={{fontSize:'60px'}}> Future Projects </header>
      <hr style={{width:'25%'}}/>
      
      {/* List */}
      <header className={styles.text} style={{fontSize:'25px'}}>
          I hope to learn more about...
          <p></p>
          <ul>
            <li> Authentication </li>
            <li> Redux </li>
            <li> Back-end development </li>
            <li> Databases </li>
          </ul>
      </header>

      <br/>
      <br/>

    </div>
    
  )
}
