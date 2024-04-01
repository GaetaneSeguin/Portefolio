import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Head from "next/head";



const Home = () => {
  return (
    <>
      <Head>
        <title> Test </title>
      </Head>
      <div>
        <Hero/>
        <Skills/>
        <Projects/>
      </div>    
    </>
  );
}

export default Home ;
  
