import { html, render } from 'https://unpkg.com/htm/preact/standalone.module.js';

const App = () => html`
  <header>
    <a href="/"><h1>wrighs6.com</h1></a>
  </header>
  <main>
    <p>
      Welcome to my website!
    </p>
    <p>
      I'm Stephen, a student pursuing a degree in Information Technology and Web Science with a focus on cybersecurity.
      Alongside my academic endeavors, I work as a Salesforce administrator developing business automations with Flow Builder.
    </p>
    <p>
      This website will serve as my personal portfolio, showcasing my web development skills as well as any other projects I've undertaken.
    </p>
  </main>
  <footer>
    <a href="mailto:wrighs6@rpi.edu">wrighs6@rpi.edu</a>
    <a href="https://github.com/wrighs6">github.com/wrighs6</a>
    <a href="https://www.linkedin.com/in/wrighs6/">linkedin.com/in/wrighs6</a>
  </footer>
`;

render(html`<${App} />`, document.body);
