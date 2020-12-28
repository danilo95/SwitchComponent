import Switch from './switch/Switch';

import { Container, Label, Wrapper } from './Style';

function App() {
	let defaultValue = true;
	return (
		<Wrapper>
			<Container>
				<Label>Do you love React?</Label>
				<Switch id="switch-01" color="#7DE59A" value={defaultValue} />
			</Container>
			<Container>
				<Label>Do you love Javascript?</Label>
				<Switch id="switch-02" color="#09DEB7" value={defaultValue} />
			</Container>
		</Wrapper>
	);
}

export default App;
