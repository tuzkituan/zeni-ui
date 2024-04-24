import { Box, Button, Center } from "../lib/main";

// const standaloneToast = createStandaloneToast();

function App() {
  // const { theme, setTheme } = useChangeTheme();
  // const [count, setCount] = useState(0);
  // const toast = useToast();

  // const showToast = () => {
  //   setCount((prevCount) => prevCount + 1);
  //   toast({
  //     description: `Test toast ${count} from App`,
  //     title: "Tuan ne",
  //     position: "bottom-right",
  //     isClosable: true,
  //     variant: "solid",
  //     status: "success",
  //   });
  // };

  // const showStandaloneToast = () => {
  //   setCount((prevCount) => prevCount + 1);
  //   standaloneToast.toast({
  //     description: "You can create toast outside components",
  //     title: "Success",
  //     position: "top-right",
  //   });
  // };

  // const items: {
  //   label: string;
  //   value: ThemeType;
  // }[] = [
  //   {
  //     label: "Sky Light",
  //     value: "baseLight",
  //   },
  //   {
  //     label: "Green Light",
  //     value: "greenLight",
  //   },
  //   {
  //     label: "Pink Light",
  //     value: "pinkLight",
  //   },
  //   {
  //     label: "Sky Dark",
  //     value: "baseDark",
  //   },
  // ];

  return (
    <Center className="zn-bg-color-primary-500-background zn-min-h-screen">
      <Box className="zn-flex zn-justify-center zn-flex-col zn-items-center zn-h-full zn-gap-4">
        <Button>Hello</Button>
        {/* <Flex className="card">
          {items.map((x) => (
            <Button
              key={x.value}
              variant={x.value === theme ? "solid" : "ghost"}
              className={twMerge(
                "px-4 py-1 block cursor-pointer rounded",
                x.value === theme ? "border-2 border-color-primary-500 bg-color-primary-500" : ""
              )}
              onClick={() => setTheme(x.value)}
            >
              <Text>{x.label}</Text>
            </Button>
          ))}
        </Flex>
        <Text className="zn-text-color-primary-500">
          This is a button. Its color is based on the theme
        </Text>
        <Popover content="Popover content" placement="bottom-start">
          <Button variant="outline">Click me</Button>
        </Popover>
        <Avatar
          src="https://picsum.photos/200/300"
          size="lg"
          name="letter tuan"
        />
        <Button onClick={showToast}>Show toast</Button>
        <Button onClick={showStandaloneToast}>Create Standalone Toast</Button> */}
      </Box>
    </Center>
  );
}

export default App;
