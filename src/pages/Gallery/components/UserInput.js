import React, { useEffect, useState, useRef } from "react";
import "./UserInput.css"

const UserInput = ({ rover, setRover, day, setDay, month, setMonth, year, setYear }) => {
    const [info, setInfo] = useState("");
    const selectYear = useRef(null);
    const selectMonth = useRef(null);
    const selectDay = useRef(null);

    const getInfo = () => {
        switch (rover) {
            case 'perseverance':
                setInfo('(Rover landed on Mars on February 18, 2021. Active until now.)');
                break;
            case 'curiosity':
                setInfo('(Rover landed on Mars on August 6, 2012. Active until now.)');
                break;
            case 'opportunity':
                setInfo('(Rover landed on Mars on January 25, 2004. Mission completed on February 13, 2019.)');
                break;
            case 'spirit':
                setInfo('(Rover landed on Mars on January 4, 2004. Mission completed on May 25, 2011.)');
                break;
            default:
                setInfo("");
                break;
        }
    }

    const populateYearOptions = () => {
        for (let i = 2022; i >= 2004; i--) {
            const newOption = document.createElement("option");
            newOption.value = i;
            newOption.innerHTML = i;
            selectYear.current.options.add(newOption);
        }

    }

    const populateMonthOptions = () => {
        for (let i = 1; i <= 12; i++) {
            const newOption = document.createElement("option");
            newOption.value = i;
            newOption.innerHTML = i;
            selectMonth.current.options.add(newOption);
        }
    }

    const populateDayOptions = () => {
        if (parseInt(month) === 4 || parseInt(month) === 6 || parseInt(month) === 9 || parseInt(month) === 11) {
            selectDay.current.innerHTML = "";
            for (let i = 1; i <= 30; i++) {
                const newOption = document.createElement("option");
                newOption.value = i;
                newOption.innerHTML = i;
                selectDay.current.options.add(newOption);
            }

        } else if (parseInt(month) === 1 || parseInt(month) === 3 || parseInt(month) === 5 || parseInt(month) === 7 || parseInt(month) === 8 || parseInt(month) === 10 || parseInt(month) === 12) {
            selectDay.current.innerHTML = "";
            for (let i = 1; i <= 31; i++) {
                const newOption = document.createElement("option");
                newOption.value = i;
                newOption.innerHTML = i;
                selectDay.current.options.add(newOption);
            }
        } else if (parseInt(month) === 2 && year % 4 === 0) {
            selectDay.current.innerHTML = "";
            for (let i = 1; i <= 29; i++) {
                const newOption = document.createElement("option");
                newOption.value = i;
                newOption.innerHTML = i;
                selectDay.current.options.add(newOption);
            }
        } else {
            selectDay.current.innerHTML = "";
            for (let i = 1; i <= 28; i++) {
                const newOption = document.createElement("option");
                newOption.value = i;
                newOption.innerHTML = i;
                selectDay.current.options.add(newOption);
            }
        }
    }
   
    useEffect(() => {
        getInfo();
        populateYearOptions();
        populateMonthOptions();
        populateDayOptions();
    }, []);
    useEffect(() => { getInfo() }, [rover]);
    useEffect(() => { populateDayOptions(); }, [day, month, year]);

    return (
        <form>
            <div className="input-container-select-rover">
                <label className="select-rover-label label">Pick Rover:</label>
                <select className="select-rover select" value={rover} onChange={e => {
                    setRover(e.target.value);
                }
                }>
                    <option value="perseverance">Perseverance</option>
                    <option value="curiosity">Curiosity</option>
                    <option value="opportunity">Opportunity</option>
                    <option value="spirit">Spirit</option>
                </select>
            </div>
            <p className="select-info">{info}</p>
            <div className="input-container-date-picker">
                <div className="date-picker-container">
                    <label className="date-picker-label label">Pick Date:</label>
                    <div className="date-picker">
                        <label className="year-label label">Year:</label>
                        <select ref={selectYear} className="select-year select" value={year} onChange={e => {
                            setYear(e.target.value);
                        }}>
                        </select>
                        <label className="month-label label">Month:</label>
                        <select ref={selectMonth} className="select-month select" value={month} onChange={e => {
                            setMonth(e.target.value);
                        }}>
                        </select>
                        <label className="day-label label">Day:</label>
                        <select ref={selectDay} className="select-day select" value={day} onChange={e => {
                            setDay(e.target.value);
                        }}>
                        </select>
                    </div>
                </div>
                <p className="date-display">(You picked date: {year}-{month}-{day})</p>

            </div>
        </form>
    )

}

export default UserInput;