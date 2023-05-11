import './App.css';
import {Stack, Button} from "@mui/material";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </header>
    </div>
  );
}

export default App;
