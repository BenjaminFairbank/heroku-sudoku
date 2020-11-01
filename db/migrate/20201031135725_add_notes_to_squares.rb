class AddNotesToSquares < ActiveRecord::Migration[5.2]
  def change
    add_column :squares, :notes, :string
  end
end
