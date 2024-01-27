import Card from './components/Card'
import Loading from './components/Loading'
import { HipsterButton, DefaultButton } from './components/Buttons'
import Form from './components/Form'
import List from './components/List'
import Products from './components/Products'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <Products />
      <br />
      <br />
      <List />
      <br />
      <br />
      <Form />
      <br />
      <br />
      <Card />
      <br />
      <br />
      <Loading />
      <br />
      <br />
      <HipsterButton>Click me</HipsterButton>
      <HipsterButton as="a" href="https://in.pinterest.com/hegdesharadhi/">
        Click me
      </HipsterButton>
      <div
        css={`
          color: green;
        `}
      >
        <h2>hello world</h2>
      </div>
      <DefaultButton>Click me</DefaultButton>
      <DefaultButton large>Click me</DefaultButton>
    </div>
  )
}

export default App
