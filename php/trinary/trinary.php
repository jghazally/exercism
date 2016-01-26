<?php

function toDecimal($number) {
	$total = 0;
	$char = str_split(strrev($number));

	foreach ( $char as $key => $value ) {
		if ( !in_array($value, [0,1,2]) ) {
			return 0;
		}
		$total += $value * (pow(3, $key));
	}

	return $total;
}

//toDecimal('2222');
