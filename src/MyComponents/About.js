import React from "react";

export const About = () => {
  return (
    <div>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "25px",
          marginTop: "10px",
          paddingLeft: "3%",
        }}
      >
        About the application:
      </p>
      <br />

      <p style={{ fontSize: "20px", paddingLeft: "3%", paddingRight: "3%" }}>
        My Planner is a web application designed to organise the daily tasks
        easily. You can add a task with its title and description. Once the todo
        is completed, you can delete it easily by using the 'Delete' button.
      </p>
    </div>
  );
};
