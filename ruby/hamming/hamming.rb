class Hamming

  VERSION = 3

  def self.compute(strand_a, strand_b)

    raise ArgumentError unless strand_a.length == strand_b.length

    strand_a.each_char.with_index.count { |i, index| ( i != strand_b[index] ) }
  end

end
