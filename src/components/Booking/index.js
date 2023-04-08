import BookingForm from "./BookingForm";
import restaurant from "../../assets/restaurant.jpg";

function Booking() {
    return (
        <section className="booking-container">
            <div className="booking__header">
                <h1 className="booking__title">Reserve a table</h1>
                <div className="img-container">
                    <img src={restaurant} className="img" alt="The outside deck of restaurant." />
                </div>
            </div>
            <BookingForm />
        </section>
    )
}

export default Booking;