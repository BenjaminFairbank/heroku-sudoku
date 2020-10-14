class Square < ApplicationRecord
  belongs_to :row

  validates :x, presence: true, numericality: { only_integer: true }
  validates :y, presence: true, numericality: { only_integer: true }
  validates :given, inclusion: { in: [true, false] }
end
