class Game < ApplicationRecord
  has_many :rows, dependent: :destroy

  validates :board_size, presence: true, numericality: { only_integer: true, greater_than: 3, less_than: 10 }
  validates :game_difficulty, presence: true, numericality: { only_integer: true, greater_than: 0, less_than: 4 }

  def build(data)
    row_counter = 0

    self.board_size.times do
      column_counter = 0

      new_row = Row.create(game_id: self.id, index: row_counter)

      self.board_size.times do
        notes = []

        self.board_size.times do
          notes << '.'
        end

        notes = notes.join('')

        new_square = Square.create(
          row_id: new_row.id,
          x: column_counter,
          y: row_counter,
          value: " ",
          given: false,
          notes: notes
        )

        column_counter += 1
      end

      row_counter += 1
    end

    data["squares"].each do |square|
      self.rows[square["y"]].squares[square["x"]].update(value: square["value"].to_s, given: true)
    end
  end

end
