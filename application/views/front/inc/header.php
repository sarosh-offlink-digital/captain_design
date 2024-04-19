<!DOCTYPE html>
<html lang="en">
<head>
	<!-- <link href="<?php echo base_url('uploads/settings/').$this->favicon;?>" rel="shortcut icon"> -->

    <!-- <?php if(!empty($this->seo)):?> 
    <?php if(!empty($this->seo->seo_meta_description)):?>
      <meta name="description" content="<?php echo $this->seo->seo_meta_description;?>">
    <?php endif;?>
    <?php if(!empty($this->seo->seo_meta_title)):?>
      <meta name="title" content="<?php echo $this->seo->seo_meta_title;?>">
    <?php endif;?>
    <?php if(!empty($this->seo->seo_meta_keyword)):?>
      <meta name="keywords" content="<?php echo $this->seo->seo_meta_keyword;?>">
    <?php endif;?>
    <?php if(!empty($this->seo->seo_meta_index)):?>
      <meta name="robots" content="<?php echo $this->seo->seo_meta_index;?>">
    <?php endif;?>
    <?php if(empty($this->seo->seo_meta_index)):?>
      <meta name="robots" content="noindex, nofollow">
    <?php endif;?>
    <?php if(!empty($this->seo->seo_meta_canonical)):?>
      <link rel="canonical" href="<?php echo $this->seo->seo_meta_canonical?>" />
    <?php endif;?>
    <?php if(!empty($this->seo->seo_page_title)):?>
      <title><?php echo $this->seo->seo_page_title?></title>
    <?php endif;?>

    <?php if(!empty($this->seo->seo_head_script)):?>
      <?php echo $this->seo->seo_head_script?>
    <?php endif;?>

    <?php else:?>
    <meta name="robots" content="noindex, nofollow">
    <title><?php echo $this->site_title?></title>
    <?php endif;?>     -->

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/front/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/front/css/owl.carousel.css">
    <link rel="stylesheet" href="assets/front/css/owl.theme.default.css">
    <link rel="stylesheet" href="assets/front/css/all.css">
    <link rel="stylesheet" href="assets/front/css/aos.css">
    <link rel="stylesheet" href="assets/front/css/swiper-bundle.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"></li>
    <link rel="stylesheet" href="assets/front/css/main.css">
    <link rel="stylesheet" href="assets/front/css/responsive.css">
    <title>HELLO</title>
</head>
<body>

    <!-- HEADER_HTML_START_FROM_HERE -->

    <!-- <header class="header-main-wrapper" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
        <div class="container">
            <div class="header-flex">
                <div class="header-logo">
                    <a href="#"><img src="assets/front/images/final-logo.png" class="img-fluid" alt=""></a>
                </div>
                <div class="header-nav-flex">
                    <div class="header-nav">
                        <ul>
                            <li><a href="HOME">HOME</a></li>
                            <li><a href="ABOUT US">ABOUT US</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header> -->

			<header class="header_wrapper">
				<nav class="navbar navbar-expand-lg fixed-top">
					<div class="container">
						<a class="navbar-brand" href="index.php">
							<img decoding="async" src="assets/front/images/logo.png" class="img-fluid" alt="logo">
						</a>
						<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
							aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<i class="fas fa-stream"></i>
						</button>
						<div class="collapse navbar-collapse justify-content-end" id="navbarNav">
							<ul class="navbar-nav menu-navbar-nav">
								<li class="nav-item">
									<a class="nav-link" aria-current="page" href="index.php">Home</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="about.php">About</a>
								</li>
								<li class="nav-item">
										<!-- Navbar Services Sub Bar -->
									<div class="servicesContainer">
										<a class="nav-link" href="#">Services</a>
										<i class="fa-solid fa-caret-down "></i>
										<div class="servicesSubMenu">
										<div class="servicesMenu">
												<ul class="servicesMenuList">
												<a href="web.php">
													<div class="serviceMenuListFlex">
														<img src="assets/front/images/html.gif" class="nav_img " alt="logo">
														<li class="serviceMenuListText"><a href="">Web Development</a></li>
													</div>
												</a>
												<a href="logo.php">
													<div class="serviceMenuListFlex">
														<img src="assets/front/images/vector.gif" class="nav_img " alt="logo">
														<li class="serviceMenuListText"><a href="">Logo Design</a></li>
													</div>
												</a>
												<a href="branding.php">
													<div class="serviceMenuListFlex">
														<img src="assets/front/images/logo-design.gif" class="nav_img " alt="logo">
														<li class="serviceMenuListText"><a href=""> Branding</a></li>
													</div>
												</a>
												<a href="marketing.php">
													<div class="serviceMenuListFlex">
														<img src="assets/front/images/promote.gif" class="nav_img " alt="logo">
														<li class="serviceMenuListText"><a href="">Social Media Marketing</a></li>
													</div>
												</a>
												<a href="seo.php">
													<div class="serviceMenuListFlex">
														<img src="assets/front/images/local-seo.gif" class="nav_img " alt="logo">
														<li class="serviceMenuListText"><a href="">SEO Services</a></li>
													</div>
												</a>
											</ul>
										</div>
										</div>
									</div>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="portfolio.php">Portfolio</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="contact.php">Contact Us</a>
								</li>
								<li class="nav-item nav-btn mt-3 mt-lg-0">
									<a class="main-btn" href="#">Live Chat</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>

    <!-- HEADER_HTML_END_HERE -->
    <?php    
        // function prepareList(array $items, $pid = 0) {
        //     $output = array();
        
        //     foreach ($items as $item) {
        //         if ((int) $item['header_navbar_parent_id'] == $pid) {
        //             if ($children = prepareList($items, $item['header_navbar_id'])) {
        //                 $item['children'] = $children;
        //             }
        //             $output[] = $item;
        //         }
        //     }
        //     return $output;
        // }
        // $tree = prepareList($this->header_navbar);
    ?>