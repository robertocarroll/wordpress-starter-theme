<?php
/**
 * @package wearethoughtfox
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header">
		
		<h1 class="entry-title"><?php the_title(); ?></h1>

		<div class="entry-meta">
			<?php get_template_part('templates/entry-meta'); ?>			
		</div><!-- .entry-meta -->
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
	</div><!-- .entry-content -->

	<footer class="entry-meta">	

		<nav class="next-previous">

		<ul class="nav uppercase no-margin-below">

			<li class="previous">

				<?php 

					$prev_post = get_previous_post(true);

					if  (!empty( $prev_post )) {

						previous_post_link('%link', 'Previous', TRUE);
					}

					else {

						echo '<div class="no-link">Previous</div>';
					}

					?>

			</li>

			<li class="next"><?php 

					$next_post = get_next_post(true);

					if  (!empty( $next_post )) {

						next_post_link('%link', 'Next', TRUE); 
					}

					else {

						echo '<div class="no-link">Next</div>';
					}

					?>

			</li>


		 </ul>

	</nav>



		<?php edit_post_link( __( 'Edit', 'wearethoughtfox' ), '<span class="edit-link">', '</span>' ); ?>
	</footer><!-- .entry-meta -->
</article><!-- #post-## -->
