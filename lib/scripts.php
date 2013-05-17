<?php
/**
 * Enqueue scripts and stylesheets
 *
 */

function watf_css_loader() {
  
    wp_enqueue_style('watf', get_template_directory_uri().'/assets/build/watf.css', false ,'0.90', 'all' );
    
  if (ICL_LANGUAGE_CODE == "ar") {
   wp_enqueue_style('watf-ar', get_template_directory_uri().'/assets/build/watf-rtl.css', false ,'0.90', 'all' );
  }

  }
add_action('wp_enqueue_scripts', 'watf_css_loader');

add_action( 'wp_enqueue_scripts', 'child_add_ie8_style_sheet', 200 );
/**
 * Enqueue a IE-specific style sheet.
 *
 * Add a style sheet for everyone, then mark it as conditional to IE7 or below.
 *
 * @author Gary Jones
 * @link   http://code.garyjones.co.uk/enqueued-style-sheet-extras/
 */
function child_add_ie8_style_sheet() {
  global $wp_styles;  
  wp_enqueue_style( 'child-ie8', get_stylesheet_directory_uri() . '/watf-old-ie.css', array(), '1.0' );
  $wp_styles->add_data( 'child-ie8', 'conditional', 'lte IE 8' );
}
 

function watf_scripts() {

  // jQuery is loaded using the same method from HTML5 Boilerplate:
  // Grab Google CDN's latest jQuery with a protocol relative URL; fallback to local if offline
  // It's kept in the header instead of footer to avoid conflicts with plugins.
  if (!is_admin() && current_theme_supports('jquery-cdn')) {
    wp_deregister_script('jquery');
    wp_register_script('jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', false, null, false);
    add_filter('script_loader_src', 'watf_jquery_local_fallback', 10, 2);
  }

  if (is_single() && comments_open() && get_option('thread_comments')) {
    wp_enqueue_script('comment-reply');
  }

  wp_register_script('modernizr', get_template_directory_uri() . '/assets/javascripts/modernizr-2.6.2.min.js', false, null, false);
  wp_register_script('watf_main', get_template_directory_uri() . '/assets/build/main.min.js', false, null, true);
  wp_enqueue_script('jquery');
  wp_enqueue_script('modernizr');
  wp_enqueue_script('watf_main');
}
add_action('wp_enqueue_scripts', 'watf_scripts', 100);

// http://wordpress.stackexchange.com/a/12450
function watf_jquery_local_fallback($src, $handle) {
  static $add_jquery_fallback = false;

  if ($add_jquery_fallback) {
    echo '<script>window.jQuery || document.write(\'<script src="' . get_template_directory_uri() . '/assets/js/vendor/jquery-1.9.1.min.js"><\/script>\')</script>' . "\n";
    $add_jquery_fallback = false;
  }

  if ($handle === 'jquery') {
    $add_jquery_fallback = true;
  }

  return $src;
}

function watf_google_analytics() { ?>
<script>
  var _gaq=[['_setAccount','<?php echo GOOGLE_ANALYTICS_ID; ?>'],['_trackPageview']];
  (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
    s.parentNode.insertBefore(g,s)}(document,'script'));
</script>
<?php }
if (GOOGLE_ANALYTICS_ID) {
  add_action('wp_footer', 'watf_google_analytics', 20);
}
