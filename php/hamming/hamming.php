<?php

//
// This is only a SKELETON file for the "Hamming" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function distance($a, $b)
{
	$hamCount = 0;
	if ( strlen($a) !== strlen($b) ) {
		throw new InvalidArgumentException('DNA strands must be of equal length.');
	}

	for ( $i = 0; $i < strlen($a); $i++ ) {
		if ( substr($a, $i, 1) !== substr($b, $i, 1) ) {
			$hamCount++;
		}
	}

	return $hamCount;
}
