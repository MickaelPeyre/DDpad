import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button, Dropdown, Grid, Header } from "semantic-ui-react";
import "./App.css";
import { WEAPONS } from "./SOUNDS/WEAPONS";

const Kick = ({ src, uuid }: {src: string, uuid?: string}) => {
	const [visible, setVisible] = useState(src !== "");
	return (
		visible ? (
			<audio controls autoPlay onEnded={() => setVisible(false)}>
				<source src={src} type="audio/wav" />
			</audio>
		) : <></>
	);
};

const App = () => {
	const [kicks, setKicks] = useState({});

	const kickIt = (src: string) => {
		const uuid = uuidv4();
		setKicks({ ...kicks, ...{ [uuid]: <Kick src={src} /> } });
	};

	return (
		<>
      <Grid columns={3}>
        <Grid.Row>
				<Grid.Column>
					<Header as="h1">
						<Header.Content>D&D Pad</Header.Content>
					</Header>
				</Grid.Column>
        </Grid.Row>
        <Grid.Row>
				<Grid.Column>
					<Button.Group>
						<Button onClick={() => {kickIt(WEAPONS.SWORDS.default[0].src)}}>Toggle</Button>
						<Button.Or />
						<Dropdown className="button icon" floating options={WEAPONS.SWORDS.default} trigger={<></>} />
            </Button.Group>
          </Grid.Column>
          <Grid.Column>
          <Button.Group>
						<Button onClick={() => {kickIt(WEAPONS.AXES.default[3].src)}}>Toggle</Button>
						<Button.Or />
						<Dropdown className="button icon" floating options={WEAPONS.AXES.default} trigger={<></>} />
					</Button.Group>
				</Grid.Column>
        </Grid.Row>
				<Grid.Column>{Object.values(kicks)}</Grid.Column>
			</Grid>
		</>
	);
};

export default App;
