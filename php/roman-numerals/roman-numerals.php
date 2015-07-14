<?php

/**
 * I Failed and used
 * http://www.phpro.org/examples/Convert-Numbers-To-Roman-Numerals.html
 **/
function toRoman($number) {
	$number = intval($number);
	$res = '';

	/** Roman numeral array **/
	$roman_numerals = [
		'M' => 1000,
		'CM' => 900,
		'D' => 500,
		'CD' => 400,
		'C' => 100,
		'XC' => 90,
		'L' => 50,
		'XL' => 40,
		'X' => 10,
		'IX' => 9,
		'V' => 5,
		'IV' => 4,
		'I' => 1
	];

	foreach ( $roman_numerals as $roman => $num ) {
		/** divide to get matches **/
		$matches = intval($number / $num);

		/** assign the roman char **/
		$res .= str_repeat($roman, $matches);

		/** subtract from the number **/
		$number = $number % $num;
	}
	return $res;
}
