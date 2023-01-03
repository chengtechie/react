import Button from "./components/Button";

function App() {
  return (
      <div>
          {/*<p className='underline'>Test Tailwind</p>*/}
          <div>
              <Button success rounded outline>Hi!</Button>
          </div>
          <div>
              <Button danger outline>Watch Out!</Button>
          </div>
          <div>
              <Button rounded primary>Nice!</Button>
          </div>
          <div>
              <Button warning>Be Careful!</Button>
          </div>
          <div>
              <Button secondary>Nice!</Button>
          </div>
      </div>
  );
}

export default App;
