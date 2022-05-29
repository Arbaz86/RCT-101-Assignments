import React from "react";
import styles from "./TableItem.module.css";
import { TiDeleteOutline } from "react-icons/ti";

export const TableItem = ({ removeEmployeeData, employeeData }) => {
  console.log(employeeData);
  return (
    <div>
      <table border="1" align="center" className={styles.table_div}>
        <thead>
          <tr>
            <th className={styles.table_th}>Name</th>
            <th className={styles.table_th}>Age</th>
            <th className={styles.table_th}>Address</th>
            <th className={styles.table_th}>Department</th>
            <th className={styles.table_th}>Salary</th>
            <th className={styles.table_th}>Marital Status</th>
            <th className={styles.table_th}>Remove</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td className={styles.table_td}>{employee.emplyeeName}</td>
              <td className={styles.table_td}>{employee.age}</td>
              <td className={styles.table_td}>{employee.address}</td>
              <td className={styles.table_td}>{employee.department}</td>
              <td className={styles.table_td}>{employee.salary}</td>
              <td className={styles.table_td}>{employee.maritalState}</td>
              <td>
                <button
                  className={styles.removeBtn}
                  onClick={() => removeEmployeeData(employee.id)}
                >
                  <TiDeleteOutline />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
