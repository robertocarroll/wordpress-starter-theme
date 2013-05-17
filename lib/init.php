<?php

	add_theme_support( 'post-formats', array( 'aside', 'image' ) ); // Enable support for Post Types
	add_theme_support('jquery-cdn');            // Enable to load jQuery from the Google CDN

/*
| -------------------------------------------------------------------
| Navigation / Menus
| -------------------------------------------------------------------
| */

register_nav_menus(array(
    'primary_navigation' => __('Primary Navigation', 'watf'),
  ));


/*
| -------------------------------------------------------------------
| Adding Post Thumbnails and Image Sizes
| -------------------------------------------------------------------
| */

if ( function_exists( 'add_theme_support' ) ) {
  add_theme_support( 'post-thumbnails' );
  set_post_thumbnail_size( 160, 120 ); // 160 pixels wide by 120 pixels high
}

if ( function_exists( 'add_image_size' ) ) {
	add_image_size( 'collection-zoom', 1500, 1500 ); // 1500 pixels wide by 1500 pixels high

}


/**
 * Pagination for archive, taxonomy, category, tag and search results pages
 *
 * @global $wp_query http://codex.wordpress.org/Class_Reference/WP_Query
 * @return Prints the HTML for the pagination if a template is $paged
 */
function base_pagination() {
	global $wp_query;
 
	$big = 999999999; // This needs to be an unlikely integer
 
	// For more options and info view the docs for paginate_links()
	// http://codex.wordpress.org/Function_Reference/paginate_links
	$paginate_links = paginate_links( array(
		'base' => str_replace( $big, '%#%', get_pagenum_link($big) ),
		'current' => max( 1, get_query_var('paged') ),
		'total' => $wp_query->max_num_pages,
		'prev_text'    => __('Previous'),
		'next_text'    => __('Next'),
		'end_size' => 4,
		'mid_size' => 2
	) );
 
	// Display the pagination if more than one page is found
	if ( $paginate_links ) {
		echo '<div class="pagination">';
		echo $paginate_links;
		echo '</div><!--// end .pagination -->';
	}
}
