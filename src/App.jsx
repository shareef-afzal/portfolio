import styles from './App.module.css'
import { About } from './components/About/About'
import { Contact } from './components/contact/Contact'
import {Hero} from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Project } from './components/Projects/Projects'
import { SkillsAndCp } from './components/Skills&cp/SkillsAndCp'
function App() {
  return (
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <SkillsAndCp/>
    <Project/>
    <Contact/>
    </div>
  )
}

export default App
