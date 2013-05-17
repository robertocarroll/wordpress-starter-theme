<ul class="post-info">	
	<li><?php echo __('By', 'watf'); ?> <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>" rel="author" class="fn"><?php echo get_the_author(); ?></a></li>,
	<li><time class="updated" datetime="<?php echo get_the_time('c'); ?>" pubdate><?php echo get_the_date('j F Y'); ?></time></li>
</ul>
			
<?php the_tags('See also: <ul class="entry-tags"><li>','</li><li>','</li></ul>'); ?>

	
