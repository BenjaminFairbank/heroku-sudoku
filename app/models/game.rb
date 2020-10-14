class Game < ApplicationRecord
  has_many :rows, dependent: :destroy

  validates :board_size, presence: true, numericality: { only_integer: true, greater_than: 3, less_than: 10 }
  validates :game_difficulty, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 4 }
end
