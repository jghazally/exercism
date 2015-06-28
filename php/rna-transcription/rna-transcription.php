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

	for ( $i = 0; $i < count($dna_array); $i++ ) {
		$output .= $rna_match[$dna_array[$i]];
	}
	return $output;
}
