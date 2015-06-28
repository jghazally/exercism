require 'time'

# Gigasecond module computes a given dates gigasecond
module Gigasecond
  VERSION = 1
  def self.from(date)
    date += 100_000_000_0
    date
  end
end
