<?php
function toRna($string)
{
	$output = '';
	$rna_match = [
		'G' => 'C',
		'C' => 'G',
		'T' => 'A',
		'A' => 'U'
	];

	$dna_array = str_split($string);

	foreach ( $dna_array as $key => $value ) {
		$output .= $rna_match[$value];
	}

	return $output;
}
