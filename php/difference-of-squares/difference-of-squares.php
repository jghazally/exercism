<?php

function squareOfSums($num)
{
	$numberToSquare = 0;
	for ( $i = 1; $i <= $num; $i++ ) {
		$numberToSquare += $i;
	}

	return pow($numberToSquare, 2);
}

function sumOfSquares($num)
{
	$totalSquared = 0;
	for ( $i = 1; $i <= $num; $i++ ) {
		$totalSquared += pow($i, 2);
	}
	return $totalSquared;
}

function difference($num)
{
	return squareOfSums($num) - sumOfSquares($num);
}

