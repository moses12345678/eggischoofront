import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/fr";
import { Table, Button } from "react-bootstrap";

export default function ListClassroom() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const formatDateToHumanReadable = (date) => {
    return moment(date).locale("fr").fromNow();
  };

  const eleveFetch = () => {
    fetch("http://127.0.0.1:8000/presms/classroom/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(eleveFetch, []);

  return (
    <div>
      <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom de la classe</th>
            <th>Category</th>
            <th>Annee Academic</th>
            <th>Updated</th>
            <th>Created</th>
            <th>Voir</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.class_name}</td>
                <td>{item.category}</td>
                <td>{item.academic_year}</td>
                <td>{formatDateToHumanReadable(item.updated)}</td>
                <td>{formatDateToHumanReadable(item.created)}</td>
                <td>
                  <Button variant="info" size="sm" className="mr-2">
                    View
                  </Button>
                </td>
                <td>
                <Button variant="success" size="sm" className="mr-2">
                    Update
                  </Button>
                </td>
                <td>
                <Button variant="danger" size="sm">
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">Loading....</td>
            </tr>
          )}
        </tbody>
      </Table>
      </div>
    </div>
  );
}
