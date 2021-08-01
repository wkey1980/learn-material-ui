import React from 'react'

// import Styles
import './styles/App.Styles.css'

// Import Material UI Components
import { Button, ButtonGroup, Checkbox, FormControlLabel, CssBaseline } from '@material-ui/core'

// Import Icons
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Navbar from '../Navbar/index';



function CheckboxExample() {

	const [checked, setChecked] = React.useState(true)

	return (
		<div>

			<CssBaseline />
			<Navbar />
			{/* <h1>Checkbox</h1> */}
			<FormControlLabel
				control={
					<Checkbox
						checked={checked}
						icon={<DeleteIcon />}
						checkedIcon={<SaveIcon />}
						onChange={(e) => setChecked(e.target.checked)}
						inputProps={{
							'aria-label': 'primary checkbox'
						}
					}/>
				}
				label="Checkbox"
			/>

		</div>
	)
}


function App() {
	return (
		<div className="app">

			<CheckboxExample />

			<ButtonGroup variant="contained" size="large">
				<Button
					variant="contained"
					color="primary"
					startIcon={<SaveIcon />}>
						SAVE
				</Button>

				<Button
					variant="contained"
					color="secondary"
					startIcon={<DeleteIcon />}>
						DISCARD
				</Button>
			</ButtonGroup>

		</div>
	);
}

export default App;
