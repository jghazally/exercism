# String extension
class Numeric
  def to_roman
    roman_keys = {
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
    }

    res = ''
    number = self

    roman_keys.each do |key, v|
      matches = (number / v).to_int
      number = number % v
      res << key * matches
    end

    res
  end
end
