import { useChangeColor } from '../lib/customization/theme/use-change-color'
import { Box, Button, Center } from '../lib/main'

// const standaloneToast = createStandaloneToast();

function App() {
  const { setColor } = useChangeColor()

  return (
    <Center className="zn-bg-color-primary-500-background zn-min-h-screen">
      <Box className="zn-flex zn-justify-center zn-flex-col zn-items-center zn-h-full zn-gap-4">
        <Button onClick={() => setColor('#FFA100')}>Orange</Button>
        <Button onClick={() => setColor('#000000')}>Black</Button>
        <Button onClick={() => setColor('#00FF00')}>Green</Button>
      </Box>
    </Center>
  )
}

export default App
