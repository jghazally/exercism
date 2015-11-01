<?php

class Robot {
	private $char = 'abcdefghijklmnopqrstuvwxyz';
	private $number = '1234567890';
	private $name = '';

	private function randomChar($string)
	{
		return substr($string, rand(1, strlen($string)), 1);
	}

	public function getName()
	{
		if ( empty($this->name) ) {
			$this->name =  $this->randomChar($this->char) . $this->randomChar($this->char) .$this->randomChar($this->number) . $this->randomChar($this->number) . $this->randomChar($this->number);
		}

		return $this->name;
	}

	public function reset()
	{
		$this->name = '';
	}
}
