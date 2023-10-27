import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/fr";
import { Table, Button } from "react-bootstrap";

export default function ListEleves() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [labelStyles, setLabelStyles] = useState({});
  const [presenceStatus, setPresenceStatus] = useState({});

  const formatDateToHumanReadable = (date) => {
    return moment(date).locale("fr").fromNow();
  };

  const eleveFetch = () => {
    fetch("http://127.0.0.1:8000/presms/eleves/", {
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

  const handlePresenceChange = (eleveId, isChecked) => {
    setPresenceStatus((prevStatus) => ({
      ...prevStatus,
      [eleveId]: isChecked,
    }));

    setLabelStyles((prevStyles) => ({
      ...prevStyles,
      [eleveId]: isChecked ? { color: "green" } : { color: "red" },
    }));
  };

  const createPresenceRecord = (eleveId, status) => {
    const presenceData = {
      eleve: eleveId,
      status: status,
    };

    return fetch("http://127.0.0.1:8000/presms/presences/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(presenceData),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error(`Error creating presence record for eleve ${eleveId}:`, error);
      });
  };

  const savePresenceStatus = () => {
    setIsLoading(true);
    const createRecordPromises = data.map((item) => {
      const eleveId = item.id;
      const isChecked = presenceStatus[eleveId] || false;
      const status = isChecked ? "present" : "absent";

      return createPresenceRecord(eleveId, status);
    });

    Promise.all(createRecordPromises)
      .then(() => {
        console.log("Presence records created successfully.");
        setSuccessMessage("Presence records saved successfully.");
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error creating presence records:", error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <div className="table-responsive">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Telephone</th>
            <th>Email</th>
            <th>Presence</th>
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
                <td>{item.first_name}</td>
                <td>{item.telephone}</td>
                <td>{item.email}</td>
                <td>
                  <label style={labelStyles[item.id]}>
                    <input
                      type="checkbox"
                      name={`presence_${item.id}`}
                      checked={presenceStatus[item.id] || false}
                      onChange={(e) =>
                        handlePresenceChange(item.id, e.target.checked)
                      }
                    />{" "}
                    {presenceStatus[item.id] ? "Present" : "Absent"}
                  </label>
                </td>
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
      
      <Button
        variant="primary"
        onClick={savePresenceStatus}
        disabled={isLoading}
      >
        {isLoading ? "Saving..." : "Save Presence Status"}
      </Button>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
}
