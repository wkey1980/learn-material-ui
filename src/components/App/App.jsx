import { Button, ButtonGroup, Container, Grid } from '@material-ui/core';

// Import Icons
import KeyboardArrowRightTwoToneIcon from '@material-ui/icons/KeyboardArrowRightTwoTone';

import randomColor from 'randomcolor';

function App() {
  return (
    <div className="app">
      <Container maxWidth="lg">

<ButtonGroup>
  <Button
    color="secondary"
    variant="contained"
    endIcon={<KeyboardArrowRightTwoToneIcon />}>
  </Button>
</ButtonGroup>



        <h1>Material-UI Container</h1>
      </Container>
    </div>
  );
}

export default App;
