<?php

function isLeap($number) {
	$isLeap = false;

	if ( $number % 4 == 0 ) {
		$isLeap = true;
		if ( $number % 100 === 0 && $number % 400 !== 0 ) {
			$isLeap = false;
		}
	}

	return $isLeap;
}
