import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const formatDate = (dateString) => {
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const date = new Date(dateString);
  const dayOfWeek = weekdays[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayOfWeek}, ${dayOfMonth} of ${month} ${year}`;
};


/**
 * This is a custom hook that can be used to submit a form and simulate an API call
 * It uses Math.random() to simulate a random success or failure, with 50% chance of each
 */
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);
    try {
      await wait(2000);
      let message = (
        <div className="alert-content">
          <p>
            We will be happy to welcome you {data.guests > 1 ? 'and your guests' : ''} on <span className="alert-content__highlight">{formatDate(data.date)}</span> at <span className="alert-content__highlight">{data.time}</span> 
            {
            data.occasion !== 'none' ? 
              <span> for your <span className="alert-content__highlight">{data.occasion}</span>.</span> 
            : ''
          }
          </p>

          <p>
            You will receive a confirmation at:
          </p>
          <p className="alert-content__highlight">
            {data.email}
          </p>
        </div>
      );
      setResponse({
        type: 'success',
        title: `Thank you ${data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1)} ${data.lastName.charAt(0).toUpperCase() + data.lastName.slice(1)}!`,
        message: message,
      })
    } catch (error) {
      setResponse({
        type: 'error',
        title: 'Oops!',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;
