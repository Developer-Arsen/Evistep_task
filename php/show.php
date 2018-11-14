<!DOCTYPE html>
<html lang="en">
   <head>
      <!-- meta tags  & title-->
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
      <!-- //////////////////////////////////////////////////////////////////////// -->
      <!-- css links -->
      <link rel="stylesheet" href="../css/main.css">
      <link rel="stylesheet" href="../css/bootstrap-theme.css">
      <link rel="stylesheet" href="../css/bootstrap-theme.css.map">
      <link rel="stylesheet" href="../css/bootstrap-theme.min.css">
      <link rel="stylesheet" href="../css/bootstrap-theme.min.css.map">
      <link rel="stylesheet" href="../css/bootstrap.css">
      <link rel="stylesheet" href="../css/bootstrap.css.map">
      <link rel="stylesheet" href="../css/bootstrap.min.css">
      <link rel="stylesheet" href="../css/bootstrap.min.css.map">
      <link rel="stylesheet" href="../css/index.css">
      <!-- ////////////////////////////////////////////////////// -->
      <!-- Icon links -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
   </head>
   <body >
      <header>
         <div class="header_part">
            <div id="header_info">
               <nav class="navbar navbar-default navbar-static-top">
                  <div class="container col-xs-12">
                     <div class="navbar-header">
                        <a class="navbar-brand" href="">
                        <img src="../images/logo.png" alt="" style="width: 20%;">
                        </a>
                     </div>
                     <div class="collapse navbar-collapse" id="navbar-collapse">
                        <!-- Right Side Of Navbar -->
                        <ul class="nav navbar-nav navbar-right">
                           <!-- Authentication Links -->
                           <li><a href=""  style="color: black;font-size:22px;";>Sign Up For Free  </a></li>
                           <li><a href=""style="color: black;font-size:22px;">Sign in</a></li>
                           <li class="dropdown">
                              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true" v-pre>
                              <span class="caret"></span>
                              </a>
                              <ul class="dropdown-menu">
                                 <li>
                                    <a href=""
                                       onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                    </a>
                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                    </form>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <!-- second navbar -->
                  <div class="container_nav col-xs-12">
                     <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">FEATURES</a></li>
                        <li><a href="#">TIME TRACKING</a></li>
                        <li><a href="#">PRICE</a></li>
                        <li><a href="#">DOWNLOAD</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">Light/Dark Theme </a></li>
                        
                        <li><<label class="switch">
                           <input type="checkbox">
                           <span class="slider round"></span>
                           </label>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
            <!-- header background picture -->
            <img class="header_backg" src="../images/header_picture.jpg" alt="WebTrackerVideo"> 
            <!-- inside video -->
            <video  autoplay="" muted="" loop="" id="header_Video" 
               class="hidden-sm hidden-xs header_video" style="transform: translate3d(0px, 0px, 0px);">
               <source src="../videos/The Wizard of OZ (Flat  motion graphic animation).mp4" type="video/mp4">
               <source src="../videos/home-video.ogv" type="video/ogg">
            </video>
         </div>
      </header>
      <main>
         <img src="../images/timecamp-logo.png" alt="" style="float:left;">
         <div class="col-sm-11 col-centered " id="home-left">
            <div class="d-none d-sm-block">
               <br><br>
            </div>
            <br><br>
            <h1 class="center-xs">
               Time tracking your <br>team will actually use
            </h1>
            <br>
            <h2 class="center-xs">
               Time tracker with computer activities and productivity<br>
               monitoring, attendance tracking, integrations and more...
            </h2>
            <br>
            <div class="hidden-xs-down">
               <br>
            </div>
            <div class="col-xs-12">
    <h1>All Categories</h1>
    <hr>
</div>
<div class="col-xs-12">
    <a href="../index.html" class="btn btn-success" role="button">
        <i class="fa fa-plus-square-o" aria-hidden="true"></i>
        Add Category
    </a>
    <br>
    <br>
</div>
<div class="col-xs-12">
    <div class="table-responsive">
        <table class="table table-bordered table-hover table-responsive">
        <thead style="">
        <th>Id</th>
        <th>Category</th>
        <th>Product</th>
        <th>Created at</th>
       
        </thead>
        <tbody>
       
        
                <?php

                include 'index.php';

                $connect = Database::getConnection();

                $result = $connect->query('SELECT * FROM statistics');
                $result->execute();
                // $final = ->fetch(PDO::FETCH_ASSOC);

                while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
                    echo '<tr>';
                    echo '<td>'.$row['id'].'</td>';
                    echo '<td>'.$row['category'].'</td>';
                    echo '<td>'.$row['product'].'</td>';
                    echo '<td>'.$row['date'].'</td>';
                }

                ?>
               
                </td>
            </tr>
        </tbody>
    </table>
    </div>

