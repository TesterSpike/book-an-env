import './App.css';
import React, {useState} from "react";
import {EnvironmentTableComponent} from "./component/table/EnvironmentTableComponent";
import {EnvironmentData} from "./component/table/types/environmentData";
import {BookingFormModalData} from './component/modal/types/BookingFormModalData';
import Rows from './resources/dataFile.json'
import {BookingFormModal} from "./component/modal/BookingFormModal";

const App: React.FC = () => {
    const rows = Rows as EnvironmentData[]
    const [rowsData, setRowsData] = useState(rows);
    const [isBookingFormModalOpen, setBookingFormModalOpen] = useState<boolean>(false);
    const [bookingEnv, setBookingEnv] = useState<string>("");

    function releaseBooking(env: string) {
        const updatedRows: EnvironmentData[] = [];
        rowsData.forEach(row => {
            if (row.env === env) {
                row.bookingData = undefined;
            }
            updatedRows.push(row);
        })
        setRowsData(updatedRows);
    }

    function addBooking(data: BookingFormModalData) {
        const updatedRows: EnvironmentData[] = [];
        rowsData.forEach(row => {
            if (row.env === data.environmentName) {
                row.bookingData = {
                    bookedBy: data.bookedFor,
                    office: data.office,
                    bookingDate: data.bookingDate,
                    notes: data.notes,
                    shareable: data.isShareable,
                    untilTime: new Date(data.bookingDate + " 18:00:00"),
                };
            }
            updatedRows.push(row);
        })
        setRowsData(updatedRows);
    }

    const handleOpenBookingFormModal = (env: string) => {
        setBookingFormModalOpen(true);
        setBookingEnv(env);
    };

    const handleCloseBookingFormModal = () => {
        setBookingFormModalOpen(false);
    };

    const handleFormSubmit = (data: BookingFormModalData): void => {
        addBooking(data);
        handleCloseBookingFormModal();
    };

    return (
        <div className="App">
            <h1 className="App-header">
                Environments
            </h1>
            <div className={"Content"}>
                <div className="EnvironmentTable">
                    <EnvironmentTableComponent data={rows}
                                               onRelease={releaseBooking}
                                               onBooking={handleOpenBookingFormModal}/>
                </div>
                <BookingFormModal
                    name={bookingEnv}
                    isOpen={isBookingFormModalOpen}
                    onSubmit={handleFormSubmit}
                    onClose={handleCloseBookingFormModal}/>
            </div>
        </div>
    );
}

export default App;
