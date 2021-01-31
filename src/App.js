import React, { useState } from 'react';
import './App.css';
import BackgroundVideo from './components/BackgroundVideo';
import Birthdays from './components/Birthdays';
import { motion } from 'framer-motion';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calculateBirthdays from './utils/calculateBirthdays';

const boxVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

const variants = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
    },
  },
};

function App() {
  const [name, setName] = useState('');
  const [checksOkay, setChecksOkay] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [datesArr, setDatesArr] = useState();
  function handleCalculation() {
    if (name === '') {
      alert('Please enter a name!');
    } else {
      setDatesArr(calculateBirthdays(dateOfBirth));
      setChecksOkay(true);
    }
  }

  return (
    <>
      <BackgroundVideo />
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-6-widescreen is-offset-3-widescreen">
              <motion.div className="box" initial="hidden" animate="visible" variants={boxVariants}>
                <h4 className="title has-text-centered mt-5">Dog Birthday Calculator</h4>
                <div className="column is-4 is-4-mobile mx-auto my-4">
                  <div className="field is-horizontal">
                    <div className="field-label mr-0 is-normal has-text-centered">
                      <label className="label is-size-4 has-text-white" htmlFor="name">
                        Dog's Name
                      </label>
                      <div className="control">
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="form-control input is-medium has-text-centered"
                          id="name"
                          placeholder="Enter name"
                          autoFocus
                        />
                      </div>
                    </div>
                  </div>
                  <div className="field is-horizontal">
                    <div className="field-label mr-0 is-normal has-text-centered has-icons-left">
                      <label className="label is-size-4 has-text-white" htmlFor="dogBirthday">
                        Dog's Date of Birth
                      </label>
                      <DatePicker
                        className="form-control input is-medium has-text-centered"
                        id="dogBirthday"
                        dateFormat="dd/MM/yyyy"
                        selected={dateOfBirth}
                        onChange={(date) => setDateOfBirth(date)}
                        placeholderText="Enter your Dog's Birthday"
                        maxDate={new Date()}
                        peekNextMonth
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                      />
                    </div>
                  </div>
                </div>
                <div className="field has-addons has-addons-centered mb-4">
                  <p className="control">
                    <button
                      onClick={handleCalculation}
                      className="button is-white is-outlined has-addons-centered is-medium"
                      id="calculate"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      Calculate
                    </button>
                  </p>
                </div>
                {checksOkay && (
                  <motion.div
                    className="column panel panel-default"
                    id="bDayList"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                  >
                    <Birthdays key="1" name={name} dateOfBirth={dateOfBirth} datesArr={datesArr} />
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
