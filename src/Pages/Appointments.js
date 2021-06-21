import MotionHoc from "./MotionHoc";

const AppointmentComponent = () => {
  return <h1 className="headerbox">Appointements</h1>;
};

const Appointments = MotionHoc(AppointmentComponent);

export default Appointments;
