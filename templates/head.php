<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>> 
<head>

<!-- Meta Data & SEO -->
<meta charset="<?php bloginfo( 'charset' ); ?>" />

<!--  Mobile Viewport Fix j.mp/mobileviewport & davidbcalhoun.com/2010/viewport-metatag  -->
<meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title><?php wp_title('|', true, 'right'); ?></title>
  
  <link rel="profile" href="http://gmpg.org/xfn/11" />
  <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

  <!-- Favicons and Apple Touch icons
	================================================== -->
	<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/images/favicon.ico" />	
	<!-- Standard iPhone --> 
	<link rel="apple-touch-icon" sizes="57x57" href="<?php bloginfo('template_directory'); ?>/images/b-114.png" />
	<!-- Retina iPhone --> 
	<link rel="apple-touch-icon" sizes="114x114" href="<?php bloginfo('template_directory'); ?>/images/b-114.png"  />
	<!-- Standard iPad --> 
	<link rel="apple-touch-icon" sizes="72x72" href="<?php bloginfo('template_directory'); ?>/images/b-144.png" />
	<!-- Retina iPad --> 
	<link rel="apple-touch-icon" sizes="144x144" href="<?php bloginfo('template_directory'); ?>/images/b-144.png"  />

<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/javascripts/html5.js" type="text/javascript"></script>
<![endif]-->

  <?php wp_head(); ?>

  <link rel="alternate" type="application/rss+xml" title="<?php echo get_bloginfo('name'); ?> Feed" href="<?php echo home_url(); ?>/feed/">

</head>
