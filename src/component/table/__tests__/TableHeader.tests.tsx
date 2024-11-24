import {render, screen} from "@testing-library/react";
import {TableHeader} from "../TableHeader";


test('Table header renders correctly', async () => {
   render(<table><TableHeader /></table>);
   expect(screen.getByText('Environment')).toBeInTheDocument();
   expect(await screen.findAllByRole('columnheader')).toHaveLength(9);
});