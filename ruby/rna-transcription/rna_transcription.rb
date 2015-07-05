# Complement Class
class Complement
  @rna_strand = {
    'G' => 'C',
    'C' => 'G',
    'U' => 'A',
    'A' => 'T'
  }

  @dna_strand = {
    'G' => 'C',
    'C' => 'G',
    'T' => 'A',
    'A' => 'U'
  }
  def self.of_dna(string)
    output = ''
    string.each_char do |char|
      fail ArgumentError unless @dna_strand.key?(char)
      output += @dna_strand[char]
    end
    output
  end

  def self.of_rna(string)
    output = ''
    string.each_char do |char|
      fail ArgumentError unless @rna_strand.key?(char)
      output += @rna_strand[char]
    end
    output
  end
end