</div>
                  
             
       
       </div>
      </main>
      <footer>
         <div class="container-fluid">
            <div class="row">
               <div class="col-xs-12 col-md-6">
                  <div class="col-xs-4">
                     <div class="footer_navigation">
                        <h4>Product</h4>
                        <ul class="nav footer-nav">
                           <li><a href="#section-home" class="page-scroll">Home</a></li>
                           <li><a href="#section-features" class="page-scroll">Features</a></li>
                           <li><a href="#section-tracking" class="page-scroll">Time Tracking</a></li>
                           <li><a href="#section-price" class="page-scroll">Download</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-xs-4">
                     <div class="footer_navigation">
                        <h4>PRICE</h4>
                        <ul class="nav footer-nav">
                           <li><a href="https://www.webwork-tracker.com/time-tracker-for-individuals">Individuals</a></li>
                           <li><a href="https://www.webwork-tracker.com/team-companies">Teams &amp; Companies</a></li>
                           <li><a href="https://www.webwork-tracker.com/custom-solutions">Custom Solutions</a></li>
                           <li><a href="https://www.webwork-tracker.com/how-pricing-works">How it Works?</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-xs-4">
                     <div class="footer_navigation">
                        <h4>MORE information</h4>
                        <ul class="nav footer-nav">
                           <li><a href="https://www.webwork-tracker.com/features-tracking">WebWork Tracker</a></li>
                           <li><a href="https://www.webwork-tracker.com/features-user-types">WebWork User Types</a></li>
                           <li><a href="https://www.webwork-tracker.com/features-screenshots">WebWork Screenshot Modes</a></li>
                           <li><a href="https://www.webwork-tracker.com/features-online-reports">WebWork Reports</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div class="col-xs-12 col-md-6">
                  <div class="col-xs-4 col-md-5">
                     <div class="footer_navigation">
                        <h4>ANY QUESTIONS?</h4>
                        <ul class="nav footer-nav">
                           <li><a href="https://www.webwork-tracker.com/privacy-policy">Privacy policy</a></li>
                           <li><a href="https://www.webwork-tracker.com/terms-of-services">Terms of service</a></li>
                           <li><a href="https://www.webwork-tracker.com/contact">Contact us</a></li>
                           <li><a href="https://www.webwork-tracker.com/FAQ">FAQ</a></li>
                        </ul>
                     </div>
                  </div>
                  <div class="col-xs-7 col-md-7">
                     <div class="pull-left footer_navigation">
                        <h4>ABOUT website</h4>
                        <form class="navbar-form">
                           <div class="form-group">
                              <input type="text" class="form-control" placeholder="Your email address">
                           </div>
                           <button type="submit" class="btn btn-default"><i class="fa fa-arrow-circle-o-right"
                              aria-hidden="true"></i></button>
                           <p>Get the most recent updates from our site and be updated your self...</p>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <!-- <!-- /Footer middle -->
         </div>
         <!-- /Footer main -->
         <!-- Bottom line -->
         <div class="container-fluid bottom_line">
            <div>
               <div id="footer-info">
                  <ul>
                     <span class="footer-info" style="font-size:16px"><i class="fa fa-phone" 
                        style="font-size:16px" ></i> <a>091106837</a> </span>
                     <span class="footer-info" style="font-size:16px"><i class="fa fa-address-book" 
                        style="font-size:16px" ></i>  <a>developer.arsenmkhitaryan@gmail.com</a></span>
                     <span class="footer-info" style="font-size:20px"><a><i class="fa fa-facebook" 
                        style="font-size:16px" ></i> </a> </span>
                     <span class="footer-info" style="font-size:20px"><a><i class="fa fa-twitter" 
                        style="font-size:16px" ></i> </a> </span>
                     <span class="footer-info" style="font-size:20px"><a><i class="fa fa-linkedin" 
                        style="font-size:16px" ></i>  </a></span>
                     <span class="footer-info" style="font-size:20px"><a><i class="fa fa-google-plus" 
                        style="font-size:16px" ></i> </a> </span>
                     <span class="footer-info" style="font-size:20px"><a><i class="fa fa-globe" 
                        style="font-size:16px" ></i> </a> </span>
                  </ul>
               </div>
               <p class="pull-left">Copyright © 2018 Arsen-Mkhitaryan All rights reserved.</p>
               <p class="pull-right">Designed by <a href="https://www.facebook.com/profile.php?id=100008886068340"> Arsen-Mkhitaryan</a></p>
            </div>
         </div>
      </footer>
      <!-- Scripts -->
      
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" type="text/javascript"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" type="text/javascript"></script>
      <script src="../js/jquery-3.2.1.min.js"></script>
      <script src="../js/bootstrap.min.js"></script>
      <script src="../js/jquery.maskedinput.min.js"></script>
      <script src="../js/bootstrap-slider.min.js"></script>
      <script src="../js/bootstrap-touch-slider-min.js"></script>
      <script src="../owlcarousel/owl.carousel.min.js"></script>
      <script src="../js/jquery.ez-plus.js"></script>
      <script src="../js/swipe.js') }}"></script>
      <script src="../js/main-backup.js"></script>
      <script src="../js/main.js"></script>
      <script src="../js/style.js"></script>
   </body>
</html>