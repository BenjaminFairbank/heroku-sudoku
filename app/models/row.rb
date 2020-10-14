class Row < ApplicationRecord
  belongs_to :game
  has_many :squares, dependent: :destroy

  validates :index, presence: true
end
