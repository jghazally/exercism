class Hamming

	VERSION = 1

	def self.compute(strandA, strandB)
		hamCount = 0

		if ( strandA.length != strandB.length ) 
			raise(ArgumentError)
		end

		strandB = strandB.split("")
		strandA.split("").each_with_index do |i, index|
			if ( i != strandB[index] )
				hamCount += 1
			end
		end
		return hamCount
	end

end
