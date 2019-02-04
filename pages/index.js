import HelloWorld from 'component/section/helloworld'

const Home = props =>
<div>Welcome to the Pokedex home page!
  <HelloWorld/>
  <p>
    Write your name:
    <input placeholder="Your name here"/>
  </p>
  <a href="www.google.com">Go to Google Here</a>
</div>
export default Home
