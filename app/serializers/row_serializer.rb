class RowSerializer < ActiveModel::Serializer
  attributes :id, :index, :squares, :game

  has_many :squares
  belongs_to :game
end
