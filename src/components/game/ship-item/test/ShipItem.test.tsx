import {render} from "@testing-library/react";
import ShipItem from "../ShipItem";
import { ShipItemParams } from "../../../../interfaces/interfaces";

describe('ShipItem', () => {
    it('starts', () => {
        const {container} = render(<ShipItem shipItem={{} as ShipItemParams}/>);
        const barWrapper = container.getElementsByTagName('ListItem');
        expect(barWrapper).toBeTruthy();
    })
})