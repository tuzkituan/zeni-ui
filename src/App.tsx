import { useChangeColor } from '../lib/customization/theme/use-change-color'
import { useChangeTheme } from '../lib/customization/theme/use-change-theme'
import { Box, Button, Center } from '../lib/main'

function App() {
  const { setColor } = useChangeColor()
  const { setTheme } = useChangeTheme()

  return (
    <Center className="zn-min-h-screen">
      <Box className="zn-flex zn-justify-center zn-flex-col zn-items-center zn-h-full zn-gap-4">
        <Button onClick={() => setColor('#FFA100')}>Orange</Button>
        <Button onClick={() => setColor('#000000')}>Black</Button>
        <Button onClick={() => setColor('#00FF00')}>Green</Button>
        <Button onClick={() => setTheme('light')}>Set Light Mode</Button>
        <Button onClick={() => setTheme('dark')}>Set Dark Mode</Button>
      </Box>
    </Center>
  )
}

export default App
