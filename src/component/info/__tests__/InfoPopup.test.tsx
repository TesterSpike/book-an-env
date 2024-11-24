import {render, screen} from "@testing-library/react";
import {InfoPopup} from "../InfoPopup";
import {userEvent} from "@testing-library/user-event";

describe('InfoPopup', () => {

        it('renders correctly', async () => {
                render(<InfoPopup infoText={'has info text'} infoIcon={'*'}/>);

                expect(screen.getByText('*')).toBeInTheDocument();
                expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument();
                await userEvent.hover(screen.getByRole('tooltip'));
                expect(screen.getByRole('contentinfo')).toBeInTheDocument();
        });
    });