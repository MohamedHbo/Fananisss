<?php
session_start();

// initializing variables
$username = "";
$email    = "";
$phone    = "";

$errors = array(); 

// connect to the database
$db = mysqli_connect('sql105.infinityfree.com', 'if0_36069104', '3IOvBPKDk3MKP', 'if0_36069104_register');


// REGISTER USER
if (isset($_POST['reg_user'])) {
  // receive all input values from the form
  $username = mysqli_real_escape_string($db, $_POST['username']);
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $phone = mysqli_real_escape_string($db, $_POST['phone']);
  $password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
  $password_2 = mysqli_real_escape_string($db, $_POST['password_2']);

  // form validation: ensure that the form is correctly filled ...
  // by adding (array_push()) corresponding error unto $errors array
  if (empty($username)) {
      array_push($errors, "Username is required");
  }
  if (empty($email)) {
      array_push($errors, "Email is required");
  }
  if (empty($phone)) {
      array_push($errors, "Phone is required");
  }
  if (empty($password_1)) {
      array_push($errors, "Password is required");
  }
  if ($password_1 != $password_2) {
      array_push($errors, "The two passwords do not match");
  }

  // first check the database to make sure
  // a user does not already exist with the same username and/or email
  $query = "SELECT * FROM users WHERE username = ? OR Email = ?";
  $stmt = $db->prepare($query);
  $stmt->bind_param("ss", $username, $email);
  $stmt->execute();
  $result = $stmt->get_result();

  if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
          if ($row['username'] === $username) {
              array_push($errors, "Username already exists");
          }
          if ($row['Email'] === $email) {
              array_push($errors, "Email already exists");
          }
      }
  }

  // Finally, register user if there are no errors in the form
  if (count($errors) == 0) {
      $password = md5($password_1); // encrypt the password before saving in the database

      $query = "INSERT INTO users (username, Email, password, phone) 
        VALUES('$username', '$email', '$password','$phone')";
      mysqli_query($db, $query);
      $_SESSION['username'] = $username;
      $_SESSION['phone'] = $phone;
      $_SESSION['success'] = "You are now logged in";
      header('location: ../ramadan/coursk.php'); // توجيه المستخدم إلى cours.php بعد تسجيل الدخول بنجاح
      exit(); // تأكيد التوجيه لتجنب أي تعليمات أخرى بعد التوجيه
  }
}

// LOGIN USER
if (isset($_POST['login_user'])) {
  // استلام قيم المدخلات من النموذج
  $email = mysqli_real_escape_string($db, $_POST['Email']);
  $password = mysqli_real_escape_string($db, $_POST['password']);

  // التحقق من ملأ جميع الحقول المطلوبة
  if (empty($email)) {
      array_push($errors, "Email is required");
  }
  if (empty($password)) {
      array_push($errors, "Password is required");
  }

  // التحقق من قاعدة البيانات للتأكد من وجود المستخدم
  if (count($errors) == 0) {
      $query = "SELECT * FROM users WHERE Email=? LIMIT 1";
      $stmt = $db->prepare($query);
      $stmt->bind_param("s", $email);
      $stmt->execute();
      $result = $stmt->get_result();

      if ($result->num_rows == 1) {
          $user = $result->fetch_assoc();
          if (password_verify($password, $user['password'])) {
              // تم العثور على المستخدم وكلمة المرور صحيحة
              $_SESSION['Email'] = $email;
              $_SESSION['success'] = "You are now logged in";
              header('location: ../ramadan/coursk.php');
              exit(); // تأكيد التوجيه لتجنب أي تعليمات أخرى بعد التوجيه
          } else {
              array_push($errors, "Wrong username/password combination");
          }
      } else {
          array_push($errors, "User not found");
      }
  }
}
?>


