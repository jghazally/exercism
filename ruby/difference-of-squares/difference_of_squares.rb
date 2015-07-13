# Squares class
class Squares
  def initialize(number)
    @number = number
  end

  def square_of_sums
    total = @number
    @number.times do |i|
      total += i
    end
    total**2
  end

  def sum_of_squares
    total = 0
    @number.times do |i|
      total += (i + 1)**2
    end
    total
  end

  def difference
    square_of_sums - sum_of_squares
  end
end
