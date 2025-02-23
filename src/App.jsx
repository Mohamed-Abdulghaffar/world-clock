import Clock from "./Clock";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="container">
      <h1 className="text-center my-3">World Clock</h1>
      <div className="row">
        <div className="col-md-4 text-center">
          <h3>New York</h3>
          <Clock timeZone="America/New_York" />
        </div>
        <div className="col-md-4 text-center">
          <h3>London</h3>
          <Clock timeZone="Europe/London" />
        </div>
        <div className="col-md-4 text-center">
          <h3>Tokyo</h3>
          <Clock timeZone="Asia/Tokyo" />
        </div>
      </div>
    </div>
  );
}