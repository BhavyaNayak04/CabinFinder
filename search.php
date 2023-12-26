<?php

//Establish a connection to your database
$servername = "localhost";
$username = "root";
$password = '';
$dbname = "teacher_database"; 

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}

$response = array();
$name = $_GET['q'];
$sql = "SELECT prof_list.t_name, prof_list.d_id, prof_list.t_image, prof_list.t_locid, lokation.cabin_name, dept.d_name FROM prof_list 
        JOIN lokation ON prof_list.t_locid=lokation.t_locid
        JOIN dept ON prof_list.d_id = dept.d_id
        WHERE prof_list.t_name LIKE '%$name%'";
        
$result = $conn->query($sql);

if($result->num_rows>0)
{
    while($row=$result->fetch_assoc())
    {
         $response[] = array('Name' => $row['t_name'], 'Dept' => $row['d_name'], 'Location' => $row['cabin_name'], 'Image' => base64_encode($row['t_image']));
    }
}
else {
        $response['error'] = 'No matching teachers found.';
    }

echo json_encode($response);
// close the database connection
$conn->close();
?>