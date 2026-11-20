<?php
/**
 * Plugin Name: Homegrown AI Embed
 * Description: Embeds the Homegrown AI static site with the shortcode [homegrown_ai src="https://example.org/freeAIexplorer/"]. The iframe resizes to fit its content.
 * Version: 1.0.0
 * Author: UIC TRAILblazer Lab
 * Author URI: https://www.trailblazerlab.org
 * License: GPL-2.0-or-later
 * Requires at least: 5.8
 * Requires PHP: 7.4
 */

defined( 'ABSPATH' ) || exit;

/**
 * Validate the src attribute. Only absolute https URLs are allowed (http only for localhost testing).
 */
function fae_clean_src( $src ) {
	$src = esc_url_raw( trim( (string) $src ), array( 'https', 'http' ) );
	if ( '' === $src ) {
		return '';
	}
	$parts = wp_parse_url( $src );
	if ( empty( $parts['host'] ) || empty( $parts['scheme'] ) ) {
		return '';
	}
	if ( 'http' === $parts['scheme'] && ! in_array( $parts['host'], array( 'localhost', '127.0.0.1' ), true ) ) {
		return '';
	}
	return $src;
}

function fae_shortcode( $atts ) {
	$atts = shortcode_atts(
		array(
			'src'    => '',
			'title'  => 'Homegrown AI',
			'height' => '1200',
		),
		$atts,
		'free_ai_explorer'
	);
	$src = fae_clean_src( $atts['src'] );
	if ( '' === $src ) {
		return current_user_can( 'edit_posts' )
			? '<p>' . esc_html__( 'Homegrown AI: add a valid https src address to the shortcode.', 'free-ai-explorer' ) . '</p>'
			: '';
	}
	$height = max( 400, min( 20000, absint( $atts['height'] ) ) );
	$parts  = wp_parse_url( $src );
	$origin = $parts['scheme'] . '://' . $parts['host'] . ( isset( $parts['port'] ) ? ':' . absint( $parts['port'] ) : '' );
	$id     = 'fae-' . wp_unique_id();

	wp_enqueue_script( 'fae-embed', plugins_url( 'fae-embed.js', __FILE__ ), array(), '1.0.0', true );

	return sprintf(
		'<div class="fae-embed"><iframe id="%1$s" class="fae-frame" src="%2$s" title="%3$s" data-fae-origin="%4$s" style="width:100%%;height:%5$dpx;border:0;display:block" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads allow-modals"></iframe></div>',
		esc_attr( $id ),
		esc_url( $src ),
		esc_attr( $atts['title'] ),
		esc_attr( $origin ),
		$height
	);
}
add_shortcode( 'free_ai_explorer', 'fae_shortcode' ); // original name, kept for existing pages
add_shortcode( 'homegrown_ai', 'fae_shortcode' );
