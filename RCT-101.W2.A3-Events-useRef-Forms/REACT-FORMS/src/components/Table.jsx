import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { TableItem } from "./TableItem";
import { BsFillCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import styles from "./Table.module.css";

// created initialValue to form datas
const initState = {
  emplyeeName: "",
  age: "",
  address: "",
  department: "",
  salary: "",
  maritalState: "",
};

export const Table = () => {
  const [form, setForm] = useState(initState);
  const [employeeData, setEmployeeData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc");
  const [sort, setSort] = useState("salary");

  const { emplyeeName, age, address, department, salary, maritalState } = form;

  // for handling input changes
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // submiting form data
  const onSubmit = (e) => {
    e.preventDefault();
    createData({ ...form });

    setForm(initState);
  };

  // getting data here
  useEffect(() => {
    getData(page, order, sort);
  }, [page, order, sort]);

  const getData = (page, order, sort) => {
    axios
      .get(
        `http://localhost:8080/employeeData?_page=${page}&_limit=5&_sort=${sort}&_order=${order}`
      )
      .then(({ data }) => {
        setEmployeeData(data);
        console.table(data);
      });
  };

  // creating data or sending post request to server here
  const createData = ({
    emplyeeName,
    age,
    address,
    department,
    salary,
    maritalState,
  }) => {
    const payload = {
      id: uuid(),
      emplyeeName: emplyeeName,
      age: age,
      address: address,
      department: department,
      salary: salary,
      maritalState: maritalState ? "True" : "False",
    };

    axios
      .post("http://localhost:8080/employeeData", {
        ...payload,
      })
      .then((res) => {
        getData(res);
      });
  };

  // handling the toggle data for show form or show employee data
  const handleToggle = () => {
    setToggle(!toggle);
  };

  // created the deleted employeeData here to reamover the employee
  const removeEmployeeData = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8080/employeeData/${id}`);
    setEmployeeData(employeeData.filter((data) => data.id !== id));
  };

  // handling toggle ascending orde to descending order
  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div>
      <br />
      <button onClick={handleToggle}>
        {toggle ? "Show Emplyee Data" : "Add EmplyeeData"}
      </button>
      {toggle ? (
        <div>
          <h1> EMPLOYEE DETAILS</h1>
          <form onSubmit={onSubmit}>
            <label>Name: </label>
            <input
              onChange={handleChange}
              type="text"
              name="emplyeeName"
              value={emplyeeName}
              required
              placeholder="Enter name..."
            />
            <br />
            <br />
            <label>Age: </label>
            <input
              onChange={handleChange}
              type="number"
              name="age"
              value={age}
              required
              placeholder="Enter age..."
            />
            <br />
            <br />
            <label>Address: </label>
            <input
              onChange={handleChange}
              type="text"
              name="address"
              value={address}
              required
              placeholder="Enter address..."
            />
            <br />
            <br />
            <label>Department: </label>
            <select
              name="department"
              value={department}
              onChange={handleChange}
              required
            >
              <optgroup label="Select Department">
                <option value="">Select</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </optgroup>
            </select>
            <br />
            <br />
            <label>Salary: </label>
            <input
              onChange={handleChange}
              type="number"
              name="salary"
              value={salary}
              required
              placeholder="Enter salary..."
            />
            <br />
            <br />
            <label>Marital Status: </label>
            <input
              onChange={handleChange}
              type="checkbox"
              name="maritalState"
              value={maritalState}
            />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>

          <br />
          <br />
        </div>
      ) : (
        <div>
          <h1>FORM DATA TABLE</h1>
          <label>Sort By:</label>
          <select
            onChange={handleSortChange}
            name="sort"
            className={styles.sortType}
          >
            <optgroup label="Choose Sort By">
              <option value="salary">Salary</option>
              <option value="emplyeeName">EmplyeeName</option>
              <option value="age">Age</option>
              <option value="department">Department</option>
            </optgroup>
          </select>

          <label>Order By:</label>
          <select
            onChange={handleOrderChange}
            name="order"
            className={styles.sort_order}
          >
            <optgroup label="Choose Order">
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </optgroup>
          </select>
          <br />
          <br />

          <TableItem
            removeEmployeeData={removeEmployeeData}
            employeeData={employeeData}
          />
          <br />
          <br />
          <button
            disabled={page <= 1 ? "disabled" : ""}
            onClick={() => setPage(page - 1)}
          >
            <BsFillCaretLeftFill />
          </button>
          <button onClick={() => setPage(page + 1)}>
            <BsCaretRightFill />
          </button>
        </div>
      )}
    </div>
  );
};
