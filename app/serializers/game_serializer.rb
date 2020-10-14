class GameSerializer < ActiveModel::Serializer
  attributes :id, :board_size, :game_difficulty, :created_at, :updated_at, :rows

  has_many :rows
end
