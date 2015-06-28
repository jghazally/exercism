require 'time'

# Gigasecond module computes a given dates gigasecond
module Gigasecond
  VERSION = 2
  def self.from(date)
    date += 1_000_000_000
  end
end
