import React, { useState } from 'react';
import './App.css';
import BackgroundVideo from './components/BackgroundVideo';
import Birthdays from './components/Birthdays';
import { motion } from 'framer-motion';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

const variantsTemp = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.5,
    },
  },
};

function App() {
  const [name, setName] = useState('');
  const [checksOkay, setChecksOkay] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [datesArr, setDatesArr] = useState();
  function handleBirthdays() {
    if (name === '') {
      alert('Please enter a name!');
    } else {
      let dates = [];
      console.log(dateOfBirth);
      var oneDay = 1000 * 60 * 60 * 24;
      var start1 = new Date(dateOfBirth.getFullYear(), 0, 0);
      var diff1 = dateOfBirth - start1;
      var BdayInNum = Math.floor(diff1 / oneDay);
      var today = new Date();
      var start = new Date(today.getFullYear(), 0, 0);
      var diff = today - start;
      var TodayInNum = Math.floor(diff / oneDay);

      var daysDiff = TodayInNum - BdayInNum;
      var numBeforeBday = Math.floor(daysDiff / 52) + 1;

      var isLeapYear = false;
      var i = 0;

      while (i < 7) {
        var dogRealBday = new Date();
        if (isLeapYear) {
          dogRealBday = dogRealBday.setTime(
            dateOfBirth.getTime() + numBeforeBday * (366 / 7) * 86400000
          );
        } else {
          dogRealBday = dogRealBday.setTime(
            dateOfBirth.getTime() + numBeforeBday * (365 / 7) * 86400000
          );
        }
        var dateStore = new Date(dogRealBday);
        if (dateStore.getFullYear() % 4 === 0) {
          isLeapYear = true;
        } else {
          isLeapYear = false;
        }
        let dateformated = moment(dateStore).format('MMMM Do');
        dates.push(dateformated);
        numBeforeBday++;
        i++;
      }
      setDatesArr(dates);
      setChecksOkay(true);
    }
  }

  return (
    <>
      <BackgroundVideo />

      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-6 is-offset-3">
              <motion.div
                className="box"
                initial="hidden"
                animate="visible"
                variants={variantsTemp}
              >
                <h4 className="title has-text-centered" id="title">
                  Dog Birthday Calculator
                </h4>
                <div className="column is-6 is-m-auto">
                  <div className="field is-horizontal">
                    <div className="field-label is-normal has-text-centered">
                      <label className="label" htmlFor="name">
                        Dog's Name
                      </label>
                      <div className="control">
                        <input
                          onChange={(e) => setName(e.target.value)}
                          type="text"
                          className="form-control input is-medium"
                          id="name"
                          placeholder="Enter your Dog's Name"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field is-horizontal">
                  <div className="field-label is-normal has-text-centered has-icons-left">
                    <label className="label" htmlFor="dogBirthday">
                      Dog's Date of Birth
                    </label>
                    <DatePicker
                      className="form-control input is-medium"
                      id="dogBirthday"
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
                <br />
                <div className="field has-addons has-addons-centered mb-4">
                  {!Boolean(checksOkay) && (
                    <p className="control">
                      <button
                        onClick={() => handleBirthdays()}
                        className="button is-white is-outlined has-addons-centered is-medium"
                        id="calculate"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Calculate
                      </button>
                    </p>
                  )}
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
