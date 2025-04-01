export default function About() {
    return (
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        
        <div className="prose dark:prose-invert lg:prose-lg max-w-none">
          <p>
            Hi there! I'm a web developer with a passion for creating beautiful and functional websites. 
            I specialize in modern JavaScript frameworks like React and Next.js.
          </p>
          
          <h2>My Skills</h2>
          <ul>
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>RESTful APIs</li>
          </ul>
          
          <h2>My Journey</h2>
          <p>
            I started my coding journey in 2022 and have been constantly learning and improving ever since.
            This blog is a place where I document my learning process and share helpful tips with others 
            who are on a similar path.
          </p>
          
          <h2>What I'm Working On</h2>
          <p>
            Currently, I'm focused on mastering Next.js and expanding my knowledge of backend technologies.
            I'm also interested in exploring mobile development with React Native.
          </p>
          
          <h2>Let's Connect</h2>
          <p>
            Feel free to reach out if you'd like to collaborate on a project or just chat about web development!
            You can contact me through the <a href="/contact">contact form</a> or find me on social media.
          </p>
        </div>
      </div>
    );
  }