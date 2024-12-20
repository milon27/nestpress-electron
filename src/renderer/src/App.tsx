import { Button } from './view/components/ui/button'
import Versions from './view/components/common/versions'

function App(): JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-600 text-center">Hello world!</h1>
      <Button>Click</Button>
      <Versions />
    </>
  )
}

export default App
