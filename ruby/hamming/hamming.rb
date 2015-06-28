# Hamming check the difference between 2 strands
class Hamming
  VERSION = 4

  def self.compute(strand_a, strand_b)
    fail ArgumentError unless strand_a.length == strand_b.length

    strand_a.each_char.with_index.count { |_, i| strand_a[i] != strand_b[i] }
  end
end
