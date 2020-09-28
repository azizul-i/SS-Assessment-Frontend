const getEmployeeData = async () => {
  const response = await fetch(
    "https://addemployeess.azurewebsites.net/api/Employees/" +
      localStorage.getItem("Id"),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  // .then((res) => {
  //   return res.json();
  // })
  // .then((result) => {
  //   const finalRes = result;
  //   console.log("Response: ", result);
  // });
  const result = await response.json();
  return result;
};
