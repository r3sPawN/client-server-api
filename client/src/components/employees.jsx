import React from "react";
import "./employees.css";
import Loader from "react-loader-spinner";
import axios from "axios";

const TYPES = {
  salary: (a, b) => a.employee_salary - b.employee_salary,
  age: (a, b) => a.employee_age - b.employee_age,
  name: (a, b) => a.employee_name.localeCompare(b.employee_name),
};

export class Employees extends React.Component {
  state = {
    employees: [],
    isLoading: true,
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/items")
      .then((res) => {
        this.setState({ employees: res.data, isLoading: false });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    setInterval(() => {
      this.sortBy();
    }, 10000);
  }

  sortBy() {
    const { employees } = this.state;
    const newState = employees.sort(this.randomProperty(TYPES));
    const pickFirstEntries = newState.slice(0, 12);
    this.setState({ employees: pickFirstEntries });
  }

  randomProperty(obj) {
    var keys = Object.keys(obj);
    return obj[keys[(keys.length * Math.random()) << 0]];
  }

  renderEmployee = (employee) => {
    return (
      <div className="employee-container" key={employee._id}>
        <div>
          <span>Emoloyee name: {employee.employee_name}</span>
        </div>
        <div>
          <span>Emoloyee salary: {employee.employee_salary} moneySS</span>
        </div>
        <div>
          <span>Emoloyee age: {employee.employee_age}</span>
        </div>
        <div>
          <span>Date: {employee.date}</span>
        </div>
      </div>
    );
  };

  render() {
    const { employees, isLoading } = this.state;

    return (
      <div className="container">
        {isLoading ? (
          <Loader
            type="ThreeDots"
            color="deepskyblue"
            height="100"
            width="100"
          />
        ) : (
          employees.map((employee) => this.renderEmployee(employee))
        )}
      </div>
    );
  }
}
