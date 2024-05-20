<?php
session_start();

// initializing variables
$email = "";
$errors = array(); 

// connect to the database
$db = mysqli_connect('sql209.infinityfree.com', 'if0_35887786', 'F0xqWy5Gfq0', 'if0_35887786_register');

// LOGIN USER
if (isset($_POST['login_user'])) {
    // استلام قيم المدخلات من النموذج
    $email = mysqli_real_escape_string($db, $_POST['email']);
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
        $password = md5($password); // يمكنك استخدام password_hash() لتشفير كلمة المرور بشكل آمن
        $query = "SELECT * FROM users WHERE Email=? AND password=?";
        $stmt = $db->prepare($query);
        $stmt->bind_param("ss", $email, $password);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $user = $result->fetch_assoc();
            $_SESSION['Email'] = $email;
            $_SESSION['success'] = "You are now logged in";
            header('location: ../ramadan/ramadan.html');
        } else {
            array_push($errors, "Wrong email/password combination");
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">

   <!--=============== REMIXICONS ===============-->
   <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">

   <!--=============== CSS ===============-->
   <link rel="stylesheet" href="login.css">

   <title>Log In</title>
   <link rel="icon" type="image/png" href="icon1.png"/>
</head>
<body>
   <div class="login">
      <img src="login.png" alt="login image" class="login__img">

      <form action="" method="post" class="login__form">
         <h1 class="login__title">Log In</h1>

         <!-- Display errors if any -->
         <?php if (count($errors) > 0): ?>
            <div class="login__errors">
               <?php foreach ($errors as $error): ?>
                  <p><?php echo $error; ?></p>
               <?php endforeach ?>
            </div>
         <?php endif ?>

         <div class="login__content">
            <div class="login__box">
               <i class="ri-user-3-line login__icon"></i>

               <div class="login__box-input">
                  <input type="email" required class="login__input" id="login-email" name="email" placeholder=" ">
                  <label for="login-email" class="login__label">Email</label>
               </div>
            </div>

            <div class="login__box">
               <i class="ri-lock-2-line login__icon"></i>

               <div class="login__box-input">
                  <input type="password" required class="login__input" id="login-pass" name="password" placeholder=" ">
                  <label for="login-pass" class="login__label">Password</label>
                  <i class="ri-eye-off-line login__eye" id="login-eye"></i>
               </div>
            </div>
         </div>

         <button type="submit" class="login__button" name="login_user">Login</button>

         <p class="login__register">
            Don't have an account? <a href="../login/rigister.php">Register</a>
         </p>
      </form>
   </div>
</body>
</html>
