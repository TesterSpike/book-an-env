import './css/App.css';
import {EnvironmentData} from "./types/environmentData";
import environmentTableComponent from './component/EnvironmentTableComponent';
import React, {useState} from "react";
import BookingFormModal, {BookingFormModalData} from "./component/BookingFormModal";

const rows: EnvironmentData[] = [
    {
        env: "TST1",
        detail: "Some random text",
        metadata: {
            frontendUrls: [
                {
                    feName: "FE1",
                    url: "https://localhost:8080"
                },
                {
                    feName: "FE2",
                    url: "https://localhost:8080"
                }
            ],
            configManagerUrl: {
                cmName: "CM1",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST2",
        detail: "",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM1",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST3",
        detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM2",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST4",
        detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM3",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST5",
        detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM1",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST6",
        detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM2",
                url: "https://localhost:8080"
            }
        },
        bookingData: {
            bookedBy: "user1",
            bookingDate: "2024-09-01",
            untilTime: "6:00:00",
            shareable: true,
            notes: "temporarily shareable"
        }
    },
    {
        env: "TST7", detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM1",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST8", detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM3",
                url: "https://localhost:8080"
            }
        }
    },
    {
        env: "TST9", detail: "Some random text",
        metadata: {
            frontendUrls: [{
                feName: "FE1",
                url: "https://localhost:8080"
            }],
            configManagerUrl: {
                cmName: "CM3",
                url: "https://localhost:8080"
            }
        }
    }
];

const App: React.FC = () => {
    const [isBookingFormModalOpen, setBookingFormModalOpen] = useState<boolean>(false);
    const [bookingFormData, setBookingFormData] = useState<BookingFormModalData | null>(null);

    const handleOpenBookingFormModal = () => {
        setBookingFormModalOpen(true);
    };

    const handleCloseBookingFormModal = () => {
        setBookingFormModalOpen(false);
    };

    const handleFormSubmit = (data: BookingFormModalData): void => {
        setBookingFormData(data);
        console.log(`handleFormSubmit data: ${JSON.stringify(data)}`);
        handleCloseBookingFormModal();
    };

    return (
        <div className="App">
            <h1 className="App-header">
                Book an environment!
            </h1>
            <div id={"Messages"}>
                {
                    bookingFormData &&
                    (
                        <dialog className="msg-box">
                            <b>{bookingFormData.bookedFor}</b> has
                            booked {bookingFormData.environmentName} for {bookingFormData.bookingDate}
                        </dialog>
                    )
                }
            </div>
            <BookingFormModal
                isOpen={isBookingFormModalOpen}
                onSubmit={handleFormSubmit}
                onClose={handleCloseBookingFormModal}/>
            <div className={"Content"}>
                <menu className={"Menu"}>
                    <h3>Menu</h3>
                    <div className={"MenuSection"}>
                        <button id='open-booking-form' onClick={handleOpenBookingFormModal}>Book Environment</button>
                    </div>
                </menu>
                <div className="EnvironmentTable">
                    {environmentTableComponent(rows)}
                </div>
            </div>
        </div>
    );
}

export default App;
