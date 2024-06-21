import { createSignal, type Component, type JSX } from 'solid-js'

interface Props {
  initValue: number
  children?: JSX.Element
}

export const Counter: Component<Props> = ({ initValue, children }) => {
  const [counter, setCounter] = createSignal(initValue)

  return (
    <>
      {children}
      <h1 class="text-xl">Value: {counter()}</h1>
      <button
        class="bg-blue-500 p-2 mr-2 rounded"
        onClick={() => setCounter(prev => ++prev)}
      >
        +1
      </button>
      <button
        class="bg-blue-500 p-2 mr-2 rounded"
        onClick={() => setCounter(prev => --prev)}
      >
        -1
      </button>
    </>
  )
}
