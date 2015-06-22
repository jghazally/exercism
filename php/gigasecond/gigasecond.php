<?php

function from($date) {
	$timestamp = $date->getTimestamp();

	$gigaseconds = $timestamp + pow(10,9);

	$date->setTimestamp($gigaseconds);

	return $date;
}
